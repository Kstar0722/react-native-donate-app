import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  Switch,
  ScrollView,
  TextInput
} from 'react-native'
import styles from '../Styles/FindDonationStyles'
import { Images } from '../DevTheme'
import TapBar from './Tapbar'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'
import MapView from 'react-native-maps';

export default class MainScreen extends Component {
  constructor () {
    super()
    this.state = {
        switchValue: true,
        mapModal:true,
        modalVisible:false,
        mapCancelModal:false,
        modalRescueClose:false,
    }
    this.toggleSwitch = this.toggleSwitch.bind(this)
  }

  toggleSwitch (val) {
    this.setState({
      switchValue: val
    })
  }

  static navigationOptions = {
    header:null,
  }

modal= (closed) =>{
    this.setState({mapModal:closed});
}
modalCancel= (closed) =>{
    this.setState({mapCancelModal:closed});
}

  mapView = () => {
     if(this.state.switchValue){
       return(<MapView style={styles.MapView}
         initialRegion={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
         }}/>);
     }else{
       return;
     }
  }

  render () {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainView}>
      <Image source={Images.fDonationheader} style={[styles.fDheadr,this.state.mapModal && styles.fDheadr2]}>
          <View style={styles.cNavigation}>
              <TouchableOpacity onPress={() => {}}>
                  <Image source={Images.fDbar} style={styles.menuIconNav} />
              </TouchableOpacity>
              <Text style={styles.refedText}>Find a Donation</Text>
              <Text style={styles.refedSmallText}>Map View ?</Text>
              <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}
              onTintColor='#96A883'/>
          </View>
          <TextInput style={styles.navigatioNsearch}
          placeholderTextColor= {'#8C8C8C'}
          underlineColorAndroid="transparent"
          placeholder="Search by City, State or Zip" />

      </Image>
      <View style={{backgroundColor: 'white', flex: 1,backgroundColor:'#EAEAEA'}}>
        {this.mapView()}
        </View>
        <View style={styles.fDfooter}>
        <View style={styles.fDfooterInner}>
            <View style={styles.fDBtnActive}>
            <TouchableOpacity style={styles.fBtn}>
                <Image source={Images.fDsearch} style={styles.fDsearch} />
                <Text style={styles.searchBtnText}>Search</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.fDcenterBtn}>
                <Image source={Images.fDowal} style={styles.fDowal} />
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, alignItems:'center'}}>
                <Image source={Images.fDmessage} style={styles.fDmessage} />
                <Text style={styles.searchBtnText}>Message</Text>
            </TouchableOpacity>
        </View>
        </View>
        <Modal animationType={"fade"} visible={this.state.modalVisible} transparent={true}
            onRequestClose={() => {alert("Modal has been closed.")}}>
            <View style={styles.bgC}>
                <View style={styles.bgCi}>
                    <Image style={styles.reactAngleModelBg} source={Images.reactAngleModelBg}>
                    <View style={styles.likeFlagCover}>
                    <Text style={styles.likeFlag}>Have you completed the rescue?</Text>
                    <View style={styles.buttonC}>
                        <TouchableOpacity style={styles.contactBtnm} onPress={()=> this.setState({mapCancelModal:true, modalVisible:false})}>
                            <Text style={styles.contactBtnTextm}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contactBtnm} onPress={()=> this.setState({modalVisible:false})}>
                            <Text style={styles.contactBtnTextm}>No</Text>
                        </TouchableOpacity>
                    </View>
                    </View>

                    </Image>
                </View>
            </View>
            </Modal>
            <Modal animationType={"fade"} visible={this.state.modalRescueClose} transparent={true}
                onRequestClose={() => {alert("Modal has been closed.")}}>
                <View style={styles.bgC}>
                    <View style={styles.bgCi}>
                        <Image style={styles.reactAngleModelBg} source={Images.reactAngleModelBg}>
                        <View style={styles.likeFlagCover}>
                        <Text style={styles.likeFlag}>Are you sure you’d like to cancel this rescue?</Text>
                        <View style={styles.buttonC}>
                            <TouchableOpacity style={styles.contactBtnm} onPress={()=> this.setState({mapCancelModal:true, modalRescueClose:false})}>
                                <Text style={styles.contactBtnTextm}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.contactBtnm} onPress={()=> this.setState({modalRescueClose:false})}>
                                <Text style={styles.contactBtnTextm}>No</Text>
                            </TouchableOpacity>
                        </View>
                        </View>

                        </Image>
                    </View>
                </View>
                </Modal>


        <Modal transparent={true}
            visible={this.state.mapModal} onRequestClose={() => {this.modal(false)}}>
            <View style={styles.mainViewClone2}>
              <View style={styles.modalCover}>
              <View style={[styles.mapViewDetail,{marginTop:50,}]}>
              <TouchableOpacity style={styles.close} onPress={() => {this.modal(false)}}>
                  <Image source={Images.close} style={styles.close} />
              </TouchableOpacity>
                  <MapView style={styles.listMapView1}
                    initialRegion={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}>

                  </MapView>
                  <View style={styles.listMapViewText}>
                      <Image source={Images.wVanRedBack} style={styles.vehicleIcon} />
                      <View style={styles.listMapViewTopRow}>
                          <Image source={Images.donaterName} style={styles.donaterName} />
                          <View style={{flex:1}}>
                              <Text style={styles.name}>Donator Name</Text>
                              <Text style={styles.nameText}>Perishable, Non-Perishable</Text>
                          </View>
                          <View style={styles.awayMeter}>
                              <Text style={styles.distance}>3 mi away</Text>
                              <Text style={styles.distance}>Created at 2:00PM</Text>
                          </View>


                      </View>
                      <Text style={styles.description}>Description of the donation goes here. Description of the donation goes here. Description of the donation goes here Description ...</Text>
                        <TouchableOpacity style={styles.clickToOpenBtn}>
                          <Text style={styles.clickToOpen}>Click to Open {'\n'}Donation</Text>
                        </TouchableOpacity>
                  </View>
              </View>
              <TouchableOpacity onPress={() => {this.setState({modalVisible:true, mapModal:false})}}>
              <View style={styles.wCircle}>
                <Image source={Images.orangeLock} style={styles.orangeLock} />
              </View>
              <Text style={styles.rescue}>Rescue</Text>
              </TouchableOpacity>
              </View>
            </View>

            </Modal>

            <Modal transparent={true}
                visible={this.state.mapCancelModal} onRequestClose={() => {this.modalCancel(false)}}>
                <View style={styles.mainViewClone2}>
                  <View style={styles.modalCover}>
                  <View style={[styles.mapViewDetail,{marginTop:50,}]}>
                  <TouchableOpacity style={styles.close} onPress={() => {this.modalCancel(false)}}>
                      <Image source={Images.close} style={styles.close} />
                  </TouchableOpacity>
                      <MapView style={styles.listMapView1}
                        initialRegion={{
                          latitude: 37.78825,
                          longitude: -122.4324,
                          latitudeDelta: 0.0922,
                          longitudeDelta: 0.0421,
                        }}>

                      </MapView>
                      <View style={styles.listMapViewText}>
                          <Image source={Images.wVanRedBack} style={styles.vehicleIcon} />
                          <View style={styles.listMapViewTopRow}>
                              <Image source={Images.donaterName} style={styles.donaterName} />
                              <View style={{flex:1}}>
                                  <Text style={styles.name}>Donator Name</Text>
                                  <Text style={styles.nameText}>Perishable, Non-Perishable</Text>
                              </View>
                              <View style={styles.awayMeter}>
                                  <Text style={styles.distance}>3 mi away</Text>
                                  <Text style={styles.distance}>Created at 2:00PM</Text>
                              </View>


                          </View>
                          <Text style={styles.description}>Description of the donation goes here. Description of the donation goes here. Description of the donation goes here Description ...</Text>
                            <TouchableOpacity style={styles.clickToOpenBtn}>
                              <Text style={styles.clickToOpen}>Click to Open {'\n'}Donation</Text>
                            </TouchableOpacity>
                      </View>
                  </View>
                  <View style={styles.centerAllBtn}>
                      <TouchableOpacity onPress={()=> this.setState({modalRescueClose:true,mapCancelModal:false})}>
                      <View style={styles.wCircle}>
                        <Image source={Images.redOpenLock} style={styles.orangeLock} />
                      </View>
                      <Text style={styles.rescue}>Cancel{'\n'} Rescue</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <View style={styles.wCircle}>
                        <Image source={Images.callIcon} style={styles.callIcon} />
                      </View>
                      <Text style={styles.rescue}>Contact</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <View style={styles.wCircle}>
                        <Image source={Images.greenLock} style={styles.orangeLock} />
                      </View>
                      <Text style={styles.rescue}>Complete</Text>
                      </TouchableOpacity>
                  </View>
                  </View>
                </View>

                </Modal>
      </View>
    )
  }
}
