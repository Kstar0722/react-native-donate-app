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

import LocationModal from '../../Components/Modals/LocationModal'

import { Images } from '../../Themes'
import styles from './Styles/SignupGeneralStyles'

const { width, height } =Dimensions.get('window')

export default class SignupBusinessAccountInfo extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            address: '',
            phone: '',
            ein: '',
            website: '',

            locationModalVisible: false,
        }
    }

    static navigationOptions = {
        header : null,
    }

    onBackClick = () => {
        this.props.navigation.goBack()
    }

    onNextClick = () => {
        const { user, accountType } = this.props.navigation.state.params
        const businessInfo = {
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone,
            ein: this.state.ein
        }

        this.props.navigation.navigate('SignupBusinessWelcome', {
            user: user,
            accountType: accountType,
            businessInfo: businessInfo,
        })
    }

    closeLocationModal = () => {
        this.setState({locationModalVisible: false}, function() {
            this.validate()
        })

    }

    handleLocationSelected = (locationData) => {
        /**
         * addressData : {primaryText: '...', secondaryText: '...', fullText: '...', ...  }
         * locationData : {name: '...', address: '...', latitude: '...', longitude: '...', }
         */
        //console.log(addressData)
        //console.log(locationData)
        this.setState({
            address: locationData.address
        }, function() {
            this.validate()
        })        
    }

    validate = () => {
        if (!this.state.name) return false
        if (!this.state.address) return false
        if (!this.state.phone) return false
        if (!this.state.ein) return false
        if (!this.state.website) return false

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
                    <TouchableOpacity onPress={() => this.onNextClick()}>
                        <Text style={styles.navRightText} >Complete</Text>
                    </TouchableOpacity>
                    }                    
                </View>

                <KeyboardAwareScrollView scrollEnabled={true} resetScrollToCoords={{x: 0, y: 0}} showsVerticalScrollIndicator={false} >
                    <Text style={styles.titleText} >Account Information</Text>

                    <View style={[styles.textInputFrame, {marginTop: 50}]} >
                        <TextInput keyboardType='default' 
                            placeholder='Business Name'
                            placeholderTextColor='rgba(255, 255, 255, 0.5)'
                            onChangeText={(text) => this.setState({name: text}, function() {
                                this.validate()
                            })} 
                            value={this.state.name}
                            underlineColorAndroid='white'
                            selectionColor='white'
                            autoFocus={false}
                            returnKeyType='next'
                            onSubmitEditing={() => this.refs.phoneInput.focus()}
                            style={[styles.textInput, {paddingLeft: 0, paddingVertical: 8}]} />
                    </View>
                    
                    <TouchableOpacity  onPress={() => this.setState({locationModalVisible: true})} activeOpacity={0.9} >
                    <View style={[styles.textInputFrame, {marginTop: 15}]} >
                        <Text numberOfLines={1} style={[styles.textInput, {paddingLeft: 0, paddingVertical: 8, backgroundColor: 'transparent'}, this.state.address ? {color: 'white'} : {color: 'rgba(255, 255, 255, 0.5)'}]} >
                            {this.state.address ? this.state.address : 'Business Address'}
                        </Text>
                    </View>
                    </TouchableOpacity>
                    

                    <View style={[styles.textInputFrame, {marginTop: 15}]} >
                        <TextInput keyboardType='phone-pad'                             
                            ref='phoneInput'
                            placeholder='Business Phone'
                            placeholderTextColor='rgba(255, 255, 255, 0.5)'
                            onChangeText={(text) => this.setState({phone: text}, function() {
                                this.validate()
                            })} 
                            value={this.state.phone}
                            underlineColorAndroid='white'
                            selectionColor={'white'}
                            returnKeyType='next'
                            onSubmitEditing={() => this.refs.einInput.focus()}
                            style={[styles.textInput, {paddingLeft: 0, paddingVertical: 8}]} />
                    </View>

                    <View style={[styles.textInputFrame, {marginTop: 15}]} >
                        <TextInput keyboardType='numbers-and-punctuation'
                            ref='einInput'
                            placeholder='EIN'
                            placeholderTextColor='rgba(255, 255, 255, 0.5)'
                            onChangeText={(text) => this.setState({ein: text}, function() {
                                this.validate()
                            })} 
                            value={this.state.ein}
                            underlineColorAndroid='white'
                            selectionColor={'white'}
                            returnKeyType='next'
                            onSubmitEditing={() => this.refs.websiteInput.focus()}
                            style={[styles.textInput, {paddingLeft: 0, paddingVertical: 8}]} />
                    </View>

                    <View style={[styles.textInputFrame, {marginTop: 15}]} >
                        <TextInput keyboardType='url'                             
                            ref='websiteInput'
                            placeholder='Website'
                            placeholderTextColor='rgba(255, 255, 255, 0.5)'
                            onChangeText={(text) => this.setState({website: text}, function() {
                                this.validate()
                            })} 
                            value={this.state.website}
                            underlineColorAndroid='white'
                            selectionColor={'white'}
                            returnKeyType='done'
                            onSubmitEditing={() => {}}
                            style={[styles.textInput, {paddingLeft: 0, paddingVertical: 8}]} />
                    </View>
                   
                </KeyboardAwareScrollView>

                {this.validate() &&
                <TouchableOpacity activeOpacity={0.8} 
                    style={styles.nextButtonFrame}
                    onPress={() => this.onNextClick()} >
                    <Text style={{fontSize: 17}} >Complete</Text>
                </TouchableOpacity>
                }

                <LocationModal
                    locationModalVisible={this.state.locationModalVisible}
                    close={this.closeLocationModal}
                    itemSelected={this.handleLocationSelected}
                />
                
            </ImageBackground>
        )
    }

}