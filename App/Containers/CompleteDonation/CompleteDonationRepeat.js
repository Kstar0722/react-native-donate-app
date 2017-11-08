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

import { Images } from '../../Themes'
import styles from './Styles/CompleteDonationRepeatStyles'

const { width, height } =Dimensions.get('window')
_dText='';
var REPEAT_TYPE_KEY = '@repeat_type';

export default class CompleteDonationRepeat extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            repeatType: 0,
            customRepeatData: null,
        }
    }

    static navigationOptions = {
        header : null,
    }

    componentDidMount() {
        this.setState({
            repeatType: this.props.navigation.state.params.repeat,
            customRepeatData: this.props.navigation.state.params.customRepeatData,
        })
    }

    checkRepestType = (index) => {
        if (index == this.state.repeatType) {
            return true
        } else {
            return false
        }
    }

    onItemClick = (index) => {
        var ref = this
        this.setState({repeatType: index}, function() {
            ref.delayBack()
        })
    }

    delayBack = () => {
        /*AsyncStorage.setItem(REPEAT_TYPE_KEY, this.state.repeatType.toString()).then(() => {
            
        })*/
        this.props.navigation.state.params.onGoBack(this.state.repeatType)
        var ref = this
        setTimeout(function() {
            ref.props.navigation.goBack()
        }, 300);
    }

    setCustom = (custom) => {
        console.log(custom)
        this.setState({customRepeatData: custom})
    }

    onBackClick = () => {
        if (this.state.customRepeatData) {
            this.props.navigation.state.params.onGoBack(this.state.repeatType, this.state.customRepeatData)
        } else {
            this.props.navigation.state.params.onGoBack(0)
        }
        this.props.navigation.goBack()
    }

    render() {
        //console.log("Parameter,", this.props.navigation.state.params.repeat)
        
        return (
            <View style={styles.container} >
                <View style={{backgroundColor: '#f6f6f8'}} >
                    <View style={styles.nav}>
                        <TouchableOpacity onPress={() => this.onBackClick() } >
                            <View style={{flexDirection: 'row'}} >
                                <Image source={Images.arrow_left} style={styles.navLeftIcon} />
                                <Text style={styles.navLeftText} >Edit Event</Text>
                            </View>
                        </TouchableOpacity>                    
                        <Text style={styles.navText}>Repeat</Text>
                    </View>
                </View>

                <View style={styles.gapFrame} /> 

                <View style={styles.content} >
                    <TouchableWithoutFeedback onPress={() => this.onItemClick(0)} >
                        <View style={styles.item} >
                            <Text style={styles.itemText} >Never</Text>
                            {this.checkRepestType(0) &&
                            <Image source={Images.checked} resizeMode={'contain'} style={styles.icon} />
                            }                            
                        </View>
                    </TouchableWithoutFeedback>
                     
                    <TouchableWithoutFeedback onPress={() => this.onItemClick(1)} >
                        <View style={styles.item} >
                            <Text style={styles.itemText} >Every Day</Text>
                            {this.checkRepestType(1) &&
                            <Image source={Images.checked} resizeMode={'contain'} style={styles.icon} />
                            }
                        </View>
                    </TouchableWithoutFeedback>
                    
                    <TouchableWithoutFeedback onPress={() => this.onItemClick(2)} >
                        <View style={styles.item} >
                            <Text style={styles.itemText} >Every Week</Text>
                            {this.checkRepestType(2) &&
                            <Image source={Images.checked} resizeMode={'contain'} style={styles.icon} />
                            }
                        </View>
                    </TouchableWithoutFeedback>
                    
                    <TouchableWithoutFeedback onPress={() => this.onItemClick(3)}>
                        <View style={styles.item} >
                            <Text style={styles.itemText} >Every 2 Weeks</Text>
                            {this.checkRepestType(3) &&
                            <Image source={Images.checked} resizeMode={'contain'} style={styles.icon} />
                            }
                        </View>
                    </TouchableWithoutFeedback>
                    
                    <TouchableWithoutFeedback onPress={() => this.onItemClick(4)}>
                        <View style={styles.item} >
                            <Text style={styles.itemText} >Every Month</Text>
                            {this.checkRepestType(4) &&
                            <Image source={Images.checked} resizeMode={'contain'} style={styles.icon} />
                            }
                        </View> 
                    </TouchableWithoutFeedback>
                    
                    <TouchableWithoutFeedback onPress={() => this.onItemClick(5)}>
                        <View style={[styles.item, {borderBottomWidth: 0}]} >
                            <Text style={styles.itemText} >Every Year</Text>
                            {this.checkRepestType(5) &&
                            <Image source={Images.checked} resizeMode={'contain'} style={styles.icon} />
                            }
                        </View> 
                    </TouchableWithoutFeedback>                                   
                </View>   

                <View style={[styles.gapFrame, {borderTopColor: '#c6c6ca', borderTopWidth: 1}]} /> 

                <TouchableWithoutFeedback 
                    onPress={() => {this.setState({repeatType: 6}), 
                        this.props.navigation.navigate('CompleteDonationCustom', {
                            onGoBack: (custom) => this.setCustom(custom),
                            customRepeatData: this.state.customRepeatData 
                        })}
                    } 
                >
                    <View style={[styles.item, {backgroundColor: 'white', paddingLeft: 20}]} >
                        <Text style={styles.itemText} >Custom</Text>
                        {this.checkRepestType(6) ?
                        <Image source={Images.checked} resizeMode={'contain'} style={styles.icon}/>
                        :
                        <Image source={Images.arrow_right} resizeMode={'contain'} style={[styles.icon, {tintColor: '#c6c6ca'}]} />
                        }
                        
                    </View>
                </TouchableWithoutFeedback>                
            </View>
        )
    }

}

