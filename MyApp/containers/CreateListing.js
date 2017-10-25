import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Switch, Modal, Dimensions, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Slider } from 'react-native-elements'
import { Images } from '../DevTheme'
import styles from '../Styles/CreateListingStyles'
import DatePicker from 'react-native-datepicker'
export default class CreateListing extends React.Component {
    constructor () {
        super()
        this.state = {
            sliderValue: 0,
            foodTypeToggle1: false,
            foodTypeToggle2: false,
            toggleSwitch: false,
            repeatFlag: 0,
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
    
    repeatEvent(val)
    {
        if(this.state.repeatFlag == val)
            this.setState({repeatFlag:0});
        else
            this.setState({repeatFlag:val})
    }

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
                         <View style={styles.detsilSElection}>
                            <View style={{alignItems:'center'}}>
                                <Image source={Images.cameraIcon}/>
                                <TouchableOpacity>
                                    <Text style={styles.btnTopEdit}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Image source={Images.date}/>
                                <TouchableOpacity>
                                    <Text style={styles.btnTopEdit}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                            <View style= {styles.hLine}/>
                        </View>
                        
                        <View style={styles.bottomLine}/>
                        <View style={styles.rowStyle}>
                            <Text style={styles.contentText}><Image source={Images.focus}/>  Add a Location</Text>                            
                            <Image source={Images.rightArraw}></Image>
                        </View>
                            <View style={{borderBottomColor: '#e09579',borderBottomWidth: 2}}>
                                <View style={styles.rowStyle1}>
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
                                            <TouchableOpacity style={this.state.repeatFlag==1?styles.repeatOnStyles:styles.repeatOffStyles} onPress={() => {this.repeatEvent(1)}}><Text style={this.state.repeatFlag==1?styles.repeatOnText:styles.repeatOffText}>Daily</Text></TouchableOpacity>
                                            <TouchableOpacity style={this.state.repeatFlag==2?styles.repeatOnStyles:styles.repeatOffStyles} onPress={() => {this.repeatEvent(2)}}><Text style={this.state.repeatFlag==2?styles.repeatOnText:styles.repeatOffText}>Weekly</Text></TouchableOpacity>
                                            <TouchableOpacity style={this.state.repeatFlag==3?styles.repeatOnStyles:styles.repeatOffStyles} onPress={() => {this.repeatEvent(3)}}><Text style={this.state.repeatFlag==3?styles.repeatOnText:styles.repeatOffText}>Monthly</Text></TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.rowStyleRepeat_2}>
                                        {(this.state.repeatFlag == 1 || this.state.repeatFlag == 3) &&
                                            <View>
                                                <Text style={styles.btnTopEdit}>End Date:</Text>
                                                <DatePicker
                                                    style={styles.datePickerStyle}
                                                    date={this.state.date}
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
                                                        color:'#E48971',
                                                        borderRadius:50,
                                                        borderColor:'#fff',
                                                    }
                                                    // ... You can check the source to find the other keys. 
                                                    }}
                                                    onDateChange={(date) => {this.setState({date: date})}}
                                                />
                                            </View>}
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
                                value={this.state.sliderValue}
                                onValueChange={(value) => this.setState({value})}
                                style={styles.sliderS}
                                maximumTrackTintColor='#f4b9b2'
                                minimumTrackTintColor='#fff'
                                thumbTintColor='#ffb660'
                                maximumValue={500}
                                trackStyle={{height: 10, borderRadius:5}}
                                thumbStyle={{width: 20, height: 20, borderRadius: 10, borderWidth:1, borderColor:'#fff'}}
                            />                         
                        </View>
                        <View style={styles.rowStyle}>
                            <Text style={styles.contentText}>Eligibility Requirements</Text>                            
                            <Image source={Images.rightArraw}></Image>
                        </View>
                        <View style={styles.rowStyle}>
                            <Text style={styles.contentText}>Description</Text>                            
                            <Image source={Images.rightArraw}></Image>
                        </View>
                  </ScrollView>
               </Image>
           </View>
         )
     }
 }