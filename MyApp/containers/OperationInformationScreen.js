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
import { Images } from '../DevTheme'
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default class OperationInformation extends Component {
    constructor() {
        super()
        this.state = {
            switchValue: false,
        }
        this.toggleSwitch = this.toggleSwitch.bind(this)
        this.onWeekDayPress = this.onWeekDayPress.bind(this)
    }
    static navigationOptions = {
        title: 'Operation Information',
        headerStyle: {
            backgroundColor: '#dd8d6c'
        },
        headerTintColor: 'white',
        headerLeft: (
            <TouchableOpacity>
                <Image source={Images.backIcon} style={styles.back_btn} />
            </TouchableOpacity>
        )
    }
    toggleSwitch(val) {
        this.setState({
            switchValue: val
        })
    }
    onWeekDayPress(val) {
        var tmp_weekday = this.state.weekday.slice()
        tmp_weekday[val] = !tmp_weekday[val]
        this.setState({ weekday: tmp_weekday })
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Image source={Images.signbg} style={styles.container} >

                    <View style={styles.viewContainer}>
                        <View style={styles.toggleContainer}>
                            <Text style={styles.toggleLabel}>Can you receive food donations at this location?</Text>
                            <Text style={styles.toggle}>YES</Text>
                            <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}
                                onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
                        </View>
                        <View style={styles.toggleContainer}>
                            <Text style={styles.toggleLabel}>Do you have containers for the food if the donor cannot provide them?</Text>
                            <Text style={styles.toggle}>YES</Text>
                            <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}
                                onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
                        </View>
                        <View style={styles.vehicleContainer}>
                            <View style={[styles.toggleContainer, { borderBottomWidth: 0 }]}>
                                <Text style={styles.toggleLabel}>Do you have refrigerated vehicles?</Text>
                                <Text style={styles.toggle}>YES</Text>
                                <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}
                                    onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
                            </View>
                            <View style={styles.vehicleIconContainer}>
                                <Text style={styles.vehicleLabel}>size:</Text>
                                <View style={styles.vehicle_inactive}>
                                    <TouchableOpacity>
                                        <Image source={Images.car} style={styles.car_inactive} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={Images.van} style={styles.van_inactive} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={Images.truck} style={styles.truck_inactive} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.vehicleIconContainer}>
                                <Text style={styles.vehicleLabel}>Quantity:</Text>
                                <View style={[styles.vehicle_inactive, { paddingLeft: 15 }]}>
                                    <TextInput placeholder='0'
                                        placeholderTextColor='#f0b7ae' style={styles.text}
                                        onChangeText={(text) => this.setState({ password: text })}
                                        value={this.state.password} />

                                    <TextInput placeholder='0'
                                        placeholderTextColor='#f0b7ae' style={styles.text}
                                        onChangeText={(text) => this.setState({ password: text })}
                                        value={this.state.password} />

                                    <TextInput placeholder='0'
                                        placeholderTextColor='#f0b7ae' style={styles.text}
                                        onChangeText={(text) => this.setState({ password: text })}
                                        value={this.state.password} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.foodTypeContainer}>

                            <Text style={styles.label}>Can you receive food donations at this location?</Text>
                            <Text style={styles.subLabel}>Click all that apply:</Text>
                            <View style={styles.rowDirection}>
                                <CheckBox label='Prepared'
                                    checked={true}
                                    labelStyle={{ color: 'white', fontSize: 12 }}
                                    checkedImage={Images.checked}
                                    uncheckedImage={Images.unchecked}
                                    underlayColor="transparent" />

                                <CheckBox label='Non-Perishable'
                                    checked={false}
                                    labelStyle={{ color: 'white', fontSize: 12 }}
                                    checkedImage={Images.checked}
                                    uncheckedImage={Images.unchecked}
                                    underlayColor="transparent" />
                            </View>
                        </View>
                        <View style={styles.toggleContainer}>
                            <Text style={styles.toggleLabel}>Would you like to specify theitems you can recieve??</Text>
                            <Text style={styles.toggle}>YES</Text>
                            <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}
                                onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
                        </View>

                    </View>

                    <TouchableOpacity style={styles.but} onPress={() => navigate('MainScreen')}>
                        <Text style={styles.but_continue}>SIGN UP</Text>
                    </TouchableOpacity>
                    <KeyboardSpacer />
                </Image>
            </View>
        );
    }


}