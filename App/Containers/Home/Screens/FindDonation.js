import React, { Component } from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    Modal,
    Text,
    Switch,
    ScrollView,
    TextInput
} from 'react-native'
import styles from '../Styles/FindDonationStyles'
import { Images } from '../../../Themes'
import TapBar from '../../../Components/Tapbar'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'
import MapView from 'react-native-maps';
import dateFormat from 'dateformat';
import DateTimePicker from 'react-native-modal-datetime-picker';
import SideHOC from '../../../Components/SideMenuHOC'
import AlertModal from '../../../Components/AlertModal'
import Meteor, { createContainer } from 'react-native-meteor'
class MainScreen extends Component {
    constructor() {
        super()
        currentDate = new Date()
        cDate = dateFormat(currentDate, 'dddd,mmm,dd,yyyy').split(",")
        this.state = {
            switchValue: false,
            currentWeek: cDate[0],
            currentDay: cDate[2],
            currentMonth: cDate[1],
            currentYear: cDate[3],
            currentDate: currentDate,
            isDateTimePickerVisible: false,
        }
        this.toggleSwitch = this.toggleSwitch.bind(this)
    }

    toggleSwitch(val) {
        this.setState({
            switchValue: val
        })
    }

    static navigationOptions = {
        header: null,
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);

        cDate = dateFormat(date, 'dddd,mmm,dd,yyyy').split(",")
        this.setState({
            currentWeek: cDate[0],
            currentDay: cDate[2],
            currentMonth: cDate[1],
            currentYear: cDate[3],
            currentDate: date
        })
        this._hideDateTimePicker();
    };
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.mainView}>
                <Image source={Images.rectangle} style={styles.fDheadr}>
                    <View style={styles.cNavigation}>
                        <TouchableOpacity onPress={() => { this.props.sideMenuToggle(true) }}>
                            <Image source={Images.fDbar} style={styles.menuIconNav} />
                        </TouchableOpacity>
                        <Text style={styles.refedText}>Find a Donation</Text>
                        <Text style={styles.refedSmallText}>Map View ?</Text>
                        <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}
                            onTintColor='#96A883' />
                    </View>
                    <TouchableOpacity onPress={this._showDateTimePicker} style={styles.dateLayout}>
                        <Text style={styles.dayStyle} >{this.state.currentDay}</Text>
                        <View style={styles.weekAndYearLayout}>
                            <Text style={styles.weekAndYearStyle}>{this.state.currentWeek}</Text>
                            <Text style={styles.weekAndYearStyle}>{this.state.currentMonth} {this.state.currentYear}</Text>
                        </View>
                        <Image source={Images.ic_chevron_right} />

                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        datePickerModeAndroid='calendar'
                        confirmTextIOS="Ok"
                        titleIOS='Select Date'
                    />
                </Image>
                <DonationListViewContainer switchValue={this.state.switchValue} date={this.state.currentDate}
                    navigate={navigate} />
                <View style={styles.fDfooter}>
                    <View style={styles.fDfooterInner}>
                        <View style={styles.fDBtnActive}>
                            <TouchableOpacity style={styles.fBtn} onPress={() => navigate('CreateListing')} >
                                <Image source={Images.fDsearch} style={styles.fDsearch} />
                                <Text style={styles.searchBtnText}>Search</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.fDcenterBtn} onPress={() => navigate('Setting')}>
                            <Image source={Images.fDowal} style={styles.fDowal} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => navigate('CompletedDonationScreen')} >
                            <Image source={Images.fDmessage} style={styles.fDmessage} />
                            <Text style={styles.searchBtnText}>Message</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

class DonationListView extends React.Component {
    constructor() {
        super()
        this.mapView = this.mapView.bind(this)
        this.state = {
            msgBox: true,
            msgText: ""
        }
        this.showDialog = this.showDialog.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ msgBox: true })
    }


    showDialog = (show, title) => {
        if (show) this.setState({ msgBox: show, msgText: title })
        else this.setState({ msgBox: show })
    }

    mapView = () => {
        if (this.props.switchValue) {
            const { donations } = this.props
            return (<MapView style={styles.MapView}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} >
                {
                    donations.map((donation) => {
                        return (
                            <MapView.Marker style={styles.markericon}
                                coordinate={{
                                    latitude: donation.location.lat,
                                    longitude: donation.location.lon
                                }}
                                image={Images.marker} />
                        )
                    })
                }

            </MapView>);
        } else {
            return;
        }
    }

    render() {
        const { donations, navigate, users } = this.props
        return (
            <View style={{ backgroundColor: 'white', flex: 1, backgroundColor: '#EAEAEA' }}>
                {this.mapView()}
                <View>
                    <ScrollView>
                        {
                            donations.map(donation => {
                                var user = users.filter(user => { return (user._id === donation.userId) })
                                if (user.length === 0) return <View />
                                user = user[0]
                                return (
                                    <View style={styles.mapViewDetail}>
                                        <MapView style={styles.listMapView}
                                            initialRegion={{
                                                latitude: donation.location.lat,
                                                longitude: donation.location.lon,
                                                latitudeDelta: 0.0922,
                                                longitudeDelta: 0.0421,
                                            }}>
                                            <MapView.Marker style={styles.markericon}
                                                coordinate={{
                                                    latitude: donation.location.lat,
                                                    longitude: donation.location.lon
                                                }}
                                                image={Images.marker} />
                                        </MapView>
                                        <TouchableOpacity style={styles.listMapViewText} onPress={() => navigate("DonationView", { user, donation })}>
                                            <Image source={Images.wCarRedBack} style={styles.vehicleIcon} />
                                            <View style={styles.listMapViewTopRow}>
                                                <Image source={{ uri: user.profile.image }} style={styles.donaterName} />
                                                <View style={{ flex: 1 }}>
                                                    <Text style={styles.name}>{user.profile.name}</Text>
                                                    <Text style={styles.nameText}>Perishable, Produce</Text>
                                                </View>
                                                <Text style={styles.distance}>2 mi</Text>
                                            </View>
                                            <Text style={styles.description} numberOfLines={3}>{donation.description}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                <AlertModal show={donations.length === 0 && this.state.msgBox} modal={() => this.showDialog(false)} title="No donations available at this time" />

            </View>
        )
    }
}

const DonationListViewContainer = createContainer((params) => {
    cDate = dateFormat(params.date, 'yyyy-mm-dd')
    Meteor.subscribe('donation.list', cDate)
    return ({
        donations: Meteor.collection('Donations').find({ "date.date": cDate, status: 0 }),
        users: Meteor.collection('users').find({})
    })
}, DonationListView)

export default SideHOC(MainScreen)
