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
                  <Text style={styles.refedText}>Jan 11, 2017 - 11:30 AM</Text>
                  <Image source={Images.cancelIcon} style={styles.menuIconNav} />
              </View>
              <ScrollView style={{backgroundColor:'#F4F3F4'}}>
              <View style={{backgroundColor: 'white'}}>
              <Image source={Images.foodBoxes} style={styles.foodBoxes} />
              <View style={styles.addressBox}>
              <Text style={styles.address}>777 E 75 St, Los Angeles CA, 97777</Text>
              <Text style={styles.address}>323.771.7711</Text>
              </View>

                  <View style={styles.ddRow}>

                      <View style={styles.ddRowLeftp}>

                          <Text style={styles.ddDeliveryLabel}>Food Type(s):</Text>
                          <Text style={styles.ddDeliveryTypeLabel}>Perishable and produce</Text>
                      </View>
                      <Text style={styles.ddLbs}> 60 lbs</Text>
                  </View>
                  <View style={styles.ddRow}>
                      <View style={styles.ddRowLeftp}>
                          <Text style={styles.ddDeliveryLabel}>Delivery Type:</Text>
                          <Text style={styles.ddDeliveryTypeLabel}>Pick-Up by Rescuer</Text>
                      </View>
                      <Image source={Images.grayVan} style={styles.grayVan} />
                  </View>
                  <View style={styles.ddDescriptionBox}>
                    {this.arrowOnContent()}
                    {this.descriptionDetail()}
                  </View>
              </View>
              <Text  style={styles.ddReservedByLabel}>RESERVED BY:</Text>
              <View style={styles.ddHope}>
                <Text style={styles.ddHopeText}>Churs of Hope</Text>
                <Text style={styles.ddHopeProfile}>CLICK TO VIEW PROFILE</Text>
              </View>
              <View style={styles.ddBtnBox}>
                  <View style={styles.ddBtnBoxInnner}>
                      <View style={styles.ddBtnCircle}>
                          <Image source={Images.cLock} style={styles.cLock} />
                      </View>
                      <Text style={styles.ddBtnText}>Rescue</Text>
                  </View>
                  <View style={styles.ddBtnBoxInnner}>
                      <View style={styles.ddBtnCircle}>
                          <Image source={Images.flagIcon} style={styles.ddDuplicate} />
                      </View>
                      <Text style={styles.ddBtnText}>Report</Text>
                  </View>
                  <View style={styles.ddBtnBoxInnner}>
                      <View style={styles.ddBtnCircle}>
                          <Image source={Images.callIcon} style={styles.ddClose} />
                      </View>
                      <Text style={styles.ddBtnText}>Contact</Text>
                  </View>
              </View>
              </ScrollView>

      </View>
    )
  }
}
