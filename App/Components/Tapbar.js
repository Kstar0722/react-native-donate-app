import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from './Styles/TapBarStyles'
import { Images } from '../Themes'

export default class TapBar extends Component {
  render () {
    return (
      <Image source={Images.Tapbg} style={{position: 'absolute', bottom: 0}}>
        <View style={styles.bg}>
          <TouchableOpacity>
            <Image source={Images.home} style={styles.bg} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.msg} style={styles.bg} />
          </TouchableOpacity>
        </View>
      </Image>
    )
  }
}
