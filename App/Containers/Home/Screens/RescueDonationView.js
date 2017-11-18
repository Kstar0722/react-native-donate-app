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
    Modal,
    TouchableHighlight,
} from 'react-native'
import Stars from 'react-native-stars-rating'
import MapView from 'react-native-maps'
import { Thumbnail } from 'native-base'
import ImageLoad from 'react-native-image-placeholder'
import { BlurView, VibrancyView } from 'react-native-blur'
import dateFormat from 'dateformat'
import moment from 'moment'

import AlertModal from '../../../Components/AlertModal'
import ImagePreviewModal from '../../../Components/Modals/ImagePreviewModal'

import { Images } from '../../../Themes'
import styles from '../Styles/RescueDonationViewStyles'

const { width, height } =Dimensions.get('window')

export default class RescueDonationView extends React.Component {
    constructor(props) {
        super(props)
        currentDate = new Date()
        this.state = { 
            rescueModal: false,
            statusModal: false,

            distance: 5,

            msgBox: false,
            msgText: "",

            isBlur: false,

            imagePreviewModalVisible: false,

        }
    }

    componentDidMount() {
        /*AsyncStorage.getItem(AVATAR_URI_KEY).then((avatar_uri) => {
            this.setState({avatar: {uri: avatar_uri}})
        })*/  
        const { donation } = this.props.navigation.state.params      
        navigator.geolocation.getCurrentPosition((position) => {
            let userLat = position.coords.latitude
            let userLon = position.coords.longitude
            let distance = this.distance(userLat, userLon, donation.location.lat, donation.location.lon)
            this.setState({distance: distance})
        })  
    }

    static navigationOptions = {
        header:null,
    }


    onBackClick = () => {
        this.props.navigation.goBack()
    }    

    showDialog = (show, title) => {
        if (show) this.setState({ msgBox: show, msgText: title })
        else this.setState({ msgBox: show })
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

    distance = (lat1, lon1, lat2, lon2, unit) => {
        var radlat1 = Math.PI * lat1/180
        var radlat2 = Math.PI * lat2/180
        var theta = lon1-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist
    }

    handleScroll = (event) => {
        console.log(event.nativeEvent.contentOffset.y)
        let offsetY = event.nativeEvent.contentOffset.y
        if (offsetY == 0) {
            this.setState({isBlur: false})
        } else {
            this.setState({isBlur: true})
        }
    }

    closeimagePreviewModal = () => {
        this.setState({imagePreviewModalVisible: false})
    }


    render() {
        const { navigate } = this.props.navigation;
        const { user, donation } = this.props.navigation.state.params
        if (!(user && donation)) return <View />
        const { profile } = user
        const {businessInfo} = profile

        console.log('User', user)
        console.log('Donation', donation)
        return (
            <View style={styles.container} >

                <View style={styles.nav}>
                    {this.state.isBlur &&
                    <BlurView style={styles.blurView} blurType='dark' blurAmount={10} />
                    }                    
                    <TouchableOpacity onPress={() => this.onBackClick() }>
                        <Image source={Images.backIcon} style={styles.navLeftIcon} />
                    </TouchableOpacity>
                    <Text style={styles.navText}>{'Search'}</Text>
                    <TouchableOpacity onPress={() => this.setState({imagePreviewModalVisible: true})} >
                        <Image source={Images.img_icoon} style={styles.navRightIcon}  resizeMode='contain' />
                    </TouchableOpacity>
                    
                </View> 
                
                
                <ScrollView style={{marginBottom: 53}} showsVerticalScrollIndicator={false} onScroll={this.handleScroll} >

                    <View style={styles.containerTop} >
                        <ImageLoad source={{uri: donation.image}} style={styles.imgBg} resizeMode={'cover'}
                        placeholderSource={Images.complete_donation_top_bg} placeholderStyle={styles.imgBg} loadingStyle={{ size: 'large', color: 'white' }} >
                            {donation.image && <View style={styles.overlay} />}
                                                
                            <Text style={[styles.titleText, {marginTop: 64}]} >Food Donation</Text> 
                            <Text style={[styles.titleText, {fontSize: 14, marginTop: 5, paddingHorizontal: 8}]} >{'By: ' + businessInfo.name}</Text>  
                            <View style={styles.stars} >
                                <Stars
                                    isActive={true}
                                    rateMax={5}
                                    isHalfStarEnabled={false}
                                    onStarPress={(rating) => console.log(rating)}
                                    rate={4}
                                    size={20}/>
                            </View> 
                            <Text style={styles.distanceText} >{Math.round(this.state.distance).toString() + ' MILES AWAY'}</Text>                                          
                        </ImageLoad> 
                        {/*<Image source={Images.foodBoxes} resizeMode={'cover'} style={[styles.cameraImg, {borderRadius: 40}]} /> */}  
                        <TouchableOpacity style={styles.cameraImg} onPress={() => {navigate('ProfileScreen')}} >
                            <Thumbnail source={{uri: profile.image}}  large /> 
                        </TouchableOpacity>
                                                        
                    </View>


                    <Text style={styles.sectionHeader} >DONATION DETAILS</Text>
                    <View style={{paddingHorizontal: 16}} >                        
                        <View style={styles.itemFrame} >
                            <Text>Available Time: </Text>
                            <Text style={styles.text} >{this.getDateString(donation.startDate)}</Text>
                        </View>
                        <View style={styles.itemFrame} >
                            <Text>Expiration Time: </Text>
                            <Text style={styles.text} >{this.getDateString(donation.endDate)}</Text>
                        </View>
                        <View style={[styles.itemFrame]} >
                            <Text>Food Type:</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                                {donation.foodTypes_NonPerishable &&
                                <View style={{alignItems: 'center'}} >
                                    <Image source={Images.non_perishable_new} resizeMode='contain' style={[styles.foodTypeIcon, {tintColor: 'black'}]} />
                                    <Text style={styles.foodTypeText} >{'NONPERISHABLE'}</Text>                                
                                </View> 
                                }
                                {donation.foodTypes_Perishable &&
                                <View style={{alignItems: 'center'}} >
                                    <Image source={Images.perishable_black} resizeMode='contain' style={styles.foodTypeIcon} />
                                    <Text style={styles.foodTypeText} >{'PERISHABLE'}</Text>                                
                                </View> 
                                }
                                {donation.foodTypes_Prepared &&
                                <View style={{alignItems: 'center'}} >
                                    <Image source={Images.prepared_black} resizeMode='contain' style={styles.foodTypeIcon} />
                                    <Text style={styles.foodTypeText} >{'PREPARED'}</Text>                                
                                </View>
                                }                                
                            </View>                        
                        </View>
                        <View style={styles.itemFrame} >
                            <Text>Required Vehicle:</Text>
                            {donation.vehicleSize == 0 &&
                            <Image source={Images.car_sel} resizeMode='contain' style={styles.vehicleSizeIcon} />
                            }
                            {donation.vehicleSize == 1 &&
                            <Image source={Images.van_sel} resizeMode='contain' style={styles.vehicleSizeIcon} />
                            }
                            {donation.vehicleSize == 2 &&
                            <Image source={Images.truck_sel} resizeMode='contain' style={styles.vehicleSizeIcon} />
                            }
                        </View>

                        <Text style={{marginTop: 30, }} >Description</Text>
                        <Text style={{marginTop: 20}} >{donation.description}</Text>

                        <Text style={{marginTop: 30, marginBottom: 20}} >Location:</Text>
                    </View>

                    <MapView style={{height: 150, width: width}}
                        initialRegion={{
                            latitude: donation.location.lat,
                            longitude: donation.location.lon,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}>
                        <MapView.Marker style={{width:14, height: 20}}
                            coordinate={{
                            latitude: donation.location.lat,
                            longitude: donation.location.lon}}
                            image={Images.marker} />
                    </MapView>

                    <Text style={{textAlign: 'center', paddingHorizontal: 24, paddingVertical: 20}} >{donation.location.address}</Text>

                    {businessInfo.bItems &&
                    <View>
                        <Text style={styles.sectionHeader} >SERVICE REQUEST</Text>
                        <View style={{paddingHorizontal: 16}} >
                            {businessInfo.items.map((item, index) => {
                                return (
                                <View style={styles.itemFrame} key={index.toString()} >
                                    <Text>{item}</Text>
                                    <Image source={Images.questionMark_gray} resizeMode='contain' style={styles.navRightIcon} />
                                </View>
                                )                                
                            })
                            }                            
                        </View> 
                    </View>
                    
                    }
                     

                    <Text style={styles.sectionHeader} >CONTACT INFORMATION</Text> 
                    <View style={styles.contactItemFrame} >
                        <Text style={styles.contactTitleText} >Doner Name</Text>
                        <Text style={{marginBottom: 16}}>{profile.name}</Text>
                    </View> 
                    <View style={styles.contactItemFrame}>
                        <Text style={styles.contactTitleText} >Address</Text>
                        <Text style={{marginBottom: 16}} >{businessInfo.address}</Text>
                    </View>
                    <View style={styles.contactItemFrame} >
                        <Text style={styles.contactTitleText} >Contact Name</Text>
                        <Text style={{marginBottom: 16}} >{businessInfo.name}</Text>
                    </View> 
                    <View style={{width: width, height: 30}} />
                 
                </ScrollView>  

                    <View style={styles.buttonGroupFrame} >
                        <View style={styles.bottomBackground} />
                        <TouchableOpacity style={{alignItems: 'center'}} >
                            <Image source={Images.contact} resizeMode='contain' style={styles.buttonImage} />
                            <Text style={{marginTop: 0}} >Contact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => this.setState({ rescueModal: true })} >
                            <Image source={Images.rescue} resizeMode='contain' style={styles.buttonImage} />
                            <Text style={{marginTop: 0}} >Rescue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems: 'center'}} >
                            <Image source={Images.report} resizeMode='contain' style={styles.buttonImage} />
                            <Text style={{marginTop: 0}} >Report</Text>
                        </TouchableOpacity>
                    </View> 

                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.rescueModal}
                >
                    <View style={styles.rescueModal}>
                        <Image source={Images.rescue_bg} style={styles.rescue_bg} >
                            <Text style={styles.modalTitle}>Rescue This Donation</Text>
                            <Text style={styles.modalContent}>Select how you’d like this donation to be delivered to your facility.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Image source={Images.volunteer} style={styles.volunteer} />
                                <Image source={Images.helpicon} style={styles.helpicon} />
                            </View>
                            <TouchableHighlight style={styles.modaButton} onPress={() => this.setState({ rescueModal: false, statusModal: true })}>
                                <Text style={styles.buttonText}>I am the Driver</Text>
                            </TouchableHighlight>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Image source={Images.deliver_guy} style={styles.deliver_guy} />
                                <Image source={Images.helpicon} style={styles.helpicon} />
                            </View>
                            <TouchableHighlight style={styles.modaButton} onPress={() => this.setState({ rescueModal: false })}>
                                <Text style={styles.buttonText}>Assign to a Driver</Text>
                            </TouchableHighlight>
                        </Image>
                    </View>
                </Modal>


                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.statusModal}
                >
                    <View style={styles.rescueModal}>
                        <Image source={Images.statusModal_bg} style={styles.statusModal_bg} >
                            <Text style={[styles.modalTitle, { fontSize: 20 }]}>Pickup Status</Text>
                            <Text style={[styles.modalContent, { fontSize: 13, fontWeight: '600' }]}>Select when you will begin this rescue</Text>
                            <MapView
                                style={styles.mapView1}
                                region={{
                                    latitude: 37.785834,
                                    longitude: -122.406417,
                                    latitudeDelta: 0.00222,
                                    longitudeDelta: 0.00201
                                }
                                }
                                zoomEnabled={true}
                            >
                                <MapView.Marker
                                    coordinate={{
                                        latitude: 37.785834,
                                        longitude: -122.406417,
                                    }}
                                >
                                    <Image source={Images.pinception} style={styles.pinception} />
                                </MapView.Marker>
                            </MapView>
                            <View style={styles.statusModal_to}>
                                <Text style={styles.to}>To</Text>
                                <Text style={styles.name}>Donator Name</Text>
                            </View>
                            <View style={styles.statusModal_to}>
                                <Text style={styles.to}>ETA</Text>
                                <Text style={styles.name}>5 minutes</Text>
                            </View>
                            <Text style={[styles.modalContent, { fontSize: 13, fontFamily: 'Avenir' }]}>When will you begin this rescue:</Text>
                            <View style={styles.aroundButtonView}>
                                <TouchableHighlight style={[styles.statusModal_aroundButton, { left: 23 }]} onPress={() => this.setState({ statusModal: false })}>
                                    <Text style={{ color: 'white' }}>New</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={[styles.statusModal_aroundButton, { left: 98 }]} onPress={() => this.setState({ statusModal: false })}>
                                    <Text style={{ color: 'white' }}>Later</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={[styles.statusModal_aroundButton, { right: 23, backgroundColor: '#fe5c47' }]} onPress={() => this.setState({ statusModal: false })}>
                                    <Text style={{ color: 'white' }}>Cancel</Text>
                                </TouchableHighlight>
                            </View>
                        </Image>
                    </View>
                </Modal>  
                {/*
                
                */}
                <ImagePreviewModal 
                    imagePreviewModalVisible={this.state.imagePreviewModalVisible} 
                    close={this.closeimagePreviewModal} 
                    imgUrl={donation.image} /> 
                                 
            
            </View>
        )
    }

}