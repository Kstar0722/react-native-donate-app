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
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Images } from '../../../App/Themes'
import styles from './Styles/SignupBusinessStyles'

const { width, height } =Dimensions.get('window')

export default class SignupBusiness extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            isNonProfit: false,
        }
    }

    static navigationOptions = {
        header : null,
    }

    onBackClick = () => {
        this.props.navigation.goBack()
    }

    onNextClick = () => {
        this.props.navigation.navigate('SignupBusinessAccountInfo')
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
            <ImageBackground source={Images.signbg_new} style={styles.container} >

                <View style={styles.nav} >
                    <TouchableOpacity onPress={() => this.onBackClick()}>
                        <Image source={Images.back_img} style={styles.navLeftImg} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <Text style={styles.navCenterText}>{' '}</Text>
                    {this.validate() &&
                    <TouchableOpacity onPress={() => this.onNextClick()}>
                        <Text style={styles.navRightText} >Next</Text>
                    </TouchableOpacity>
                    }                    
                </View>

                <KeyboardAwareScrollView scrollEnabled={false} resetScrollToCoords={{x: 0, y: 0}} >
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

                    <View style={{
                        width: width-50,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 40,
                        alignItems: 'center'
                    }} >
                        <Text style={styles.switchDescription} >I am a non-profit</Text>
                        <View style={styles.switchFrame} >
                            <Text style={styles.switchTitle}>{this.state.isNonProfit ? "YES" : "NO"}</Text>
                            <Switch onValueChange={(val) => this.setState({isNonProfit: val})} 
                                value={this.state.isNonProfit}
                                onTintColor='white' 
                                thumbTintColor="#FFB660" />
                        </View>
                    </View>
                </KeyboardAwareScrollView>

                {this.validate() &&
                <TouchableOpacity activeOpacity={0.8} 
                    style={styles.nextButtonFrame}
                    onPress={() => this.onNextClick()} >
                    <Text style={{fontSize: 17}} >Next</Text>
                </TouchableOpacity>
                }
                
            </ImageBackground>
        )
    }

}