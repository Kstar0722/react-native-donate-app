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
import { Images } from '../../../Themes'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import PictureModal from '../../../Components/Modals/pictureModal'

export default class SignupScreen extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            bRescueFood: false,
            bCreateFoodDonation: false,
            picturemodalVisible: false,
            avatar: null
        }
        this.toggleRescue = this.toggleRescue.bind(this)
        this.toggleCreate = this.toggleCreate.bind(this)
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
        this.setState({ avatar: avatar, picturemodalVisible: false })
    }

    closePictureModal = () => {
        this.setState({ picturemodalVisible: false })
    }

    toggleCreate(val) {
        this.setState({ bCreateFoodDonation: val })
    }

    toggleRescue(val) {
        this.setState({ bRescueFood: val })
    }

    render() {
        const { navigate, state } = this.props.navigation
        return (
            <View>
                <Image source={Images.signbg} style={styles.container} >
                    <TouchableOpacity onPress={() => this.setState({ picturemodalVisible: true })} >
                        <Image source={this.state.avatar ? this.state.avatar : Images.cameraIcon} style={styles.camera} >
                        </Image>
                        <Image source={Images.plusIcon} style={styles.plus} />
                    </TouchableOpacity>

                    <Text style={styles.subLabel}>ADD PHOTO</Text>

                    <TextInput placeholder='NAME'
                        placeholderTextColor='#f0b7ae' style={styles.text}
                        underlineColorAndroid='white'
                        onChangeText={(text) => this.setState({ name: text })}
                        value={this.state.name} />
                    <Image source={Images.underline} />
                    <TextInput placeholder='EMAIL'
                        placeholderTextColor='#f0b7ae' style={styles.text}
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email} />
                    <Image source={Images.underline} />
                    <TextInput placeholder='PHONE'
                        placeholderTextColor='#f0b7ae' style={styles.text}
                        onChangeText={(text) => this.setState({ phone: text })}
                        value={this.state.phone} />
                    <Image source={Images.underline} />
                    <TextInput placeholder='PASSWORD'
                        placeholderTextColor='#f0b7ae' style={styles.text}
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password} secureTextEntry={true} />
                    <Image source={Images.underline} />

                    <View style={styles.option}>
                        <View style={styles.option_view} >
                            <TouchableOpacity style={styles.tipIcon} >
                                <Image source={Images.tipIcon1} style={{ width: '100%', height: '100%' }} />
                            </TouchableOpacity>
                            <View style={styles.toggleContainer}>
                                <Text style={styles.toggleLabel}>Are you using this service for rescue food?</Text>
                                <Text style={styles.toggle}>{this.state.bRescueFood ? "YES" : "NO"}</Text>
                                <Switch onValueChange={this.toggleRescue} value={this.state.bRescueFood}
                                    onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
                            </View>
                        </View>
                        <View style={styles.option_view} >
                            <TouchableOpacity style={styles.tipIcon} >
                                <Image source={Images.tipIcon1} style={{ width: '100%', height: '100%' }} />
                            </TouchableOpacity>
                            <View style={styles.toggleContainer}>
                                <Text style={styles.toggleLabel}>Will you use this system to create food donations?</Text>
                                <Text style={styles.toggle}>{this.state.bCreateFoodDonation ? "YES" : "NO"}</Text>
                                <Switch onValueChange={this.toggleCreate} value={this.state.bCreateFoodDonation}
                                    onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
                            </View>
                        </View>
                        {
                            state.params.bType === false ? this.switch_business() : this.switch_signup()
                        }
                    </View>

                    <KeyboardSpacer />
                </Image>

                <PictureModal picturemodalVisible={this.state.picturemodalVisible} close={this.closePictureModal} chooseAvatar={this.chooseAvatar} />


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
