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
    Modal,
} from 'react-native'

import { Images } from '../../Themes'
import styles from './Styles/SignupBusinessServiceStyles'

const { width, height } =Dimensions.get('window')

const SIGNUP_AVAILABLE_SERVICES =[
    'I can provide food-safe containers',
    'I can rescue donations within 3hrs',
    'I have refrigrated vehicles',
    'I have vehicles with coolers',
]

var originServiceItems = [false, false, false, false]

export default class SignupBusinessService extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            avatar: null,
            modalServiceItems: [false, false, false, false],
        }
        
    }

    static navigationOptions = {
        header : null,
    }

    componentWillMount() {
        /*let items = this.props.navigation.state.params.serviceItems
        console.log('Initial Prev Service Items', items)
        this.setState({
            avatar: this.props.navigation.state.params.avatar,
            serviceItems: items,
        })*/
        console.log('Signup Business Service Component Will Mount...')
    }

    onBackClick = () => {        
        //this.props.navigation.goBack() 
        /*this.itemSelected = false
        this.setState({modalServiceItems: this.state.originServiceItems}, function() {
            this.props.close()
        })*/      
        this.props.chooseServiceItems(this.state.modalServiceItems)  
            
    }

    onDoneClick = () => {
        /*let items = this.state.serviceItems
        this.props.navigation.state.params.onBack(items)
        this.props.navigation.goBack()*/    
        this.props.chooseServiceItems(this.state.modalServiceItems)      
    }

    onItemClick = (index) => {   
        //this.setState({originServiceItems: this.props.serviceItems.slice(0, 4)})

        var tempItems = this.state.modalServiceItems
        tempItems[index] = !tempItems[index]
        this.setState({
            modalServiceItems: tempItems
        })
    }

    validate = () => {
        var selectedOne = false
        let items = this.state.modalServiceItems
        for (var i = 0; i < items.length; i++) {
            if (items[i]) {
                selectedOne = true
                break
            }            
        }
        return selectedOne
    }

    

    render() {
        return (
        <Modal animationType={'fade'} transparent={true} visible={this.props.signupBusinessServiceModalVisible}
            onRequestClose={() => alert()}>
        <View style={styles.container} >
            <ImageBackground style={styles.containerTop} resizeMode='cover' 
                source={this.props.avatar ? this.props.avatar : Images.operation_info_bg} >
                {this.props.avatar && <View style={styles.overlay} />}
                <View style={styles.nav} >
                    <TouchableOpacity onPress={() => this.onBackClick()}>
                        <Image source={Images.back_img} style={styles.navLeftImg} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <Text style={styles.navCenter} >{' '}</Text>
                    {this.validate() &&
                    <TouchableOpacity onPress={() => this.onDoneClick()} style={styles.navRightFrame} >
                        <Text style={{fontSize: 16}} >DONE</Text>
                    </TouchableOpacity> 
                    }                                       
                </View>

                <Text style={[styles.titleText, {marginTop: 16}]} >Select all that apply</Text>
                <Text style={[styles.titleText, (width < 370) ? {fontSize: 25} : {fontSize: 28}]}>Available Services</Text>
            </ImageBackground> 

            <View >
                {SIGNUP_AVAILABLE_SERVICES.map((serviceName, index) => {
                    return (
                    <TouchableOpacity onPress={() => this.onItemClick(index)} activeOpacity={0.5} key={index.toString()} >
                        <View style={styles.item} >
                            {this.state.modalServiceItems[index] ?
                            <Image source={Images.done} style={styles.itemCheckDone} resizeMode={'contain'} />
                            : 
                            <View style={styles.itemCheckFrame } ></View>
                            }             
                            <Text style={[styles.itemText, this.state.modalServiceItems[index] ? {opacity: 0.5} : {opacity: 1}]} >{serviceName}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                }) }
                
            </View>   

        </View>
        </Modal>
        )
    }




}