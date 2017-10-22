import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text
} from 'react-native'
import styles from '../Styles/ReservedDonationDetailStyles'
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
                  <Text style={styles.ddDescription}>{'This is where the description will be the donation description will be continues and continues and continues and continues and continues and continues and continues and continues and continues and continues and continues and continues and continues and continues'}</Text>
              )
      }else{
         return ;
      }
  }

  arrowOnContent = () => {
      if(this.state.isDetailShow){
          return (<Image source={Images.upArrow} style={styles.cLockR} />);
      }else{
          return (<Image source={Images.downArrow} style={styles.cLockR} />)
      }
  }
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainView}>
              <View style={styles.cNavigation}>
                  <TouchableOpacity>
                      <Image source={Images.menuList} style={styles.menuIconNav} />
                  </TouchableOpacity>
                  <Text style={styles.refedText}>Jan 101, 2017- 11:30 PM</Text>
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
                    <TouchableOpacity style={styles.ddTitleRCover}  onPress={() => {this.setState({isDetailShow:!this.state.isDetailShow});}}>
                          <Text style={styles.ddTitleR}>SHOW DESCRIPTION </Text>
                          {this.arrowOnContent()}

                    </TouchableOpacity>
                    {this.descriptionDetail()}
                  </View>
              </View>
              <Text  style={styles.ddReservedByLabel}>RESERVED BY:</Text>
              <View style={styles.ddHope}>
                <Text style={styles.ddHopeText}>Churs of Hope</Text>
                <Text style={styles.ddHopeProfile}>CLICK TO VIEW PROFILE</Text>
              </View>
              <View style={styles.ddBtnBox}>
                  <View style={{flex:1, alignItems:'center'}}>
                      <View style={styles.ddBtnCircle}>
                          <Image source={Images.cLock} style={styles.cLock} />
                      </View>
                      <Text style={styles.ddBtnText}>Open</Text>
                  </View>
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
      </View>
    )
  }
}
