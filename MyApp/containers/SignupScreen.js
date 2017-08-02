import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Switch,
  Text
} from 'react-native'
import styles from '../Styles/SignupScreenStyles'
import styles1 from '../Styles/LaunchScreenStyles'
import { Images } from '../DevTheme'
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default class SignupScreen extends Component {
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
    title: 'Sign Up',
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

                        <TextInput placeholder='NAME'
                                placeholderTextColor='#f0b7ae' style={styles.text}
                                underlineColorAndroid='white'
                                onChangeText={(text) => this.setState({name: text})}
                                value={this.state.name} />
                        <Image source={Images.underline} />
                         <TextInput placeholder='EMAIL'
                                placeholderTextColor='#f0b7ae' style={styles.text}
                                onChangeText={(text) => this.setState({email: text})}
                                value={this.state.email} />
                        <Image source={Images.underline} />
                        <TextInput placeholder='PHONE'
                                placeholderTextColor='#f0b7ae' style={styles.text}
                                onChangeText={(text) => this.setState({phone: text})}
                                value={this.state.phone} />
                        <Image source={Images.underline} />
                        <TextInput placeholder='PASSWORD'
                            placeholderTextColor='#f0b7ae' style={styles.text}
                            onChangeText={(text) => this.setState({password: text})}
                            value={this.state.password}   secureTextEntry={true} />
                        <Image source={Images.underline} />
                        <View style={styles.option}>
                            <Text style={styles1.slide_text1}>Are you a business?</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center',marginLeft: 30}}>
                                <Text style={styles1.text}>{this.state.switchValue ? 'YES' : 'NO'}</Text>
                                <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}
                                onTintColor='#ffb660'
                                            />
                            </View>
                        </View>
                        {
                            this.state.switchValue ? this.switch_business() : this.switch_signup()
                         }
                        <KeyboardSpacer />
           </Image>



           </View>
        );
    }
    switch_signup () {
        return(
            <View style={styles.but} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
                        <Image source={Images.SINGUP} />
                </TouchableOpacity>
            </View>
        );
    }
    switch_business () {
        return(
            <TouchableOpacity style={styles.but} onPress={() => this.props.navigation.navigate('BusinessScreen')}>
                    <Image source={Images.CONTINUE} />
            </TouchableOpacity>
        );
    }
}
