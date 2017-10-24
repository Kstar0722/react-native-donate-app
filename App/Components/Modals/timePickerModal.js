import React from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Switch,
    Modal,
    Dimensions,
    DatePickerIOS
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Images } from '../../Themes'
import styles from '../Styles/ModalStyles'
var ImagePicker = require('react-native-image-picker');

export default class TimePickerModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { avatarSource: null, startDate: new Date(), endDate: new Date() }

        this.onStartDateChange = this.onStartDateChange.bind(this);
        this.onEndDateChange = this.onEndDateChange.bind(this);
    }

    onStartDateChange(date) {
        this.setState({ startDate: date })
    }

    onEndDateChange(date) {
        this.setState({ endDate: date })
    }

    render() {
        if (this.props.timepickerModal) {
            return (
                <View>
                    <Modal
                        animationType={'fade'}
                        transparent={true}
                        visible={this.props.timepickerModal}
                        onRequestClose={this.props.close}
                    >
                        <View style={styles.picturemodal_container}>
                            <View style={styles.timepicker_container}>
                                <DatePickerIOS mode="time"
                                    date={this.state.startDate}
                                    style={{ width: "40%", height: 250 }}
                                    onDateChange={this.onStartDateChange} />
                                <DatePickerIOS mode="time"
                                    date={this.state.endDate}
                                    style={{ width: "40%", height: 250 }}
                                    onDateChange={this.onEndDateChange} />
                            </View>
                            <TouchableOpacity onPress={() => this.props.chooseTime(this.state.startDate, this.state.endDate)}>
                                <Text style={styles.picturetext}>Choose Time</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            );
        } else {
            return null
        }
    }
}