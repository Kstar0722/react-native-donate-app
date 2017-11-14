import React, { Component } from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    Modal,
    Text,
    ScrollView,
    TouchableHighlight
} from 'react-native'
import styles from '../Styles/DonationViewStyles'
import { Images } from '../../../Themes'
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'


export default class MainScreen extends Component {
    constructor() {
        super()
        this.state = {
            tooltip: 0,
            reservedModal: false,
            openModal: false,
            closedModal: false,
            reservedDonation: true,
            isDetailShow: false,
            rescueModal: false,
            statusModal: false
        }
    }

    static navigationOptions = {
        header: null,
    }

    modal = (reserved, open, closed) => {
        this.setState({ reservedModal: reserved, openModal: open, closedModal: closed });
    }
    descriptionDetail = () => {
        if (this.state.isDetailShow) {
            return (
                <Text style={styles.ddDescription}>{'This is where the description will. be.  The donation description continues, and continues, and continues,and continues,and continues,and  continues, and continues, and continues, and continues, and continues, and continues, and continues, and continues, stops'}</Text>
            )
        } else {
            return;
        }
    }

    arrowOnContent = () => {
        if (this.state.isDetailShow) {
            return (
                <TouchableOpacity style={styles.ddTitleRCover} onPress={() => { this.setState({ isDetailShow: !this.state.isDetailShow }); }}>
                    <Text style={styles.ddTitleR}>HIDE DESCRIPTION </Text>
                    <Image source={Images.upArrow} style={styles.cLockR} />
                </TouchableOpacity>);
        } else {
            return (
                <TouchableOpacity style={styles.ddTitleRCover} onPress={() => { this.setState({ isDetailShow: !this.state.isDetailShow }); }}>
                    <Text style={styles.ddTitleR}>SHOW DESCRIPTION </Text>
                    <Image source={Images.downArrow} style={styles.cLockR} />
                </TouchableOpacity>
            )
        }
    }

    dateToString(date){
        const hour = date / 60, min = date % 60
        const dateObj = new Date()
        dateObj.setHours(hour) , dateObj.setMinutes(min)
        return dateObj.toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" })
    }
    render() {
        const { navigate } = this.props.navigation;
        const { user, donation } = this.props.navigation.state.params
        if (!(user && donation)) return <View />
        //const hour = donation.startDate.time / 60 , minutes = donation.startDate.time % 60
        return (
            <View style={styles.mainView}>
                <View style={styles.cNavigation}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={Images.backIcon} style={styles.menuIconNav} />
                    </TouchableOpacity>
                    <Text style={styles.refedText}>Food Donation</Text>
                </View>
                <ScrollView style={{ backgroundColor: '#F4F3F4' }}>
                    <View style={{ backgroundColor: 'white' }}>
                        <Image source={Images.gradient_bg} style={styles.gradient_bg}>
                            <Text style={styles.donatorname}>{user.profile.name}</Text>
                            <Image source={Images.stars} style={styles.stars} />
                            <View style={styles.pickupView}>
                                <Text style={styles.pickup}>PICKUP TIME:  <Text style={styles.time}>{donation.startDate.date + ' ' + this.dateToString(donation.startDate.time)}</Text></Text>
                                <Text style={[styles.pickup, styles.time, {paddingLeft: 90}]} >{donation.endDate.date + ' ' + this.dateToString(donation.endDate.time)}</Text>
                            </View>
                            <View style={styles.pickupView}>
                                <Text style={styles.pickup}>ADDRESS:  <Text style={styles.time}>{donation.location.address}</Text></Text>
                            </View>
                            <View style={styles.shapeView}>
                                <View style={[styles.appleview, { marginRight: 40 }]}>
                                    <Text style={styles.foodtype}>FOOD TYPE</Text>
                                    <Image source={Images.apple} style={styles.apple} />
                                </View>
                                <View style={styles.appleview}>
                                    <Text style={styles.foodtype}>VEHICLE SIZE</Text>
                                    <Image source={Images.vehicle} style={styles.vehicle} />
                                </View>
                            </View>
                        </Image>
                        <View style={styles.transparent}>
                            <Image source={Images.search_small} style={styles.search_small} />
                            <Text style={styles.click_to_zoom}>CLICK TO ZOOM</Text>
                        </View>
                        <Image source={{ uri: donation.image }} style={styles.foodBoxes} />
                        <View style={styles.roundView}>
                            <View style={{ alignItems: 'center', marginRight: 70 }}>
                                <TouchableHighlight style={styles.keyAround} onPress={() => this.setState({ rescueModal: true })}>

                                    <Image source={Images.key} style={styles.key} />
                                </TouchableHighlight>
                                <Text style={styles.rescue}>Rescue</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableHighlight style={styles.keyAround}>
                                    <Image source={Images.flagIcon} style={styles.flagIcon} />
                                </TouchableHighlight>
                                <Text style={styles.rescue}>Report</Text>
                            </View>
                        </View>
                        <Text style={styles.donation_description}>DONATION DESCRIPTION:</Text>
                        <Text style={styles.donation_content}>{donation.description}</Text>
                        <View style={styles.createdby_View}>
                            <Text style={styles.donation_description}>CREATED BY:</Text>
                            <Image source={{uri : user.profile.image}} style={styles.createdBy} />
                            <Text style={styles.donator_name}>{user.name}</Text>
                            {
                                user.profile.businessInfo ?
                                    <Text style={[styles.donation_content, { textAlign: 'center', paddingBottom: 25 }]}>{user.profile.businessInfo.description}</Text>
                                    : null
                            }
                        </View>
                        <Text style={styles.donator_name}>LOCATION:</Text>
                        <MapView
                            style={styles.mapView}
                            region={{
                                latitude: 37.785834,
                                longitude: -122.406417,
                                latitudeDelta: 0.0222,
                                longitudeDelta: 0.0201
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
                                <Image source={Images.pin} style={styles.pin} />
                            </MapView.Marker>
                        </MapView>
                        <TouchableHighlight>
                            <Image source={Images.get_bg} style={styles.get_bg} >
                                <Text style={styles.get_direction}>Get Directions</Text>
                            </Image>
                        </TouchableHighlight>
                    </View>

                </ScrollView>
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
            </View>
        )
    }
}
