import React from 'react'
import { 
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    Dimensions, 
    ImageBackground, 
    TouchableWithoutFeedback,
    Switch,
    Picker,
    ScrollView,
} from 'react-native'

import {NavigationActions} from 'react-navigation'

import { Images } from '../../Themes'
import styles from './Styles/CompleteDonationCustomStyles'

const { width, height } =Dimensions.get('window')
const PickerItem = Picker.Item;

const FREQUENCY = [
    'Daily', 'Weekly', 'Monthly', 'Yearly'
]

const FREQUENCY_NAME = [
    'Day', 'Week', 'Month', 'Year'
]

const WEEKS = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'day', 'weekday', 'weekend day'
]

const ORDER_NUMBER = [
    'first', 'second', 'third', 'fourth', 'fifth', 'last'
]

const SHORT_MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

const MONTH_DAYS = [
    '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
    '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th',
    '21th', '22th', '23th', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31th'
]

const MONTH_WEEK_ORDER = [
    '1st', '2nd', '3rd', '4th', '5th', 'last'
]

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]



export default class CompleteDonationCustom extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            toogleFrequency: false,
            selectedFrequencyItem: 0,

            toggleEvery: false,
            selectedEveryItem: 0,

            weeklyWeeks: [
                false, false, false, false, false, false, false
            ],

            monthlySwitch: true,
            monthlyDays: [
                false, false, false, false, false, false, false,
                false, false, false, false, false, false, false,
                false, false, false, false, false, false, false,
                false, false, false, false, false, false, false,
                false, false, false
            ],
            monthlySelectedOrderNumItem: 0,
            monthlySelectedWeekItem: 0,

            yearlyMonths: [
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
            ],
            yearlyWeekSwitchIsOn: false,
            yearlySelectedOrderNumItem: 0,
            yearlySelectedWeekItem: 0,   
            
            descriptionText: 'Event will occur every day.',
        }
        
    }

    getData = () => {
        customRepeatData = {
            selectedFrequencyItem: this.state.selectedFrequencyItem,
            selectedEveryItem: this.state.selectedEveryItem,
            descriptionText: this.state.descriptionText,
        }
        switch (this.state.selectedFrequencyItem) {
            case 0: //Daily...                
                break;
            case 1: //Weekly...
                customRepeatData.weeklyWeeks = this.state.weeklyWeeks
                break;
            case 2: //Monthly...
                customRepeatData.monthlySwitch = this.state.monthlySwitch
                customRepeatData.monthlyDays = this.state.monthlyDays
                customRepeatData.monthlySelectedOrderNumItem = this.state.monthlySelectedOrderNumItem
                customRepeatData.monthlySelectedWeekItem = this.state.monthlySelectedWeekItem               
                break;
            case 3: //Yearly
                customRepeatData.yearlyMonths = this.state.yearlyMonths
                customRepeatData.yearlyWeekSwitchIsOn = this.state.yearlyWeekSwitchIsOn
                customRepeatData.yearlySelectedOrderNumItem = this.state.yearlySelectedOrderNumItem
                customRepeatData.yearlySelectedWeekItem = this.state.yearlySelectedWeekItem
                break;        
            default:
                break;
        }

        return customRepeatData
    }

    static navigationOptions = {
        header : null,
    }

    componentWillMount() {
        var today = new Date()
        currentMonth = today.getMonth()

        let customData = this.props.navigation.state.params.customRepeatData
        if (customData) {
            switch (customData.selectedFrequencyItem) {
                case 0: //Daily...
                    this.setState({
                        selectedFrequencyItem: customData.selectedFrequencyItem,
                        selectedEveryItem: customData.selectedEveryItem,
                        descriptionText: customData.descriptionText,
                    })                    
                    break;
                case 1: //Weekly...
                    this.setState({
                        selectedFrequencyItem: customData.selectedFrequencyItem,
                        selectedEveryItem: customData.selectedEveryItem,
                        descriptionText: customData.descriptionText,
                        weeklyWeeks: customData.weeklyWeeks,
                    })
                    break;
                case 2: //Monthly...
                    this.setState({
                        selectedFrequencyItem: customData.selectedFrequencyItem,
                        selectedEveryItem: customData.selectedEveryItem,
                        descriptionText: customData.descriptionText,
                        monthlySwitch: customData.monthlySwitch,
                        monthlyDays: customData.monthlyDays,
                        monthlySelectedOrderNumItem: customData.monthlySelectedOrderNumItem,
                        monthlySelectedWeekItem: customData.monthlySelectedWeekItem,                        
                    })                    
                    break;
                case 3: //Yearly...
                    this.setState({
                        selectedFrequencyItem: customData.selectedFrequencyItem,
                        selectedEveryItem: customData.selectedEveryItem,
                        descriptionText: customData.descriptionText,
                        yearlyMonths: customData.yearlyMonths,
                        yearlyWeekSwitchIsOn: customData.yearlyWeekSwitchIsOn,
                        yearlySelectedOrderNumItem: customData.yearlySelectedOrderNumItem,
                        yearlySelectedWeekItem: customData.yearlySelectedWeekItem,
                    })                    
                    break;
                default:
                    break;
            }
        }

    }

    onFrequencyPickerChange  = (index) => {
        this.setState({selectedFrequencyItem: index}, function() {
            this.setDescriptionText()
        })
    }

    getEveryPickerData = () => {
        var numbers = []
        for (var i = 1; i < 1000; i++) {
            numbers.push(i.toString())           
        }
        return numbers
    }

    getEveryLabelPikerData = () => {
        if (this.state.selectedEveryItem > 0) {
            return FREQUENCY_NAME[this.state.selectedFrequencyItem].toLowerCase() + "s"
        } else {
            return FREQUENCY_NAME[this.state.selectedFrequencyItem].toLowerCase()
        }
    }

    onEveryPickerChange = (index) => {
        this.setState({selectedEveryItem: index}, function() {
            this.setDescriptionText()
        })
    }

    getEveryText = () => {        
        var text = ''
        if (this.state.selectedEveryItem > 0) {
            text = (this.state.selectedEveryItem + 1).toString().concat(" " + FREQUENCY_NAME[this.state.selectedFrequencyItem].toLowerCase(), "s")
        } else {
            text = FREQUENCY_NAME[this.state.selectedFrequencyItem]
        }
        return text
    }


    //Weekly.........................
    onWeeklyWeekClick = (index) => {
        var tempWeeks = this.state.weeklyWeeks
        tempWeeks[index] = !tempWeeks[index]
        this.setState({
            weeklyWeeks: tempWeeks,
            toogleFrequency: false,
            toggleEvery: false,
        }, function() {
            this.setDescriptionText()
        })
    }


    //Monthly.........................
    onMonthlySwitchClick = (state) => {
        this.setState({
            monthlySwitch: state,
            toogleFrequency: false,
            toggleEvery: false,
        }, function() {
            this.setDescriptionText()
        })
    }

    onMonthlyDayClick = (index) => {
        var tempDays = this.state.monthlyDays
        tempDays[index] = !tempDays[index]
        this.setState({
            monthlyDays: tempDays,
            toogleFrequency: false,
            toggleEvery: false,
        }, function() {
            this.setDescriptionText()
        })
    }

    onMonthlyOrderNumPickerChange = (index) => {
        this.setState({
            monthlySelectedOrderNumItem: index,
            toogleFrequency: false,
            toggleEvery: false,
        }, function() {
            this.setDescriptionText()
        })
    }

    onMonthlyWeekPickerChange = (index) => {
        this.setState({
            monthlySelectedWeekItem: index,
            toogleFrequency: false,
            toggleEvery: false,
        }, function() {
            this.setDescriptionText()
        })
    }


    //Yearly.........................
    onYearlyMonthClick = (index) => {
        var tempMonths = this.state.yearlyMonths
        tempMonths[index] = !tempMonths[index]
        this.setState({
            yearlyMonths: tempMonths,
            toogleFrequency: false,
            toggleEvery: false,
        }, function() {
            this.setDescriptionText()
        })
    }

    onYearlyWeekSwitchChange = (state) => {
        this.setState({
            yearlyWeekSwitchIsOn: state,
            toogleFrequency: false,
            toggleEvery: false,
        }, function() {
            this.setDescriptionText()
        })
    }

    onYearlyOrderNumPickerChange = (index) => {
        this.setState({
            yearlySelectedOrderNumItem: index,
            toogleFrequency: false,
            toggleEvery: false,
        })
    }

    onYearlyWeekPickerChange = (index) => {
        this.setState({
            yearlySelectedWeekItem: index,
            toogleFrequency: false,
            toggleEvery: false,
        }, function() {
            this.setDescriptionText()
        })
    }


    setDescriptionText() {
        var text = 'Event will occur every '

        switch (this.state.selectedFrequencyItem) {
            case 0: //daily...
                if (this.state.selectedEveryItem == 0) {
                    text += 'day.'
                } else {
                    text += (this.state.selectedEveryItem + 1).toString() + ' days.'
                }                
                break;
            case 1: //weekly...
                if (this.state.selectedEveryItem == 0) {
                    text += 'week '
                } else {
                    text += (this.state.selectedEveryItem + 1).toString() + ' weeks '
                }

                var selectedOne = false
                var selectedCount = 0
                for (var i = 0; i < this.state.weeklyWeeks.length; i++) {                    
                    if (this.state.weeklyWeeks[i]) {
                        selectedCount++
                        if (!selectedOne) {
                            text += 'on ' + WEEKS[i] + ' '
                            selectedOne = true                            
                        } else {
                            text += 'and ' + WEEKS[i] + ' '
                        }                        
                    }                    
                }
                text = text.trim() + '.'
                if (selectedCount == 7) {
                    text = 'Event will occur every day.'
                }
                break;
            case 2: //monthly...
                if (this.state.selectedEveryItem == 0) {
                    text += 'month '
                } else {
                    text += (this.state.selectedEveryItem + 1).toString() + ' months '
                }

                if (this.state.monthlySwitch) { //Each...
                    var selectedOne = false
                    for (var i = 0; i < this.state.monthlyDays.length; i++) {
                        if (this.state.monthlyDays[i]) {
                            if (!selectedOne) {
                                text += 'on the ' + MONTH_DAYS[i] + ' '
                                selectedOne = true
                            } else {
                                text += 'and ' + MONTH_DAYS[i] + ' '
                            }
                        }                        
                    }
                } else { //On the...
                    text += 'on the ' + MONTH_WEEK_ORDER[this.state.monthlySelectedOrderNumItem] + ' ' + WEEKS[this.state.monthlySelectedWeekItem]
                }
                text = text.trim() + '.'
                break;
            case 3: //yearly...
                if (this.state.selectedEveryItem == 0) {
                    text += 'year '
                } else {
                    text += (this.state.selectedEveryItem + 1).toString() + ' years '
                }

                var selectedOne = false
                if (!this.state.yearlyWeekSwitchIsOn) { //Days of Week switch OFF...
                    selectedOne = false
                    for (var i = 0; i < this.state.yearlyMonths.length; i++) {
                        if (this.state.yearlyMonths[i]) {
                            if (!selectedOne) {
                                text += 'in ' + MONTHS[i] + ' '
                                selectedOne = true
                            } else {
                                text += 'and ' + MONTHS[i] + ' '
                            }
                        }                        
                    }
                } else { //Days of Week switch ON...
                    text += 'on the ' + MONTH_WEEK_ORDER[this.state.yearlySelectedOrderNumItem] + ' ' + WEEKS[this.state.monthlySelectedWeekItem] + ' '
                    selectedOne = false
                    for (var i = 0; i < this.state.yearlyMonths.length; i++) {
                        if (this.state.yearlyMonths[i]) {
                            if (!selectedOne) {
                                text += 'of ' + MONTHS[i] + ' '
                                selectedOne = true
                            } else {
                                text += 'and ' + MONTHS[i] + ' '
                            }
                        }                        
                    }
                }


                break;
        
            default:
                break;
        }

        this.setState({descriptionText: text})
    }


    onBackClick = () => {
        let customRepeatData = this.getData()
        this.props.navigation.state.params.onGoBack(customRepeatData)
        this.props.navigation.goBack()
    }




    render() {
        return (
            <View style={styles.container} >
                <View style={{backgroundColor: '#f6f6f8'}} >
                    <View style={[styles.nav, styles.borderBottom]}>
                        <TouchableOpacity onPress={() => this.onBackClick()} >
                            <View style={{flexDirection: 'row'}} >
                                <Image source={Images.arrow_left} style={styles.navLeftIcon} />
                                <Text style={styles.navLeftText} >Repeat</Text>
                            </View>
                        </TouchableOpacity>                    
                        <Text style={styles.navText}>Custom</Text>
                    </View>
                </View>

            <ScrollView>

                <View style={[styles.gapFrame, styles.borderBottom]} /> 

                <View style={styles.content} >
                    <TouchableOpacity onPress={() => this.setState({
                            toogleFrequency: !this.state.toogleFrequency,
                            toggleEvery: false,
                        })} 
                    >
                        <View style={[styles.item, styles.borderBottom, {marginLeft: 20}]} >
                            <Text style={styles.itemText} >Frequency</Text>
                            <Text style={[styles.itemText, this.state.toogleFrequency ? {color: '#ff3b30'} : {color: '#8a8a8f'}]} >{FREQUENCY[this.state.selectedFrequencyItem]}</Text>
                        </View>
                    </TouchableOpacity>
                    {this.state.toogleFrequency &&
                    <Picker
                        selectedValue={this.state.selectedFrequencyItem}
                        onValueChange={(index) => this.onFrequencyPickerChange(index)}
                    >
                        {FREQUENCY.map((value, i) => (
                            <PickerItem label={value} value={i} key={"frequency"+value}/>
                        ))}
                    </Picker>
                    }
                     
                    <TouchableOpacity onPress={() =>this.setState({
                            toggleEvery: !this.state.toggleEvery,
                            toogleFrequency: false,
                        })}
                    >
                        <View style={[styles.item, this.state.toogleFrequency&&styles.borderTop, this.state.toggleEvery&&styles.borderBottom, {marginLeft: 20}]} >
                            <Text style={styles.itemText} >Every</Text>
                            <Text style={[styles.itemText, this.state.toggleEvery ? {color: '#ff3b30'} : {color: '#8a8a8f'}]} >{this.getEveryText()}</Text>
                        </View>
                    </TouchableOpacity>
                    {this.state.toggleEvery &&
                    <View style={{flex: 1, flexDirection: 'row'}} >
                        <Picker style={{width: width/2, backgroundColor: 'white', opacity: 1, flex: 1}} 
                            selectedValue={this.state.selectedEveryItem}
                            onValueChange={(index) => this.onEveryPickerChange(index)}
                        >
                            {this.getEveryPickerData().map((value, i) => (
                                <PickerItem label={value} value={i} key={"every"+value}/>
                            ))}
                        </Picker> 

                        <Picker style={{width: width/2, backgroundColor: 'white', opacity: 1, flex: 1}} 
                        >
                            <PickerItem label={this.getEveryLabelPikerData()} value={0} key={"every_label"}/>
                        </Picker>
                    </View>               
                    }          
                </View>   

                <View style={[styles.borderTop, (this.state.selectedFrequencyItem > 0)&&styles.borderBottom, {justifyContent: 'center'}]} >
                    <Text style={{color: '#8a8a8f', paddingHorizontal: 20, paddingTop: 8, paddingBottom: 24, fontSize: 13}} >{this.state.descriptionText}</Text>
                </View> 





                {(this.state.selectedFrequencyItem == 1) && //Weekly............................
                <View>
                    <View style={[styles.content, {paddingLeft: 20}]}>
                        {WEEKS.slice(0, 7).map((weekName, index) => {
                            return (
                            <TouchableOpacity onPress={() => this.onWeeklyWeekClick(index)} >
                                <View style={[styles.item, index<6 && styles.borderBottom]} >
                                    <Text style={styles.itemText} >{weekName}</Text>
                                    {this.state.weeklyWeeks[index] &&
                                    <Image source={Images.checked} resizeMode={'contain'} style={styles.icon} /> 
                                    }                                                      
                                </View>
                            </TouchableOpacity>
                            )                        
                        })}
                    </View>
                    <View style={[styles.borderBottom]} />
                </View>
                }



                {(this.state.selectedFrequencyItem == 2) && //Monthly............................
                <View>
                    <View style={[styles.content, {paddingLeft: 20}]}>
                        <TouchableOpacity onPress={() => this.onMonthlySwitchClick(true)}>
                            <View style={[styles.item, styles.borderBottom]} >
                                <Text style={styles.itemText}>Each</Text>
                                {this.state.monthlySwitch &&
                                <Image source={Images.checked} resizeMode={'contain'} style={styles.icon}/>
                                }                            
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onMonthlySwitchClick(false)}>
                            <View style={[styles.item]} >
                                <Text style={styles.itemText}>On the...</Text>
                                {!this.state.monthlySwitch &&
                                <Image source={Images.checked} resizeMode={'contain'} style={styles.icon}/>
                                } 
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.borderBottom]}/>
                </View>
                }
                
                {(this.state.selectedFrequencyItem == 2) && this.state.monthlySwitch &&
                <View>
                    <View style={styles.monthRow}>
                        {['1', '2', '3', '4', '5', '6', '7'].map((dayName, index) => {
                            return (
                            <TouchableOpacity 
                                style={[styles.monthItem, styles.borderLeft, this.state.monthlyDays[index] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                                onPress={() =>{this.onMonthlyDayClick(index)}}
                            >
                                <Text style={[styles.itemText, this.state.monthlyDays[index] ? {color: 'white'} : {color: 'black'}]} >{dayName}</Text>
                            </TouchableOpacity>
                            )
                        })}
                    </View>
                    <View style={styles.monthRow}>
                        {['8', '9', '10', '11', '12', '13', '14'].map((dayName, index) => {
                            return (
                            <TouchableOpacity 
                                style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.monthlyDays[index + 7] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                                onPress={() =>{this.onMonthlyDayClick(index + 7)}}
                            >
                                <Text style={[styles.itemText, this.state.monthlyDays[index + 7] ? {color: 'white'} : {color: 'black'}]} >{dayName}</Text>
                            </TouchableOpacity>
                            )
                        })}
                    </View>
                    <View style={styles.monthRow}>
                        {['15', '16', '17', '18', '19', '20', '21'].map((dayName, index) => {
                            return (
                            <TouchableOpacity 
                                style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.monthlyDays[index + 14] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                                onPress={() =>{this.onMonthlyDayClick(index + 14)}}
                            >
                                <Text style={[styles.itemText, this.state.monthlyDays[index + 14] ? {color: 'white'} : {color: 'black'}]} >{dayName}</Text>
                            </TouchableOpacity>
                            )
                        })}
                    </View>
                    <View style={styles.monthRow}>
                        {['22', '23', '24', '25', '26', '27', '28'].map((dayName, index) => {
                            return (
                            <TouchableOpacity 
                                style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.monthlyDays[index + 21] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                                onPress={() =>{this.onMonthlyDayClick(index + 21)}}
                            >
                                <Text style={[styles.itemText, this.state.monthlyDays[index + 21] ? {color: 'white'} : {color: 'black'}]} >{dayName}</Text>
                            </TouchableOpacity>
                            )
                        })}
                    </View>
                    <View style={styles.monthRow}>
                        {['29', '30', '31'].map((dayName, index) => {
                            return (
                            <TouchableOpacity 
                                style={[styles.monthItem, styles.borderTop, styles.borderLeft, (index==2)&&styles.borderRight, styles.borderBottom, this.state.monthlyDays[index + 28] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                                onPress={() =>{this.onMonthlyDayClick(index + 28)}}
                            >
                                <Text style={[styles.itemText, this.state.monthlyDays[index + 28] ? {color: 'white'} : {color: 'black'}]} >{dayName}</Text>
                            </TouchableOpacity>
                            )
                        })}
                        <View style={[styles.borderTop, styles.borderLeft, {flex: 4, backgroundColor: '#efeff4', borderLeftColor: '#efeff4'}]} />
                    </View>
                </View>
                }

                {(this.state.selectedFrequencyItem == 2) && !this.state.monthlySwitch &&
                 <View style={{flex: 1, flexDirection: 'row'}} >
                    <Picker style={{width: width/2, backgroundColor: 'white', opacity: 1, flex: 1}} 
                        selectedValue={this.state.monthlySelectedOrderNumItem}
                        onValueChange={(index) => this.onMonthlyOrderNumPickerChange(index)}
                    >
                        {ORDER_NUMBER.map((value, i) => (
                            <PickerItem label={value} value={i} key={"monthly_order"+value}/>
                        ))}
                    </Picker> 

                    <Picker style={{width: width/2, backgroundColor: 'white', opacity: 1, flex: 1}} 
                        selectedValue={this.state.monthlySelectedWeekItem}
                        onValueChange={(index) => this.onMonthlyWeekPickerChange(index)}
                    >
                        {WEEKS.map((value, i) => (
                            <PickerItem label={value} value={i} key={"monthly_week"+value}/>
                        ))}
                    </Picker>
                </View>
                }
                



                {(this.state.selectedFrequencyItem == 3) && //Yearly............................
                <View>
                    <View style={styles.monthRow} > 
                        {SHORT_MONTHS.slice(0, 4).map((monthName, index) => {
                            return (
                            <TouchableOpacity 
                                style={[styles.monthItem, styles.borderLeft, this.state.yearlyMonths[index] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                                onPress={() =>this.onYearlyMonthClick(index)}
                            >
                                <Text style={[styles.itemText, this.state.yearlyMonths[index] ? {color: 'white'} : {color: 'black'}]} >{monthName}</Text>
                            </TouchableOpacity>
                            )
                        })
                        }  
                    </View>     
                    <View style={styles.monthRow} >
                        {SHORT_MONTHS.slice(4, 8).map((monthName, index) => {
                            return (
                            <TouchableOpacity 
                                style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.yearlyMonths[index + 4] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                                onPress={() =>{this.onYearlyMonthClick(index + 4)}}
                            >
                                <Text style={[styles.itemText, this.state.yearlyMonths[index + 4] ? {color: 'white'} : {color: 'black'}]} >{monthName}</Text>
                            </TouchableOpacity>
                            )
                        })
                        }
                    </View> 
                    <View style={[styles.monthRow, styles.borderBottom]} >
                        {SHORT_MONTHS.slice(8, 12).map((monthName, index) => {
                            return (
                            <TouchableOpacity 
                                style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.yearlyMonths[index + 8] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                                onPress={() =>{this.onYearlyMonthClick(index + 8)}}
                            >
                                <Text style={[styles.itemText, this.state.yearlyMonths[index + 8] ? {color: 'white'} : {color: 'black'}]} >{monthName}</Text>
                            </TouchableOpacity>
                            )
                        })
                        }
                    </View>

                    <View style={[styles.gapFrame, styles.borderBottom]} />   

                    <View style={[styles.item, styles.borderBottom, {paddingLeft: 20, backgroundColor: 'white'}]} >
                        <Text style={styles.itemText} >Days of Week</Text>
                        <Switch
                            onValueChange={(value) => this.onYearlyWeekSwitchChange(value)}
                            value={this.state.yearlyWeekSwitchIsOn} 
                        />
                    </View> 
                </View>
                }

                {(this.state.selectedFrequencyItem == 3) && this.state.yearlyWeekSwitchIsOn &&
                <View style={{flex: 1, flexDirection: 'row'}} >
                    <Picker style={{width: width/2, backgroundColor: 'white', opacity: 1, flex: 1}} 
                        selectedValue={this.state.yearlySelectedOrderNumItem}
                        onValueChange={(index) => this.onYearlyOrderNumPickerChange(index)}
                    >
                        {ORDER_NUMBER.map((value, i) => (
                            <PickerItem label={value} value={i} key={"yearly_order"+value}/>
                        ))}
                    </Picker> 

                    <Picker style={{width: width/2, backgroundColor: 'white', opacity: 1, flex: 1}} 
                        selectedValue={this.state.yearlySelectedWeekItem}
                        onValueChange={(index) => this.onYearlyWeekPickerChange(index)}
                    >
                        {WEEKS.map((value, i) => (
                            <PickerItem label={value} value={i} key={"yearly_week"+value}/>
                        ))}
                    </Picker>
                </View>               
                }
            
            </ScrollView>
                  
            </View>
        )
    }

}

