import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'
import styles from '../Styles/MainScreenStyles'
import { Images } from '../DevTheme'
export default class MainScreen extends Component {
  constructor () {
    super()
    this.state = { isOpenSideMenu1:false}
  }


  render () {
    return (
      <View style={styles.sidemenuBody}>
        <TouchableOpacity style={styles.sideMneuClose} onPress={() => {this.props.close()}}>
          <Image source={Images.sideMenuClose}  style={styles.sideMneuClose} />
        </TouchableOpacity>
        <View style={styles.sidemenuInner}>
        <Text style={styles.profileName}>Profile Name</Text>
        <Text style={styles.profileEmail}>email@invisionapp.com</Text>
        <View style={styles.sideMenuRowCover1}>
        <TouchableOpacity style={styles.sideMenuRowCover}>
          <Image source={Images.donationIcon} style={styles.donationIcon} />
           <Text style={styles.sideMenuTextInput}>My Donations</Text>
           <Text style={styles.dCount}>5</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.sideMenuRowCover1}>
          <TouchableOpacity style={styles.sideMenuRowCover}>
            <Image source={Images.impactIcon} style={styles.impactIcon} />
             <Text style={styles.sideMenuTextInput}>My Impact</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sideMenuRowCover1}>
          <TouchableOpacity style={styles.sideMenuRowCover}>
            <Image source={Images.profileIcon} style={styles.profileIcon} />
             <Text style={styles.sideMenuTextInput}>Profile</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.sideMenuRowCover1}>
          <TouchableOpacity style={styles.sideMenuRowCover}>
            <Image source={Images.notificationIcon} style={styles.notificationIcon} />
             <Text style={styles.sideMenuTextInput}>Notifications</Text>
             <Text style={styles.dCount}>16</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity style={styles.lastSideMenuRowCover}>
            <Image source={Images.logoutIcon} style={styles.logoutIcon} />
             <Text style={styles.sideMenuTextInput}>Logout</Text>
          </TouchableOpacity>
      </View>
      </View>
    )
  }
}
