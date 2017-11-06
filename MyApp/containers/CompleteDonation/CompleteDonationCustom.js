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
} from 'react-native'

import {NavigationActions} from 'react-navigation'

import { Images } from '../../DevTheme'
import styles from './Styles/CompleteDonationCustomStyles'

const { width, height } =Dimensions.get('window')
const PickerItem = Picker.Item;
const pickerData1 = [
    'first', 'second', 'third', 'fourth'
]
const pickerData1Desc = [
    '1st', '2nd', '3rd', '4th'
]

const pickerData2 = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]


export default class CompleteDonationCustom extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            switchIsOn: false,
            months: [
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
            ],
            selectedMonthItem: 1,
            selectedPickerItem1: 0,
            selectedPickerItem2: 0,
            descriptionText: 'Event will occur every year.',
        }
        
    }

    static navigationOptions = {
        header : null,
    }

    componentWillMount() {
        var today = new Date()
        currentMonth = today.getMonth()
        this.setState({selectedMonthItem: currentMonth})
        this.onClickMonth(currentMonth)
    }

    onClickMonth = (index) => {
        this.setState({selectedMonthItem: index})
        var tempMonths = [
            false, false, false, false,
            false, false, false, false,
            false, false, false, false,
        ]
        tempMonths[index] = true
        this.setState({ months: tempMonths}, function() {
            this.setDescriptionText()
        })
    }

    onSwitchChanged = (value) => {
        this.setState({switchIsOn: value}, function() {
            this.setDescriptionText()
        })
    }

    onPicker1Changed = (index) => {
        this.setState({selectedPickerItem1: index}, function() {
            this.setDescriptionText()
        })
    }

    onPicker2Changed = (index) => {
        this.setState({selectedPickerItem2: index}, function() {
            this.setDescriptionText()
        })
    }

    setDescriptionText() {
        var text = 'Event will occur every year.'
        if (this.state.switchIsOn) {
            text = 'Event will occur every year on the ' + pickerData1Desc[this.state.selectedPickerItem1] 
            + ' ' + pickerData2[this.state.selectedPickerItem2] + ' of ' + monthNames[this.state.selectedMonthItem]
        } 
        this.setState({descriptionText: text})
    }

    onBackClick = () => {
        if (this.state.switchIsOn) {
            let customStr = this.state.selectedMonthItem.toString() + ':' 
                             + this.state.selectedPickerItem1 + ':' 
                             + this.state.selectedPickerItem2

            this.props.navigation.state.params.onGoBack(customStr)
            this.props.navigation.goBack()
        } else {
            this.props.navigation.goBack()
            /*let navigationAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'CompleteDonationDetails'})
                ]
            })
            this.props.navigation.dispatch(navigationAction)*/
        }
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

                <View style={[styles.gapFrame, styles.borderBottom]} /> 

                <View style={styles.content} >
                    <TouchableWithoutFeedback>
                        <View style={[styles.item, styles.borderBottom]} >
                            <Text style={styles.itemText} >Frequency</Text>
                            <Text style={[styles.itemText, {color: '#8a8a8f'}]} >Yearly</Text>
                        </View>
                    </TouchableWithoutFeedback>
                     
                    <TouchableWithoutFeedback>
                        <View style={styles.item} >
                            <Text style={styles.itemText} >Every</Text>
                            <Text style={[styles.itemText, {color: '#8a8a8f'}]} >Year</Text>
                        </View>
                    </TouchableWithoutFeedback>          
                </View>   

                <View style={[styles.gapFrame, styles.borderTop, {height: 50, justifyContent: 'center'}]} >
                    <Text style={{color: '#8a8a8f', paddingLeft: 20, paddingRight: 20}} >{this.state.descriptionText}</Text>
                </View> 

                <View style={styles.monthRow} >                    
                    <TouchableOpacity 
                        style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.months[0] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                        onPress={() =>{this.onClickMonth(0)}}
                    >
                        <Text style={[styles.itemText, this.state.months[0] ? {color: 'white'} : {color: 'black'}]} >Jan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.months[1] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                        onPress={() =>{this.onClickMonth(1)}}
                    >
                        <Text style={[styles.itemText, this.state.months[1] ? {color: 'white'} : {color: 'black'}]} >Feb</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.months[2] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                        onPress={() =>{this.onClickMonth(2)}}
                    >
                        <Text style={[styles.itemText, this.state.months[2] ? {color: 'white'} : {color: 'black'}]} >Mar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.months[3] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                        onPress={() =>{this.onClickMonth(3)}}
                    >
                        <Text style={[styles.itemText, this.state.months[3] ? {color: 'white'} : {color: 'black'}]} >Apr</Text>
                    </TouchableOpacity>
                </View>     
                <View style={styles.monthRow} >
                    <TouchableOpacity 
                        style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.months[4] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                        onPress={() =>{this.onClickMonth(4)}}
                    >
                        <Text style={[styles.itemText, this.state.months[4] ? {color: 'white'} : {color: 'black'}]} >May</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.months[5] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                        onPress={() =>{this.onClickMonth(5)}}
                    >
                        <Text style={[styles.itemText, this.state.months[5] ? {color: 'white'} : {color: 'black'}]} >Jun</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.months[6] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                        onPress={() =>{this.onClickMonth(6)}}
                    >
                        <Text style={[styles.itemText, this.state.months[6] ? {color: 'white'} : {color: 'black'}]} >Jul</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.months[7] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                        onPress={() =>{this.onClickMonth(7)}}
                    >
                        <Text style={[styles.itemText, this.state.months[7] ? {color: 'white'} : {color: 'black'}]} >Aug</Text>
                    </TouchableOpacity>
                </View> 
                <View style={[styles.monthRow, styles.borderBottom]} >
                    <TouchableOpacity 
                        style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.months[8] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                        onPress={() =>{this.onClickMonth(8)}}
                    >
                        <Text style={[styles.itemText, this.state.months[8] ? {color: 'white'} : {color: 'black'}]} >Sep</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.months[9] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                        onPress={() =>{this.onClickMonth(9)}}
                    >
                        <Text style={[styles.itemText, this.state.months[9] ? {color: 'white'} : {color: 'black'}]} >Oct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.months[10] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                        onPress={() =>{this.onClickMonth(10)}}
                    >
                        <Text style={[styles.itemText, this.state.months[10] ? {color: 'white'} : {color: 'black'}]} >Nov</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.monthItem, styles.borderTop, styles.borderLeft, this.state.months[11] ? {backgroundColor: '#ff3b30'} : {backgroundColor: 'white'}]} 
                        onPress={() =>{this.onClickMonth(11)}}
                    >
                        <Text style={[styles.itemText, this.state.months[11] ? {color: 'white'} : {color: 'black'}]} >Dec</Text>
                    </TouchableOpacity>
                </View>   

                <View style={[styles.gapFrame, styles.borderBottom]} />   

                <View style={[styles.item, styles.borderBottom, {paddingLeft: 20, backgroundColor: 'white'}]} >
                    <Text style={styles.itemText} >Days of Week</Text>
                    <Switch
                    onValueChange={(value) => {this.onSwitchChanged(value)}}
                    value={this.state.switchIsOn} 
                    />
                </View>  
                {this.state.switchIsOn &&
                <View style={{flex: 1, flexDirection: 'row'}} >
                 <Picker style={{width: width/2, height: 220, backgroundColor: 'white', opacity: 1, flex: 1}} 
                    selectedValue={this.state.selectedPickerItem1}
                    onValueChange={(index) => {this.onPicker1Changed(index)}}
                >
                    {pickerData1.map((value, i) => (
                        <PickerItem label={value} value={i} key={"money"+value}/>
                    ))}
                </Picker> 

                <Picker style={{width: width/2, height: 220, backgroundColor: 'white', opacity: 1, flex: 1}} 
                    selectedValue={this.state.selectedPickerItem2}
                    onValueChange={(index) => {this.onPicker2Changed(index)}}
                >
                    {pickerData2.map((value, i) => (
                        <PickerItem label={value} value={i} key={"money"+value}/>
                    ))}
                </Picker>
                </View>
               
                }
                  
            </View>
        )
    }

}

