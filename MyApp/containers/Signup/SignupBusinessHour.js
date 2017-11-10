import React from 'react'
import { 
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    Dimensions, 
    ImageBackground, 
    TouchableWithoutFeedback,
    AsyncStorage,
    TextInput,
    Switch,
    DatePickerIOS,
    Modal,
    ScrollView,
} from 'react-native'
import dateFormat from 'dateformat'

import { Images } from '../../../App/Themes'
import styles from './Styles/SignupBusinessHourStyles'

const { width, height } =Dimensions.get('window')

const WEEKS = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
]

export default class SignupBusinessHour extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            weekTimeStrings: ['', '', '', '', '', '', ''],
            weekOpenTimeStrings: ['', '', '', '', '', '', ''],
            weekCloseTimeStrings: ['', '', '', '', '', '', ''],
            weekDayStates: [false, false, false, false, false, false, false],
            openState: false,
            closeState: false,
            weekOpenTimes: [null, null, null, null, null, null, null],
            weekCloseTimes: [null, null, null, null, null, null, null]
        }
        
    }

    static navigationOptions = {
        header : null,
    }

    onBackClick = () => {
        this.setState({
            weekDayStates: [false, false, false, false, false, false, false],
        })
        this.props.chooseOperationHours(this.state.weekOpenTimes, this.state.weekCloseTimes)
        this.props.close()
    }

    onDoneClick = () => {
        this.setState({
            weekDayStates: [false, false, false, false, false, false, false],
        })
        this.props.chooseOperationHours(this.state.weekOpenTimes, this.state.weekCloseTimes)
        this.props.close()
    }

    validate = () => {
        return true
    }

    onWeekDayClick = (index) => {
        let state = this.state.weekDayStates[index]
        let tempStates = [false, false, false, false, false, false, false]
        tempStates[index] = !state

        this.setState({
            openState: false,
            closeState: false,
            weekDayStates: tempStates,            
        })
    }

    onOpenClick = ()  => {
        this.setState({
            openState: !this.state.openState,
            closeState: false,
        })
    }

    onCloseClick = () => {
        this.setState({
            closeState: !this.state.closeState,
            openState: false,
        })
    }

    onOpenTimeChange = (index, time) => {
        let tempOpenTimes = this.state.weekOpenTimes
        tempOpenTimes[index] = time

        let tempOpenTimeStrings = this.state.weekOpenTimeStrings
        tempOpenTimeStrings[index] = dateFormat(time, 'hh:MM TT')


        let tempCloseTimes = this.state.weekCloseTimes
        tempCloseTimes[index] = time

        let tempCloseTimeStrings = this.state.weekCloseTimeStrings
        tempCloseTimeStrings[index] = ''

        let tempTimeStrings = this.state.weekTimeStrings
        tempTimeStrings[index] = tempOpenTimeStrings[index]

        this.setState({
            weekOpenTimes: tempOpenTimes,
            weekOpenTimeStrings: tempOpenTimeStrings,
            weekCloseTimes: tempCloseTimes,
            weekCloseTimeStrings: tempCloseTimeStrings,
            weekTimeStrings: tempTimeStrings,
        })
    }

    onCloseTimeChange = (index, time) => {
        let tempCloseTimes = this.state.weekCloseTimes
        tempCloseTimes[index] = time

        let tempCloseTimeStrings = this.state.weekCloseTimeStrings
        tempCloseTimeStrings[index] = dateFormat(time, 'hh:MM TT')

        let tempTimeStrings = this.state.weekTimeStrings
        tempTimeStrings[index] = this.state.weekOpenTimeStrings[index] + ' to ' + tempCloseTimeStrings[index]

        this.setState({
            weekCloseTimes: tempCloseTimes,
            weekCloseTimeStrings: tempCloseTimeStrings,
            weekTimeStrings: tempTimeStrings,
        })
    }

    render() {
        return (
        <Modal animationType={'fade'} transparent={true} visible={this.props.signupBusinessHourModalVisible}
            onRequestClose={() => alert()}>
        <View style={styles.container} >
            <ImageBackground style={styles.containerTop} resizeMode='cover' 
                source={Images.mHeder} >
                <View style={styles.nav} >
                    <TouchableOpacity onPress={() => this.onBackClick()}>
                        <Image source={Images.back_img} style={styles.navLeftImg} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <Text style={styles.navCenter} >{'Hours'}</Text>
                    {this.validate() &&
                    <TouchableOpacity onPress={() => this.onDoneClick()} style={styles.navRightFrame} >
                        <Text style={{fontSize: 16}} >DONE</Text>
                    </TouchableOpacity> 
                    }                                       
                </View>
            </ImageBackground>

            <ScrollView>
                <View style={styles.content} >
                    

                    {WEEKS.map((weekName, index) => {
                        return (
                        <View key={index.toString()} >
                            <TouchableOpacity style={styles.item} activeOpacity={0.8} onPress={() => this.onWeekDayClick(index)} >
                                <Text style={{fontSize: 18}} >{weekName}</Text>
                                <Text style={styles.itemTimeText} >{this.state.weekTimeStrings[index]}</Text>
                            </TouchableOpacity>
                            {this.state.weekDayStates[index] && 
                            <TouchableOpacity style={styles.item} activeOpacity={0.8} onPress={() => this.onOpenClick()} >
                                <Text style={{fontSize: 18, paddingLeft: 24}} >Open</Text>
                                <Text style={[styles.itemTimeText, this.state.openState ? {color: '#8d3b50'} : {color: 'rgba(0, 0, 0, 0.5)'}]}>
                                    {this.state.weekOpenTimeStrings[index]}
                                </Text>
                            </TouchableOpacity>
                            }
                            {this.state.weekDayStates[index] && this.state.openState&&
                            <DatePickerIOS
                                mode="time"
                                date={this.state.weekOpenTimes[index] ? this.state.weekOpenTimes[index] : new Date()}
                                minuteInterval={15}
                                onDateChange={(date) => this.onOpenTimeChange(index, date)}
                                //minimumDate={this.state.weekOpenTimes[index]}
                            />
                            }
                            
                            {this.state.weekDayStates[index] &&
                            <TouchableOpacity style={styles.item} activeOpacity={0.8} onPress={() => this.onCloseClick()} >
                                <Text style={{fontSize: 18, paddingLeft: 24}} >Close</Text>
                                <Text style={[styles.itemTimeText, this.state.closeState ? {color: '#8d3b50'} : {color: 'rgba(0, 0, 0, 0.5)'}]}>
                                    {this.state.weekCloseTimeStrings[index]}
                                </Text>
                            </TouchableOpacity>
                            }     
                            {this.state.weekDayStates[index] && this.state.closeState&&
                            <DatePickerIOS
                                mode="time"
                                date={this.state.weekCloseTimes[index] ? this.state.weekCloseTimes[index] : new Date()}
                                minuteInterval={15}
                                onDateChange={(date) => this.onCloseTimeChange(index, date)}
                                minimumDate={this.state.weekOpenTimes[index]}
                            />
                            }               
                        </View>
                        )
                    
                    })}

                </View>
            </ScrollView>
        </View>
        </Modal>
        )

    }




}