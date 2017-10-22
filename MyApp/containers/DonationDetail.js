import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text
} from 'react-native'
import styles from '../Styles/DonationDetailStyles'
import { Images } from '../DevTheme'

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
    }
  }

  static navigationOptions = {
    header:null,
  }

  modal = (reserved, open, closed) => {
      this.setState({reservedModal:reserved, openModal:open, closedModal:closed});
  }
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainView}>
          <Image source={Images.overlay} style={styles.bg}>
              <View style={styles.cNavigation}>
                  <TouchableOpacity onPress={() => {}}>
                      <Image source={Images.menuList} style={styles.menuIconNav} />
                  </TouchableOpacity>
                  <Text style={styles.refedText}>Jan 11, 2017- 11:30 PM</Text>
                  <Image source={Images.whiteNot} style={styles.whiteNot} />
              </View>
              <View style={{backgroundColor: 'white'}}>
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
                    <Text style={styles.ddTitle}>Description:</Text>
                    <Text style={styles.ddDescription}>This is where the description will.be. the donation description will be continues and continues
                     and continues and continues and continues and continues and continues and continues and continues
                      and continues and continues and continues and continues and continues</Text>
                      <TouchableOpacity style={styles.ddEditBtn}>
                          <Text style={styles.ddEdit}>EDIT</Text>
                      </TouchableOpacity>
                  </View>
              </View>
              <View style={styles.ddBtnBox}>
                  <View style={{flex:1, alignItems:'center'}}>
                      <View style={styles.ddBtnCircle}>
                          <Image source={Images.duplicate} style={styles.ddDuplicate} />
                      </View>
                      <Text style={styles.ddBtnText}>Duplicate</Text>
                  </View>
                  <View style={{flex:1, alignItems:'center'}}>
                      <View style={styles.ddBtnCircle}>
                          <Image source={Images.greenLock} style={styles.ddClose} />
                      </View>
                      <Text style={styles.ddBtnText}>Close</Text>
                  </View>
              </View>
          </Image>
      </View>
    )
  }
}
