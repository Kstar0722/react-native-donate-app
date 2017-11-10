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

import PictureModal from '../../../App/Components/Modals/pictureModal'
import DescriptionModal from '../../../App/Components/Modals/descriptionModal'
import SignupBusinessServiceModal from './SignupBusinessService'
import SignupBusinessHourModal from './SignupBusinessHour'

import { Images } from '../../../App/Themes'
import styles from './Styles/SignupBusinessOperationInfoStyles'

const { width, height } =Dimensions.get('window')
_dText='';

export default class SignupBusinessOperationInfo extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            avatar: null,
            picturemodalVisible: false,

            descriptionModalVisible: false,

            serviceItems: [false, false, false, false],
            signupBusinessServiceModalVisible: false,

            signupBusinessHourModalVisible: false,

            weekOpenTimes: [null, null, null, null, null, null, null],
            weekCloseTimes: [null, null, null, null, null, null, null],
        }

        this.originServiceItems = [false, false, false, false]
    }

    static navigationOptions = {
        header : null,
    }

    onBackClick = () => {
        this.props.navigation.goBack()
    }

    onItemClick = (index) => {
        switch (index) {
            case 0: //Add Profile Picture...
                this.setState({picturemodalVisible: true})                
                break;
            case 1: //Business Description...
                this.setState({descriptionModalVisible: true})
                break;
            case 2: //Available Services...
                /*let items = this.state.serviceItems
                this.props.navigation.navigate('SignupBusinessService', {
                    avatar: this.state.avatar,
                    serviceItems: items,
                    onBack: (serviceItems) => this.onBackFromService(serviceItems)
                })*/
                this.setState({signupBusinessServiceModalVisible: true})
                break;
            case 3: //Operation Hours...
                this.setState({signupBusinessHourModalVisible: true})
                break;        
            default:
                break;
        }
    }

    chooseAvatar = (avatar) => {
        this.setState({avatar : avatar}, function() {
            this.closePictureModal()
            //AsyncStorage.setItem(AVATAR_URI_KEY, avatar.uri)
        })
    }

    closePictureModal = () => {
        this.setState({ picturemodalVisible: false })
    }

    closeDescriptionModal = () => {
        this.setState({ descriptionModalVisible: false })
    }

    closeSignupBusinessServiceModal = () => {
        this.setState({signupBusinessServiceModalVisible: false})
    }

    chooseServiceItems = (items) => {
        this.setState({serviceItems: items}, function() {
            this.closeSignupBusinessServiceModal()
        })
    }

    checkServiceItems = () => {
        var selectedOne = false
        let items = this.state.serviceItems
        for (var i = 0; i < items.length; i++) {
            if (items[i]) {
                selectedOne = true
                break
            }            
        }
        return selectedOne
    }

    closeSignupBusinessHourModal = () => {
        this.setState({signupBusinessHourModalVisible: false})
    }

    chooseOperationHours = (openHours, closeHours) => {
        this.setState({
            weekOpenTimes: openHours,
            weekCloseTimes: closeHours,
        }, this.closeSignupBusinessHourModal())
    }

    checkOperationHours = () => {
        let selectedOne = false
        let openTimes = this.state.weekOpenTimes
        let closeTimes = this.state.weekCloseTimes
        console.log('Open Times', openTimes)
        console.log('Close Times', closeTimes)
        for (let i = 0; i < openTimes.length; i++) {
            if (openTimes[i]  && closeTimes[i] && (openTimes[i] != closeTimes[i])) {
                selectedOne = true
                break
            }            
        }
        return selectedOne
    }

    /*onBackFromService = (serviceItems) => {
        this.setState({serviceItems: serviceItems})        
    }*/

    validateData = () => {

    }

    render() {
        return (
        <View style={styles.container} >
            <ImageBackground style={styles.containerTop} resizeMode='cover' 
                source={this.state.avatar ? this.state.avatar : Images.operation_info_bg} >
                {this.state.avatar && <View style={styles.overlay} />}
                <View style={styles.nav} >
                    <TouchableOpacity onPress={() => this.onBackClick()}>
                        <Image source={Images.back_img} style={styles.navLeftImg} resizeMode={'contain'} />
                    </TouchableOpacity>
                </View>

                <Text style={[styles.titleText, {marginTop: 16}]} >Complete Account</Text>
                <Text style={[styles.titleText, {fontSize: 28}]}>Operation Information</Text>
            </ImageBackground>            
            
            <View style={styles.content} >      
                <TouchableOpacity activeOpacity={0.5} style={styles.item} onPress={() => this.onItemClick(0)} >
                    <Text style={styles.itemText} >{this.state.avatar ? 'Click to edit Profile Picture' : 'Add Profile Picture'}</Text>                
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={styles.item} onPress={() => this.onItemClick(1)} >
                    <Text style={styles.itemText} >{_dText ? 'Click to edit Description' : 'Business/Organization Description'}</Text>                
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={styles.item} onPress={() => this.onItemClick(2)} >
                    <Text style={styles.itemText} >{this.checkServiceItems() ? 'Click to edit Available Services' : 'Available Services'}</Text>                
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={styles.item} onPress={() => this.onItemClick(3)}  >
                    <Text style={styles.itemText} >{this.checkOperationHours() ? 'Click to edit Operation Hours' : 'Operation Hours'}</Text>                
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => {this.setState({picturemodalVisible: true})}} style={styles.cameraImgFrame} >
                <Image source={Images.camera_full} resizeMode={'contain'} style={styles.cameraImg} />
            </TouchableOpacity>    

            <PictureModal 
                picturemodalVisible={this.state.picturemodalVisible} 
                close={this.closePictureModal} 
                chooseAvatar = {this.chooseAvatar} 
            />  

            <DescriptionModal 
                descriptionModalVisible={this.state.descriptionModalVisible} 
                close={this.closeDescriptionModal}
            />      

            <SignupBusinessServiceModal 
                signupBusinessServiceModalVisible={this.state.signupBusinessServiceModalVisible}
                //items={this.state.serviceItems}
                avatar={this.state.avatar}
                chooseServiceItems={this.chooseServiceItems}
                close={this.closeSignupBusinessServiceModal}
            />

            <SignupBusinessHourModal
                signupBusinessHourModalVisible={this.state.signupBusinessHourModalVisible}
                chooseOperationHours={this.chooseOperationHours}
                close={this.closeSignupBusinessHourModal}
            />

        </View>
        )
    }

}