import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'
import styles from './Styles/SideMenuStyles'
import { Images } from '../Themes'
import Meteor from 'react-native-meteor'
export default class MainScreen extends Component {
  constructor() {
    super()
    this.state = { isOpenSideMenu1: false }
    console.log("-------------")
    console.log(Meteor.user().profile)
    console.log(this.props)
  }


  render() {
    return (
      <View style={styles.sidemenuBody}>
        <TouchableOpacity style={styles.sideMneuClose} onPress={() => { this.props.close() }}>
          <Image source={Images.sideMenuClose} style={styles.sideMneuClose} />
        </TouchableOpacity>
        <View style={styles.sidemenuInner}>
          <Text style={styles.profileName}>{Meteor.user()? Meteor.user().profile.name : null}</Text>
          <View style={styles.sideMenuRowCover1}>
            <TouchableOpacity style={styles.sideMenuRowCover}>
              <Image source={Images.donationIcon} style={styles.donationIcon} />
              <Text style={styles.sideMenuTextInput}>My Donations</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideMenuRowCover1}>
            <TouchableOpacity style={styles.sideMenuRowCover}>
              <Image source={Images.impactIcon} style={styles.donationIcon} />
              <Text style={styles.sideMenuTextInput}>My Impact</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideMenuRowCover1}>
            <TouchableOpacity style={styles.sideMenuRowCover} onPress={() => navigate('CreateListing')}>
              <Image source={Images.profileIcon} style={styles.donationIcon}/>
              <Text style={styles.sideMenuTextInput}>Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideMenuRowCover1}>
            <TouchableOpacity style={styles.sideMenuRowCover}>
              <Image source={Images.notificationIcon} style={styles.donationIcon} />
              <Text style={styles.sideMenuTextInput}>Notifications</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.lastSideMenuRowCover}>
            <Image source={Images.logoutIcon} style={styles.donationIcon} />
            <Text style={styles.sideMenuTextInput}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
