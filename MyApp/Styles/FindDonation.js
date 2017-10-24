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
        switchValue: false,
        currentDay: new Date().getDay(),
        currentMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
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
      <Image source={Images.fDonationheader} style={styles.fDheadr}>
          <View style={styles.cNavigation}>
              <TouchableOpacity onPress={() => {}}>
                  <Image source={Images.fDbar} style={styles.menuIconNav} />
              </TouchableOpacity>
              <Text style={styles.refedText}>Find a Donation</Text>
              <Text style={styles.refedSmallText}>Map View ?</Text>
              <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}
              onTintColor='#96A883'/>
          </View>
          <View style={styles.dateLayout}>
            <Text style={styles.dayStyle} >{this.state.currentDay}</Text>
            <View style={styles.weekAndYearLayout}>
                <Text style={styles.weekAndYearStyle}>Wednesday</Text>
                <Text style={styles.weekAndYearStyle}>{this.state.currentMonth} {this.state.currentYear}</Text>
            </View>  
            <Image source={Images.ic_chevron_right} />
              
          </View>
      </Image>
      <View style={{backgroundColor: 'white', flex: 1,backgroundColor:'#EAEAEA'}}>
        {this.mapView()}

            <View>
            <ScrollView>
            <View style={styles.mapViewDetail}>
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
                    <Image source={Images.wCarRedBack} style={styles.vehicleIcon} />
                    <View style={styles.listMapViewTopRow}>
                        <Image source={Images.donaterName} style={styles.donaterName} />
                        <View style={{flex:1}}>
                            <Text style={styles.name}>Donator Name</Text>
                            <Text style={styles.nameText}>Perishable, Produce</Text>
                        </View>
                        <Text style={styles.distance}>2 mi</Text>
                    </View>
                    <Text style={styles.description}>Description of the donation goes here. Clicking on this will show more informaition</Text>
                </View>
            </View>
            <View style={styles.mapViewDetail}>
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
                    <View style={styles.listMapViewTopRow}>
                        <Image source={Images.donaterName} style={styles.donaterName} />
                        <View style={{flex:1}}>
                            <Text style={styles.name}>Donator Name</Text>
                            <Text style={styles.nameText}>Perishable, Produce</Text>
                        </View>
                        <Text style={styles.distance}>3 mi</Text>
                    </View>
                    <Text style={styles.description}>Description of the donation goes here. Clicking on this will show more informaition</Text>
                </View>
            </View>
            <View style={styles.mapViewDetail}>
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
                    <Image source={Images.wCarRedBack} style={styles.vehicleIcon} />
                    <View style={styles.listMapViewTopRow}>
                        <Image source={Images.donaterName} style={styles.donaterName} />
                        <View style={{flex:1}}>
                            <Text style={styles.name}>Donator Name</Text>
                            <Text style={styles.nameText}>Perishable, Produce</Text>
                        </View>
                        <Text style={styles.distance}>2 mi</Text>
                    </View>
                    <Text style={styles.description}>Description of the donation goes here. Clicking on this will show more informaition</Text>
                </View>
            </View>
            </ScrollView>
            </View>
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
      </View>
    )
  }
}
