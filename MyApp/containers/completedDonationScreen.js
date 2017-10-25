import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Switch, Modal, Dimensions, ScrollView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Slider } from 'react-native-elements'
import { Images } from '../DevTheme'
import styles from '../Styles/CompletedDonationScreenStyles'
import DateTimePicker from 'react-native-modal-datetime-picker'

import PictureModal from './Modals/pictureModal'

export default class HomeScreen extends React.Component {
    constructor () {
        super()
        this.state = {
            cToggle:false,
            vToggle:false,
            tToggle:false,
            value: 60,
            car: false,
            truck: false,
            switchValue: false,

            foodTypeToggle1: false,
            foodTypeToggle2: false,
            foodTypeToggle3: false,

            deliveryOptionToggle1: false,
            deliveryOptionToggle2: false,
            deliveryOptionToggle3: false,

            showDescription: false,
            showPremium: false,
            showDistributor: false,
            showVolunteer: false,

            //showAddImage: true,
            showDateImage: true,
            showLocationImage: true,

            picturemodalVisible: false,
            avatar : null,

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
        this.setState({avatar : avatar, picturemodalVisible : false})
    }

    closePictureModal = () => {
        this.setState({
            picturemodalVisible: false
        })
    }

    render () {
        return (
          <View style={styles.container}>
              <ImageBackground source={Images.overlay} style={styles.body}>
                  <View style={styles.cNavigation}>
                      <TouchableOpacity onPress={() => {}}>
                          <Image source={Images.backIcon} style={styles.menuIconNav} />
                      </TouchableOpacity>
                      <Text style={styles.refedText}>Create a Donation</Text>
                      <TouchableOpacity>
                          <Text style={styles.postBtnText}>POST</Text>
                      </TouchableOpacity>
                  </View>

                  <ScrollView>
                  
                        <View style={styles.detsilSElection}>
                            <View style={styles.boxCover}>
                                {this.state.avatar &&
                                <View style={{alignItems: 'center'}} >
                                    <View style={styles.pImgB}><Image source={this.state.avatar ? this.state.avatar : Images.bgImage} style={styles.pImg} /></View>
                                    <TouchableOpacity>
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
                                {!this.state.showDateImage &&
                                <View style={{alignItems: 'center'}} >
                                    <Text style={styles.btnEtxt}>Jan, 11, 2017</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.btnEdit}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                                }
                                {this.state.showDateImage &&
                                <View style={{alignItems: 'center', flex: 1}} >
                                    <TouchableOpacity style={styles.imgBoxCover} onPress={()=>{this.setState({showDateImage:false})}}>
                                        <Image source={Images.date} style={[styles.vImgBoxCover, !this.state.foodTypeToggle1&& {}]} resizeMode={'contain'} />
                                    </TouchableOpacity>
                                    <Text style={styles.foodTypeText} >Date</Text>
                                </View>
                                } 
                                
                            </View>
                            
                            <View style={styles.boxCover}>
                                {!this.state.showLocationImage &&
                                <View style={{alignItems: 'center'}} >
                                    <Text style={styles.btnEtxt}>2: 10 PM</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.btnEdit}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                                }
                                {this.state.showLocationImage &&
                                <View style={{alignItems: 'center', flex: 1}} >
                                    <TouchableOpacity style={styles.imgBoxCover} onPress={()=>{this.setState({showLocationImage:false})}}>
                                        <Image source={Images.location_sel} style={[styles.vImgBoxCover, !this.state.foodTypeToggle1&& {}]} resizeMode={'contain'} />
                                    </TouchableOpacity>
                                    <Text style={styles.foodTypeText} >Location</Text>
                                </View>
                                }                                
                            </View>
                        </View>

                        <Text style={styles.vehicleTitle}>Vehicle size for rescue</Text>
                        <Text style={styles.vehicleTitleDescription}>Please select the vehicle required to retrieve this donation:</Text>
                        <View style={styles.vDetsilSElection}>
                            <TouchableOpacity style={styles.imgBoxCover} onPress={()=>{this.setState({cToggle:true, vToggle: false, tToggle: false})}}>
                                    <Image source={this.state.cToggle?Images.car1:Images.car} style={styles.vImgBoxCover} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.imgBoxCover} onPress={()=>{this.setState({cToggle:false, vToggle: true, tToggle: false})}}>
                                    <Image source={this.state.vToggle?Images.van1:Images.van} style={styles.vImgBoxCover} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.imgBoxCover} onPress={()=>{this.setState({cToggle:false, vToggle: false, tToggle: true})}}>
                                    <Image source={this.state.tToggle?Images.truck1:Images.truck} style={styles.vImgBoxCover} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.vehicleTitle}>Select Food Type(s)</Text>
                        <View style={[styles.vDetsilSElection, {marginTop: 8}]}>
                            <View style={{alignItems: 'center', flex: 1}} >
                                <TouchableOpacity style={styles.imgBoxCover} onPress={()=>{this.setState({foodTypeToggle1:!this.state.foodTypeToggle1})}}>
                                    <Image source={this.state.foodTypeToggle1?Images.non_perishable_new_sel:Images.non_perishable_new} style={[styles.vImgBoxCover, !this.state.foodTypeToggle1&& {}]} resizeMode={'contain'} />
                                </TouchableOpacity>
                                <Text style={styles.foodTypeText} >Non-Perishable</Text>
                            </View>
                            
                            <View style={{alignItems: 'center', flex: 1}} >
                                <TouchableOpacity style={styles.imgBoxCover} onPress={()=>{this.setState({foodTypeToggle2:!this.state.foodTypeToggle2})}}>
                                    <Image source={this.state.foodTypeToggle2?Images.prepared_sel:Images.prepared} style={styles.vImgBoxCover} resizeMode={'contain'} />
                                </TouchableOpacity>
                                <Text style={styles.foodTypeText} >Prepared</Text>
                            </View>

                            <View style={{alignItems: 'center', flex: 1}} >
                                <TouchableOpacity style={styles.imgBoxCover} onPress={()=>{this.setState({foodTypeToggle3:!this.state.foodTypeToggle3})}}>
                                    <Image resizeMode={'contain'} source={this.state.foodTypeToggle3?Images.perishable_new_sel:Images.perishable_new} style={styles.vImgBoxCover} />
                                </TouchableOpacity>
                                <Text style={styles.foodTypeText} >Prepared</Text>
                            </View>
                        </View>

                        <Text style={styles.vehicleTitle}>Select a delivery option:</Text>
                        <Text style={styles.vehicleTitleDescription}>Please choose how you'd like this donation to be retrieved.</Text>
                        <View style={[styles.vDetsilSElection, {flexDirection: 'column'}]}>
                            <View style={[styles.deliverOptionFrame]} >
                                <TouchableOpacity style={styles.deliverOptionImageFrame} onPress={()=>{this.setState({deliveryOptionToggle1:true, deliveryOptionToggle2: false, deliveryOptionToggle3: false})}}>
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
                                <TouchableOpacity style={styles.deliverOptionImageFrame} onPress={()=>{this.setState({deliveryOptionToggle1:false, deliveryOptionToggle2: true, deliveryOptionToggle3: false})}}>
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
                                <TouchableOpacity style={styles.deliverOptionImageFrame} onPress={()=>{this.setState({deliveryOptionToggle1:false, deliveryOptionToggle2: false, deliveryOptionToggle3: true})}}>
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
                                    onValueChange={(value) => this.setState({value})}
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

                        {!this.state.showDescription ?
                        <View style={[styles.vDetsilSElection ,styles.vDetsilSElectionSL, {opacity: 1, paddingVertical: 50}]} >
                            <Text style={styles.vehicleTitleSw}>Description</Text>
                            <TouchableOpacity style={styles.sSection} onPress={()=>this.setState({showDescription: true})} >
                                <Image
                                    source={Images.rightArraw}
                                    style={{width: 11, height: 18}}
                                />
                            </TouchableOpacity>

                        </View>
                        :
                        <View style={styles.setBottomPost}>
                            <View style={styles.editContent}>                                
                                <Text style={styles.write3}>{'We will be giving apples, oranges and carrots. Please...'}</Text>
                                <TouchableOpacity  onPress={()=>this.setState({descriptionModalVisible: true})}>
                                    <Text style={styles.write1}>EDIT</Text>
                                </TouchableOpacity>
                            </View>
                            <Image source={Images.markPostIcon}  style={styles.bottomPostBtn} />
                        </View>
                        }

                  </ScrollView>
              </ImageBackground>

              <PictureModal picturemodalVisible={this.state.picturemodalVisible} close={this.closePictureModal} chooseAvatar = {this.chooseAvatar} />
          </View>
        )
    }
}
