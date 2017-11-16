import React, { Component } from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    Modal,
    ScrollView,
    Text,
    Dimensions,
    ImageBackground,
} from 'react-native'
import styles from '../Styles/ViewListingsStyle'
import { Images } from '../../../Themes'
import TapBar from '../../../Components/Tapbar'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import Meteor, { createContainer } from 'react-native-meteor'
import CircularMenu from '../../../Components/Modals/CircularMenu'
import moment from 'moment'
var { height, width } = Dimensions.get('window');
const reactMixin = require('react-mixin')
import TimerMixin from 'react-timer-mixin'

const ANIMATION_DURATION = 300
const TRANSITION_BUFFER = 10



export default class ViewListings extends Component {
    constructor() {
        super()
        this.state = {
            tooltip: 0,
            reservedModal: false,
            openModal: false,
            closedModal: false,
            reservedDonation: true,
            headerTab: 0,
            segmentIndex: 0,
        }

        this.handlePress = this.handlePress.bind(this)
        this.callback = this.callback.bind(this)
    }

    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        let segmentIndex = this.props.navigation.state.params.segmentIndex
        if (segmentIndex) {
            this.setState({
                segmentIndex: segmentIndex
            })
        }
    }

    segmentIndexChange = (index) => {
        this.setState({
            segmentIndex: index,
            headerTab: 0,
        });
    }

    callback() {
        /*this.setTimeout(() => {
            this.setState({
                circleColor: 'white'
            })
        }, TRANSITION_BUFFER + 5)*/
    }



    handlePress() {
        this.setState(this.circleTransition.start(this.callback))
    }

    handleMenuRightItem = () => {
        console.log('Right Menu Button Clicked...')
        this.setTimeout(() => {
            this.props.navigation.navigate('GiveFoodListingDetails', {
                foodData: null,
                mode: 'create',
            }) //this.props.navigation.navigate("CreateListing")
        }, 400)
    }

    handleMenuLeftItem = () => {
        console.log('Left Menu Button Clicked...')
        this.setTimeout(() => {
            this.props.navigation.navigate('CompleteDonationDetails', {
                donationData: null,
                mode: 'create',
            })//this.props.navigation.navigate("CompletedDonationScreen")
        }, 400)

    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.mainView}>
                <ImageBackground source={Images.rectangle} resizeMode='cover' style={styles.bg} >
                    <View style={styles.cNavigation}>

                        <TouchableOpacity onPress={() => { }}>
                            <Image source={Images.menuList} style={styles.menuIconNav} />
                        </TouchableOpacity>

                        <SegmentedControlTab
                            values={['Donatations', 'GiveAways']}
                            selectedIndex={this.state.segmentIndex}
                            onTabPress={this.segmentIndexChange}
                            tabsContainerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 5, marginHorizontal: 60, borderRadius: 5 }}
                            tabStyle={{ backgroundColor: 'rgba(255, 255, 255, 0)', borderWidth: 1, borderColor: 'white' }}
                            activeTabStyle={{ backgroundColor: 'white' }}
                            tabTextStyle={{ fontFamily: 'ubuntu', color: '#fff' }}
                            activeTabTextStyle={{ fontFamily: 'ubuntu', color: '#243B53' }}
                        />

                        <Image source={Images.whiteNot} style={styles.whiteNot} />
                    </View>
                    <View style={styles.menu}>
                        <TouchableOpacity style={this.state.headerTab == 0 ? styles.activeTabStyle : styles.tabStyle} onPress={() => { this.setState({ headerTab: 0 }) }}>
                            <Text style={this.state.headerTab == 0 ? styles.textWhite14 : styles.textNotActive14}>Created</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.headerTab == 1 ? styles.activeTabStyle : styles.tabStyle} onPress={() => { this.setState({ headerTab: 1 }) }}>
                            <Text style={this.state.headerTab == 1 ? styles.textWhite14 : styles.textNotActive14}>Reserved</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.headerTab == 2 ? styles.activeTabStyle : styles.tabStyle} onPress={() => { this.setState({ headerTab: 2 }) }}>
                            <Text style={this.state.headerTab == 2 ? styles.textWhite14 : styles.textNotActive14}>Closed</Text>
                        </TouchableOpacity>

                    </View>
                    {this.state.segmentIndex == 0 ?
                        <DonationListViewContainer status = {this.state.headerTab} navigate = {navigate} />
                        :
                        <FoodListViewContainer status = {this.state.headerTab} navigate = {navigate} />
                    }
                </ImageBackground>

                <View style={styles.fDfooter}>
                    <View style={styles.fDfooterInner}>
                        <View style={{ flex: 1, alignItems: 'center', opacity: 1 }}>
                            <TouchableOpacity style={[styles.addButton, { backgroundColor: '#7d9eff', borderColor: '#7d9eff' }]} underlayColor='#7d9eff' onPress={() => navigate('FindDonation')}>
                                <Image source={Images.fDsearch} style={styles.addButtonImage} resizeMode={'contain'} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.addButton} underlayColor='#ffb660' onPress={this.handlePress}>
                            <Image source={Images.plus_1} style={styles.addButtonImage} />
                        </TouchableOpacity>

                        <View style={{ flex: 1, alignItems: 'center', opacity: 1 }} >
                            <TouchableOpacity style={[styles.addButton, { backgroundColor: '#7d9eff', borderColor: '#7d9eff' }]} underlayColor='#7d9eff'>
                                <Image source={Images.message} style={styles.messageButtonImage} resizeMode={'contain'} />
                            </TouchableOpacity>
                            <View style={{ width: 50, height: 5, backgroundColor: '#ffb660', bottom: 8 }} />
                        </View>


                        <CircularMenu
                            ref={(circle) => { this.circleTransition = circle }}
                            duration={ANIMATION_DURATION}
                            size={width}
                            transitionBuffer={TRANSITION_BUFFER}
                            rightPress={this.handleMenuRightItem}
                            leftPress={this.handleMenuLeftItem}
                        />
                    </View>
                </View>

            </View>
        )
    }
}

class DonationListView extends React.Component {
    render() {
        const { donations, status, navigate } = this.props
        let curDate = new Date()
        curTimeMillisec = parseInt(moment().format('x')) 

        console.log('Current Time', curTimeMillisec)

        let filteredDonations =  donations.filter((donation) => {
            let donationDate = donation.endDate.date
            timeMillisec = parseInt(moment(donationDate, "YYYY-MM-DD").format('x'))  + parseInt(donation.endDate.time * 60 * 1000) 
            console.log('Donation Date', timeMillisec)
            switch (status) {
                case 0:
                    return timeMillisec > curTimeMillisec                   
                    break;
                case 1:
                    return timeMillisec > 0
                    break;
                case 2:
                    return timeMillisec < curTimeMillisec
                    break;            
                default:
                    break;
            }

        })

        return (
            <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
                {
                    filteredDonations.map((donation, index) => {
                        
                        return (
                            <View style={styles.dtBody} key={index.toString()} >
                                <View style={styles.dtListings}>
                                    <View style={styles.dtDAte}>
                                        <Text style={styles.dtDate}>{moment(donation.startDate.date).format('D')}</Text>
                                        <Text style={styles.dtMonth}>{moment(donation.startDate.date).format('MMM')}</Text>
                                    </View>
                                    <View style={styles.dtDescription}>
                                        <Text style={styles.dtText}>{
                                            donation.foodTypes_NonPerishable ? 'Non-perishable' :
                                            donation.foodTypes_Perishable ? 'Grocery' :
                                            donation.foodTypes_Prepared ?  'Prepared' : null
                                        }</Text>
                                    </View>
                                    <Image style = {styles.carImage} resizeMode='contain' 
                                        source={donation.vehicleSize === 0 ?  Images.gray_carn : donation.vehicleSize === 1 ? Images.gray_vann : Images.gray_tmpn }></Image>
                                    <TouchableOpacity style={styles.dtDesEditBtn}
                                        onPress={() => navigate('CompleteDonationDetails', {
                                            donationData: donation,
                                            mode: 'edit',
                                        })} >
                                        <Text style={styles.dtEditText}>EDIT</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )

                    })
                }
            </ScrollView>
        )
    }
}

const DonationListViewContainer = createContainer((params) => {
    const status = params.status
    const navigate = params.navigate
    Meteor.subscribe('donation.mine')
    if (status == 0 || status == 2) {
        return ({
            donations: Meteor.collection('Donations').find({userId : Meteor.userId(), status : 0}),
            status: status,
            navigate: navigate,
        })
    } else {
        return ({
            donations: Meteor.collection('Donations').find({userId : Meteor.userId(), status : 1}),
            status: status,
            navigate: navigate,
        })
    }
    
}, DonationListView)

class FoodListView extends React.Component {
    render() {
        const { foods, status, navigate } = this.props
        let curDate = new Date()
        curTimeMillisec = parseInt(moment().format('x')) 

        //console.log('Current Time', curTimeMillisec)

        let filteredFoods =  foods.filter((food) => {
            let foodDate = food.endDate.date
            timeMillisec = parseInt(moment(foodDate, "YYYY-MM-DD").format('x'))  + parseInt(food.endDate.time * 60 * 1000) 
            //console.log('Donation Date', timeMillisec)
            switch (status) {
                case 0:
                    return timeMillisec > curTimeMillisec                   
                    break;
                case 1:
                    return timeMillisec > 0
                    break;
                case 2:
                    return timeMillisec < curTimeMillisec
                    break;            
                default:
                    break;
            }

        })
        return (
            <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
                {
                    filteredFoods.map((food, index) => {
                        return (
                            <View style={styles.dtBody} key={index.toString()} >
                                <View style={styles.dtListings}>
                                    <View style={styles.dtDAte}>
                                        <Text style={styles.dtDate}>{moment(food.startDate.date).format('D')}</Text>
                                        <Text style={styles.dtMonth}>{moment(food.startDate.date).format('MMM')}</Text>
                                    </View>
                                    <View style={styles.dtDescription}>
                                        <Text style={styles.dtText}>{
                                            food.foodTypes_NonPerishable ? 'Non-perishable' :
                                            food.foodTypes_Perishable ? 'Grocery' :
                                            food.foodTypes_Prepared ?  'Prepared' : null
                                        }</Text>
                                    </View>
                                    <TouchableOpacity style={styles.dtDesEditBtn} 
                                        onPress={() => navigate('GiveFoodListingDetails', {
                                            foodData: food,
                                            mode: 'edit',
                                        })} >
                                        <Text style={styles.dtEditText}>EDIT</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )

                    })
                }
            </ScrollView>
        )
    }
}

const FoodListViewContainer = createContainer((params) => {
    const status = params.status
    const navigate = params.navigate
    Meteor.subscribe('givefood.mine')
    /*return ({
        foods: Meteor.collection('GiveFood').find({userId : Meteor.userId(), status : status})
    })*/
    if (status == 0 || status == 2) {
        return ({
            foods: Meteor.collection('GiveFood').find({userId : Meteor.userId(), status : 0}),
            status: status,
            navigate: navigate,
        })
    } else {
        return ({
            foods: Meteor.collection('GiveFood').find({userId : Meteor.userId(), status : 1}),
            status: status,
            navigate: navigate,
        })
    }
}, FoodListView)

reactMixin(ViewListings.prototype, TimerMixin)

