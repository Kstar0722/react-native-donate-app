import React, { Component } from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Text,
    Switch

} from 'react-native'
import CheckBox from 'react-native-checkbox';
import styles from '../Styles/OperationInformationScreenStyles'
import AlertModal from '../../../Components/AlertModal'
import { Images } from '../../../Themes'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import AppConfig from '../../../Config'
import Meteor from 'react-native-meteor'
import { RNS3 } from 'react-native-aws3'
import { guid, validateEmail } from '../../../Transforms'

export default class OperationInformation extends Component {
    constructor() {
        super()
        this.state = {
            msgBox: false,
            msgText: "",
            bReceiveDonation: false,
            bContainer: false,
            bVehicles: false,
            foodTypes_prepared: false,
            foodTypes_nonPerishable: false,
            bItems: false,
            car_selected: false,
            van_selected: false,
            truck_selected: false,
            cars: 0,
            vans: 0,
            trucks: 0
        }

        this.onSignup = this.onSignup.bind(this)
        this.showDialog = this.showDialog.bind(this);
    }
    static navigationOptions = {
        title: 'Operation Information',
        headerStyle: {
            backgroundColor: '#dd8d6c'
        },
        headerTintColor: 'white',
        // headerLeft: (
        //     <TouchableOpacity>
        //         <Image source={Images.backIcon} style={styles.back_btn} onPress = {() => this.props.navigation.goBack()} />
        //     </TouchableOpacity>
        // )
    }

    showDialog = (show, title) => {
        if (show) this.setState({ msgBox: show, msgText: title })
        else this.setState({ msgBox: show })
    }
    
    onSignup() {
        var { avatar, user, businessInfo } = this.props.navigation.state.params
        businessInfo.bReceiveDonation = this.state.bReceiveDonation
        businessInfo.bContainer = this.state.bContainer
        businessInfo.bVehicles = this.state.bVehicles
        businessInfo.vehicles = { cars: this.state.cars, vans: this.state.vans, trucks: this.state.trucks }
        businessInfo.foodTypes_prepared = this.state.foodTypes_prepared
        businessInfo.foodTypes_nonPerishable = this.state.foodTypes_nonPerishable
        businessInfo.bItems = this.state.bItems
        if (this.state.bItems) {
            this.props.navigation.navigate('AddItemsModal', { avatar, user, businessInfo })
        } else {
            let self = this
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
                    if (err) {
                        this.showDialog(true, err.message)
                        console.log(err)
                    } else {
                        this.props.navigation.navigate('FindDonation')
                    }
                })
            })
        }


    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Image source={Images.signbg} style={styles.container} >

                    <View style={styles.viewContainer}>
                        <View style={styles.toggleContainer}>
                            <Text style={styles.toggleLabel}>Can you receive food donations at this location?</Text>
                            <Text style={styles.toggle}>{this.state.bReceiveDonation ? "YES" : "NO"}</Text>
                            <Switch onValueChange={() => this.setState({ bReceiveDonation: !this.state.bReceiveDonation })} value={this.state.bReceiveDonation}
                                onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
                        </View>
                        <View style={styles.toggleContainer}>
                            <Text style={styles.toggleLabel}>Do you have containers for the food if the donor cannot provide them?</Text>
                            <Text style={styles.toggle}>{this.state.bContainer ? "YES" : "NO"}</Text>
                            <Switch onValueChange={() => this.setState({ bContainer: !this.state.bContainer })}
                                value={this.state.bContainer}
                                onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
                        </View>
                        <View style={styles.vehicleContainer}>
                            <View style={[styles.toggleContainer, { borderBottomWidth: 0 }]}>
                                <Text style={styles.toggleLabel}>Do you have refrigerated vehicles?</Text>
                                <Text style={styles.toggle}>{this.state.bVehicles ? "YES" : "NO"}</Text>
                                <Switch onValueChange={() => this.setState({ bVehicles: !this.state.bVehicles })}
                                    value={this.state.bVehicles}
                                    onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
                            </View>
                            <View style={styles.vehicleIconContainer}>
                                <Text style={styles.vehicleLabel}>size:</Text>
                                <View style={styles.vehicle_inactive}>
                                    <TouchableOpacity onPress={() => this.setState({ car_selected: !this.state.car_selected })}>
                                        <Image source={this.state.car_selected ? Images.car1 : Images.car}
                                            style={styles.car_inactive}
                                            resizeMode="contain" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({ van_selected: !this.state.van_selected })}>
                                        <Image source={this.state.van_selected ? Images.van1 : Images.van} style={styles.van_inactive} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({ truck_selected: !this.state.truck_selected })}>
                                        <Image source={this.state.truck_selected ? Images.truck1 : Images.truck} style={styles.truck_inactive} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.vehicleIconContainer}>
                                <Text style={styles.vehicleLabel}>Quantity:</Text>
                                <View style={[styles.vehicle_inactive, { paddingLeft: 15 }]}>
                                    <TextInput placeholder='0'
                                        placeholderTextColor='#f0b7ae' style={styles.text} disabled={!this.state.car_selected}
                                        onChangeText={(text) => this.setState({ cars: text })}
                                        value={this.state.cars} />

                                    <TextInput placeholder='0'
                                        placeholderTextColor='#f0b7ae' style={styles.text} disabled={!this.state.van_selected}
                                        onChangeText={(text) => this.setState({ vans: text })}
                                        value={this.state.vans} />

                                    <TextInput placeholder='0'
                                        placeholderTextColor='#f0b7ae' style={styles.text} disabled={!this.state.truck_selected}
                                        onChangeText={(text) => this.setState({ trucks: text })}
                                        value={this.state.trucks} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.foodTypeContainer}>

                            <Text style={styles.label}>Can you receive food donations at this location?</Text>
                            <Text style={styles.subLabel}>Click all that apply:</Text>
                            <View style={styles.rowDirection}>
                                <CheckBox label='Prepared'
                                    checked={this.state.foodTypes_prepared}
                                    labelStyle={{ color: 'white', fontSize: 12 }}
                                    checkedImage={Images.checked}
                                    uncheckedImage={Images.unchecked}
                                    underlayColor="transparent"
                                    onChange={() => this.setState({ foodTypes_prepared: !this.state.foodTypes_prepared })} />

                                <CheckBox label='Non-Perishable'
                                    checked={this.state.foodTypes_nonPerishable}
                                    labelStyle={{ color: 'white', fontSize: 12 }}
                                    checkedImage={Images.checked}
                                    uncheckedImage={Images.unchecked}
                                    underlayColor="transparent"
                                    onChange={() => this.setState({ foodTypes_nonPerishable: !this.state.foodTypes_nonPerishable })} />
                            </View>
                        </View>
                        <View style={styles.toggleContainer}>
                            <Text style={styles.toggleLabel}>Would you like to specify theitems you can recieve??</Text>
                            <Text style={styles.toggle}>{this.state.bItems ? "YES" : "NO"}</Text>
                            <Switch onValueChange={() => this.setState({ bItems: !this.state.bItems })} value={this.state.bItems}
                                onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
                        </View>

                    </View>

                    <AlertModal show={this.state.msgBox} modal={() => this.showDialog(false)} title={this.state.msgText} />
                    <TouchableOpacity style={styles.but} onPress={() => this.onSignup()}>
                        <Text style={styles.but_continue}>{this.state.bItems ? "CONTINUE" : "SIGN UP"}</Text>
                    </TouchableOpacity>
                    <KeyboardSpacer />
                </Image>
            </View>
        );
    }


}