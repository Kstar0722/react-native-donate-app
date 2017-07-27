import React, { Component } from 'react';
import {  
  View,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Button} from 'react-native-elements';
import styles from '../Styles/MainScreenStyles';
import { Images } from '../DevTheme'


export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'MainScreen',
    headerStyle: {
      backgroundColor: '#dd8d6c'     
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={Images.overlay} style={styles.bg}>
          <Button
            buttonStyle={styles.button}            
            title='Open create screen' 
            onPress={()=>navigate('LaunchScreen')} />
        </Image>
      </View>
    );
  }  
}