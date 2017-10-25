import React, { Component } from 'react'
import {
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Text

} from 'react-native'
import styles from '../Styles/SignupScreenStyles'
import { Images } from '../../../Themes'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import TimePickerModal from '../../../Components/Modals/timePickerModal'
import { guid, validateEmail } from '../../../Transforms'
import AlertModal from '../../../Components/AlertModal'

export default class BusinessScreen extends Component {
    constructor() {
        super()
        this.state = {
            msgBox: false,
            msgText: "",
            name: '',
            address: '',
            phone: '',
            ein: '',
            description: '',
            weekday: [false, false, false, false, false, false, false],
            timepickerModal: false,
            startTime: null, endTime: null
        }
        this.onWeekDayPress = this.onWeekDayPress.bind(this)
        this.chooseTime = this.chooseTime.bind(this)
        this.onContinue = this.onContinue.bind(this)
        this.showModal = this.showModal.bind(this)
        this.showDialog = this.showDialog.bind(this)
        this.validate = this.validate.bind(this)
    }
    static navigationOptions = {
        title: 'Business Information',
        headerStyle: {
            backgroundColor: '#dd8d6c'
        },
        headerTintColor: 'white'
    }

    showDialog = (show, title) => {
        if (show) this.setState({ msgBox: show, msgText: title })
        else this.setState({ msgBox: show })
    }

    validate() {
        if (this.state.name && this.state.address && this.state.phone && this.state.ein && this.state.description && this.state.startTime) {
            return true
        }
        return false
    }

    onContinue() {
        if (!this.validate()){
            this.showDialog(true, "You have to provide correct information")
            return
        }
        const { avatar, user } = this.props.navigation.state.params
        const businessInfo = {
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone,
            ein: this.state.ein,
            description: this.state.description,
            operationDays: this.state.weekday,
            startTime: this.state.startTime.getHours() * 60 + this.state.startTime.getMinutes(),
            endTime: this.state.endTime.getHours() * 60 + this.state.endTime.getMinutes(),
        }
        this.props.navigation.navigate("OperationInformationScreen", { avatar, user, businessInfo })
    }

    onWeekDayPress(val) {
        var tmp_weekday = this.state.weekday.slice()
        tmp_weekday[val] = !tmp_weekday[val]
        this.setState({ weekday: tmp_weekday })
    }
    chooseTime(startTime, endTime) {
        this.setState({ timepickerModal: false }, () => this.setState({ startTime: startTime, endTime: endTime }))

    }

    getTime(time) {
        if (time === null) return null
        // return String(time.getHours() % 12) + " : " + String(time.getMinutes()) + " " + (time.getHours() < 12 ? 'AM' : 'PM')
        var timeArray = time.toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" })
        return timeArray
    }

    showModal() {
        this.setState({ timepickerModal: true })
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <ImageBackground source={Images.signbg} style={styles.container} >
                    <TextInput placeholder='BUSINESS NAME'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)' style={styles.text}
                        underlineColorAndroid='white'
                        onChangeText={(text) => this.setState({ name: text })}
                        value={this.state.name} />
                    <Image source={Images.underline} />
                    <TextInput placeholder='ADDRESS'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)' style={styles.text}
                        onChangeText={(text) => this.setState({ address: text })}
                        value={this.state.address} />
                    <Image source={Images.underline} />
                    <TextInput placeholder='PHONE'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)' style={styles.text}
                        onChangeText={(text) => this.setState({ phone: text })}
                        value={this.state.phone} />
                    <Image source={Images.underline} />
                    <TextInput placeholder='EIN'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)' style={styles.text}
                        onChangeText={(text) => this.setState({ ein: text })}
                        value={this.state.ein} />
                    <Image source={Images.underline} />

                    <TextInput placeholder='BUSINESS DESCRIPTION'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)' style={styles.multi_text}
                        onChangeText={(text) => this.setState({ description: text })}
                        value={this.state.description} multiline numberOfLines={5} />

                    <Text style={styles.label}>Operation Days:</Text>

                    <View style={styles.operation_view}>
                        <TouchableOpacity style={this.state.weekday[0] ? styles.operation_button_active : styles.operation_button}
                            onPress={() => this.onWeekDayPress(0)}>
                            <Text style={this.state.weekday[0] ? styles.operation_label_active : styles.operation_label}>SUN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.weekday[1] ? styles.operation_button_active : styles.operation_button}
                            onPress={() => this.onWeekDayPress(1)}>
                            <Text style={this.state.weekday[1] ? styles.operation_label_active : styles.operation_label}>MON</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.weekday[2] ? styles.operation_button_active : styles.operation_button}
                            onPress={() => this.onWeekDayPress(2)}>
                            <Text style={this.state.weekday[2] ? styles.operation_label_active : styles.operation_label}>TUE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.weekday[3] ? styles.operation_button_active : styles.operation_button}
                            onPress={() => this.onWeekDayPress(3)}>
                            <Text style={this.state.weekday[3] ? styles.operation_label_active : styles.operation_label}>WED</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.weekday[4] ? styles.operation_button_active : styles.operation_button}
                            onPress={() => this.onWeekDayPress(4)}>
                            <Text style={this.state.weekday[4] ? styles.operation_label_active : styles.operation_label}>THU</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.weekday[5] ? styles.operation_button_active : styles.operation_button}
                            onPress={() => this.onWeekDayPress(5)}>
                            <Text style={this.state.weekday[5] ? styles.operation_label_active : styles.operation_label}>FRI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.weekday[6] ? styles.operation_button_active : styles.operation_button}
                            onPress={() => this.onWeekDayPress(6)}>
                            <Text style={this.state.weekday[6] ? styles.operation_label_active : styles.operation_label}>SAT</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.label}>Operation Hours:</Text>

                    <TouchableOpacity style={styles.operation_hours_view} onPress={this.showModal}>
                        <Text style={styles.operation_text}>{this.getTime(this.state.startTime)} - {this.getTime(this.state.endTime)}</Text>
                        <Image source={Images.clockIcon} style={styles.operation_image} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.but1} onPress={() => this.onContinue()}>
                        <Text style={styles.but_continue}>CONTINUE</Text>
                    </TouchableOpacity>
                    <KeyboardSpacer />
                    <AlertModal show={this.state.msgBox} modal={() => this.showDialog(false)} title={this.state.msgText} />
                    <TimePickerModal timepickerModal={this.state.timepickerModal} chooseTime={this.chooseTime} />
                </ImageBackground>
            </View>
        );
    }


}