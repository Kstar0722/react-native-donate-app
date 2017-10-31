import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Switch, Modal, Dimensions, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Slider } from 'react-native-elements'
import { Images } from '../DevTheme'
import styles from '../Styles/CreateListingStyles'
import DatePicker from 'react-native-datepicker'
import PictureModal from './Modals/pictureModal'
import DescriptionModal from './Modals/descriptionModal'
import dateFormat from 'dateformat';
import DateTimePicker from 'react-native-modal-datetime-picker'
import Prompt from 'react-native-prompt'
import { RNS3 } from 'react-native-aws3'
import { guid, validateEmail } from '../../App/Transforms'

_dText='';
export default class CreateListing extends React.Component {
    constructor () {
        super()
        this.state = {
            sliderValue: 0,
            foodTypeToggle1: false,
            foodTypeToggle2: false,
            toggleSwitch: false,
            repeatFlag: 0,
            endDate:'',
            weekday: [false, false, false, false, false, false, false],
            picturemodalVisible: false,
            descriptionModalVisible:false,
            avatar : null,
            startDate:"",
            isDateTimePickerVisible: false,
            Address: "",
            isAddressPromptVisible : false
        }
        this.toggleSwitch = this.toggleSwitch.bind(this);
    }

    static navigationOptions = {
      header:null,
    }

    toggleSwitch (val) {
        this.setState({switchValue: val});
    }
    
    switchToggle(){
        let t=this.state.switchValue?'Yes':'No';
        if(t){
            return(<Text style={styles.btnEdit}>{t}</Text>);
        }
    }
    sliderValue (){
        if(this.state.value){
            let netWidth=Dimensions.get('window').width-(55);
            let leftValueSPace=(netWidth*this.state.value)/500;
            return(<Text style={[styles.slVs, {marginLeft:leftValueSPace+15}]}>{this.state.value.toFixed(0)}</Text>);
        }else{
            return(<Text style={[styles.slVs, {marginLeft:25}]}>{0}</Text>);
        }
    }
    repeatEvent(val)
    {
        if(this.state.repeatFlag == val)
            this.setState({repeatFlag:0});
        else
            this.setState({repeatFlag:val})
    }
    onWeekDayPress(val) {
        var tmp_weekday = this.state.weekday.slice()
        tmp_weekday[val] = !tmp_weekday[val]
        this.setState({ weekday: tmp_weekday })
    }
    // chooseImage
    chooseAvatar = (avatar) => {
        this.setState({avatar : avatar, picturemodalVisible : false})
    }

    closePictureModal = () => {
        this.setState({
            picturemodalVisible: false
        })
    }

    closeDescriptionModal = () => {
        this.setState({
          descriptionModalVisible: false
        })
    }

    dataPost()
    {
        postData = {
            
        }
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
            <View style={styles.editContent}>
                <TouchableOpacity  onPress={()=>this.setState({descriptionModalVisible: true})}>
                    <Text style={styles.write1}>EDIT</Text>
                </TouchableOpacity>
                <Text style={styles.write3}>{t}</Text>
                <TouchableOpacity onPress={() => this.dataPost()}>
                    <Image source={Images.markPostIcon}  style={{width: 80,height: 80, right:0, bottom:0, position:'absolute', zIndex:999999}}/>
                </TouchableOpacity>
          </View>
        );
    }else{
        return (
            <View >
                <TouchableOpacity  onPress={()=>this.setState({descriptionModalVisible: true})}>
                <View style={styles.rowStyle}>
                    <Text style={styles.contentText}>Description</Text>                            
                    <Image source={Images.rightArraw}></Image>
                </View>
                </TouchableOpacity>
            </View>
            );
        }
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

    render () {
        return (
          <View style={styles.container}>
              <Image source={Images.overlay} style={styles.body}>
                  <View style={styles.cNavigation}>
                      <TouchableOpacity onPress={() => {}}>
                          <Image source={Images.backIcon} style={styles.menuIconNav} />
                       </TouchableOpacity>
                       <Text style={styles.refedText}>Give Food</Text>
                   </View>

                  <ScrollView>   
                        <View style={styles.buttonGroup}>
                            <View style={{alignItems:'center'}}>
                                <View style={{width:width/3,height:71, alignItems:'center',justifyContent: 'space-around'}}>
                                    <Image source={this.state.avatar ? this.state.avatar : Images.cameraIcon} style={this.state.avatar?styles.camera:""}></Image>
                                </View>
                                
                                <TouchableOpacity onPress = {() => this.setState({picturemodalVisible : true})} >
                                    {this.state.avatar ?<Text style={styles.btnTopEdit}>Edit</Text>:<Text style={styles.btnTopEdit}>Upload Image</Text>}
                                </TouchableOpacity>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <View style={{width:width/3,height:71, alignItems:'center'}}>
                                    {this.state.startDate==""?<Image source={Images.date}/>:<Text style ={styles.stateDateText}>{this.state.startDate}</Text>}
                                </View>
                                <TouchableOpacity onPress={this._showDateTimePicker} >
                                    {this.state.startDate==""?<Text style={styles.btnTopEdit}>Set Date</Text>:<Text style={styles.btnTopEdit}>Edit</Text>}
                                </TouchableOpacity>
                                <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                                datePickerModeAndroid='calendar'
                                confirmTextIOS="Ok"
                                titleIOS='Select Date'
                                /> 
                            </View>
                            <View style={{alignItems:'center'}}>
                                <View style={{width:width/3,height:71, alignItems:'center'}}>
                                    <Image source={this.state.Address==""?Images.location_n:Images.location} style={this.state.Address!=""&&{marginVertical:20}}/>
                                </View>                                
                                
                                <TouchableOpacity onPress={() => this.setState({isAddressPromptVisible: true})} style={{flex:1}}>
                                    {this.state.Address==""?<Text style={styles.contentText}>Location</Text>:<Text style={styles.contentText}>Edit</Text>}
                                </TouchableOpacity>
                            </View>
                            <Prompt
                                title="Your Address"
                                placeholder="Start typing"
                                defaultValue={this.state.Address}
                                visible={ this.state.isAddressPromptVisible }
                                onCancel={ (value) => this.setState({
                                    isAddressPromptVisible: false,
                                    Address: value
                                }) }
                                    onSubmit={ (value) => this.setState({
                                    isAddressPromptVisible: false,
                                    Address: value
                                }) }/>
                        </View>
                        
                        <View style={styles.bottomLine}/>
                        <View style={{borderBottomColor: '#e09579',borderBottomWidth: 2}}>
                            <View style={styles.rowRecurrStyle}>
                                <Text style={styles.contentText}>Is this a recurring event?</Text>                            
                                <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}
                                    onTintColor="#FFFFFF"
                                    thumbTintColor="#FFAD55"/>
                            </View>
                            {this.state.switchValue?
                            <View style={styles.rowStyleRepeat}>
                                <View style={styles.rowStyleRepeat_1}>
                                    <Text style={styles.contentText1}>Repeat:</Text>
                                    <View style={styles.rowStyle2}>
                                        <TouchableOpacity style={this.state.repeatFlag=="daily"?styles.repeatOnStyles:styles.repeatOffStyles} onPress={() => {this.repeatEvent("daily")}}><Text style={this.state.repeatFlag=="daily"?styles.repeatOnText:styles.repeatOffText}>Daily</Text></TouchableOpacity>
                                        <TouchableOpacity style={this.state.repeatFlag=="weekly"?styles.repeatOnStyles:styles.repeatOffStyles} onPress={() => {this.repeatEvent("weekly")}}><Text style={this.state.repeatFlag=="weekly"?styles.repeatOnText:styles.repeatOffText}>Weekly</Text></TouchableOpacity>
                                        <TouchableOpacity style={this.state.repeatFlag=="monthly"?styles.repeatOnStyles:styles.repeatOffStyles} onPress={() => {this.repeatEvent("monthly")}}><Text style={this.state.repeatFlag=="monthly"?styles.repeatOnText:styles.repeatOffText}>Monthly</Text></TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.rowStyleRepeat_2}>
                                    {(this.state.repeatFlag == "daily" || this.state.repeatFlag == "monthly") &&
                                        <View>
                                            <Text style={styles.btnTopEdit}>End Date:</Text>
                                            <DatePicker
                                                style={styles.datePickerStyle}
                                                date={this.state.endDate}
                                                mode="datetime"
                                                placeholder=" "
                                                format="MMM D, YYYY hh:mm A"
                                                confirmBtnText="Confirm"
                                                cancelBtnText="Cancel"
                                                iconSource = {Images.date_smallIcon}   
                                                customStyles={{                                                                                         
                                                dateIcon: {
                                                    position: 'absolute',
                                                    right: 10,
                                                    top: 10,
                                                    width:17,
                                                    height:17,
                                                    marginLeft: 0
                                                },
                                                
                                                dateInput: {
                                                    borderRadius:50,
                                                    borderColor:'#fff',
                                                }
                                                }}
                                                onDateChange={(date) => {this.setState({endDate: date})}}
                                            />
                                        </View>}
                                        {this.state.repeatFlag == "weekly" &&
                                            <View style={{marginTop:0}}>
                                                <Text style={styles.btnTopEdit}>Day(s):</Text>
                                                <Text style={styles.btnTopEdit}>:</Text>
                                                <View style={styles.operation_view}>
                                                    <TouchableOpacity style={this.state.weekday[0] ? styles.operation_button_active : styles.operation_button}
                                                        onPress={() => this.onWeekDayPress("0")}>
                                                        <Text style={this.state.weekday[0] ? styles.operation_label_active : styles.operation_label}>SUN</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={this.state.weekday[1] ? styles.operation_button_active : styles.operation_button}
                                                        onPress={() => this.onWeekDayPress(1)}>
                                                        <Text style={this.state.weekday[1] ? styles.operation_label_active : styles.operation_label}>MON</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={this.state.weekday[2] ? styles.operation_button_active : styles.operation_button}
                                                        onPress={() => this.onWeekDayPress(2)}>
                                                        <Text style={this.state.weekday[2] ? styles.operation_label_active : styles.operation_label}>TUE</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={this.state.weekday[3] ? styles.operation_button_active : styles.operation_button}
                                                        onPress={() => this.onWeekDayPress(3)}>
                                                        <Text style={this.state.weekday[3] ? styles.operation_label_active : styles.operation_label}>WED</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={this.state.weekday[4] ? styles.operation_button_active : styles.operation_button}
                                                        onPress={() => this.onWeekDayPress(4)}>
                                                        <Text style={this.state.weekday[4] ? styles.operation_label_active : styles.operation_label}>THU</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={this.state.weekday[5] ? styles.operation_button_active : styles.operation_button}
                                                        onPress={() => this.onWeekDayPress(5)}>
                                                        <Text style={this.state.weekday[5] ? styles.operation_label_active : styles.operation_label}>FRI</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={this.state.weekday[6] ? styles.operation_button_active : styles.operation_button}
                                                        onPress={() => this.onWeekDayPress(6)}>
                                                        <Text style={this.state.weekday[6] ? styles.operation_label_active : styles.operation_label}>SAT</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{alignItems:'center'}}>
                                                    <Text style={styles.btnTopEdit}>End Date:</Text>
                                                    <DatePicker
                                                        style={styles.datePickerStyle}
                                                        date={this.state.endDate}
                                                        mode="datetime"
                                                        placeholder=" "
                                                        format="MMM D, YYYY   hh:mm A"
                                                        confirmBtnText="Confirm"
                                                        cancelBtnText="Cancel"
                                                        iconSource = {Images.date_smallIcon}   
                                                        customStyles={{                                                                                         
                                                        dateIcon: {
                                                            position: 'absolute',
                                                            right: 10,
                                                            top: 10,
                                                            width:17,
                                                            height:17,
                                                            marginLeft: 0
                                                        },
                                                        dateInput: {
                                                            borderRadius:50,
                                                            borderColor:'#fff',
                                                        }
                                                        }}
                                                        onDateChange={(date) => {this.setState({endDate: date})}}
                                                    />
                                                </View>
                                            </View>
                                        }
                                </View>
                            </View>:<View></View>}
                        </View>
                        
                        <View>
                            <Text style={[styles.btnTopEdit,{textAlign:'center', marginTop:20}]}>Select Food Type(s)</Text>
                            <View style={styles.vDetsilSElection}>
                                <View style={{alignItems: 'center'}} >
                                    <TouchableOpacity style={styles.imgBoxCover} onPress={()=>{this.setState({foodTypeToggle1:!this.state.foodTypeToggle1})}}>
                                        <Image source={this.state.foodTypeToggle1?Images.non_perishable_new:Images.non_perishable_new_sel} style={[styles.vImgBoxCover, !this.state.foodTypeToggle1&& {}]} resizeMode={'contain'} />
                                    </TouchableOpacity>
                                    <Text style={styles.foodTypeText} >Non-Perishable</Text>
                                </View>
                                
                                <View style={{alignItems: 'center'}} >
                                    <TouchableOpacity style={styles.imgBoxCover} onPress={()=>{this.setState({foodTypeToggle2:!this.state.foodTypeToggle2})}}>
                                        <Image source={this.state.foodTypeToggle2?Images.prepared_sel:Images.prepared} style={styles.vImgBoxCover} resizeMode={'contain'} />
                                    </TouchableOpacity>
                                    <Text style={styles.foodTypeText} >Prepared</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.sliderCover}>
                            <Text style={styles.btnTopEdit}>How many people can you serve?</Text>
                            <Slider
                                value={this.state.value}
                                onValueChange={(value) => this.setState({value})}
                                style={styles.sliderS}
                                maximumTrackTintColor='#f4b9b2'
                                minimumTrackTintColor='#fff'
                                thumbTintColor='#ffb660'
                                maximumValue={500}
                                trackStyle={{height: 10}}
                                thumbStyle={{width: 30, height: 30, borderRadius: 15}}/>
                            {this.sliderValue()}                        
                        </View>
                        {this.writeHere()}
                  </ScrollView>
               </Image>

               <PictureModal picturemodalVisible={this.state.picturemodalVisible} close={this.closePictureModal} chooseAvatar = {this.chooseAvatar} />
                <DescriptionModal descriptionModalVisible={this.state.descriptionModalVisible} close={this.closeDescriptionModal}/>
           </View>
         )
     }
 }