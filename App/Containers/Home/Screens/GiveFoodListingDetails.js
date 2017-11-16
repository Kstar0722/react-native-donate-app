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
    ScrollView,
} from 'react-native'
import dateFormat from 'dateformat';
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import ImageLoad from 'react-native-image-placeholder'

import DescriptionModal from '../../../Components/Modals/descriptionModal'
import PictureModal from '../../../Components/Modals/pictureModal'
import LocationModal from '../../../Components/Modals/LocationModal'


import { RNS3 } from 'react-native-aws3'
import Meteor, { createContainer } from 'react-native-meteor'
import AlertModal from '../../../Components/AlertModal'
import AppConfig from '../../../Config'
import { guid, validateEmail } from '../../../Transforms'



import { Images } from '../../../Themes'
import styles from '../../CompleteDonation/Styles/CompleteDonationDetailStyles'

const { width, height } =Dimensions.get('window')
_dText='';
var AVATAR_URI_KEY = '@avatar_uri';

export default class GiveFoodListingDetails extends React.Component {
    constructor(props) {
        super(props)
        _dText = ''
        currentDate = new Date()
        this.state = {
            isEnabledButton: false,
            descriptionModalVisible: false,
            picturemodalVisible: false,
            locationModalVisible: false,

            avatar: null,

            startDate: '',
            endDate: '',

            foodTypes_NonPerishable: false,
            foodTypes_Perishable: false,
            foodTypes_Prepared: false,

            repeat: 0,
            customRepeatData: null,

            //addressData: null,
            //locationData: null,
            location: null,

            msgBox: false,
            msgText: "",

            mode: 'create' // 'create', 'edit'
        }
    }

    validateData = () => {        
        if (this.state.avatar == null) {
            this.setState({isEnabledButton: false})
            return
        }
        if (!_dText) {
            this.setState({isEnabledButton: false})
            return
        }
        if (!this.state.startDate) {
            this.setState({isEnabledButton: false})
            return
        }
        if (!this.state.endDate) {
            this.setState({isEnabledButton: false})
            return
        }
        if (this.state.location == null) {
            this.setState({isEnabledButton: false})
            return
        }
        /*if (!this.state.foodTypes_NonPerishable && !this.state.foodTypes_Perishable && !this.state.foodTypes_Prepared) {
            this.setState({isEnabledButton: false})
            return
        }
        if (this.state.repeat == 10) {
            this.setState({isEnabledButton: false})
            return
        }*/
        //console.log('Validate Success...')
        this.setState({
            isEnabledButton: true
        })
    }

    componentDidMount() {
        /*AsyncStorage.getItem(AVATAR_URI_KEY).then((avatar_uri) => {
            this.setState({avatar: {uri: avatar_uri}})
        })*/ 
        const foodData = this.props.navigation.state.params.foodData
        const mode = this.props.navigation.state.params.mode
        this.setState({mode: mode})
        if (foodData) {
            this.setState({
                isEnabledButton: true,
                avatar: {uri: foodData.image}, 
                foodTypes_NonPerishable: foodData.foodTypes_NonPerishable,
                foodTypes_Perishable: foodData.foodTypes_Perishable,
                foodTypes_Prepared: foodData.foodTypes_Prepared,
                location: foodData.location,
                startDate: this.getDateString(foodData.startDate),
                endDate: this.getDateString(foodData.endDate),
            })
            _dText = foodData.description
        }
        
    }

    getDateString = (dateData) => {
        const {date, time} = dateData
        let dayString = moment(date, 'YYYY-MM-DD').format('MMMM D YYYY')

        timeNum = parseInt(time)
        hourStr = (parseInt(timeNum/60)).toString()
        if (hourStr.length < 2) {
            hourStr = '0' + hourStr
        }
        minuteStr = (timeNum%60).toString()
        if (minuteStr < 2) {
            minuteStr = '0' + minuteStr
        }
        timeStr = hourStr + minuteStr        
        timeString = moment(timeStr, 'HHmm').format("h:m A")
        //format="MMMM D YYYY - h:m A"
        result = dayString + ' - ' + timeString

        console.log('Result', result)
        return result
    }

    static navigationOptions = {
        header:null,
    }

    closeDescriptionModal = () => {
        this.setState({
          descriptionModalVisible: false
        })
        this.validateData()
    }

    closeLocationModal = () => {
        this.setState({locationModalVisible: false}, function() {
            this.validateData()
        })

    }

    refresh = (repeat, customRepeatData) => {
        /*var value = AsyncStorage.getItem(REPEAT_TYPE_KEY).then(
            (values) => {
              console.log('Then: ',values);
        });*/
        //console.log('Value: ', value)
        this.setState({
            repeat: repeat,
            customRepeatData: customRepeatData,
        }, function() {
            //console.log("Repeat:", this.state.repeat)
            this.validateData()
        })        
    }

    locationTextOrIcon = () => {
        if (this.state.location == null ) {
            return <Image source={Images.location_gray} resizeMode={'contain'} style={styles.icon} />
        } else {
            var locationName = this.state.location.name
            if(locationName.length>23){
                locationName=locationName.substring(0, 23)+'...';
            }
            return (
                <View style={{flexDirection: 'row'}} >
                    <Image source={Images.navigate} resizeMode={'contain'} style={{width: 25, height: 25, marginRight: 8}} />
                    <Text style={{fontSize: (width < 370) ? 13 : 15}} >{locationName}</Text>
                </View>            
            )
        }
    }

    repeatTextOrIcon = () => {
        if (this.state.repeat == 0) {
           return <Image source={Images.timeline} resizeMode={'contain'} style={styles.icon} />
        } else {
            switch (this.state.repeat) {
                case 0:
                    //return <Text style={{fontSize: 16}} >Never</Text>                    
                    break;
                case 1:
                    return <Text style={{fontSize: (width < 370) ? 13 : 15}} >Daily</Text>                    
                    break;
                case 2:
                    return <Text style={{fontSize: (width < 370) ? 13 : 15}} >Weekly</Text>                    
                    break; 
                case 3:
                    return <Text style={{fontSize: (width < 370) ? 13 : 15}} >Biweekly</Text>                    
                    break;
                case 4:
                    return <Text style={{fontSize: (width < 370) ? 13 : 15}} >Monthly</Text>                    
                    break;
                case 5:
                    return <Text style={{fontSize: (width < 370) ? 13 : 15}} >Yearly</Text>                    
                    break;      
                case 6:
                    return <Text style={{fontSize: (width < 370) ? 13 : 15}} >Custom</Text>                    
                    break;                      
                default:
                    <Image source={Images.timeline} resizeMode={'contain'} style={styles.icon} />
                    break;
            }
        }
    }

    onStartDateChange = (date) => {
        this.setState({startDate: date, endDate: ''}, function() {
            this.validateData()
        })
    }

    onEndDateChange = (date) => {
        this.setState({endDate: date}, function() {
            this.validateData()
        })
    }

    onFoodTypePress = (index) => {
        switch (index) {
            case 1:
                this.setState({foodTypes_NonPerishable: !this.state.foodTypes_NonPerishable}, function() {
                    this.validateData()
                })
                break;
            case 2:
                this.setState({foodTypes_Perishable: !this.state.foodTypes_Perishable}, function() {
                    this.validateData()
                })
                break;
            case 3:
                this.setState({foodTypes_Prepared: !this.state.foodTypes_Prepared}, function() {
                    this.validateData()
                })        
            default:
                break;
        }
    }

    handleLocationSelected = (locationData) => {
        /**
         * addressData : {primaryText: '...', secondaryText: '...', fullText: '...', ...  }
         * locationData : {name: '...', address: '...', latitude: '...', longitude: '...', }
         */
        //console.log(addressData)
        //console.log(locationData)
        this.setState({
            //addressData: addressData,
            //locationData: locationData,
            location: locationData
        }, function() {
            this.validateData()
        })        
    }

    chooseAvatar = (avatar) => {
        //console.log('avatar', avatar)
        //console.log('Avatar', avatar.uri)
        this.setState({avatar : avatar}, function() {
            this.closePictureModal()
            AsyncStorage.setItem(AVATAR_URI_KEY, avatar.uri)
        })
    }

    closePictureModal = () => {
        this.setState({ picturemodalVisible: false }, function() {
            this.validateData()
        })
    }

    onBackClick = () => {
        //_dText = ''
        let key = this.props.navigation.state.key
        this.props.navigation.goBack(key)
        //this.props.navigation.goBack()
    }

    onCompleteClick = () => {
        this.setState({isEnabledButton: false})

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

        postData = {
            startDate: this.getDate(this.state.startDate),
            endDate: this.getDate(this.state.endDate),
            location: this.state.location,//this.getLocation(),
            foodTypes_NonPerishable: this.state.foodTypes_NonPerishable,
            foodTypes_Perishable: this.state.foodTypes_Perishable,
            foodTypes_Prepared: this.state.foodTypes_Prepared,
            description: _dText,
            servePeopleNumber: 0,
        }

        if (this.state.mode == 'create') {            
    
            RNS3.put(file, options).then(response => {            
                //_dText = ''
                postData.image = response.body.postResponse.location
                postData.id = moment().format('x')
                console.log('Post Data', postData)
                
                Meteor.call('createGiveFood', postData, (err, res) => {
                    this.setState({isEnabledButton: true})
                    if (err) {
                        this.showDialog(true, err.message)
                        console.log(err)
                    } else {
                        this.props.navigation.navigate('ViewListings', {
                            segmentIndex: 1,
                        })
                    }
                })          
            }).catch(error => {
                this.setState({isEnabledButton: true})
                this.showDialog(true, error.message)
            })
        } else { // 'edit'
            RNS3.put(file, options).then(response => {
                /*image = response.body.postResponse.location
                Meteor.collection('GiveFood').update(Meteor.userId(), {
                    $set: {
                        'image': image,
                        'startDate': this.getDate(this.state.startDate),
                        'endDate': this.getDate(this.state.endDate),
                        'location': this.state.location,
                        'foodTypes_NonPerishable': this.state.foodTypes_NonPerishable,
                        'foodTypes_Perishable': this.state.foodTypes_Perishable,
                        'foodTypes_Prepared': this.state.foodTypes_Prepared,
                        'description': _dText,
                    }
                }, function() {
                    this.setState({isEnabledButton: true})
                })*/
                postData.id = this.props.navigation.state.params.foodData.id
                postData.image = response.body.postResponse.location
                Meteor.call('updateGiveFood', postData, (err, res) => {
                    this.setState({isEnabledButton: true})
                    if (err) {
                        this.showDialog(true, err.message)
                        console.log(err)
                    } else {
                        this.props.navigation.goBack()
                    }
                })
            }).catch(error => {
                this.setState({isEnabledButton: true})
                this.showDialog(true, error.message)
            })
        }
        

    }

    getDate = (dateState) => {
        let monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ]
        
        /*if (this.state.startDate && this.state.endDate) {
            dateList1 = this.state.startDate.split("-")
            dateStr = dateList1[0].trim()
            MonDayYear = dateStr.split(' ')
            month = monthNames.indexOf(MonDayYear[0]) + 1
            
            yearString = MonDayYear[2]
            monthString = month.toString()
            if (month < 10) monthString = '0' + month.toString
            dayString = MonDayYear[1]
            if (dayString.length < 2) dayString = '0' + MonDayYear[1]

            date = yearString + '-' + monthString + '-' + dayString
            //console.log(date)
    
            startTimeStr = dateList1[1].trim().split(' ')
            startTime = this.getTime(startTimeStr)
    
            dateList2 = this.state.endDate.split('-')
            endTimeStr = dateList2[1].trim().split(' ')
            endTime = this.getTime(endTimeStr)
    
            newDate = {date: date, startTime: startTime, endTime: endTime}
            //console.log(newDate)
            return newDate
        }*/

        dateList = dateState.split("-")
        dateStr = dateList[0].trim()
        MonDayYear = dateStr.split(' ')
        month = monthNames.indexOf(MonDayYear[0]) + 1
        
        yearString = MonDayYear[2]
        monthString = month.toString()
        if (month < 10) monthString = '0' + month.toString
        dayString = MonDayYear[1]
        if (dayString.length < 2) dayString = '0' + MonDayYear[1]

        date = yearString + '-' + monthString + '-' + dayString

        timeStr = dateList[1].trim().split(' ')
        time = this.getTime(timeStr) 

        return {date, time}        
    }

    getTime = (timeStr) => {
        time = timeStr[0].split(':')
        hour = parseInt(time[0])
        minute = parseInt(time[1])
        AmPm = timeStr[1]
        if (AmPm == 'AM' && hour == 12) {
            hour = 0
        }
        if (AmPm == 'PM' && hour != 12) {
            hour = 12 + hour
        }
        return hour*60 + minute
    }

    getStartDateStr = () => {
        dateStrs = this.state.startDate.split('-')
        return dateStrs[0] + ' ' + dateStrs[1]

    }

    /*getLocation = () => {
        let data = this.state.locationData
        if (data) {
            lat = data.latitude
            lon = data.longitude
            address = data.address
            newLocation = {lat: lat, lon: lon, address: address}
            //console.log('Location', newLocation)
            return newLocation
        }
        return {}
    }*/

    showDialog = (show, title) => {
        if (show) this.setState({ msgBox: show, msgText: title })
        else this.setState({ msgBox: show })
    }


    render() {
        return (
            <View style={styles.container} >
            
                <View style={styles.containerTop} >
                    <ImageLoad source={this.state.avatar ? this.state.avatar : Images.complete_donation_top_bg} style={styles.imgBg} resizeMode={'cover'}
                    placeholderSource={Images.complete_donation_top_bg} placeholderStyle={styles.imgBg} loadingStyle={{ size: 'large', color: 'white' }} >
                        {this.state.avatar && <View style={styles.overlay} />}
                        <View style={styles.nav}>
                            <TouchableOpacity onPress={() => this.onBackClick() }>
                                <Image source={Images.backIcon} style={styles.navLeftIcon} />
                            </TouchableOpacity>
                            <Text style={styles.navText}>{}</Text>
                            <Text style={styles.postBtnText}>{' '}</Text>
                        </View>                      
                        <View style={styles.titleTextFrame} >
                            <Text style={[styles.statusText, {textAlign: 'center', marginLeft: 0}]} >CREATE A NEW</Text>
                            <Text style={styles.titleText} >Food Giveaway</Text>
                        </View>                        
                    </ImageLoad>                    
                </View>
                
                <ScrollView style={{marginBottom: 60}} showsVerticalScrollIndicator={false} >
                <View style={{}} >
                    <TouchableWithoutFeedback onPress={() => {this.setState({descriptionModalVisible: true})}} >
                        <View style={styles.descriptionFrame}>                            
                            {_dText ?
                            <View style={{alignItems: 'center', marginTop: 13}} >
                                <Text style={styles.text} >CLICK TO VIEW OR EDIT DESCRIPTION</Text>
                            </View>
                            :
                            <Text style={styles.text} >DESCRIPTION</Text>
                            }                            
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={styles.dateFrame} >
                        <Text style={styles.text} >START DATE</Text>                        
                        <DatePicker
                            style={styles.datePickerStyle}
                            date= {this.state.startDate}
                            minDate={this.state.mode=='edit' ? null : new Date()}
                            mode="datetime"
                            placeholder=" "
                            format="MMMM D YYYY - h:m A"
                            confirmBtnText="Done"
                            cancelBtnText="Cancel"
                            iconSource = {Images.calendar}   
                            customStyles={{                                                                                         
                                dateIcon: {
                                    position: 'absolute',
                                    right: 0,
                                    width: this.state.startDate ? 0 : 30,
                                    height: this.state.startDate ? 0 : 30,
                                },
                                                    
                                dateInput: {
                                    borderColor:'#fff',
                                    marginLeft: -80,
                                    alignItems: 'flex-end'
                                }, 

                                dateText: {
                                    color: 'black',
                                    fontSize: (width < 370) ? 13 : 15,
                                }
                            }}
                            onDateChange={(date) => this.onStartDateChange(date)}                            
                        />
                    </View>

                    <View style={styles.dateFrame} >
                        <Text style={styles.text} >END DATE</Text>
                        <DatePicker
                            style={styles.datePickerStyle}
                            date= {this.state.endDate}
                            minDate={new Date(this.getStartDateStr())}
                            mode="datetime"
                            placeholder=" "
                            format="MMMM D YYYY - h:m A"
                            confirmBtnText="Done"
                            cancelBtnText="Cancel"
                            iconSource = {Images.calendar}   
                            customStyles={{                                                                                         
                                dateIcon: {
                                    position: 'absolute',
                                    right: 0,
                                    width: this.state.endDate ? 0 : 30,
                                    height: this.state.endDate ? 0 : 30,
                                },
                                                    
                                dateInput: {
                                    borderColor:'#fff',
                                    marginLeft: -100,
                                    alignItems: 'flex-end'
                                }, 

                                dateText: {
                                    color: 'black',
                                    fontSize: (width < 370) ? 13 : 15,
                                }
                            }}
                            onDateChange={(date) => this.onEndDateChange(date)}                            
                        />
                    </View>
                    
                    

                    <TouchableOpacity style={styles.dateFrame} 
                        onPress={() => this.setState({locationModalVisible: true})}  >
                        <Text style={styles.text} >LOCATION</Text>
                        {this.locationTextOrIcon()}
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        onPress={() => {this.props.navigation.navigate('CompleteDonationRepeat', {
                            onGoBack: (repeat, customRepeatData) => this.refresh(repeat, customRepeatData), 
                            repeat: this.state.repeat,
                            customRepeatData: this.state.customRepeatData,
                        })}} 
                    >                            
                        <View style={styles.dateFrame} >
                            <Text style={{marginRight: 5}} >REPEAT</Text>
                            {this.repeatTextOrIcon()}    
                        </View>
                    </TouchableOpacity>

                    <View style={styles.dateFrame} >
                        <Text style={styles.text} >FOOD TYPE</Text>
                        <View>
                            <TouchableOpacity onPress={() => this.onFoodTypePress(1)} >
                            <View style={styles.iconFrame} >
                                <Image source={this.state.foodTypes_NonPerishable ? Images.checked : Images.circle_ring } resizeMode={'contain'} style={[styles.checkboxCircle, this.state.foodTypes_NonPerishable ? { tintColor: '#f58a55'} : {tintColor: '#000'}]}  />                                                             
                                <Image source={this.state.foodTypes_NonPerishable ? Images.non_perishable_new : Images.nonperishable_gray} style={styles.icon} resizeMode={'contain'}  />
                            </View>
                            </TouchableOpacity>                            
                            <Text style={[styles.iconText, this.state.foodTypes_NonPerishable ? {color : 'black'} : {color: '#bebec0'}]}>NON-PERISHABLE</Text>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => this.onFoodTypePress(2)} >
                            <View style={[styles.iconFrame, {marginLeft: -15}]} >
                                <Image source={this.state.foodTypes_Perishable ? Images.checked : Images.circle_ring } resizeMode={'contain'} style={[styles.checkboxCircle, this.state.foodTypes_Perishable ? { tintColor: '#f58a55'} : {tintColor: '#000'}]}  />                                                           
                                <Image source={this.state.foodTypes_Perishable ? Images.perishable_black : Images.perishable_gray} style={styles.icon} resizeMode={'contain'} />
                            </View>
                            </TouchableOpacity>                            
                            <Text style={[styles.iconText, this.state.foodTypes_Perishable ? {color : 'black'} : {color: '#bebec0'}]} >PERISHABLE</Text>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => this.onFoodTypePress(3)} >
                            <View style={[styles.iconFrame, {marginRight: -5}]} >
                                <Image source={this.state.foodTypes_Prepared ? Images.checked : Images.circle_ring } resizeMode={'contain'} style={[styles.checkboxCircle, this.state.foodTypes_Prepared ? { tintColor: '#f58a55'} : {tintColor: '#000'}]} />                                                           
                                <Image source={this.state.foodTypes_Prepared ? Images.prepared_black : Images.prepared_gray} style={{width: 143*3/10, height: 30, tintColor: 'black'}} />
                            </View>
                            </TouchableOpacity>
                            
                            <Text style={[styles.iconText, this.state.foodTypes_Prepared ? {color : 'black'} : {color: '#bebec0'}]} >PREPARED</Text>
                        </View> 
                    </View>

                </View>   
                </ScrollView>
                           

                <TouchableOpacity 
                    style={[styles.containerBottom, this.state.isEnabledButton ? {backgroundColor: '#f58a55'} : {backgroundColor : '#fcdccb'}]} 
                    disabled={this.state.isEnabledButton ? false : true} 
                    onPress={() => this.onCompleteClick()}
                >
                    <Text style={styles.buttonText} >{this.state.mode=='create' ? 'Post' : 'Save'}</Text>
                </TouchableOpacity>

                <DescriptionModal 
                    descriptionModalVisible={this.state.descriptionModalVisible} 
                    close={this.closeDescriptionModal}
                />

                <PictureModal 
                    picturemodalVisible={this.state.picturemodalVisible} 
                    close={this.closePictureModal} 
                    chooseAvatar = {this.chooseAvatar} 
                />
                <LocationModal
                    locationModalVisible={this.state.locationModalVisible}
                    close={this.closeLocationModal}
                    itemSelected={this.handleLocationSelected}
                />

                <AlertModal 
                    show={this.state.msgBox} 
                    modal={() => this.showDialog(false)} 
                    title={this.state.msgText} 
                />


            <TouchableOpacity onPress={() => {this.setState({picturemodalVisible: true})}} style={styles.cameraImgFrame} >
                <Image source={Images.camera_full} resizeMode={'contain'} style={styles.cameraImg} />
            </TouchableOpacity>
            
            </View>
        )
    }

}