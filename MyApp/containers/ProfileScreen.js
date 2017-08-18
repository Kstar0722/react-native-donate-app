import React from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput
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
          modalVisible: true,
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
                <Image style={styles.profilebg2} source={Images.profilebg2}>
                    <Image style={styles.profilebg1} source={Images.profilebg1}>
                        <View style={styles.header}>
                        <TouchableOpacity>
                            <Image source={Images.backIcon} style={styles.menuIconNav} />
                        </TouchableOpacity>
                        {/*<Icon style={styles.headerIcon} name='arrow-left'  onPress={()=>this.props.navigation.goBack()} />*/}

                            <Text style={styles.headerTitle}>Profile</Text>
                            <Image source={Images.cancelIcon} style={styles.menuIconNav} />
                        </View>
                    </Image>
                    <View style={styles.profilePicView}>
                        <Image style={styles.profilePic} source={{uri:'https://lh5.googleusercontent.com/-g3HglrR2uuI/AAAAAAAAAAI/AAAAAAAABUs/L1nlPBq-HTo/photo.jpg'}} />
                    </View>
                    <Text style={styles.profileTitle}>Church of Hope</Text>
                    <Text style={styles.profileSubTitle}>10111 Welove street, Los Angeles, CA 90002{'\n'}323.777.1111</Text>
                </Image>
                <View style={styles.menuTab}>
                    <TouchableOpacity style={styles.menuTabBtn}>
                        <Image style={styles.menuTabBtnIconBg} source={Images.bgcircle}>
                            <Image style={styles.menuTabBtnIcon} source={Images.call} />
                        </Image>
                        <Text style={styles.menuTabBtnText}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuTabBtn}>
                        <Image style={styles.menuTabBtnIconBg} source={Images.bgcircle}>
                            <Image style={styles.menuTabBtnIcon} source={Images.msg} />
                        </Image>
                        <Text style={styles.menuTabBtnText}>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuTabBtn} onPress={()=>{ this.setState({ modalVisible:!this.state.modalVisible})}}>
                        <Image style={styles.menuTabBtnIconBg} source={Images.bgcircle}>
                            <Image style={styles.menuTabBtnIcon} source={Images.flag} />
                        </Image>
                        <Text style={styles.menuTabBtnText}>Report</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.tabTitle}>Description:</Text>
                <Text numberOfLines={3} style={styles.description}>Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. Donec quis ornare lacus. Etiam gravida mollis tortor quis porttitor.</Text>
                {/*
                <TouchableOpacity style={styles.readMoreBtn}>
                    <Text style={styles.readMoreBtnTitle}>Read More</Text>
                </TouchableOpacity>
                <Text style={styles.tabTitle}>Listings:</Text>
                <Image style={styles.listingTab} source={Images.listingbg}>
                    <View style={styles.listingTabDate}>
                        <Text style={styles.listingTabDateText}>03</Text>
                        <Text style={styles.listingTabDateMonth}>JAN</Text>
                    </View>
                    <View style={styles.listingTabDecription}>
                        <Text numberOfLines={1} style={styles.listingTabDecriptionText}>Food Give-a-Way Lorem ipsum dolor sit amet, consectetur adipisicing.</Text>
                        <Text style={styles.listingTabDecriptionTime}>Tuesday, 11:30 AM</Text>
                    </View>
                </Image>
                <Image style={styles.listingTab} source={Images.listingbg}>
                    <View style={styles.listingTabDate}>
                        <Text style={styles.listingTabDateText}>02</Text>
                        <Text style={styles.listingTabDateMonth}>JAN</Text>
                    </View>
                    <View style={styles.listingTabDecription}>
                        <Text numberOfLines={1} style={styles.listingTabDecriptionText}>Food Give-a-Way Lorem ipsum dolor sit amet, consectetur adipisicing.</Text>
                        <Text style={styles.listingTabDecriptionTime}>Monday, 11:30 AM</Text>
                    </View>
                </Image>
                <Image style={styles.listingTab} source={Images.listingbg}>
                    <View style={styles.listingTabDate}>
                        <Text style={styles.listingTabDateText}>01</Text>
                        <Text style={styles.listingTabDateMonth}>JAN</Text>
                    </View>
                    <View style={styles.listingTabDecription}>
                        <Text numberOfLines={1} style={styles.listingTabDecriptionText}>Food Give-a-Way Lorem ipsum dolor sit amet, consectetur adipisicing.</Text>
                        <Text style={styles.listingTabDecriptionTime}>Tuesday, 11:30 AM</Text>
                    </View>
                </Image>
                <Text style={styles.tabTitle}>Location:</Text>
                */}
                <MapView
                    style={styles.addressmap}
                    initialRegion={{
                      latitude: 37.6537547,
                      longitude: -122.4580622,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}
                  />
                  {/*<TouchableOpacity activeOpacity={0.45} style={styles.contactBtn}>
                      <Text style={styles.contactBtnText}>Contact Business Name</Text>
                  </TouchableOpacity>*/}

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
