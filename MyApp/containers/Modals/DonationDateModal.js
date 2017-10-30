import React from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Modal,
    Dimensions
} from 'react-native'
import { Images } from '../../DevTheme'
import styles from '../../Styles/DonationDateModalStyles'
import { Button } from 'react-native-elements'
import { Calendar } from 'react-native-calendars'
import DateTimePicker from 'react-native-modal-datetime-picker'
import dateFormat from 'dateformat';
import DescriptionModal from './descriptionModal'

screenWidth=Dimensions.get('window').width;
screenHeight=Dimensions.get('window').height;


export default class DonationDateModal extends React.Component {
    constructor() {
        super()
        this.state = {
            dateString: "",
            descriptionModalVisible: false,
            isDateTimePickerVisible: false,
            isStartTime: true,
            startTime: "",
            endTime: "",
        }
        this.onDayPress = this.onDayPress.bind(this);
    }

    onDayPress(day) {
        this.setState({
            dateString: day.dateString
        });
    }

    componentWillReceiveProps () {
        if (this.props.selectedDate != "") {
            this.setState({
                dateString: this.props.selectedDate
            })
        }        
    }

    closeDescriptionModal = () => {
        this.setState({
          descriptionModalVisible: false
        })
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('Selected Time', date)
        cDate = dateFormat(date, 'HH:MM')
        console.log('Formatted Time', cDate)
        if (this.state.isStartTime) {
            this.setState({
                startTime: cDate
            })
        } else {
            this.setState({
                endTime: cDate
            })
        }
        
        this._hideDateTimePicker();

    };

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.donationDateModalVisible}
                onRequestClose={() => {alert()}}
            >
                <View style={styles.container} >
                    <View style={styles.containerTop}>
                        <View style={styles.nav}>
                            <TouchableOpacity onPress={this.props.close}>
                                <Image source={Images.backIcon} style={styles.backImg} />
                            </TouchableOpacity>
                            <Text style={styles.navTitle}>Donation Date</Text>
                            <TouchableOpacity disabled={this.state.dateString == "" ? true : false} onPress={() => this.props.handleDatePicked(this.state.dateString)} >
                                <Text style={[styles.navRightItem, this.state.dateString == "" ? {opacity: 0.5} : {opacity : 1}]}>Set Date</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.timeFrame} >
                            <TouchableOpacity onPress={() => {this.setState({isDateTimePickerVisible: true}), this.setState({isStartTime: true})}} >
                                <View style={styles.startTimeFrame} >
                                    <Image source={Images.clock_icon_start} style={styles.timerIcon} />
                                    <Text style={styles.timerLabel} >{this.state.startTime == "" ? 'Start Time': this.state.startTime}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { if(this.state.startTime != "") this.setState({isDateTimePickerVisible: true}), this.setState({isStartTime: false})}} >
                                <View style={styles.endTimeFrame} >
                                    <Image source={Images.clock_icon_start} style={styles.timerIcon} />
                                    <Text style={styles.timerLabel} >{this.state.endTime == "" ? 'End Time': this.state.endTime}</Text>
                                </View>
                            </TouchableOpacity>                            

                            <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                                datePickerModeAndroid='calendar'
                                confirmTextIOS="Ok"
                                titleIOS='Select Time'
                                mode='time'
                            />
                        </View>

                        <Text style={styles.descriptionLabel} >Select Pickup Date Below:</Text>

                    </View>

                    <View style={styles.containerBottom} >
                        <View style={styles.calendarFrame} >
                            <Calendar
                            // Initially visible month. Default = Date()
                            current={this.state.dateString}
                            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                            minDate={Date()}
                            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                            maxDate={'2100-12-31'}
                            // Handler which gets executed on day press. Default = undefined
                            onDayPress={(day) => {this.onDayPress(day), console.log('selected day', day)}}
                            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                            monthFormat={'MMMM yyyy'}
                            // Handler which gets executed when visible month changes in calendar. Default = undefined
                            onMonthChange={(month) => {console.log('month changed', month)}}
                            // Hide month navigation arrows. Default = false
                            hideArrows={false}
                            // Do not show days of other months in month page. Default = false
                            hideExtraDays={true}
                            // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                            // day from another month that is visible in calendar page. Default = false
                            disableMonthChange={false}
                            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                            firstDay={0}
                            // Hide day names. Default = false
                            hideDayNames={false}

                            markedDates={{[this.state.dateString]: {selected: true, marked: true}}}

                            style={styles.calendarStyle}

                            theme={{
                                backgroundColor: '#ffffff',
                                calendarBackground: '#ffffff',
                                textSectionTitleColor: '#929da8',
                                selectedDayBackgroundColor: '#dd8d6c',
                                selectedDayTextColor: '#ffffff',
                                todayTextColor: '#00adf5',
                                dayTextColor: 'black',
                                textDisabledColor: '#aeaeae',
                                dotColor: '#00adf5',
                                selectedDotColor: '#ffffff',
                                arrowColor: '#dbdde6',
                                monthTextColor: '#809efd',
                                textDayFontSize: 15,
                                textMonthFontSize: 18,
                                textDayHeaderFontSize: 15
                            }}
                            />
                        </View>

                        <View style={{position: 'absolute', alignItems: 'center', justifyContent: 'center', bottom: 80, flex: 1, flexDirection: 'row',}} >
                            <TouchableOpacity style={styles.addButton} underlayColor='#f5f5f5' onPress={() => {this.setState({descriptionModalVisible: true})}} > 
                                <Image source={Images.plus_1} style={styles.addButtonImage} />          
                            </TouchableOpacity>                            
                            <Text style={{textAlign: 'center', color: '#809efd', marginLeft: 20, backfaceVisibility: 'hidden'}} >Add pickup/dropoff notes</Text>
                        </View>

                        <Button                            
                            title='SET DATE'
                            containerViewStyle={styles.bottomButtonContainerStyle}
                            backgroundColor={'#dd8d6c'}
                            borderRadius={15}
                            fontWeight={'bold'}
                            fontSize={20}
                            disabled={this.state.dateString == "" ? true : false}
                            disabledStyle={{backgroundColor: '#dd8d6c', opacity: 0.4}}
                            onPress={() => this.props.handleDatePicked(this.state.dateString)}
                        />

                    </View>
                    
                </View>

                <DescriptionModal descriptionModalVisible={this.state.descriptionModalVisible} close={this.closeDescriptionModal}/>                

            </Modal>
        )
    }


}