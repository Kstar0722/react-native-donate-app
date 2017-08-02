import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text
} from 'react-native'
import styles from '../Styles/MainScreenStyles'
import { Images } from '../DevTheme'
import TapBar from './Tapbar'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'
import SideMenu from 'react-native-side-menu'
import SideBar from './SideMenu'


export default class MainScreen extends Component {
  constructor () {
    super()
    this.state = {
      tooltip: 0,
      reservedModal: false,
      openModal: false,
      closedModal: false,
      isOpenSideMenu:false,
    }
  }

  static navigationOptions = {
    header:null,
  }
  sideMenuToggle = (flag) => {
    this.setState({isOpenSideMenu:flag});
  }
  tooltip = () => {
    this.setState({ tooltip: 1 })
  }
  tooltipShow () {
    return (

        <TouchableOpacity style={styles.Tooltip} onPress={this.tooltip}>
          <Image source={Images.Tooltip}  style={{width: 270,height: 142}}/>
        </TouchableOpacity>

    )
  }
  modal = (reserved, open, closed) => {
      this.setState({reservedModal:reserved, openModal:open, closedModal:closed});
  }
  render () {
    const { navigate } = this.props.navigation;
    const menu = <SideBar navigator={navigate} close={()=>this.sideMenuToggle(false)}/>;

    return (
      <View style={styles.mainView}>

      <SideMenu menu={menu} isOpen={this.state.isOpenSideMenu}>
      <Image source={Images.overlay} style={styles.bg}>
      <View style={styles.cNavigation}>

      <TouchableOpacity onPress={() => {this.sideMenuToggle(true)}}>
          <Image source={Images.menuList} style={styles.menuIconNav} />
          </TouchableOpacity>
          <Text style={styles.refedText}>Refeed America</Text>
          <Image source={Images.whiteNot} style={styles.whiteNot} />
      </View>
        <View style={styles.menu}>

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
          {this.state.tooltip === 0 ? this.tooltipShow() : null}
          <TouchableOpacity onPress={() => navigate('LaunchScreen')} style={styles.addButton}>
            <Image source={Images.addButton} />
          </TouchableOpacity>
          <TapBar />
        </View>
      </Image>
      <Modal transparent={true}
          visible={this.state.reservedModal} onRequestClose={() => {this.modal(false, false,false) }}>
          <View style={styles.mainViewClone}>
            <View style={styles.modalCover}>
            <View style={styles.modalBody}>
              <Image style={styles.modalBody} source={Images.modalBg} />
              <View style={styles.textView}>
                <Image style={styles.lock} source={Images.closeLock} />
                <Text style={styles.bigText}>You do not have any reserved donations.</Text>
                <Text style={styles.smallText}>Please a create donation.</Text>
                <TouchableOpacity style={styles.gotItBtn} onPress={() => { this.modal(false, false,false) }}>
                    <Text style={styles.gotItBtnTxt}>Got It!</Text>
                </TouchableOpacity>

              </View>
            </View>
            </View>
          </View>
      </Modal>
      <Modal transparent={true}
          visible={this.state.openModal} onRequestClose={() => {this.modal(false, false,false)}}>
          <View style={styles.mainViewClone}>
            <View style={styles.modalCover}>
            <View style={styles.modalBody}>
              <Image style={styles.modalBody} source={Images.modalBg} />
              <View style={styles.textView}>
                <Image style={styles.lock} source={Images.openLock} />
                <Text style={styles.bigText}>You do not have any open donations.</Text>
                <Text style={styles.smallText}>Please a create donation.</Text>
                <TouchableOpacity style={styles.gotItBtn} onPress={() => { this.modal(false, false,false) }}>
                    <Text style={styles.gotItBtnTxt}>Got It!</Text>
                </TouchableOpacity>
              </View>
            </View>
            </View>
            </View>
      </Modal>
      <Modal transparent={true}
          visible={this.state.closedModal} onRequestClose={() => {this.modal(false, false,false)}}>
          <View style={styles.mainViewClone}>
            <View style={styles.modalCover}>
            <View style={styles.modalBody}>
              <Image style={styles.modalBody} source={Images.modalBg} />
              <View style={styles.textView}>
                <Image style={styles.lock} source={Images.closeLock} />
                <Text style={styles.bigText}>You do not have any closed donations.</Text>
                <Text style={styles.smallText}>Please a create donation.</Text>
                <TouchableOpacity style={styles.gotItBtn} onPress={() => { this.modal(false, false,false) }}>
                    <Text style={styles.gotItBtnTxt}>Got It!</Text>
                </TouchableOpacity>
              </View>
            </View>
            </View>
          </View>
      </Modal>
      </SideMenu>
      </View>
    )
  }
}
