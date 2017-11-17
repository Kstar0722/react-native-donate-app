import React from 'react'
import { 
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    Dimensions, 
    ImageBackground, 
    TouchableWithoutFeedback,
    AsyncStorage,
    TextInput,
    Switch,
    Keyboard,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Meteor from 'react-native-meteor'

import AlertModal from '../../Components/AlertModal'
import { guid, validateEmail } from '../../Transforms'
import { Images } from '../../Themes'
import styles from './Styles/SignupGeneralStyles'

const { width, height } =Dimensions.get('window')

export default class SignupGeneral extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',

            msgBox: false,
            msgText: "",
        }
    }

    static navigationOptions = {
        header : null,
    }

    showDialog = (show, title) => {
        if (show) this.setState({ msgBox: show, msgText: title })
        else this.setState({ msgBox: show })
    }

    onBackClick = () => {
        Keyboard.dismiss()
        this.props.navigation.goBack()
    }

    onCompleteClick = () => {
        Keyboard.dismiss()

        if (!validateEmail(this.state.email)) {
            this.showDialog(true, "Email is not valid.")
            return
        }

        const user = {
            email: this.state.email.toLowerCase(),
            password: this.state.password,
            profile: {
                name: this.state.name,
                email: this.state.email.toLowerCase(),
                phone: this.state.phone,
                bType: this.props.navigation.state.params.bType === 0 ? false : true,
            }
        }
        if (this.props.navigation.state.params.bType === 2) { //Individual Signup...
            Meteor.call('onCreateUser', user, (err, res) => {
                if (err) {
                    console.log(err.message)
                    this.showDialog(true, err.message)
                } else {
                    this.props.navigation.navigate('FindDonation')
                }
            })
        } else {
            Meteor.call('acceptTeamMember', user, (err, res) => { //TeamMember Signup...
                if (err) {
                    console.log(err.message)
                    this.showDialog(true, err.message)
                } else {
                    this.props.navigation.navigate('FindDonation')
                }
            })
        }

    }

    validate = () => {
        if (!this.state.name) return false
        if (!this.state.email) return false
        if (!this.state.phone) return false
        if (!this.state.password) return false

        return true
    }

    render() {
        return (
            <ImageBackground source={Images.signbg_new} style={styles.container} resizeMode='cover' >

                <View style={styles.nav} >
                    <TouchableOpacity onPress={() => this.onBackClick()}>
                        <Image source={Images.back_img} style={styles.navLeftImg} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <Text style={styles.navCenterText}>{' '}</Text>
                    {this.validate() &&
                    <TouchableOpacity onPress={() => this.onCompleteClick()}>
                        <Text style={styles.navRightText} >SIGN UP</Text>
                    </TouchableOpacity>
                    }                    
                </View>

                <KeyboardAwareScrollView scrollEnabled={false} resetScrollToCoords={{x: 0, y: 0}} showsVerticalScrollIndicator={false} >
                    <Text style={styles.titleText} >Sign Up</Text>

                    <View style={[styles.textInputFrame, {marginTop: 50}]} >
                        <Text style={styles.textInputTitle} >NAME</Text>
                        <TextInput keyboardType='default' 
                            onChangeText={(text) => this.setState({name: text}, function() {
                                this.validate()
                            })} 
                            value={this.state.name}
                            underlineColorAndroid='white'
                            selectionColor='white'
                            autoFocus={false}
                            returnKeyType='next'
                            onSubmitEditing={() => this.refs.emailInput.focus()}
                            style={[styles.textInput, {paddingLeft: 65}]} />
                    </View>

                    <View style={styles.textInputFrame} >
                        <Text style={styles.textInputTitle} >EMAIL</Text>
                        <TextInput keyboardType='email-address'
                            ref='emailInput'
                            onChangeText={(text) => this.setState({email: text}, function() {
                                this.validate()
                            })} 
                            value={this.state.email}
                            underlineColorAndroid='white'
                            selectionColor={'white'}
                            returnKeyType='next'
                            onSubmitEditing={() => this.refs.phoneInput.focus()}
                            style={[styles.textInput, {paddingLeft: 65}]} />
                    </View>

                    <View style={styles.textInputFrame} >
                        <Text style={styles.textInputTitle} >PHONE</Text>
                        <TextInput keyboardType='phone-pad' 
                            ref='phoneInput'
                            onChangeText={(text) => this.setState({phone: text}, function() {
                                this.validate()
                            })} 
                            value={this.state.phone}
                            underlineColorAndroid='white'
                            selectionColor={'white'}
                            returnKeyType='next'
                            onSubmitEditing={() => this.refs.passwordInput.focus()}
                            style={[styles.textInput, {paddingLeft: 55}]} />
                    </View>

                    <View style={styles.textInputFrame} >
                        <Text style={styles.textInputTitle} >PASSWORD</Text>
                        <TextInput secureTextEntry
                            ref='passwordInput'
                            onChangeText={(text) => this.setState({password: text}, function() {
                                this.validate()
                            })} 
                            value={this.state.password}
                            underlineColorAndroid='white'
                            selectionColor={'white'}
                            returnKeyType='done'
                            onSubmitEditing={() => {}}
                            style={styles.textInput} />
                    </View>

                </KeyboardAwareScrollView>

                {this.validate() &&
                <TouchableOpacity activeOpacity={0.8} 
                    style={styles.nextButtonFrame}
                    onPress={() => this.onCompleteClick()} >
                    <Text style={{fontSize: 17}} >SIGN UP</Text>
                </TouchableOpacity>
                }

                <AlertModal 
                    show={this.state.msgBox} 
                    modal={() => this.showDialog(false)} 
                    title={this.state.msgText} />
                
            </ImageBackground>
        )
    }

}