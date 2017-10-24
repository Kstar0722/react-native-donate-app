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
import styles1 from '../Styles/HomeScreenStyles'
import { Images } from '../DevTheme'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import PictureModal from './Modals/pictureModal'

export default class SignupScreen extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            switchValue: false,
            picturemodalVisible: false,
            avatar : null
        }
        this.toggleSwitch = this.toggleSwitch.bind(this)
        this.chooseAvatar = this.chooseAvatar.bind(this)
    }
    static navigationOptions = {
        title: 'Sign Up',
        headerStyle: {
            backgroundColor: '#dd8d6c'
        },
        headerTintColor: 'white'
    }

    chooseAvatar = (avatar) => {
        this.setState({avatar : avatar, picturemodalVisible : false})
    }

    closePictureModal = () => {
        this.setState({
            picturemodalVisible: false
        })
    }

    toggleSwitch(val) {
        this.setState({
            switchValue: val
        })
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Image source={Images.signbg} style={styles.container} >
                    <TouchableOpacity  onPress = {() => this.setState({picturemodalVisible : true})} >
                        <Image source={this.state.avatar ? this.state.avatar : Images.cameraIcon} style={styles.camera} >
                        </Image>
                        <Image source={Images.plusIcon} style={styles.plus}/>
                    </TouchableOpacity>

                    <Text style={styles.subLabel}>ADD PHOTO</Text>

                    <TextInput placeholder='NAME'
                        placeholderTextColor='rgba(255,255,255,0.5)' style={styles.text}
                        underlineColorAndroid='white'
                        onChangeText={(text) => this.setState({ name: text })}
                        value={this.state.name} />
                    <Image source={Images.underline} />
                    <TextInput placeholder='EMAIL'
                        placeholderTextColor='rgba(255,255,255,0.5)' style={styles.text}
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email} />
                    <Image source={Images.underline} />
                    <TextInput placeholder='PHONE'
                        placeholderTextColor='rgba(255,255,255,0.5)' style={styles.text}
                        onChangeText={(text) => this.setState({ phone: text })}
                        value={this.state.phone} />
                    <Image source={Images.underline} />
                    <TextInput placeholder='PASSWORD'
                        placeholderTextColor='rgba(255,255,255,0.5)' style={styles.text}
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password} secureTextEntry={true} />
                    <Image source={Images.underline} />
                    <View style={styles.option}>
                        <Text style={styles1.slide_text1}>Are you a business?</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                            <Text style={styles1.text}>{this.state.switchValue ? 'YES' : 'NO'}</Text>
                            <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}
                                onTintColor='rgba(255,255,255,0.5)'
                            />
                        </View>
                    </View>
                    {
                        this.state.switchValue ? this.switch_business() : this.switch_signup()
                    }
                    <KeyboardSpacer />
                </Image>

                <PictureModal picturemodalVisible={this.state.picturemodalVisible} close={this.closePictureModal} chooseAvatar = {this.chooseAvatar} />


            </View>
        );
    }
    switch_signup() {
        return (
            <View style={styles.but} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
                    <Image source={Images.SINGUP} />
                </TouchableOpacity>
            </View>
        );
    }
    switch_business() {
        return (
            <TouchableOpacity style={styles.but} onPress={() => this.props.navigation.navigate('BusinessScreen')}>
                <Image source={Images.CONTINUE} />
            </TouchableOpacity>
        );
    }
}
