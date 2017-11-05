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

import { Images } from '../../DevTheme'
import styles from './Styles/CompleteDonationCustomStyles'

const { width, height } =Dimensions.get('window')
const PickerItem = Picker.Item;
const pickerData = [
    ' first         Sunday  ', 
    ' second        Monday  ', 
    ' third         Tuesday ', 
    ' fourth       Wednesday',
    ' fifth        Thursday ',
    ' sixth        Friday   ',
    'seventh      Saturday  '
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
            selectedPickerItem: 0,
        }
        
    }

    static navigationOptions = {
        header : null,
    }

    componentWillMount() {
        var today = new Date()
        currentMonth = today.getMonth()
        this.onClickMonth(currentMonth)
    }

    onClickMonth = (index) => {
        var tempMonths = [
            false, false, false, false,
            false, false, false, false,
            false, false, false, false,
        ]
        tempMonths[index] = true
        this.setState({
            months: tempMonths
        })        
    }


    render() {
        return (
            <View style={styles.container} >
                <View style={{backgroundColor: '#f6f6f8'}} >
                    <View style={[styles.nav, styles.borderBottom]}>
                        <TouchableOpacity onPress={() => {this.props.navigation.goBack()}} >
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
                    <Text style={{color: '#8a8a8f', paddingLeft: 20, paddingRight: 20}} >Event will occur every year.</Text>
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
                    onValueChange={(value) => this.setState({switchIsOn: value})}
                    value={this.state.switchIsOn} 
                    />
                </View>  
                {this.state.switchIsOn &&
                <Picker style={{width: width, height: 220, backgroundColor: 'white', opacity: 1}} 
                    selectedValue={this.state.selectedPickerItem}
                    onValueChange={(index) => {this.setState({selectedPickerItem: index})}}
                >
                    {pickerData.map((value, i) => (
                        <PickerItem label={value} value={i} key={"money"+value}/>
                    ))}
                </Picker> 
                }
                  
            </View>
        )
    }

}

