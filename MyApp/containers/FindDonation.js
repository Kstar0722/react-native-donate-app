import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
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
import dateFormat from 'dateformat';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Modal from 'react-native-animated-modal'
export default class MainScreen extends Component {

    mapLocationTemp = [
        {
            type:'delivered',
            latitude: 37.798840, 
            longitude: -122.466357
        },
        {
            type:'regular',
            latitude: 37.773971, 
            longitude: -122.491624
        },
        {
            type:'regular',
            latitude: 37.769943,
            longitude: -122.396428
        },
        {
            type:'premium',
            latitude: 37.788850,
            longitude: -122.430798
        },
        {
            type:'premium',
            latitude: 37.748307,
            longitude: -122.487859
        },
        {
            type:'regular',
            latitude: 37.771501,
            longitude:  -122.448022
        },
        {
            type:'regular',
            latitude: 37.746959, 
            longitude: -122.446355
        },
        {
            type:'regular',
            latitude: 37.722477, 
            longitude: -122.484521
        },
        {
            type:'regular',
            latitude: 37.736864,
            longitude: -122.409874
        },
        {
            type:'premium',
            latitude: 37.702688,
            longitude: -122.442324
        }] 

  constructor () {
    super()
    currentDate = new Date()
    cDate = dateFormat(currentDate, 'dddd,mmm,dd,yyyy').split(",")
    this.state = {
        switchValue: false,
        currentWeek: cDate[0],
        currentDay: cDate[2],
        currentMonth: cDate[1],
        currentYear: cDate[3],
        isDateTimePickerVisible: false,
        isModalVisible: false,
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
  mapPinShow = () => {
    var mapMakers = []
      for(var i = 0; i < this.mapLocationTemp.length; i ++)
      {
        if(this.mapLocationTemp[i].type == "delivered"){
            var mapMaker = (<MapView.Marker style = {{width:80, height:80}}
                coordinate={{
                latitude: this.mapLocationTemp[i].latitude,
                longitude: this.mapLocationTemp[i].longitude}}
                image={Images.pin_blue} />)
        }else if(this.mapLocationTemp[i].type == "premium"){
            var mapMaker = (<TouchableOpacity onPress={() => { this.setState({isModalVisible:true})}}><MapView.Marker style={styles.markericon}
                coordinate={{
                latitude: this.mapLocationTemp[i].latitude,
                longitude: this.mapLocationTemp[i].longitude}}
                image={Images.pin_green} /></TouchableOpacity>)
        }else if(this.mapLocationTemp[i].type == "regular"){
            var mapMaker = (<MapView.Marker style={styles.markericon}
                coordinate={{
                latitude: this.mapLocationTemp[i].latitude,
                longitude: this.mapLocationTemp[i].longitude}}
                image={Images.pin_orange} />)
        }
        
        mapMakers.push(mapMaker)
      }
    
    return mapMakers
  }

  mapView = () => {
     if(this.state.switchValue){
       return(<MapView style={styles.MapView}
         initialRegion={{
           latitude: 37.738253,
           longitude: -122.445127,
           latitudeDelta: 0.15,
           longitudeDelta: 0.15,
         }}>
         {this.mapPinShow()}
        </MapView>

        );
     }else{
       return;
     }
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        
        cDate = dateFormat(date, 'dddd,mmm,dd,yyyy').split(",")
        this.setState({
            currentWeek: cDate[0],
            currentDay: cDate[2],
            currentMonth: cDate[1],
            currentYear: cDate[3],
        })
        this._hideDateTimePicker();
    };

  _showModal = () => this.setState({ isModalVisible: true })
    
  _hideModal = () => this.setState({ isModalVisible: false })
  render () {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainView}>
      <Image source={Images.rectangle} style={styles.fDheadr}>
          <View style={styles.cNavigation}>
              <TouchableOpacity onPress={() => {}}>
                  <Image source={Images.fDbar} style={styles.menuIconNav} />
              </TouchableOpacity>
              <Text style={styles.refedText}>Find a Donation</Text>
              <Text style={styles.refedSmallText}>Map View ?</Text>
              <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}
              onTintColor='#96A883'/>
          </View>
          <TouchableOpacity onPress={this._showDateTimePicker} style={styles.dateLayout}>
            <Text style={styles.dayStyle} >{this.state.currentDay}</Text>
            <View style={styles.weekAndYearLayout}>
                <Text style={styles.weekAndYearStyle}>{this.state.currentWeek}</Text>
                <Text style={styles.weekAndYearStyle}>{this.state.currentMonth} {this.state.currentYear}</Text>
            </View>  
            <Image source={Images.ic_chevron_right} />
              
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            datePickerModeAndroid='calendar'
            confirmTextIOS="Ok"
            titleIOS='Select Date'
            />
      </Image>
      <View style={{backgroundColor: 'white', flex: 1,backgroundColor:'#EAEAEA'}}>
        {this.mapView()}

            <View>
            <ScrollView>
            <View style={styles.mapViewDetail}>
                <MapView style={styles.listMapView}
                  initialRegion={{
                    latitude: 37.671096,
                    longitude: -122.4421171,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>
                <MapView.Marker style={styles.markericon}
                  coordinate={{
                      latitude: 37.671096,
                      longitude: -122.4421171}}
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
                    latitude: 37.671096,
                    longitude: -122.4421171,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>
                <MapView.Marker style={styles.markericon}
                  coordinate={{
                      latitude: 37.671096,
                      longitude: -122.4421171}}
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
                    latitude: 37.671096,
                    longitude: -122.4421171,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>
                <MapView.Marker style={styles.markericon}
                  coordinate={{
                      latitude: 37.671096,
                      longitude: -122.4421171}}
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
        <Modal isVisible={this.state.isModalVisible} style={{margin:0}}>
          <View style={{ flex: 1}}>
            <View style={{flex:1}}></View>
            <View style={styles.mapViewDetail}>
                    <TouchableOpacity onPress={() => { this.setState({isModalVisible:false})}} style={styles.closeModal}><Image source={Images.close_blue}></Image></TouchableOpacity>
                    <MapView style={styles.listModalMapView}
                    initialRegion={{
                        latitude: 37.671096,
                        longitude: -122.4421171,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>
                    <MapView.Marker style={styles.markericon}
                    coordinate={{
                        latitude: 37.671096,
                        longitude: -122.4421171}}
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
          </View>
        </Modal>
      </View>
    )
  }
}
