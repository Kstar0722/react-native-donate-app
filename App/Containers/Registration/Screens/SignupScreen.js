import React, { Component } from 'react'
import {
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Switch,
    Text
} from 'react-native'
import styles from '../Styles/SignupScreenStyles'
import AlertModal from '../../../Components/AlertModal'
import { Images } from '../../../Themes'
import Meteor from 'react-native-meteor'
import { RNS3 } from 'react-native-aws3'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import PictureModal from '../../../Components/Modals/pictureModal'
import AppConfig from '../../../Config'
import { guid, validateEmail } from '../../../Transforms'

export default class SignupScreen extends Component {
    constructor() {
        super()
        this.state = {
            msgBox: false,
            msgText: "",
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
        this.signupIndividual = this.signupIndividual.bind(this);
        this.signupBusiness = this.signupBusiness.bind(this);
        this.showDialog = this.showDialog.bind(this);
        this.validate = this.validate.bind(this);
        this.showModal = this.showModal.bind(this)
    }
    static navigationOptions = {
        title: 'Sign Up',
        headerStyle: {
            backgroundColor: '#dd8d6c'
        },
        headerTintColor: 'white'
    }

    showDialog = (show, title) => {
        if (show) this.setState({ msgBox: show, msgText: title })
        else this.setState({ msgBox: show })
    }

    showModal() {
        this.setState({ picturemodalVisible: true })
    }

    chooseAvatar = (avatar) => {
        this.setState({ picturemodalVisible: false }, () => this.setState({ avatar: avatar }))
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
                <ImageBackground source={Images.signbg} style={styles.container} >
                    <TouchableOpacity onPress={this.showModal} >
                        <Image source={this.state.avatar ? this.state.avatar : Images.cameraIcon} style={styles.camera} />
                        <Image source={Images.plusIcon} style={styles.plus} />
                    </TouchableOpacity>

                    <Text style={styles.subLabel}>ADD PHOTO</Text>

                    <TextInput placeholder='NAME'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)' style={styles.text}
                        underlineColorAndroid='white'
                        onChangeText={(text) => this.setState({ name: text })}
                        value={this.state.name} />
                    <Image source={Images.underline} />
                    <TextInput placeholder='EMAIL'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)' style={styles.text}
                        onChangeText={(text) => this.setState({ email: text })}
                        keyboardType='email-address'
                        value={this.state.email} />
                    <Image source={Images.underline} />
                    <TextInput placeholder='PHONE'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)' style={styles.text}
                        onChangeText={(text) => this.setState({ phone: text })}
                        keyboardType='phone-pad'
                        value={this.state.phone} />
                    <Image source={Images.underline} />
                    <TextInput placeholder='PASSWORD'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)' style={styles.text}
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
                            state.params.bType === 0 ? this.switch_business() : this.switch_signup()
                        }
                    </View>

                    <KeyboardSpacer />
                </ImageBackground>
                <AlertModal show={this.state.msgBox} modal={() => this.showDialog(false)} title={this.state.msgText} />
                <PictureModal picturemodalVisible={this.state.picturemodalVisible} close={this.closePictureModal} chooseAvatar={this.chooseAvatar} />


            </View>
        );
    }
    switch_signup() {
        return (
            <View style={styles.but} >
                <TouchableOpacity onPress={this.signupIndividual}>
                    <Text style={styles.but_continue}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        );
    }
    switch_business() {
        return (
            <TouchableOpacity style={styles.but} onPress={this.signupBusiness}>
                <Text style={styles.but_continue}>CONTINUE</Text>
            </TouchableOpacity>
        );
    }
    validate() {
        if (validateEmail(this.state.email) && this.state.name && this.state.password && this.state.avatar && this.state.phone) {
            return true
        }
        return false
    }

    signupBusiness() {
        if (!this.validate()) {
            this.showDialog(true, "You have to provide correct information")
            return
        }
        const user = {
            email: this.state.email,
            password: this.state.password,
            profile: {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                bRescueFood: this.state.bRescueFood,
                bCreateFoodDonation: this.state.bCreateFoodDonation,
                bType: this.props.navigation.state.params.bType === 0 ? false : true
            }
        }
        const avatar = this.state.avatar
        this.props.navigation.navigate("BusinessScreen", { user: user, avatar: avatar })

    }
    signupIndividual() {
        if (!this.validate()) {
            this.showDialog(true, "You have to provide correct information")
            return
        }
        let self = this
        const file = {
            uri: this.state.avatar,
            name: guid() + ".png",
            type: "image/png"
        }
        const options = {
            keyPrefix: AppConfig.KEY_PREFIX,
            bucket: AppConfig.BUCKET,
            accessKey: AppConfig.ACCESS_KEY,
            secretKey: AppConfig.SECRET_KEY,
            region: AppConfig.REGION
        }


        RNS3.put(file, options).then(response => {
            const user = {
                email: this.state.email,
                password: this.state.password,
                profile: {
                    image: response.body.postResponse.location,
                    name: this.state.name,
                    email: this.state.email,
                    phone: this.state.phone,
                    bRescueFood: this.state.bRescueFood,
                    bCreateFoodDonation: this.state.bCreateFoodDonation,
                    bType: this.props.navigation.state.params.bType === 0 ? false : true
                }
            }
            if (this.props.navigation.state.params.bType === 1) {
                Meteor.call('onCreateUser', user, (err, res) => {
                    if (err) {
                        console.log(err.message)
                        this.showDialog(true, err.message)
                    } else {
                        this.props.navigation.navigate('FindDonation')
                    }
                })
            } else {
                Meteor.call('acceptTeamMember', user, (err, res) => {
                    if (err) {
                        console.log(err.message)
                        this.showDialog(true, err.message)
                    } else {
                        this.props.navigation.navigate('FindDonation')
                    }
                })
            }

        })
    }
}
