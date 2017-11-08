import React from 'react'
import { 
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    Dimensions, 
    ImageBackground, 
    TouchableWithoutFeedback,
    FlatList,
    AsyncStorage,
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import Meteor, { createContainer } from 'react-native-meteor'
import AlertModal from '../../../App/Components/AlertModal'

import { Images } from '../../DevTheme'
import styles from './Styles/CompleteDonationDeliveryStyles'

const { width, height } =Dimensions.get('window')
var AVATAR_URI_KEY = '@avatar_uri';

export default class CompleteDonationDelivery extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            isEnabledButton: false,
            deliveryOption: -1,
            avatar: null,

            driver: null,
            business: null,

            msgBox: false,
            msgText: "",
        }
    }

    static navigationOptions = {
        header:null,
    }

    componentDidMount() {
        AsyncStorage.getItem(AVATAR_URI_KEY).then((avatar_uri) => {
            this.setState({avatar: {uri: avatar_uri}})
        })  
    }

    checkItemSelected = (index) => {
        if (index == this.state.deliveryOption) {
            return true 
        } else {
            return false
        }
    }

    onItemClicked = (index) => {
        this.setState({
            deliveryOption: index,
            isEnabledButton: true,
        })
    }

    onDriverClick = () => {
        this.props.navigation.navigate('DonationAssignDriver', {
            onGoBack: (driver) => this.onReceiveDriver(driver)
        })
    }

    onReceiveDriver = (driver) => {
        this.setState({driver: driver})
    }

    onBusinessClick = () => {
        this.props.navigation.navigate('DonationAssignBusiness', {
            onGoBack: (business) => this.onReceiveBusiness(business)
        })
    }

    onReceiveBusiness = (business) => {
        this.setState({business: business})
    }

    onBackClick = () => {
        /*let navigationAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'FindDonation'})
            ]
        })
        this.props.navigation.dispatch(navigationAction)*/
        let key = this.props.navigation.state.params.backKey
        this.props.navigation.goBack()
    }

    onCompleteClick = () => {
        postData = this.props.navigation.state.params.postData
        postData.deliveryOption = this.state.deliveryOption
        console.log(postData)

        Meteor.call('createDonation', postData, (err, res) => {
            console.log('Data Post Called...')
            if (err) {
                this.showDialog(true, err.message)
                console.log(err)
            } else {
                console.log("Data Post Success...")
                this.props.navigation.navigate('ViewListings')
            }
        })
    }

    showDialog = (show, title) => {
        if (show) this.setState({ msgBox: show, msgText: title })
        else this.setState({ msgBox: show })
    }

    render() {
        console.log('Post......', this.props.navigation.state.params.postData)
        return (
        
        <View style={styles.container}>
            <View style={styles.containerTop} >
                <ImageBackground source={this.state.avatar ? this.state.avatar : Images.complete_donation_top_bg} style={styles.imgBg} resizeMode={'cover'} >
                    {this.state.avatar && <View style={styles.overlay} />}
                    <View style={styles.nav}>
                        <TouchableOpacity onPress={() => this.onBackClick()}>
                            <Image source={Images.backIcon} style={styles.navLeftIcon} />
                        </TouchableOpacity>
                        <Text style={styles.navText}>New Food Donation</Text>                        
                    </View>
                    <Image source={Images.status_left} style={styles.statusImg} resizeMode={'contain'} />
                    <Text style={styles.statusText} >STEP 3</Text>
                    <View style={styles.titleTextFrame} >
                            <Text style={styles.titleText} >Delivery Options</Text>
                    </View>                        
                </ImageBackground>                    
            </View>

            <Text style={{marginTop: 20, textAlign: 'center'}} >SELECT A DELIVERY OPTION:</Text>

            {!this.checkItemSelected(1) &&
            <View style={{flex: 1}} >
                <TouchableOpacity 
                    style={[styles.borderBottom, styles.item]} 
                    activeOpacity={1} 
                    onPress={() => this.onItemClicked(0)}
                >
                    <View style={{flexDirection: 'row', alignItems: 'center'}} >
                        {this.checkItemSelected(0) ?
                        <Image source={Images.done} style={styles.itemCheckDone} />
                        :
                        <View style={styles.itemCheckFrame } ></View>
                        }                        
                        <Image source={this.checkItemSelected(0) ? Images.paid_pickup_black : Images.paid_pickup_gray} resizeMode={'contain'} style={styles.itemImg} />
                    </View>
                    <Text style={[styles.itemText, this.checkItemSelected(0) ? {color : 'black'} : {color: '#8e8e92'}]} >PAID PREMIUM PICKUP</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.borderBottom, styles.item]} 
                    activeOpacity={1} 
                    onPress={() => this.onItemClicked(1)}
                >
                    <View style={{flexDirection: 'row', alignItems: 'center'}} >
                        {this.checkItemSelected(1) ?
                        <Image source={Images.done} style={styles.itemCheckDone} />
                        :
                        <View style={styles.itemCheckFrame } ></View>
                        }                        
                        <Image source={this.checkItemSelected(1) ? Images.deliver_black : Images.deliver_gray} resizeMode={'contain'} style={styles.itemImg} />
                    </View>
                    <Text style={[styles.itemText, this.checkItemSelected(1) ? {color : 'black'} : {color: '#8e8e92'}]} >DELIVER TO THE RECEIVER</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.borderBottom, styles.item]} 
                    activeOpacity={1} 
                    onPress={() => this.onItemClicked(2)}
                >
                    <View style={{flexDirection: 'row', alignItems: 'center'}} >
                        {this.checkItemSelected(2) ?
                        <Image source={Images.done} style={styles.itemCheckDone} />
                        :
                        <View style={styles.itemCheckFrame } ></View>
                        }                        
                        <Image source={this.checkItemSelected(2) ? Images.volunteer_black : Images.volunteer_gray} resizeMode={'contain'} style={styles.itemImg} />
                    </View>
                    <Text style={[styles.itemText, this.checkItemSelected(2) ? {color : 'black'} : {color: '#8e8e92'}]} >RECEIVER MUST PICKUP FOR FREE</Text>
                </TouchableOpacity>
            </View>
            }

            {this.checkItemSelected(1) &&
            <View style={{flex: 1}} >
                <View style={[styles.item]} >
                    <View style={{flexDirection: 'row', alignItems: 'center'}} >
                        <Image source={Images.done} style={styles.itemCheckDone} />                       
                        <Image source={Images.deliver_black} resizeMode={'contain'} style={styles.itemImg} />
                    </View>
                    <Text style={styles.itemText} >DELIVER TO THE RECEIVER</Text>
                </View>

                <View style={styles.contentFrame} >
                    <TouchableOpacity style={[styles.borderBottom, styles.contentItem]} onPress={() => {this.onDriverClick()}} >
                        <Image source={Images.add_blue} resizeMode={'contain'} style={styles.contentItemImg} />
                        <Text>{this.state.driver ? 'DRIVER: ' + this.state.driver.name : 'CLICK HERE TO ASSIGN TO DRIVER'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.borderBottom, styles.contentItem]} onPress={() => this.onBusinessClick()} >
                        <Image source={Images.add_blue} resizeMode={'contain'} style={styles.contentItemImg} />
                        <Text>{this.state.business ? 'BUSINESS: ' + this.state.business.name : 'CLICK HERE TO ASSIGN TO A BUSINESS'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            }
            
            <TouchableOpacity 
                style={[styles.containerBottom, this.state.isEnabledButton ? {backgroundColor: '#f58a55'} : {backgroundColor : '#fcdccb'}]} 
                disabled={this.state.isEnabledButton ? false : true} 
                onPress={() => this.onCompleteClick()}
            >
                <Text style={styles.buttonText} >COMPLETE</Text>
            </TouchableOpacity>

            <AlertModal 
                show={this.state.msgBox} 
                modal={() => this.showDialog(false)} 
                title={this.state.msgText} 
            />
        </View>
        )
    }

}

