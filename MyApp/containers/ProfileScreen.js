import React from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  TouchableHighlight
} from 'react-native'

{/*import Icon from 'react-native-vector-icons/FontAwesome'*/}
import MapView from 'react-native-maps'
import { Images } from '../DevTheme'
import styles from '../Styles/ProfileScreenStyles';
import KeyboardSpacer from 'react-native-keyboard-spacer';



export default class ProfileScreen extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor (props) {
        super(props)
        this.state = {
          modalVisible: false,
          descriptionModalVisible:false,
          flagExplanationModal:false,
        }
    }

    closeDescriptionModal = () => {
      this.setState({
        descriptionModalVisible: false,
      })
    }

    render(){
        return(
            <ScrollView bounces={false} style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={{position:'absolute', left: 20}} onPress={() => this.props.navigation.goBack()} >
                        <Image source={Images.backIcon} style={styles.menuIconNav} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Donator Name</Text>                            
                </View> 
                <Image style={styles.profilebg2} source={Images.gradient_bg}>
                    <Image source={Images.stars} style={styles.stars}/> 
                    <Text style={styles.time}>10111 Welove street, Los Angeles, CA 90002</Text>
                </Image>
                <View style={styles.menuTab}>
                    <TouchableOpacity style={styles.menuTabBtn}>
                        <Image style={styles.menuTabBtnIconBg} source={Images.bgcircle}>
                            <Image style={styles.menuTabBtnIcon} source={Images.call} />
                        </Image>
                        <Text style={styles.menuTabBtnText}>Call</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.menuTabBtn} onPress={()=>{ this.setState({ modalVisible:!this.state.modalVisible})}}>
                        <Image style={styles.menuTabBtnIconBg} source={Images.bgcircle}>
                            <Image style={styles.menuTabBtnIcon} source={Images.flag} />
                        </Image>
                        <Text style={styles.menuTabBtnText}>Report</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.descriptionView}>
                    <Text style={[styles.donation_description,{fontWeight: '700',fontFamily: 'Ubuntu'}]}>WEBSITE:  WWW.DONATORNAME.COM</Text>
                    <View style={styles.createdby_View}>
                        <Text style={styles.donation_description}>HOURS OF OPERATION:</Text>
                        <View style={{alignSelf:'center', paddingBottom: 25}}>
                            <Text style={styles.hoursDescription}>Mon    closed</Text>
                            <Text style={styles.hoursDescription}>Tue     8:00 pm - 2:00 am</Text>
                            <Text style={styles.hoursDescription}>Wed   8:00 pm - 2:00 am</Text>
                            <Text style={styles.hoursDescription}>Thi     8:00 pm - 2:00 am</Text>
                            <Text style={styles.hoursDescription}>Fri      8:00 pm - 2:00 am</Text>
                            <Text style={styles.hoursDescription}>Sat    8:00 pm - 2:00 am</Text>
                            <Text style={styles.hoursDescription}>Sun   8:00 pm - 2:00 am</Text>
                        </View>
                    </View>
                    <Text style={{alignSelf: 'center', fontSize: 17, fontWeight: '600',fontFamily: 'Ubuntu'}}>ORGANIZATION DESCRIPTION:</Text>
                    <Text style={[styles.donation_content]}>Business Desctiption goes here tor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. Donec quis ornare lacus. Etiam gravida mollis tortor quis porttitor. Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. </Text>
                    <View style={styles.createdby_View}>
                        <Text style={{alignSelf: 'center', fontSize: 16, fontWeight: '400', marginTop: 25, fontFamily: 'Ubuntu'}}>UPCOMING SERVICES:</Text>
                        <Text style={{alignSelf: 'center', fontSize: 16, fontWeight: '400', marginTop: 18, color:'rgba(0,0,0,0.6)', fontFamily: 'Ubuntu'}}>September 30, 2017</Text>
                        <View style={styles.foodView}>
                            <Image source={Images.food} style={styles.food}/>
                            <View style={{alignItems: 'center',width:170, marginLeft:15}}>
                                <Text style={{color: 'rgba(0,0,0,0.6)',fontSize: 16, fontFamily: 'Ubuntu'}}>Groceries Giveaway</Text>
                                <Text style={{fontSize: 13, paddingVertical: 10, fontFamily: 'Ubuntu'}}>Description of the food give-a-way goes here….</Text>
                                <Text style={{fontSize: 12, width:100,textAlign:'center', fontFamily: 'Ubuntu'}}>Click to view this giveaway</Text>
                            </View>
                            <Image source={Images.oval1} style={styles.oval1} />
                        </View>
                    </View>                   
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'space-around', marginBottom: 25}}>
                    <View style={styles.rectagle}>
                        <Image source={Images.food_donated} style={styles.food_donated}/>
                        <Text style={{fontSize: 17,color: 'rgba(0,0,0,0.6)',marginTop:10}}>80<Text style={{fontSize: 13,color: 'rgba(0,0,0,0.6)'}}>LBS</Text></Text>
                    </View>
                    <View style={styles.rectagle}>
                        <Image source={Images.People_Served} style={{width: 50,height:50*58/90}}/>
                        <Text style={{fontSize: 17,color: 'rgba(0,0,0,0.6)',marginTop:10}}>800</Text>
                    </View>
                    <View style={styles.rectagle}>
                        <Image source={Images.Global_Impact} style={{width: 49,height:49*58/88}}/>
                        <Text style={{fontSize: 17,color: 'rgba(0,0,0,0.6)',marginTop:10}}>GREAT</Text>
                    </View>
                </View>
                <Text style={{fontSize: 17,alignSelf: 'center',marginBottom:20, fontFamily: 'Ubuntu'}}>LOCATION:</Text>
                <MapView
                        style={styles.mapView}
                        region={{
                            latitude: 37.785834,
                            longitude: -122.406417,
                            latitudeDelta: 0.0222,
                            longitudeDelta: 0.0201
                            }
                        }
                        zoomEnabled={true}
                    >
                        <MapView.Marker 
                            coordinate={{
                                latitude: 37.785834,
                                longitude: -122.406417,
                            }}                                
                        >
                            <Image source={Images.pin} style={styles.pin}/>
                        </MapView.Marker>
                    </MapView>
                  <TouchableHighlight>
                        <Image source={Images.get_bg} style={styles.get_bg} >
                            <Text style={styles.get_direction}>Get Directions</Text>
                        </Image>
                    </TouchableHighlight>
                  <Modal animationType={"fade"} visible={this.state.modalVisible} transparent={true}
                      onRequestClose={() => {alert("Modal has been closed.")}}>
                      <View style={styles.bgC}>
                          <View style={styles.bgCi}>
                              <Image style={styles.reactAngleModelBg} source={Images.reactAngleModelBg}>
                              <View style={styles.likeFlagCover}>
                              <Text style={styles.likeFlag}>Are you sure you’d like to Flag this account?</Text>
                              <View style={styles.buttonC}>
                                  <TouchableOpacity style={styles.contactBtnm} onPress={()=> this.setState({descriptionModalVisible:true, modalVisible:false})}>
                                      <Text style={styles.contactBtnTextm}>Yes</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={styles.contactBtnm}>
                                      <Text style={styles.contactBtnTextm}>Ok</Text>
                                  </TouchableOpacity>
                              </View>
                              </View>

                              </Image>
                          </View>
                      </View>

          </Modal>
          <Modal animationType={"fade"} visible={this.state.flagExplanationModal} transparent={true}
              onRequestClose={() => {alert("Modal has been closed.")}}>
              <View style={styles.bgC}>
                  <View style={styles.bgCi}>
                      <Image style={styles.reactAngleModelBg} source={Images.reactAngleModelBg}>
                      <View style={styles.likeFlagCover}>
                      <Text style={styles.likeFlag}>We appreciate your feedback and will further investigate.</Text>
                      <View style={{alignItems:'center', marginTop:25,}}>
                          <TouchableOpacity style={styles.contactBtnm} onPress={()=>{this.setState({flagExplanationModal:false})}}>
                              <Text style={styles.contactBtnTextm}>CLOSE</Text>
                          </TouchableOpacity>
                      </View>
                      </View>

                      </Image>
                  </View>
              </View>

  </Modal>
          <Modal animationType={'fade'} transparent={true} visible={this.state.descriptionModalVisible}
              onRequestClose={() => alert()}>
              <View style={styles.dContainer}>
                  <View style={styles.dHeader}></View>
                  <View style={styles.dHeaderInner}>
                      <TouchableOpacity style={styles.dLeftHeader} onPress={()=>{this.setState({descriptionModalVisible:false})}}>
                          <Image style={styles.orangeBack} source={Images.orangeBack} />
                      </TouchableOpacity>
                      <Text style={styles.dTitle}>Description:</Text>
                      <TouchableOpacity style={styles.dRightHeader} onPress={()=>{this.setState({flagExplanationModal:true,descriptionModalVisible:false})}}>
                        <Text style={styles.dDoneBtn}>Flag</Text>
                      </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={styles.entryTxt}>Entry for January 4, 2017 | 10:30 PM</Text>
                  </View>
                  <View style={{flex:1}}>
                      <TextInput style={[styles.mLineText]} multiline={true} editable={true}
                      placeholder='Please explain your reason for flagging this account'
                      placeholderTextColor= {'#C8C8C8'}

                          underlineColorAndroid="transparent" value={this.state.descriptionText}
                          selectionColor={'#dd8d6c'}/>
                  </View>
                  <KeyboardSpacer />
              </View>
          </Modal>
            </ScrollView>
        )
    }
}
