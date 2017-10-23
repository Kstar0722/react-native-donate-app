import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import styles from '../Styles/DonationViewStyles'
import { Images } from '../DevTheme'
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'


export default class MainScreen extends Component {
  constructor () {
    super()
    this.state = {
      tooltip: 0,
      reservedModal: false,
      openModal: false,
      closedModal: false,
      reservedDonation:true,
      isDetailShow:false
    }
  }

  static navigationOptions = {
    header:null,
  }

  modal = (reserved, open, closed) => {
      this.setState({reservedModal:reserved, openModal:open, closedModal:closed});
  }
  descriptionDetail = () => {
      if(this.state.isDetailShow){
            return (
                  <Text style={styles.ddDescription}>{'This is where the description will. be.  The donation description continues, and continues, and continues,and continues,and continues,and  continues, and continues, and continues, and continues, and continues, and continues, and continues, and continues, stops'}</Text>
              )
      }else{
         return ;
      }
  }

  arrowOnContent = () => {
      if(this.state.isDetailShow){
          return (
            <TouchableOpacity style={styles.ddTitleRCover}  onPress={() => {this.setState({isDetailShow:!this.state.isDetailShow});}}>
                  <Text style={styles.ddTitleR}>HIDE DESCRIPTION </Text>
                  <Image source={Images.upArrow} style={styles.cLockR} />
            </TouchableOpacity>);
      }else{
          return (
            <TouchableOpacity style={styles.ddTitleRCover}  onPress={() => {this.setState({isDetailShow:!this.state.isDetailShow});}}>
                  <Text style={styles.ddTitleR}>SHOW DESCRIPTION </Text>
                  <Image source={Images.downArrow} style={styles.cLockR} />
            </TouchableOpacity>
            )
      }
  }
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainView}>
              <View style={styles.cNavigation}>
                  <TouchableOpacity>
                      <Image source={Images.backIcon} style={styles.menuIconNav} />
                  </TouchableOpacity>
                  <Text style={styles.refedText}>Food Donation</Text>                  
              </View>
              <ScrollView style={{backgroundColor:'#F4F3F4'}}>                          
                    <View style={{backgroundColor: 'white'}}>
                        <Image source={Images.gradient_bg} style={styles.gradient_bg}>
                            <Text style={styles.donatorname}>DONATOR NAME</Text>
                            <Image source={Images.stars} style={styles.stars}/>                
                            <View style={styles.pickupView}>
                                <Text style={styles.pickup}>PICKUP TIME:  <Text style={styles.time}>8:00 am - 10:00 am</Text></Text>                        
                            </View>
                            <View style={styles.pickupView}>
                                <Text style={styles.pickup}>ADDRESS:  <Text style={styles.time}>10111 Welove street, Los Angeles, CA 90002</Text></Text>                        
                            </View>
                            <View style={styles.shapeView}>
                                <View style={[styles.appleview,{marginRight: 40}]}>
                                    <Text style={styles.foodtype}>FOOD TYPE</Text>
                                    <Image source={Images.apple} style={styles.apple}/>
                                </View>
                                <View style={styles.appleview}>
                                    <Text style={styles.foodtype}>VEHICLE SIZE</Text>
                                    <Image source={Images.vehicle} style={styles.vehicle}/>
                                </View>
                            </View>
                        </Image>
                        <View style={styles.transparent}>
                            <Image source={Images.search_small} style={styles.search_small} />
                            <Text style={styles.click_to_zoom}>CLICK TO ZOOM</Text>
                        </View>
                        <Image source={Images.foodBoxes} style={styles.foodBoxes} />
                        <View style={styles.roundView}>
                            <View style={{alignItems: 'center', marginRight: 70}}>
                                <TouchableHighlight style={styles.keyAround}>
                                    <Image source={Images.key} style={styles.key} />
                                </TouchableHighlight>
                                <Text style={styles.rescue}>Rescue</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <TouchableHighlight style={styles.keyAround}>
                                    <Image source={Images.flagIcon} style={styles.flagIcon} />
                                </TouchableHighlight>
                                <Text style={styles.rescue}>Report</Text>
                            </View>
                        </View>
                        <Text style={styles.donation_description}>DONATION DESCRIPTION:</Text>   
                        <Text style={styles.donation_content}>Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. Donec quis ornare lacus. Etiam gravida mollis tortor quis porttitor. Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. </Text>           
                        <View style={styles.createdby_View}>
                            <Text style={styles.donation_description}>CREATED BY:</Text>
                            <Image source={Images.createdBy} style={styles.createdBy}/>
                            <Text style={styles.donator_name}>Donator Name</Text>
                            <Text style={[styles.donation_content,{textAlign: 'center',paddingBottom: 25}]}>Business Desctiption goes here tor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. Donec quis ornare lacus. Etiam gravida mollis tortor quis porttitor. Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. </Text>
                        </View>
                        <Text style={styles.donator_name}>LOCATION:</Text>
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
                                
                            </MapView.Marker>
                        </MapView>
                        <TouchableHighlight>
                            <Image source={Images.get_bg} style={styles.get_bg} >
                                <Text style={styles.get_direction}>Get Directions</Text>
                            </Image>
                        </TouchableHighlight>
                    </View>
              
              </ScrollView>

      </View>
    )
  }
}
