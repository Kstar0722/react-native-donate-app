import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text
} from 'react-native'
import styles from '../Styles/DonationStyles'
import { Images } from '../DevTheme'
import TapBar from './Tapbar'
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
          <Text style={styles.refedText}>Refeed America</Text>
          <Image source={Images.whiteNot} style={styles.whiteNot} />
      </View>
        <View style={styles.menu}>
          {/*  <TouchableOpacity onPress={() => { this.modal(!this.state.reservedModal, !!this.state.reservedModal, !!this.state.reservedModal) }}>
              <Image source={Images.reserved} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.modal(!!this.state.openModal, !this.state.openModal, !!this.state.openModal) }}>
              <Image source={Images.open} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.modal(!!this.state.closedModal, !!this.state.closedModal, !this.state.closedModal) }}>
              <Image source={Images.closed} />
            </TouchableOpacity>*/}

          <TouchableOpacity onPress={() => { this.modal(!this.state.reservedModal, !!this.state.reservedModal, !!this.state.reservedModal) }}>
            <Image source={Images.reserved} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.modal(!!this.state.openModal, !this.state.openModal, !!this.state.openModal) }}>
            <Image source={Images.open} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.modal(!!this.state.closedModal, !!this.state.closedModal, !this.state.closedModal) }}>
            <Image source={Images.closed} />
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.dtBody}>
            <View style={styles.dtBtSpace}>
                <View style={styles.dtDonation}>
                    <View style={styles.dtView}>
                        <View style={styles.dtViewInner}>
                            <View style={styles.dtDAte}>
                                <Text style={styles.dtDate}>11</Text>
                                <Text style={styles.dtMonth}>JAN</Text>
                            </View>
                            <View style={styles.dtDescription}>
                                <Text style={styles.dtText}>Donation Description ...</Text>
                                <Text style={styles.dtFDate}>Tuesday, 11:30 AM</Text>
                            </View>
                        </View>
                        <View style={styles.dtDesEditBtn}>
                          <Text style={styles.dtEditText}>EDIT</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.dtBtSpace}>
                <View style={styles.dtDonation}>
                    <View style={styles.dtView}>
                        <View style={styles.dtViewInner}>
                            <View style={styles.dtDAte}>
                                <Text style={styles.dtDate}>07</Text>
                                <Text style={styles.dtMonth}>JAN</Text>
                            </View>
                            <View style={styles.dtDescription}>
                                <Text style={styles.dtText}>Donation Description ...</Text>
                                <Text style={styles.dtFDate}>Tuesday, 11:30 AM</Text>
                            </View>
                        </View>
                        <View style={styles.dtDesEditBtn}>
                          <Text style={styles.dtEditText}>EDIT</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.dtBtSpace}>
                <View style={styles.dtDonation}>
                    <View style={styles.dtView}>
                        <View style={styles.dtViewInner}>
                            <View style={styles.dtDAte}>
                                <Text style={styles.dtDate}>04</Text>
                                <Text style={styles.dtMonth}>JAN</Text>
                            </View>
                            <View style={styles.dtDescription}>
                                <Text style={styles.dtText}>Donation Description ...</Text>
                                <Text style={styles.dtFDate}>Tuesday, 11:30 AM</Text>
                            </View>
                        </View>
                        <View style={styles.dtDesEditBtn}>
                          <Text style={styles.dtEditText}>EDIT</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.dtBtSpace}>
                <View style={styles.dtDonation}>
                    <View style={styles.dtView}>
                        <View style={styles.dtViewInner}>
                            <View style={styles.dtDAte}>
                                <Text style={styles.dtDate}>03</Text>
                                <Text style={styles.dtMonth}>JAN</Text>
                            </View>
                            <View style={styles.dtDescription}>
                                <Text style={styles.dtText}>Donation Description ...</Text>
                                <Text style={styles.dtFDate}>Tuesday, 11:30 AM</Text>
                            </View>
                        </View>
                        <View style={styles.dtDesEditBtn}>
                          <Text style={styles.dtEditText}>EDIT</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>

          <TouchableOpacity onPress={() => navigate('LaunchScreen')} style={styles.addButton}>
            <Image source={Images.addButton} />
          </TouchableOpacity>
          <TapBar />
        </View>
      </Image>
      </View>
    )
  }
}
