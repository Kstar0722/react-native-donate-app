import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from '../Styles/MainScreenStyles'
import { Images } from '../DevTheme'
import TapBar from './Tapbar'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'

export default class MainScreen extends Component {
  constructor () {
    super()
    this.state = {
      tooltip: 0
    }
  }
  static navigationOptions = {
    title: 'Refeed America',
    headerLeft:
  <TouchableOpacity style={styles.icon}>
    <Icon name='bars' size={19} color='white' />
  </TouchableOpacity>,
    headerRight:
  <TouchableOpacity style={styles.icon1}>
    <Icon1 name='ios-notifications' size={30} color='white' />
  </TouchableOpacity>,

    headerStyle: {
      backgroundColor: '#dd8d6c'
    },
    headerTintColor: 'white'

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
  render () {
    const { navigate } = this.props.navigation
    return (

      <Image source={Images.overlay} style={styles.bg}>

        <View style={styles.menu}>

          <TouchableOpacity >
            <Image source={Images.reserved} />
          </TouchableOpacity>

          <TouchableOpacity >
            <Image source={Images.open} />
          </TouchableOpacity>

          <TouchableOpacity >
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

    )
  }
}
