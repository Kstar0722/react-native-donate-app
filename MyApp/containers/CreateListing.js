import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Switch, Modal, Dimensions, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Slider } from 'react-native-elements'
import { Images } from '../DevTheme'
import styles from '../Styles/CreateListingStyles'
import DateTimePicker from 'react-native-modal-datetime-picker'
export default class CreateListing extends React.Component {
    constructor () {
        super()
        this.state = {
            sliderValue: 60,
            foodTypeToggle1: false,
            foodTypeToggle2: false,
           

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
                        <View style={styles.rowStyle}>
                            <Text style={styles.contentText}>Is this a recurring event?</Text>                            
                            <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}
                                onTintColor="#FFFFFF"
                                thumbTintColor="#FFAD55"/>
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