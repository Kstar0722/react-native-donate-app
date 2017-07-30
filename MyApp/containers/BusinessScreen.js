import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
 
} from 'react-native'
import styles from '../Styles/SignupScreenStyles'
import { Images } from '../DevTheme'
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default class BusinessScreen extends Component {
    constructor () {
        super ()
        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            switchValue: false
        }
        this.toggleSwitch = this.toggleSwitch.bind(this)
    }
    static navigationOptions = {
    title: 'Business Information',
    headerStyle: {
      backgroundColor: '#dd8d6c'
    },
    headerTintColor: 'white'
  }
  toggleSwitch (val) {
    this.setState({
      switchValue: val
    })
  }
    render () {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Image source={Images.signbg}  style={styles.container} >
                   
                        <TextInput placeholder='BUSINESS NAME'
                                placeholderTextColor='#f0b7ae' style={styles.text} 
                                underlineColorAndroid='white'
                                onChangeText={(text) => this.setState({name: text})}
                                value={this.state.name} />
                        <Image source={Images.underline} />
                         <TextInput placeholder='ADDRESS'
                                placeholderTextColor='#f0b7ae' style={styles.text} 
                                onChangeText={(text) => this.setState({email: text})}
                                value={this.state.email} />
                        <Image source={Images.underline} />
                        <TextInput placeholder='PHONE'
                                placeholderTextColor='#f0b7ae' style={styles.text} 
                                onChangeText={(text) => this.setState({phone: text})}
                                value={this.state.phone} /> 
                        <Image source={Images.underline} />                                              
                        <TextInput placeholder='EIN'
                            placeholderTextColor='#f0b7ae' style={styles.text} 
                            onChangeText={(text) => this.setState({password: text})}
                            value={this.state.password}    /> 
                        <Image source={Images.underline} style={{marginBottom: 130}}/>                        
                    <TouchableOpacity style={styles.but} onPress={() => navigate('MainScreen')}>
                            <Image source={Images.SINGUP} />
                    </TouchableOpacity>
                    <KeyboardSpacer />
           </Image>
            
                
            
           </View>
        );
    }
    
   
}