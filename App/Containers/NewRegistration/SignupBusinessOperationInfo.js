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
import Meteor from 'react-native-meteor'
import { RNS3 } from 'react-native-aws3'

import AlertModal from '../../Components/AlertModal'
import { guid, validateEmail } from '../../Transforms'
import AppConfig from '../../Config'

import PictureModal from '../../Components/Modals/pictureModal'
import DescriptionModal from '../../Components/Modals/descriptionModal'
import SignupBusinessServiceModal from './SignupBusinessService'
import SignupBusinessHourModal from './SignupBusinessHour'

import { Images } from '../../Themes'
import styles from './Styles/SignupBusinessOperationInfoStyles'

const { width, height } =Dimensions.get('window')

const SIGNUP_AVAILABLE_SERVICES =[
    'I can provide food-safe containers',
    'I can rescue donations within 3hrs',
    'I have refrigrated vehicles',
    'I have vehicles with coolers',
]

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

            msgBox: false,
            msgText: "",

            isCompleteEnabled: true,
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
        //this.props.navigation.goBack()
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
        let selectedOne = false
        let items = this.state.serviceItems
        for (var i = 0; i < items.length; i++) {
            if (items[i]) {
                selectedOne = true
                break
            }            
        }
        return selectedOne
    }

    getItems = () => {
        let items = []
        let serviceItems = this.state.serviceItems
        for (var i = 0; i < serviceItems.length; i++) {
            if (serviceItems[i]) {
                items.push(SIGNUP_AVAILABLE_SERVICES[i])
            }            
        }
        return items
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
        for (let i = 0; i < openTimes.length; i++) {
            if (openTimes[i]  && closeTimes[i] && (openTimes[i] != closeTimes[i])) {
                selectedOne = true
                break
            }            
        }
        return selectedOne
    }

    getOperationDays = () => {
        let operationDays = [false, false, false, false, false, false, false]

        let openTimes = this.state.weekOpenTimes
        let closeTimes = this.state.weekCloseTimes
        for (let i = 0; i < openTimes.length; i++) {
            if (openTimes[i]  && closeTimes[i] && (openTimes[i] != closeTimes[i])) {
                operationDays[i] = true
            }            
        }
        return operationDays
    }

    getStartTimes = () => {
        let startTimes = [-1, -1, -1, -1, -1, -1, -1]

        let operationDays = this.getOperationDays()

        for (let i = 0; i < operationDays.length; i++) {
            if (operationDays[i]) {
                let startTime = this.state.weekOpenTimes[i].getHours() * 60 + this.state.weekOpenTimes[i].getMinutes()
                startTimes[i] = startTime
            }            
        }
        return startTimes
    }

    getEndTimes = () => {
        let endTimes = [-1, -1, -1, -1, -1, -1, -1]
        
        let operationDays = this.getOperationDays()
        
        for (let i = 0; i < operationDays.length; i++) {
            if (operationDays[i]) {
                let endTime = this.state.weekCloseTimes[i].getHours() * 60 + this.state.weekCloseTimes[i].getMinutes()
                endTimes[i] = endTime
            }            
        }
        return endTimes
    }

    /*onBackFromService = (serviceItems) => {
        this.setState({serviceItems: serviceItems})        
    }*/

    validateData = () => {
        if (!this.state.avatar) return false
        if (!_dText) return false
        if (this.props.navigation.state.params.accountType == 1) {
            if (!this.checkServiceItems()) return false
        }
        if (!this.checkOperationHours()) return false

        return true
    }

    onCompleteClick = () => {
        this.setState({isCompleteEnabled: false})

        var { user, accountType, businessInfo } = this.props.navigation.state.params

        businessInfo.description = _dText
        businessInfo.operationDays = this.getOperationDays()
        businessInfo.startTimes = this.getStartTimes()
        businessInfo.endTimes = this.getEndTimes()
        if (accountType == 1) { //non-profit...
            businessInfo.bItems = true 
            businessInfo.items = this.getItems()           
        } else { //business...
            businessInfo.bItems = false
        }
        businessInfo.vehicles = { cars: 0, vans: 0, trucks: 0 }

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
        user.profile.businessInfo = businessInfo
        console.log(user)

        RNS3.put(file, options).then(response => {
            user.profile.image = response.body.postResponse.location
            Meteor.call('onCreateUser', user, (err, res) => {
                this.setState({isCompleteEnabled: true})
                if (err) {
                    this.showDialog(true, err.message)
                    console.log(err)
                } else {
                    if (accountType == 1) { //non-profit...
                        this.props.navigation.navigate('FindDonation')
                    } else { //business...
                        this.props.navigation.navigate('ViewListings')
                    }                    
                }
            })
        }).catch(error => {
            this.setState({isCompleteEnabled: true})
            this.showDialog(true, error.message)
        })
        
    }


    render() {
        return (
        <View style={styles.container} >
            <ImageBackground style={styles.containerTop} resizeMode='cover' 
                source={this.state.avatar ? this.state.avatar : Images.operation_info_bg} >
                {this.state.avatar && <View style={styles.overlay} />}
                <View style={styles.nav} >
                    <TouchableOpacity onPress={() => this.onBackClick()}>
                        <Image source={Images.back_img} style={[styles.navLeftImg, {opacity: 0}]} resizeMode={'contain'}  />
                    </TouchableOpacity>
                </View>

                <Text style={[styles.titleText, {marginTop: 16}]} >Complete Account</Text>
                <Text style={[styles.titleText, (width < 370) ? {fontSize: 25} : {fontSize: 28}]}>Operation Information</Text>
            </ImageBackground>            
            
            <View style={styles.content} >      
                <TouchableOpacity activeOpacity={0.5} style={styles.item} onPress={() => this.onItemClick(0)} >
                    <Text style={styles.itemText} >{this.state.avatar ? 'Click to edit Profile Picture' : 'Add Profile Picture'}</Text>                
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={styles.item} onPress={() => this.onItemClick(1)} >
                    <Text style={styles.itemText} >{_dText ? 'Click to edit Description' : 'Business/Organization Description'}</Text>                
                </TouchableOpacity>
                {(this.props.navigation.state.params.accountType == 1) && //non-profit...
                <TouchableOpacity activeOpacity={0.5} style={styles.item} onPress={() => this.onItemClick(2)} >
                    <Text style={styles.itemText} >{this.checkServiceItems() ? 'Click to edit Available Services' : 'Available Services'}</Text>                
                </TouchableOpacity>
                }                

                <TouchableOpacity activeOpacity={0.5} style={styles.item} onPress={() => this.onItemClick(3)}  >
                    <Text style={styles.itemText} >{this.checkOperationHours() ? 'Click to edit Operation Hours' : 'Operation Hours'}</Text>                
                </TouchableOpacity>
            </View>
            {this.validateData() &&
            <TouchableOpacity style={styles.buttonFrame} onPress={() => this.onCompleteClick()}
                disabled= {!this.state.isCompleteEnabled}>
                <Text style={styles.buttonText} >Complete</Text>
            </TouchableOpacity>
            }
            

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

            <AlertModal 
                show={this.state.msgBox} 
                modal={() => this.showDialog(false)} 
                title={this.state.msgText} />

        </View>
        )
    }

}