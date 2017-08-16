import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  Switch,
} from 'react-native'
import styles from '../Styles/FindDonationStyles'
import { Images } from '../DevTheme'
import TapBar from './Tapbar'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'


export default class MainScreen extends Component {
  constructor () {
    super()
    this.state = {
        closedModal: true,
        switchValue: false,
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

  modal = (closed) => {
      this.setState({closedModal:closed});
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
              onTintColor='#FFFFFF'/>
          </View>
      </Image>

        <View style={{backgroundColor: 'white', flex: 1}}>
        <Modal transparent={true}
            visible={this.state.closedModal} onRequestClose={() => {this.modal(false)}}>
            <View style={styles.mainViewClone}>
              <View style={styles.modalCover}>
              <View style={styles.modalBody}>
                  <Text style={styles.smallText}>No donations available at this time. </Text>
                  <TouchableOpacity style={styles.gotItBtn} onPress={() => { this.modal(false, false,false) }}>
                      <Text style={styles.gotItBtnTxt}>Ok</Text>
                  </TouchableOpacity>
              </View>
              </View>
            </View>
        </Modal>


          {/*<TouchableOpacity onPress={() => navigate('LaunchScreen')} style={styles.addButton}>
            <Image source={Images.addButton} />
          </TouchableOpacity>
          <TapBar />*/}
        </View>
        <View style={styles.fDfooter}>
        <View style={styles.fDfooterInner}>
            <View style={styles.fDBtnActive}>
            <TouchableOpacity onPress={() => { this.modal(false, false,false) }} style={styles.fBtn}>
                <Image source={Images.fDsearch} style={styles.fDsearch} />
                <Text style={styles.searchBtnText}>Search</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => { this.modal(false, false,false) }} style={styles.fDcenterBtn}>
                <Image source={Images.fDowal} style={styles.fDowal} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.modal(false, false,false) }} style={{flex:1, alignItems:'center'}}>
                <Image source={Images.fDmessage} style={styles.fDmessage} />
                <Text style={styles.searchBtnText}>Message</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    )
  }
}
