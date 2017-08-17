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

        <Modal transparent={true}
            visible={this.state.mapModal} onRequestClose={() => {this.modal(false)}}>
            <View style={styles.mainViewClone2}>
              <View style={styles.modalCover}>
              <View style={[styles.mapViewDetail,{marginTop:50,}]}>
              <TouchableOpacity style={styles.close} onPress={() => {this.modal(false)}}>
                  <Image source={Images.close} style={styles.close} />
              </TouchableOpacity>
                  <MapView style={styles.listMapView}
                    initialRegion={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}>
                  <MapView.Marker style={styles.markericon}
                    coordinate={{
                        latitude: 37.78825,
                        longitude:-122.4324}}
                        image={require('../Images/marker.png')} />
                  </MapView>
                  <View style={styles.listMapViewText}>
                      <Image source={Images.wVanRedBack} style={styles.vehicleIcon} />
                      <Text style={styles.textSmAdd}>777 E 75 St, Los Angeles CA, 97777</Text>
                      <View style={styles.listMapViewTopRow}>
                          <Image source={Images.donaterName} style={styles.donaterName} />
                          <View style={{flex:1}}>
                              <Text style={styles.name}>Donator Name</Text>
                              <Text style={styles.nameText}>Perishable, Non-Perishable</Text>
                          </View>
                          <Text style={styles.distance}>3 mi away</Text>
                      </View>
                      <Text style={styles.description}>Description of the donation goes here. Clicking on this will show more informaition. Description of the donation goes here. Clicking on this will show more informaition. Description of the donation goes here. Clicking on this will show more informaition. </Text>
                      <View style={styles.timeSet}>
                        <View style={styles.timeSetPart}>
                            <Text style={styles.timeSetPartTitle}>Time Created:</Text>
                            <Text style={styles.timeSetPartTitleValue}>9:30 AM</Text>
                        </View>
                        <View style={styles.timeSetPart}>
                            <Text style={styles.timeSetPartTitle}>Expires</Text>
                            <Text style={styles.timeSetPartTitleValue}>11:30 AM</Text>
                        </View>
                      </View>
                  </View>
              </View>
              <View style={styles.wCircle}>
                <Image source={Images.orangeLock} style={styles.orangeLock} />
              </View>
              <Text style={styles.rescue}>Rescue</Text>
              </View>
            </View>

            </Modal>
      </View>
    )
  }
}
