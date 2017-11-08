import React, { Component } from 'react';
//import ImageSlider from 'react-native-image-slider';
import {
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
} from 'react-native';
import styles from '../Styles/LoginScreenStyles'

import Meteor from 'react-native-meteor'
import AlertModal from '../../../Components/AlertModal'
import { Images } from '../../../Themes'
import { guid, validateEmail } from '../../../Transforms'

const { width, height } =Dimensions.get('window')

export default class LaunchScreen extends Component {
    constructor() {
        super()
        this.state = {
            msgBox: false,
            msgText: "",
            position: 0,
            interval: null,
            email: "faridkamil.it@gmail.com",
            password: "kingstar601"
        }
        this.showDialog = this.showDialog.bind(this);
        this.login = this.login.bind(this);
        this.validate = this.validate.bind(this);
    }
    static navigationOptions = {
        header: <Text style={{ display: 'none' }}></Text>,
        headerStyle: {
            backgroundColor: '#dd8d6c'
        }
    }

    validate() {
        if (validateEmail(this.state.email) && this.state.password) {
            return true
        }
        return false
    }

    login() {
        if (!this.validate()) {
            this.showDialog(true, "You have to provide correct information")
            return
        }

        Meteor.loginWithPassword(this.state.email, this.state.password, (err) => {
            if (err) {
                this.showDialog(true, err.message)
            } else {
                this.props.navigation.navigate("FindDonation")
            }
        
        })
    }

    showDialog = (show, title) => {
        if (show) this.setState({ msgBox: show, msgText: title })
        else this.setState({ msgBox: show })
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({ position: this.state.position === 2 ? 0 : this.state.position + 1 });
            }, 2000)
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style = {{flex: 1}}>
                <ImageBackground source={Images.signbg_new} style={{width: width, height: height - 75, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={Images.logoBig} style={styles.logoBig} resizeMode={'contain'} />
                <View style={{ top: '15%' }}>
                    <TextInput placeholder='USERNAME OR EMAIL'
                        placeholderTextColor='rgba(255,255,255,0.5)' style={styles.text}
                        underlineColorAndroid='white'
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email} />
                    <TextInput placeholder='PASSWORD'
                        placeholderTextColor='rgba(255,255,255,0.5)' style={styles.text}
                        onChangeText={(text) => this.setState({ password: text })} secureTextEntry
                        value={this.state.password} />
                </View>
                <Text style={[styles.info, {bottom: 40}]}>WE BELIEVE IN A FULL AMERICA</Text>                
                </ImageBackground>
                <TouchableOpacity style={[styles.login, {width: width, position: 'absolute', bottom: 0, height: 75}]} onPress={this.login}>
                    <View style={styles.button}>
                        <Image source={Images.LOGIN} style = {styles.button_login_txt}  />
                    </View>
                </TouchableOpacity>
                <AlertModal show={this.state.msgBox} modal={() => this.showDialog(false)} title={this.state.msgText} />
            </View>

        );
    }
}
