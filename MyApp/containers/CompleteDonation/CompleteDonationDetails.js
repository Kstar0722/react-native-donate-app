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
} from 'react-native'
import dateFormat from 'dateformat';
import DatePicker from 'react-native-datepicker'


import DescriptionModal from '../../../App/Components/Modals/descriptionModal'

import { Images } from '../../DevTheme'
import styles from './Styles/CompleteDonationDetailStyles'

const { width, height } =Dimensions.get('window')
_dText='';
var REPEAT_TYPE_KEY = '@repeat_type';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        currentDate = new Date()
        this.state = {
            isEnabledButton: false,
            descriptionModalVisible: false,

            startDate: '',
            endDate: '',

            foodTypes_NonPerishable: false,
            foodTypes_Perishable: false,
            foodTypes_Prepared: false,

            repeat: 10
        }
    }

    validateData = () => {
        console.log('Validate.............')
        if (!_dText) {
            this.setState({
                isEnabledButton: false
            })
            return
        }
        if (!this.state.startDate) {
            this.setState({
                isEnabledButton: false
            })
            return
        }
        if (!this.state.endDate) {
            this.setState({
                isEnabledButton: false
            })
            return
        }
        //if () //location check
        if (!this.state.foodTypes_NonPerishable && !this.state.foodTypes_Perishable && !this.state.foodTypes_Prepared) {
            this.setState({
                isEnabledButton: false
            })
            return
        }
        if (this.state.repeat == 10) {
            this.setState({
                isEnabledButton: false
            })
            return
        }
        console.log('Validate Success...')
        this.setState({
            isEnabledButton: true
        })
    }

    componentDidMount() {
        
    }

    static navigationOptions = {
        header:null,
    }

    closeDescriptionModal = () => {
        this.setState({
          descriptionModalVisible: false
        })
        this.validateData()
    }

    refresh = (value) => {
        /*var value = AsyncStorage.getItem(REPEAT_TYPE_KEY).then(
            (values) => {
              console.log('Then: ',values);
        });*/
        console.log('Value: ', value)
        this.setState({repeat: value}, function() {
            console.log("Repeat:", this.state.repeat)
            this.validateData()
        })        
    }

    repeatTextOrIcon = () => {
        if (this.state.repeat == 10) {
           return <Image source={Images.timeline} resizeMode={'contain'} style={styles.icon} />
        } else {
            switch (this.state.repeat) {
                case 0:
                    return <Text style={{fontSize: 16}} >Never</Text>                    
                    break;
                case 1:
                    return <Text style={{fontSize: 16}} >Every Day</Text>                    
                    break;
                case 2:
                    return <Text style={{fontSize: 16}} >Every Week</Text>                    
                    break; 
                case 3:
                    return <Text style={{fontSize: 16}} >Every 2 Weeks</Text>                    
                    break;
                case 4:
                    return <Text style={{fontSize: 16}} >Every Month</Text>                    
                    break;
                case 5:
                    return <Text style={{fontSize: 16}} >Every Year</Text>                    
                    break;            
                default:
                    <Image source={Images.timeline} resizeMode={'contain'} style={styles.icon} />
                    break;
            }
        }
    }

    onStartDateChange = (date) => {
        this.setState({startDate: date, endDate: ''}, function() {
            this.validateData()
        })
    }

    onEndDateChange = (date) => {
        this.setState({endDate: date}, function() {
            this.validateData()
        })
    }

    onFoodTypePress = (index) => {
        switch (index) {
            case 1:
                this.setState({foodTypes_NonPerishable: !this.state.foodTypes_NonPerishable}, function() {
                    this.validateData()
                })
                break;
            case 2:
                this.setState({foodTypes_Perishable: !this.state.foodTypes_Perishable}, function() {
                    this.validateData()
                })
                break;
            case 3:
                this.setState({foodTypes_Prepared: !this.state.foodTypes_Prepared}, function() {
                    this.validateData()
                })        
            default:
                break;
        }
    }

    


    render() {
        console.log('Rendering.........')
        return (
            <View style={styles.container} >
                <View style={styles.containerTop} >
                    <ImageBackground source={Images.complete_donation_top_bg} style={styles.imgBg} resizeMode={'cover'} >
                        <View style={styles.nav}>
                            <TouchableOpacity onPress={() => {}}>
                                <Image source={Images.backIcon} style={styles.navLeftIcon} />
                            </TouchableOpacity>
                            <Text style={styles.navText}>New Food Donation</Text>
                            <Text style={[styles.postBtnText,]}>01</Text>
                        </View>
                        <Image source={Images.status_right} style={styles.statusImg} resizeMode={'contain'} />
                        <Text style={styles.statusText} >STEP 1</Text>
                        <View style={styles.titleTextFrame} >
                            <Text style={styles.titleText} >Donation Details</Text>
                        </View>                        
                    </ImageBackground>                    
                </View>
                
                <View style={{flex: 1}} >
                    <TouchableWithoutFeedback onPress={() => {this.setState({descriptionModalVisible: true})}} >
                        <View style={styles.descriptionFrame}>
                            <TouchableOpacity >
                                <Image source={Images.camera_full} resizeMode={'contain'} style={styles.cameraImg} />
                            </TouchableOpacity>
                            {_dText ?
                            <View style={{alignItems: 'center', marginTop: 13}} ><Text>CLICK TO VIEW OR EDIT DESCRIPTION</Text></View>
                            :
                            <Text style={{width: width/2}} >DESCRIPTION</Text>
                            }                            
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={styles.dateFrame} >
                        <Text>START DATE</Text>                        
                        <DatePicker
                            style={styles.datePickerStyle}
                            date= {this.state.startDate}
                            mode="datetime"
                            placeholder=" "
                            format="MMM D, YYYY hh:mm A"
                            confirmBtnText="Done"
                            cancelBtnText="Cancel"
                            iconSource = {Images.calendar}   
                            customStyles={{                                                                                         
                                dateIcon: {
                                    position: 'absolute',
                                    right: 0,
                                    width: this.state.startDate ? 0 : 30,
                                    height: this.state.startDate ? 0 : 30,
                                },
                                                    
                                dateInput: {
                                    borderColor:'#fff',
                                    marginLeft: -80,
                                    alignItems: 'flex-end'
                                }, 

                                dateText: {
                                    color: 'black',
                                    fontSize: 15,
                                }
                            }}
                            onDateChange={(date) => this.onStartDateChange(date)}                            
                        />
                    </View>

                    <View style={styles.dateFrame} >
                        <Text>END DATE</Text>
                        <DatePicker
                            style={styles.datePickerStyle}
                            date= {this.state.endDate}
                            minDate={new Date(this.state.startDate)}
                            mode="datetime"
                            placeholder=" "
                            format="MMM D, YYYY hh:mm A"
                            confirmBtnText="Done"
                            cancelBtnText="Cancel"
                            iconSource = {Images.calendar}   
                            customStyles={{                                                                                         
                                dateIcon: {
                                    position: 'absolute',
                                    right: 0,
                                    width: this.state.endDate ? 0 : 30,
                                    height: this.state.endDate ? 0 : 30,
                                },
                                                    
                                dateInput: {
                                    borderColor:'#fff',
                                    marginLeft: -100,
                                    alignItems: 'flex-end'
                                }, 

                                dateText: {
                                    color: 'black',
                                    fontSize: 15,
                                }
                            }}
                            onDateChange={(date) => this.onEndDateChange(date)}                            
                        />
                    </View>
                    
                    

                    <View style={styles.dateFrame} >
                        <Text>LOCATION</Text>
                        <TouchableOpacity>
                            <Image source={Images.location_gray} resizeMode={'contain'} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('CompleteDonationRepeat', {onGoBack: (value) => this.refresh(value)})}} >                            
                    <View style={styles.dateFrame} >
                        <Text>REPEAT</Text>
                        {this.repeatTextOrIcon()}                            
                        
                    </View>
                    </TouchableOpacity>

                    <View style={styles.dateFrame} >
                        <Text>FOOD TYPE</Text>
                        <View>
                            <TouchableOpacity onPress={() => this.onFoodTypePress(1)} >
                            <View style={styles.iconFrame} >
                                <Image source={this.state.foodTypes_NonPerishable ? Images.checked : Images.circle_ring } resizeMode={'contain'} style={[styles.checkboxCircle, this.state.foodTypes_NonPerishable ? { tintColor: '#f58a55'} : {tintColor: '#000'}]}  />                                                             
                                <Image source={this.state.foodTypes_NonPerishable ? Images.non_perishable_new : Images.nonperishable_gray} style={styles.icon} resizeMode={'contain'}  />
                            </View>
                            </TouchableOpacity>                            
                            <Text style={[styles.iconText, this.state.foodTypes_NonPerishable ? {color : 'black'} : {color: '#bebec0'}]}>NON-PERISHABLE</Text>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => this.onFoodTypePress(2)} >
                            <View style={[styles.iconFrame, {marginLeft: -15}]} >
                                <Image source={this.state.foodTypes_Perishable ? Images.checked : Images.circle_ring } resizeMode={'contain'} style={[styles.checkboxCircle, this.state.foodTypes_Perishable ? { tintColor: '#f58a55'} : {tintColor: '#000'}]}  />                                                           
                                <Image source={this.state.foodTypes_Perishable ? Images.perishable_black : Images.perishable_gray} style={styles.icon} resizeMode={'contain'} />
                            </View>
                            </TouchableOpacity>                            
                            <Text style={[styles.iconText, this.state.foodTypes_Perishable ? {color : 'black'} : {color: '#bebec0'}]} >PERISHABLE</Text>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => this.onFoodTypePress(3)} >
                            <View style={[styles.iconFrame, {marginRight: -5}]} >
                                <Image source={this.state.foodTypes_Prepared ? Images.checked : Images.circle_ring } resizeMode={'contain'} style={[styles.checkboxCircle, this.state.foodTypes_Prepared ? { tintColor: '#f58a55'} : {tintColor: '#000'}]} />                                                           
                                <Image source={this.state.foodTypes_Prepared ? Images.prepared_black : Images.prepared_gray} style={{width: 143*3/10, height: 30, tintColor: 'black'}} />
                            </View>
                            </TouchableOpacity>
                            
                            <Text style={[styles.iconText, this.state.foodTypes_Prepared ? {color : 'black'} : {color: '#bebec0'}]} >PREPARED</Text>
                        </View> 
                    </View>
                </View>                

                <TouchableOpacity 
                    style={[styles.containerBottom, this.state.isEnabledButton ? {backgroundColor: '#f58a55'} : {backgroundColor : '#fcdccb'}]} 
                    disabled={this.state.isEnabledButton ? false : true} 
                >
                    <Text style={styles.buttonText} >ADD DETAILS</Text>
                </TouchableOpacity>

                <DescriptionModal 
                    descriptionModalVisible={this.state.descriptionModalVisible} 
                    close={this.closeDescriptionModal}
                />

            </View>
        )
    }

}