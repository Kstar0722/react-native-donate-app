import React, { PureComponent } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  StyleSheet,
  Easing,
  ScrollView
} from 'react-native'

import Menu, {
    MenuContext,
    MenuTrigger,
    MenuOptions,
    MenuOption,
    renderers
  } from 'react-native-popup-menu';

import styles from '../Styles/RescueProgressStyles'
import { Images } from '../DevTheme'
import TapBar from './Tapbar'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'
import SideMenu from 'react-native-side-menu'
import SideBar from './SideMenu'
import Tabs from 'react-native-tabs'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view'
import MapView from 'react-native-maps'
import Stars from 'react-native-stars-rating';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import Switch from 'react-native-customisable-switch';
const { SlideInMenu } = renderers;
export default class RescueProgress extends PureComponent {
  constructor () {
    super()
    this.state = {
        isOpenSideMenu:false,
        segmentIndex: 0,
        popupFullScreenFlag: false,
      };
  }

  static navigationOptions = {
    header:null,
  }
  sideMenuToggle = (flag) => {
    this.setState({isOpenSideMenu:flag});
  }
  fullScreen()
  {
    this.setState({
        popupFullScreenFlag: this.state.popupFullScreenFlag? false : true
    })
  }
  segmentIndexChange = (index) => {
    this.setState({
    ...this.state,
    segmentIndex: index,
    });
  }
  onRegionChange(region) {
    this.setState({ region });
  }
  render () {
    const { navigate } = this.props.navigation;
    const menu = <SideBar navigator={navigate} close={()=>this.sideMenuToggle(false)}/>;
    const { region } = this.props;
    return (
      <View style={styles.mainView}>
        <SideMenu menu={menu} isOpen={this.state.isOpenSideMenu}>
            <Image source={Images.rectangle} style={styles.bg}>
                <View style={styles.cNavigation}>
                    <TouchableOpacity onPress={() => {this.sideMenuToggle(true)}}>
                        <Image source={Images.menuIcon} style={[styles.menuIconNav,{width:23, height:14}]} />
                    </TouchableOpacity>
                    <Text style={styles.refedText}>Rescue in Progress</Text>
                    <Image source={Images.home2}/>
                </View>
                <SegmentedControlTab
                    values={['Status', 'Summary', 'Messages']}
                    selectedIndex={this.state.segmentIndex}
                    onTabPress={this.segmentIndexChange}
                    tabsContainerStyle={{ backgroundColor:'rgba(255, 255, 255, 0)', marginTop:5, marginHorizontal: 20, borderRadius:5 }}
                    tabStyle={{ backgroundColor:'rgba(255, 255, 255, 0)', borderWidth: 1, borderColor:'white' }}
                    activeTabStyle={{ backgroundColor:'white'}}
                    tabTextStyle={{ color: '#fff'}}
                    activeTabTextStyle={{ color: '#243B53' }} 
                />
                <View style={styles.locationNav2}>
                    <Text style={styles.smallText}><Image source={Images.focus}/>    Bellamsystraat Street, CT</Text>
                </View>
                <View style={{flex:1}}>
                    {this.state.segmentIndex === 0 &&
                        <MenuContext style={{flex: 1}}>
                            <View style={styles.container} >
                                <View style={styles.locationNav1}>
                                    <Text style={styles.NormalTextBlack}>Turn Right on Bellamystrat</Text>
                                    <Text style={styles.smallTextBlack}>Directions to the destination goes here</Text>
                                </View>
                                <View style ={styles.container}>
                                    <MapView
                                        style={styles.map}
                                        region={{
                                            latitude: 37.78825,
                                            longitude: -122.4324,
                                            latitudeDelta: 0.015,
                                            longitudeDelta: 0.0121,
                                        }}
                                    >
                                    </MapView>
                                        <View style={styles.step1Iamges}>
                                            <Image source={Images.btnClose} style={{flex:1}}/>
                                            <Image source={Images.btnContact1} style={styles.imageStyle}/>
                                        </View>
                                        <Menu name="numbers" renderer={SlideInMenu}>
                                                <MenuTrigger style={styles.absoluteBottomCenter}>
                                                    <Image source={Images.btnSwitchOff}/>
                                                </MenuTrigger>
                                                <MenuOptions style={{flex:1}}>
                                                    <TouchableOpacity onPress={() => { this.fullScreen() }}>
                                                        <View style={styles.absTopCenter}>
                                                            <Image source={Images.popScrIcon}/>
                                                        </View>
                                                    </TouchableOpacity>
                                                    {/* <View style={{position:'absolute', top:-210}}>
                                                        <Image source={Images.btnClose}/>
                                                        <Image source={Images.btnContact1}/>
                                                    </View> */}
                                                    {this.state.popupFullScreenFlag? <ScrollView style={{marginTop:20, height:450, flex:1}}>
                                                        <View style={styles.subMenuItems}>
                                                            <Text style={styles.popNumStyle}>1</Text>
                                                            <View style={styles.contactText} >
                                                                <Text style={{fontSize:15, fontWeight:'bold'}}>Pickup Food From LA Food Bank</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop:10}}>Pickup : Kinkerstraat, 3.5 Km</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop: 5}}>Deliver : Wilhelminastraat 5.7 Km</Text>
                                                            </View>
                                                            <View style={styles.verticalLine}></View>
                                                        </View>
                                                        <View style={styles.subMenuItems}>
                                                            <Text style={styles.popNumStyle}>2</Text>
                                                            <View style={styles.contactText} >
                                                                <Text style={{fontSize:15, fontWeight:'bold'}}>Pickup Food From LA Food Bank</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop:10}}>Pickup : Kinkerstraat, 3.5 Km</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop: 5}}>Deliver : Wilhelminastraat 5.7 Km</Text>
                                                            </View>
                                                            <View style={styles.verticalLine}></View>
                                                        </View>
                                                        <View style={styles.subMenuItems}>
                                                            <Text style={styles.popNumStyle}>3</Text>
                                                            <View style={styles.contactText} >
                                                                <Text style={{fontSize:15, fontWeight:'bold'}}>Pickup Food From LA Food Bank</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop:10}}>Pickup : Kinkerstraat, 3.5 Km</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop: 5}}>Deliver : Wilhelminastraat 5.7 Km</Text>
                                                            </View>
                                                            <View style={styles.verticalLine}></View>
                                                        </View>
                                                        <View style={styles.subMenuItems}>
                                                            <Text style={styles.popNumStyle}>4</Text>
                                                            <View style={styles.contactText} >
                                                                <Text style={{fontSize:15, fontWeight:'bold'}}>Pickup Food From LA Food Bank</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop:10}}>Pickup : Kinkerstraat, 3.5 Km</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop: 5}}>Deliver : Wilhelminastraat 5.7 Km</Text>
                                                            </View>
                                                            <View style={styles.verticalLine}></View>
                                                        </View>
                                                        <View style={styles.subMenuItems}>
                                                            <Text style={styles.popNumStyle}>5</Text>
                                                            <View style={styles.contactText} >
                                                                <Text style={{fontSize:15, fontWeight:'bold'}}>Pickup Food From LA Food Bank</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop:10}}>Pickup : Kinkerstraat, 3.5 Km</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop: 5}}>Deliver : Wilhelminastraat 5.7 Km</Text>
                                                            </View>
                                                        </View>
                                                    </ScrollView>: 
                                                    <ScrollView style={{marginTop:20,height:210, flex:1}}>
                                                        <View style={styles.subMenuItems}>
                                                            <Text style={styles.popNumStyle}>1</Text>
                                                            <View style={styles.contactText} >
                                                                <Text style={{fontSize:15, fontWeight:'bold'}}>Pickup Food From LA Food Bank</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop:10}}>Pickup : Kinkerstraat, 3.5 Km</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop: 5}}>Deliver : Wilhelminastraat 5.7 Km</Text>
                                                            </View>
                                                            <View style={styles.verticalLine}></View>
                                                        </View>
                                                        <View style={styles.subMenuItems}>
                                                            <Text style={styles.popNumStyle}>2</Text>
                                                            <View style={styles.contactText} >
                                                                <Text style={{fontSize:15, fontWeight:'bold'}}>Pickup Food From LA Food Bank</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop:10}}>Pickup : Kinkerstraat, 3.5 Km</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop: 5}}>Deliver : Wilhelminastraat 5.7 Km</Text>
                                                            </View>
                                                            <View style={styles.verticalLine}></View>
                                                        </View>
                                                        <View style={styles.subMenuItems}>
                                                            <Text style={styles.popNumStyle}>3</Text>
                                                            <View style={styles.contactText} >
                                                                <Text style={{fontSize:15, fontWeight:'bold'}}>Pickup Food From LA Food Bank</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop:10}}>Pickup : Kinkerstraat, 3.5 Km</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop: 5}}>Deliver : Wilhelminastraat 5.7 Km</Text>
                                                            </View>
                                                            <View style={styles.verticalLine}></View>
                                                        </View>
                                                        <View style={styles.subMenuItems}>
                                                            <Text style={styles.popNumStyle}>4</Text>
                                                            <View style={styles.contactText} >
                                                                <Text style={{fontSize:15, fontWeight:'bold'}}>Pickup Food From LA Food Bank</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop:10}}>Pickup : Kinkerstraat, 3.5 Km</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop: 5}}>Deliver : Wilhelminastraat 5.7 Km</Text>
                                                            </View>
                                                            <View style={styles.verticalLine}></View>
                                                        </View>
                                                        <View style={styles.subMenuItems}>
                                                            <Text style={styles.popNumStyle}>5</Text>
                                                            <View style={styles.contactText} >
                                                                <Text style={{fontSize:15, fontWeight:'bold'}}>Pickup Food From LA Food Bank</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop:10}}>Pickup : Kinkerstraat, 3.5 Km</Text>
                                                                <Text style={{fontSize:14, color:'#9E9E9E', marginTop: 5}}>Deliver : Wilhelminastraat 5.7 Km</Text>
                                                            </View>
                                                        </View>
                                                    </ScrollView>
                                                    }
                                                    
                                                    <MenuOption value={5}><Image source={Images.btnSwitchOn} style={{marginBottom:5}}/></MenuOption>
                                                </MenuOptions>
                                            </Menu>
                                </View>
                            </View>
                            
                        </MenuContext>
                    }
                    {this.state.segmentIndex === 1 &&
                        <ScrollView style={styles.container} >
                           <View>
                               <Image source={Images.rectangle} style={[styles.bg,{height:280}]}>
                                   <View style={styles.cNavigation1}>
                                       <Text style={styles.normalVCText}>DONATOR NAME</Text>
                                   </View>
                                   <View style={styles.rateStyle}>
                                       <Stars
                                           isActive={true}
                                           rateMax={5}
                                           isHalfStarEnabled={false}
                                           onStarPress={(rating) => console.log(rating)}
                                           rate={4}
                                           size={20}
                                       />
                                   </View>
                                   <View style={styles.pickData}>
                                       <Text style={styles.normalTextWhite}>PICKUP TIME:</Text>
                                       <Text style={styles.smallTextWhite}>8:00 am - 10:00 am</Text>
                                   </View>
                                   <View style={styles.pickData}>
                                       <Text style={styles.normalTextWhite}>ADDRESS:</Text>
                                       <Text style={styles.smallTextWhite}>10111 Welove street, Los Angeles, CA 90002</Text>
                                   </View>
                                   <View style={styles.vLayout}>
                                       <View style={{alignItems:'center'}}>
                                           <Text style={styles.normalTextWhite}>FOOD TYPE</Text>
                                           <Image source={Images.apple}/>
                                       </View>
                                       <View style={{alignItems:'center'}}>
                                           <Text style={styles.normalTextWhite}>VEHICLE SIZE</Text>
                                           <Image source={Images.car2}/>
                                       </View>
                                   </View>
                               </Image>
                           </View>
                           <Image source={Images.foodboxes1} style={{flex:1}}/>
                           <View style={{backgroundColor:"#fff", flex: 1}}>
                               <View style={styles.buttonGroup}>
                                   <View style={{alignItems:'center'}}>
                                       <Image source={Images.btnCall}/>
                                       <Text style={styles.smallTextBlack}>Call</Text>
                                   </View>
                                   <View style={{alignItems:'center'}}>
                                       <Image source={Images.btnMessage}/>
                                       <Text style={styles.smallTextBlack}>Message</Text>
                                   </View>
                                   <View style={{alignItems:'center'}}>
                                       <Image source={Images.btnReport}/>
                                       <Text style={styles.smallTextBlack}>Report</Text>
                                       
                                   </View>
                               </View>
                               <Text style={styles.descriptionTitle}>DONATION DESCRIPTION:</Text>
                               <Text style={styles.descriptionContent}>Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. Donec quis ornare lacus. Etiam gravida mollis tortor quis porttitor. Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. </Text>
                           </View>
                       </ScrollView>
                    }
                    {this.state.segmentIndex === 2 &&
                        <View style={styles.container} >
                            <ScrollView style={styles.container} >

                                <View style={{backgroundColor:"#fff", flex: 1}}>
                                    
                                    <View style={styles.contactItems}>
                                        <Image source={Images.adrianImg} style={{alignItems:'center'}} ></Image>
                                        <View style={styles.messageContact} >
                                            <Text style={styles.NormalTextBlack}>Contact Name</Text>
                                            <Text style={styles.smallTextBlack}>Please Ask for John when you arrive</Text>
                                        </View>
                                        <Text style={{color:'#7745A9'}}>12 min</Text>
                                    </View>
                                    <View style={styles.contactItems}>
                                        <Image source={Images.adrianImg} style={{alignItems:'center'}} ></Image>
                                        <View style={styles.messageContact} >
                                            <Text style={styles.NormalTextBlack}>Contact Name</Text>
                                            <Text style={styles.smallTextBlack}>Please Ask for John when you arrive</Text>
                                        </View>
                                        <Text style={{color:'#7745A9'}}>12 min</Text>
                                    </View>
                                    <View style={styles.contactItems}>
                                        <Image source={Images.adrianImg} style={{alignItems:'center'}} ></Image>
                                        <View style={styles.messageContact} >
                                            <Text style={styles.NormalTextBlack}>Contact Name</Text>
                                            <Text style={styles.smallTextBlack}>Please Ask for John when you arrive</Text>
                                        </View>
                                        <Text style={{color:'#7745A9'}}>12 min</Text>
                                    </View>
                                    <View style={styles.contactItems}>
                                        <Image source={Images.adrianImg} style={{alignItems:'center'}} ></Image>
                                        <View style={styles.messageContact} >
                                            <Text style={styles.NormalTextBlack}>Contact Name</Text>
                                            <Text style={styles.smallTextBlack}>Please Ask for John when you arrive</Text>
                                        </View>
                                        <Text style={{color:'#7745A9'}}>12 min</Text>
                                    </View>
                                    <View style={styles.contactItems}>
                                        <Image source={Images.adrianImg} style={{alignItems:'center'}} ></Image>
                                        <View style={styles.messageContact} >
                                            <Text style={styles.NormalTextBlack}>Contact Name</Text>
                                            <Text style={styles.smallTextBlack}>Please Ask for John when you arrive</Text>
                                        </View>
                                        <Text style={{color:'#7745A9'}}>12 min</Text>
                                    </View>
                                    <View style={styles.contactItems}>
                                        <Image source={Images.adrianImg} style={{alignItems:'center'}} ></Image>
                                        <View style={styles.messageContact} >
                                            <Text style={styles.NormalTextBlack}>Contact Name</Text>
                                            <Text style={styles.smallTextBlack}>Please Ask for John when you arrive</Text>
                                        </View>
                                        <Text style={{color:'#7745A9'}}>12 min</Text>
                                    </View>
                                    <View style={styles.contactItems}>
                                        <Image source={Images.adrianImg} style={{alignItems:'center'}} ></Image>
                                        <View style={styles.messageContact} >
                                            <Text style={styles.NormalTextBlack}>Contact Name</Text>
                                            <Text style={styles.smallTextBlack}>Please Ask for John when you arrive</Text>
                                        </View>
                                        <Text style={{color:'#7745A9'}}>12 min</Text>
                                    </View>
                                    <View style={styles.contactItems}>
                                        <Image source={Images.adrianImg} style={{alignItems:'center'}} ></Image>
                                        <View style={styles.messageContact} >
                                            <Text style={styles.NormalTextBlack}>Contact Name</Text>
                                            <Text style={styles.smallTextBlack}>Please Ask for John when you arrive</Text>
                                        </View>
                                        <Text style={{color:'#7745A9'}}>12 min</Text>
                                    </View>
                                    <View style={styles.contactItems}>
                                        <Image source={Images.adrianImg} style={{alignItems:'center'}} ></Image>
                                        <View style={styles.messageContact} >
                                            <Text style={styles.NormalTextBlack}>Contact Name</Text>
                                            <Text style={styles.smallTextBlack}>Please Ask for John when you arrive</Text>
                                        </View>
                                        <Text style={{color:'#7745A9'}}>12 min</Text>
                                    </View>
                                    
                                </View>
                            </ScrollView>
                            <Image source={Images.btnContact} style={styles.contactBtn}></Image>
                        </View>
                    }
                </View>
            </Image>
        </SideMenu>
      </View>

    )
  }
}
