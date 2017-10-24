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
import { Images } from '../DevTheme'
import TapBar from './Tapbar'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'

export default class MainScreen extends Component {
    constructor() {
        super()
        this.state = {
            isEmptyDonation: true,
            switchValue: false,
            serveFoodToolTip: false,
            mapModal: false,
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

    modal = (closed) => {
        this.setState({ isEmptyDonation: closed, serveFoodToolTip: true });
    }

    emptyDonationView = () => {
        if (this.state.isEmptyDonation) {
            return (
                <View style={styles.mainViewClone}>
                    <View style={styles.modalCover}>
                        <View style={styles.modalBody}>
                            <Text style={styles.smallText}>No donations available at this time. </Text>
                            <TouchableOpacity style={styles.gotItBtn} onPress={() => { this.modal(false) }}>
                                <Text style={styles.gotItBtnTxt}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        } else {
            return;
        }
    }


    serveFoodToolTip = () => {
        if (this.state.serveFoodToolTip) {
            return (<View style={styles.modalBodyToggle}>
                <Text style={styles.smallText}>SERVE FOOD by tapping this circular button! </Text>
                <TouchableOpacity style={styles.gotItBtn}>
                    <Text style={styles.gotItBtnTxt}>SOUNDS GOOD</Text>
                </TouchableOpacity>
                <Image source={Images.triangle} style={styles.triangle} />
            </View>);
        } else {
            return;
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.mainView}>
                <Image source={Images.fDonationheader} style={styles.fDheadr}>
                    <View style={styles.cNavigation}>
                        <TouchableOpacity onPress={() => { }}>
                            <Image source={Images.fDbar} style={styles.menuIconNav} />
                        </TouchableOpacity>
                        <Text style={styles.refedText}>Find a Donation</Text>
                        <Text style={styles.refedSmallText}>Map View ?</Text>
                        <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}
                            onTintColor='#96A883' />
                    </View>


                </Image>
                <View style={{ backgroundColor: 'white', flex: 1, }}>
                    {this.emptyDonationView()}

                </View>
                <View style={styles.fDfooter}>
                    {this.serveFoodToolTip()}
                    <View style={styles.fDfooterInner}>
                        <View style={styles.fDBtnActive}>
                            <TouchableOpacity style={styles.fBtn}>
                                <Image source={Images.fDsearch} style={styles.fDsearch} />
                                <Text style={styles.searchBtnText}>Search</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => { this.setState({ serveFoodToolTip: !this.state.serveFoodToolTip }) }} style={styles.fDcenterBtn}>
                            <Image source={Images.fDowal} style={styles.fDowal} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                            <Image source={Images.fDmessage} style={styles.fDmessage} />
                            <Text style={styles.searchBtnText}>Message</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}
