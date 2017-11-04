import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Switch, Modal, Dimensions, ScrollView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Slider } from 'react-native-elements'
import { Images } from '../../../Themes'
import styles from '../Styles/CompletedDonationScreenStyles'
import DateTimePicker from 'react-native-modal-datetime-picker'
import PictureModal from '../../../Components/Modals/pictureModal'

import DatePicker from 'react-native-datepicker'
import DescriptionModal from '../../../Components/Modals/descriptionModal'
import DonationDateModal from '../../../Components/Modals/DonationDateModal'
import SelectPremiumModal from '../../../Components/Modals/SelectPremiumModal'
import PostDonationModal from '../../../Components/Modals/PostDonationModal'
import dateFormat from 'dateformat';
import Prompt from 'react-native-prompt'
import { RNS3 } from 'react-native-aws3'
import Meteor, { createContainer } from 'react-native-meteor'
import AlertModal from '../../../Components/AlertModal'
import AppConfig from '../../../Config'
import { guid, validateEmail } from '../../../Transforms'
_dText='';

export default class HomeScreen extends React.Component {
    constructor () {
        super()
        this.state = {
            cToggle:false,
            vToggle:false,
            tToggle:false,
            value: 0,
            car: false,
            truck: false,
            switchValue: false,

            foodTypeToggle1: false,
            foodTypeToggle2: false,
            foodTypeToggle3: false,

            deliveryOptionToggle1: false,
            deliveryOptionToggle2: false,
            deliveryOptionToggle3: false,

            showPremium: false,
            showDistributor: false,
            showVolunteer: false,

            picturemodalVisible: false,
            avatar : null,

            isDateTimePickerVisible: false,
            date: null,
            descriptionModalVisible:false,

            donationDateModalVisible: false,
            showPostButton: false,
            selectPremiumModalVisible: false,
            postDonationModalVisible: false,

            address: "",
            isAddressPromptVisible : false,

            msgBox: false,
            msgText: "",

        }
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.chooseAvatar = this.chooseAvatar.bind(this)
    }

    static navigationOptions = {
      header:null,
    }

    toggleSwitch (val) {
        this.setState({switchValue: val});
    }

    sliderValue (){
        if(this.state.value){
            let netWidth=Dimensions.get('window').width-(55);
            let leftValueSPace=(netWidth*this.state.value)/500;
            return(<Text style={[styles.slVs, {marginLeft:leftValueSPace+15}]}>{this.state.value.toFixed(0)}</Text>);
        }else{
            return(<Text style={[styles.slVs, {marginLeft:15}]}>{0}</Text>);
        }
    }

    switchToggle(){
        let t=this.state.switchValue?'Yes':'No';
        if(t){
            return(<Text style={styles.btnEdit}>{t}</Text>);
        }
    }



    chooseAvatar = (avatar) => {
        console.log('Avatar', avatar.uri)
        this.setState({avatar : avatar}, function() {
            this.closePictureModal()
        })
    }

    closePictureModal = () => {
        this.setState({
            picturemodalVisible: false
        })
        this.checkAllDataSelected()
    }


    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        
        cDate = dateFormat(date, 'mmm, dd, yyyy')
        this.setState({
           startDate: cDate
        })
        this._hideDateTimePicker();

    };

    

    closeDescriptionModal = () => {
        this.setState({
          descriptionModalVisible: false
        })
        this.checkAllDataSelected()
    }

    writeHere = () => {
        
        let t='';
          if(_dText){
              if(_dText.length>50){
                  t=_dText.substring(0, 49)+'...';
              }else{
                t=_dText;
              }
    
            return (
                <View style={styles.setBottomPost}>
                <View style={styles.editContent}>                                
                    <Text style={styles.write3}>{t}</Text>
                    <TouchableOpacity  onPress={()=>this.setState({descriptionModalVisible: true})}>
                        <Text style={styles.write1}>EDIT</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => {this.dataPost()}} disabled={this.state.showPostButton ? false : true}>
                    <Image source={Images.markPostIcon}  style={[styles.bottomPostBtn, this.state.showPostButton ? {opacity: 1} : {opacity : 0}]} />
                </TouchableOpacity>
                </View>
            );
        }else{
            return (           

                <TouchableOpacity onPress={()=>this.setState({descriptionModalVisible: true})}>
                <View style={[styles.vDetsilSElection ,styles.vDetsilSElectionSL, {opacity: 1, paddingVertical: 50}]} >
                    <Text style={styles.vehicleTitleSw}>Description</Text>
                    <TouchableOpacity style={styles.sSection} onPress={()=>this.setState({descriptionModalVisible: true})} >
                        <Image
                            source={Images.rightArraw}
                            style={{width: 11, height: 18}}
                        />
                    </TouchableOpacity>
                </View>
                </TouchableOpacity>
                );
            }
        }

        closeDonationDateModal = () => {
            this.setState({
                donationDateModalVisible: false
            })
            _dText = ''
            this.checkAllDataSelected()
        }

        handleDatePicked = (date) => {
            this.setState({
                date: date
            }, function() {
                this.closeDonationDateModal()
            })
            
        }

        closeSelectPremiumModal = () => {
            this.setState({
                selectPremiumModalVisible: false
            })
        }

        handleSelectPremiumModalNext = () => {
            this.closeSelectPremiumModal()
            this.setState({
                postDonationModalVisible: true
            })
        }

        closePostDonationModal = () => {
            this.setState({
                postDonationModalVisible: false
            })
        }

        showDialog = (show, title) => {
            if (show) this.setState({ msgBox: show, msgText: title })
            else this.setState({ msgBox: show })
        }


        checkAllDataSelected() {
            if (!this.state.avatar) return
            if (!this.state.date) return
            if (this.state.address == "") return
            if (!this.state.cToggle && !this.state.vToggle && !this.state.tToggle) return
            if (!this.state.foodTypeToggle1 && !this.state.foodTypeToggle2 && !this.state.foodTypeToggle3) {
                return
            }
            if (!this.state.deliveryOptionToggle1 && !this.state.deliveryOptionToggle2 && !this.state.deliveryOptionToggle3) {
                return
            }
            //if (this.state.value == 0) return
            if(!_dText) return

            this.setState({
                showPostButton: true
            })            
        }

        dataPost() {
            let self = this

            const file = {
                uri: this.state.avatar,
                name: guid() + ".png",
                type: "image/png"
            }
            const options = {
                keyPrefix: AppConfig.KEY_PREFIX,
                bucket: AppConfig.BUCKET,
                accessKey: AppConfig.ACCESS_KEY,
                secretKey: AppConfig.SECRET_KEY,
                region: AppConfig.REGION
            }

            vehicleSize = 0
            if (this.state.cToggle) {
                vehicleSize = 0
            } else if (this.state.vToggle) {
                vehicleSize = 1
            } else {
                vehicleSize = 2
            }

            deliveryOption = 0
            if (this.state.deliveryOptionToggle1) {
                deliveryOption = 0
            } else if (this.state.deliveryOptionToggle2) {
                deliveryOption = 1
            } else {
                deliveryOption = 2
            }

            const {date, startTimeNumber, endTimeNumber, notes} = this.state.date
            var newDate = {
                date, 
                startTime: startTimeNumber, 
                endTime: endTimeNumber, 
                notes
            }

            postData = {
                date: newDate,//this.state.date,
                location: {address:this.state.address},
                vehicleSize: vehicleSize,
                foodTypes_NonPerishable: this.state.foodTypeToggle1,
                foodTypes_Prepared: this.state.foodTypeToggle2,
                foodTypes_Perishable: this.state.foodTypeToggle3,
                deliveryOption: deliveryOption,
                bWeight: this.state.switchValue,
                weight: (this.state.value).toFixed(0),
                description: _dText,
            }

            console.log(postData)

            RNS3.put(file, options).then(response => {
                postData.image = response.body.postResponse.location
                Meteor.call('createDonation', postData, (err, res) => {
                    console.log('Data Post Called...')
                    if (err) {
                        this.showDialog(true, err.message)
                        console.log(err)
                    } else {
                        console.log("Data Post Success...")
                        this.setState({selectPremiumModalVisible: true})
                        this.props.navigation.navigate('FindDonation')
                    }
                })
            })            
        }



    render () {
        const { navigate } = this.props.navigation;
        return (
          <View style={styles.container}>
              <ImageBackground source={Images.overlay} style={styles.body}>
                  <View style={styles.cNavigation}>
                      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                          <Image source={Images.backIcon} style={styles.menuIconNav} />
                      </TouchableOpacity>
                      <Text style={styles.refedText}>Create a Donation</Text>
                      <TouchableOpacity onPress={() => {this.dataPost()}} disabled={this.state.showPostButton ? false : true}>
                          <Text style={[styles.postBtnText, this.state.showPostButton ? {opacity : 1} : {opacity: 0}]}>POST</Text>
                      </TouchableOpacity>
                  </View>

                  <ScrollView>
                  
                        <View style={styles.detsilSElection}>
                            <View style={styles.boxCover}>
                                {this.state.avatar &&
                                <View style={{alignItems: 'center'}} >
                                    <View style={styles.pImgB}><Image source={this.state.avatar ? this.state.avatar : Images.bgImage} style={styles.pImg} /></View>
                                    <TouchableOpacity onPress={()=>{this.setState({picturemodalVisible:true})}} >
                                        <Text style={styles.btnEdit}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                                }
                                {!this.state.avatar &&
                                <View style={{alignItems: 'center', flex: 1}} >
                                    <TouchableOpacity style={styles.imgBoxCover} onPress={()=>{this.setState({picturemodalVisible:true})}}>
                                        <Image source={Images.add} style={[styles.vImgBoxCover, !this.state.foodTypeToggle1&& {}]} resizeMode={'contain'} />
                                    </TouchableOpacity>
                                    <Text style={styles.foodTypeText} >Image</Text>
                                </View>
                                }                                                                
                            </View>

                            <View style={styles.boxCover}>
                                {this.state.date &&
                                <View style={{alignItems: 'center'}} >
                                    <Text style={styles.btnEtxt}>{this.state.date.date}</Text>
                                    <TouchableOpacity onPress={()=>{this.setState({donationDateModalVisible: true})}} >
                                        <Text style={styles.btnEdit}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                                }
                                {!this.state.date &&
                                <View style={{alignItems: 'center', flex: 1}} >
                                    <TouchableOpacity style={styles.imgBoxCover} onPress={()=>{this.setState({donationDateModalVisible: true})}}>
                                        <Image source={Images.date} style={[styles.vImgBoxCover, !this.state.foodTypeToggle1&& {}]} resizeMode={'contain'} />
                                    </TouchableOpacity>
                                    <Text style={styles.foodTypeText} >Date</Text>
                                </View>
                                } 
                                <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                                datePickerModeAndroid='calendar'
                                confirmTextIOS="Ok"
                                titleIOS='Select Date'
                                /> 
                                
                            </View>
                            
                            <View style={styles.boxCover}>
                                {this.state.address != "" &&
                                <View style={{alignItems: 'center', flex: 1}} >
                                    <TouchableOpacity style={styles.imgBoxCover} disabled={true}>
                                        <Image source={Images.location} style={{width:40, height:40, alignSelf:'center',}} resizeMode={'contain'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{this.setState({isAddressPromptVisible:true})}}>
                                        <Text style={styles.foodTypeText}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                                }
                                {this.state.address == "" &&
                                <View style={{alignItems: 'center', flex: 1}} >
                                    <TouchableOpacity style={styles.imgBoxCover} onPress={()=>{this.setState({isAddressPromptVisible:true})}}>
                                        <Image source={Images.location_sel} style={[styles.vImgBoxCover, !this.state.foodTypeToggle1&& {}]} resizeMode={'contain'} />
                                    </TouchableOpacity>
                                    <Text style={styles.foodTypeText} >Location</Text>
                                </View>
                                }
                                <Prompt
                                title="Your Address"
                                placeholder="Start typing"
                                defaultValue={this.state.address}
                                visible={ this.state.isAddressPromptVisible }
                                onCancel={ (value) => this.setState({
                                    isAddressPromptVisible: false,
                                    address: value
                                }) }
                                    onSubmit={ (value) => this.setState({
                                    isAddressPromptVisible: false,
                                    address: value
                                }) }/>                                
                            </View>
                        </View>

                        <Text style={styles.vehicleTitle}>Vehicle size for rescue</Text>
                        <Text style={styles.vehicleTitleDescription}>Please select the vehicle required to retrieve this donation:</Text>
                        <View style={styles.vDetsilSElection}>
                            <TouchableOpacity style={styles.imgBoxCover} onPress={()=> this.setState({cToggle:true, vToggle: false, tToggle: false}, function(){this.checkAllDataSelected()})}>
                                    <Image source={this.state.cToggle?Images.car1:Images.car} style={styles.vImgBoxCover} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.imgBoxCover} onPress={()=> this.setState({cToggle:false, vToggle: true, tToggle: false}, function(){this.checkAllDataSelected()})}>
                                    <Image source={this.state.vToggle?Images.van1:Images.van} style={styles.vImgBoxCover} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.imgBoxCover} onPress={()=> this.setState({cToggle:false, vToggle: false, tToggle: true}, function(){this.checkAllDataSelected()})}>
                                    <Image source={this.state.tToggle?Images.truck1:Images.truck} style={styles.vImgBoxCover} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.vehicleTitle}>Select Food Type(s)</Text>
                        <View style={[styles.vDetsilSElection, {marginTop: 8}]}>
                            <View style={{alignItems: 'center', flex: 1}} >
                                <TouchableOpacity style={styles.imgBoxCover} onPress={()=> this.setState({foodTypeToggle1:!this.state.foodTypeToggle1}, function(){this.checkAllDataSelected()})}>
                                    <Image source={this.state.foodTypeToggle1?Images.non_perishable_new_sel:Images.non_perishable_new} style={[styles.vImgBoxCover, !this.state.foodTypeToggle1&& {}]} resizeMode={'contain'} />
                                </TouchableOpacity>
                                <Text style={styles.foodTypeText} >Non-Perishable</Text>
                            </View>
                            
                            <View style={{alignItems: 'center', flex: 1}} >
                                <TouchableOpacity style={styles.imgBoxCover} onPress={()=> this.setState({foodTypeToggle2:!this.state.foodTypeToggle2}, function(){this.checkAllDataSelected()})}>
                                    <Image source={this.state.foodTypeToggle2?Images.prepared_sel:Images.prepared} style={styles.vImgBoxCover} resizeMode={'contain'} />
                                </TouchableOpacity>
                                <Text style={styles.foodTypeText} >Prepared</Text>
                            </View>

                            <View style={{alignItems: 'center', flex: 1}} >
                                <TouchableOpacity style={styles.imgBoxCover} onPress={()=> this.setState({foodTypeToggle3:!this.state.foodTypeToggle3}, function(){this.checkAllDataSelected()})}>
                                    <Image resizeMode={'contain'} source={this.state.foodTypeToggle3?Images.perishable_new_sel:Images.perishable_new} style={styles.vImgBoxCover} />
                                </TouchableOpacity>
                                <Text style={styles.foodTypeText} >Perishable</Text>
                            </View>
                        </View>

                        <Text style={styles.vehicleTitle}>Select a delivery option:</Text>
                        <Text style={styles.vehicleTitleDescription}>Please choose how you'd like this donation to be retrieved.</Text>
                        <View style={[styles.vDetsilSElection, {flexDirection: 'column'}]}>
                            <View style={[styles.deliverOptionFrame]} >
                                <TouchableOpacity style={styles.deliverOptionImageFrame} onPress={()=> this.setState({deliveryOptionToggle1:true, deliveryOptionToggle2: false, deliveryOptionToggle3: false}, function(){this.checkAllDataSelected()})}>
                                    <Image resizeMode={'contain'} source={this.state.deliveryOptionToggle1?Images.paid_pickup_sel:Images.paid_pickup} style={styles.vImgBoxCover} />
                                </TouchableOpacity>

                                <View style={styles.deliverOptionRightFrame} >
                                    <Text style={[styles.deliverOptionDetailText, !this.state.showPremium && {textAlign: 'left', paddingLeft: 25}]} >Premium</Text>
                                    <Text style={[styles.vehicleTitleDescription, {textAlign: 'left'}]} >{this.state.showPremium && 'This option guarentees that your donation will be rescued and reported.'}</Text>
                                </View>
                                {!this.state.showPremium &&
                                <TouchableOpacity onPress={()=>{this.setState({showPremium:true})}} style={{marginBottom: 20}} >
                                    <Image source={Images.questionMark} style={styles.questionMarkImage} />
                                </TouchableOpacity>
                                }
                            </View>

                            <View style={styles.deliverOptionFrame} >
                                <TouchableOpacity style={styles.deliverOptionImageFrame} onPress={()=> this.setState({deliveryOptionToggle1:false, deliveryOptionToggle2: true, deliveryOptionToggle3: false}, function(){this.checkAllDataSelected()})}>
                                    <Image resizeMode={'contain'} source={this.state.deliveryOptionToggle2?Images.deliver_sel:Images.deliver} style={styles.vImgBoxCover} />
                                </TouchableOpacity>
                                <View style={styles.deliverOptionRightFrame} >
                                    <Text style={[styles.deliverOptionDetailText, !this.state.showDistributor && {textAlign: 'left', paddingLeft: 25}]} >Deliver to Distributor</Text>
                                    <Text style={[styles.vehicleTitleDescription, {textAlign: 'left'}]} >{this.state.showDistributor && 'This option means that you will deliver this donation.'}</Text>
                                </View>
                                {!this.state.showDistributor &&
                                <TouchableOpacity onPress={()=>{this.setState({showDistributor:true})}} style={{marginBottom: 20}} >
                                    <Image source={Images.questionMark} style={styles.questionMarkImage} />
                                </TouchableOpacity>
                                }
                            </View>

                            <View style={styles.deliverOptionFrame} >
                                <TouchableOpacity style={styles.deliverOptionImageFrame} onPress={()=> this.setState({deliveryOptionToggle1:false, deliveryOptionToggle2: false, deliveryOptionToggle3: true}, function(){this.checkAllDataSelected()})}>
                                    <Image resizeMode={'contain'} source={this.state.deliveryOptionToggle3?Images.voulunteer_heart_sel:Images.voulunteer_heart} style={styles.vImgBoxCover} />
                                </TouchableOpacity>
                                <View style={[styles.deliverOptionRightFrame, {borderBottomWidth: 0}]} >
                                    <Text style={[styles.deliverOptionDetailText, !this.state.showVolunteer && {textAlign: 'left', paddingLeft: 25}]} >Request a Volunteer Pickup</Text>
                                    <Text style={[styles.vehicleTitleDescription, {textAlign: 'left'}]} >{this.state.showVolunteer && 'This option means that the rescuer must retrieve this donation for free.'}</Text>
                                </View>
                                {!this.state.showVolunteer &&
                                <TouchableOpacity onPress={()=>{this.setState({showVolunteer:true})}} style={{marginBottom: 20}} >
                                    <Image source={Images.questionMark} style={styles.questionMarkImage} />
                                </TouchableOpacity>
                                }
                            </View>
                        </View>

                        <View style={styles.sliderCover}>
                            <View style={styles.vDetsilSElectionSL}>
                                <Text style={styles.vehicleTitleSw}>{this.state.switchValue ? 'Input weight? (lbs)': 'Add weight? (lbs)'} </Text>
                                <View style={styles.sSection}>
                                    {this.switchToggle()}
                                    <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}
                                        onTintColor="#FFFFFF"
                                        thumbTintColor="#FFAD55"/>
                                </View>
                            </View>
                            {this.state.switchValue && 
                                <Slider
                                    value={this.state.value}
                                    onValueChange={(value) => this.setState({value}, function(){this.checkAllDataSelected()})}
                                    style={styles.sliderS}
                                    maximumTrackTintColor='#f4b9b2'
                                    minimumTrackTintColor='#fff'
                                    thumbTintColor='#ffb660'
                                    maximumValue={500}
                                    trackStyle={{height: 10}}
                                    thumbStyle={{width: 30, height: 30, borderRadius: 15}}
                                />
                            }
                            {this.state.switchValue && this.sliderValue()}                            
                        </View>

                        {this.writeHere()}

                  </ScrollView>
              </ImageBackground>

              <PictureModal picturemodalVisible={this.state.picturemodalVisible} close={this.closePictureModal} chooseAvatar = {this.chooseAvatar} />
              <DescriptionModal descriptionModalVisible={this.state.descriptionModalVisible} close={this.closeDescriptionModal}/>
              <DonationDateModal donationDateModalVisible={this.state.donationDateModalVisible} close={this.closeDonationDateModal} handleDatePicked={this.handleDatePicked} selectedDate={this.state.date ? this.state.date.date : ""} />
              <SelectPremiumModal selectPremiumModalVisible={this.state.selectPremiumModalVisible} close={this.closeSelectPremiumModal} next={this.handleSelectPremiumModalNext} />
              <PostDonationModal postDonationModalVisible={this.state.postDonationModalVisible} close={this.closePostDonationModal}/>
              <AlertModal show={this.state.msgBox} modal={() => this.showDialog(false)} title={this.state.msgText} />
          </View>
        )
    }
}
