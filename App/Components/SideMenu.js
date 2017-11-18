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
import { NavigationActions } from 'react-navigation'

export default class MainScreen extends Component {
  constructor() {
    super()
    this.state = { isOpenSideMenu1: false }
  }

  handleLogout = () => {
    Meteor.logout()
    this.props.navigator('LaunchScreen')    
  }


  render() {
    console.log(this.props)
    const { navigator } = this.props;
    
    return (
      <View style={styles.sidemenuBody}>
        <TouchableOpacity style={styles.sideMneuClose} onPress={() => { this.props.close() }}>
          <Image source={Images.sideMenuClose} style={styles.sideMneuClose} />
        </TouchableOpacity>
        <View style={styles.sidemenuInner}>
          <Text style={styles.profileName}>{Meteor.user()? Meteor.user().profile.name : null}</Text>
          <View style={styles.sideMenuRowCover1}>
            <TouchableOpacity style={styles.sideMenuRowCover} onPress={() => {navigator('MyProfile'), this.props.close()}}>
              <Image source={Images.profileIcon} style={styles.donationIcon}/>
              <Text style={styles.sideMenuTextInput}>My Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideMenuRowCover1}>
            <TouchableOpacity style={styles.sideMenuRowCover} onPress={() => {navigator('TeamScreen'), this.props.close()}}>
              <Image source={Images.myTeam} style={styles.donationIcon} />
              <Text style={styles.sideMenuTextInput}>My Team</Text>

            </TouchableOpacity>
          </View>
          <View style={styles.sideMenuRowCover1}>
            <TouchableOpacity style={styles.sideMenuRowCover}>
              <Image source={Images.impactIcon} style={styles.donationIcon} />
              <Text style={styles.sideMenuTextInput}>Reporting</Text>

            </TouchableOpacity>
          </View>
          <View style={styles.sideMenuRowCover1}>
            <TouchableOpacity style={styles.sideMenuRowCover}>
              <Image source={Images.notificationIcon} style={styles.donationIcon} />
              <Text style={styles.sideMenuTextInput}>Notifications</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.lastSideMenuRowCover} onPress={this.handleLogout} >
            <Image source={Images.logoutIcon} style={styles.donationIcon} />
            <Text style={styles.sideMenuTextInput}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
