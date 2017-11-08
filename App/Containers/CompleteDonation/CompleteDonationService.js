import React from 'react'
import { 
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    Dimensions, 
    ImageBackground, 
    TouchableWithoutFeedback,
    FlatList,
    AsyncStorage,
} from 'react-native'
import { NavigationActions } from 'react-navigation'

import { Images } from '../../Themes'
import styles from './Styles/CompleteDonationServiceStyles'

const { width, height } =Dimensions.get('window')
var AVATAR_URI_KEY = '@avatar_uri';

export default class CompleteDonationService extends React.Component {

    constructor(props) {
        super(props)
        const dataObjects = [
            {name: 'Service 1', checked: false},
            {name: 'Service 2', checked: false},
            {name: 'Service 3', checked: false},
            {name: 'Service 4', checked: false},
            {name: 'Service 5', checked: false},
            {name: 'Service 6', checked: false},
            {name: 'Service 7', checked: false},
            {name: 'Service 8', checked: false},
            {name: 'Service 9', checked: false},
            {name: 'Service 10', checked: false},
            {name: 'Service 11', checked: false},
            {name: 'Service 12', checked: false},
            {name: 'Service 13', checked: false},
        ]

        this.state = {
            dataSource: dataObjects,
            isServiceSelected: false,
            avatar: null,
        }
    }

    static navigationOptions = {
        header:null,
    }

    componentDidMount() {
        AsyncStorage.getItem(AVATAR_URI_KEY).then((avatar_uri) => {
            this.setState({avatar: {uri: avatar_uri}})
        })        
    }

    _renderItem(item, index) {
        return (
            <TouchableOpacity onPress={() => this._updateDataSource(!item.checked, index)} activeOpacity={1} >
                <View style={styles.item} >
                    {item.checked ?
                    <Image source={Images.done} style={styles.itemCheckDone} resizeMode={'contain'} />
                    : 
                    <View style={styles.itemCheckFrame } ></View>
                    }                    
                    <Text style={[styles.itemText, item.checked ? {color : 'black'} : {color: '#8e8e92'}]} >{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    checkSelected = () => {
        var checked = false
        checked = false
        this.state.dataSource.map((value, i) => {
            if (value.checked) checked = true
        })
        if (checked) {
            this.setState({isServiceSelected: true})
        } else {
            this.setState({isServiceSelected: false})
        }        
    }

    _updateDataSource(checked, index) {
        //console.log('Checked', checked)
        //console.log('Index', index)
        let dataSource = [...this.state.dataSource]
        dataSource[index].checked = checked
        this.setState({dataSource}, function() {
            this.checkSelected()
        })
    }

    onBackClick = () => {
        /*let navigationAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'FindDonation'})
            ]
        })
        this.props.navigation.dispatch(navigationAction)*/
        /*let key = this.props.navigation.state.key
        this.props.navigation.goBack(key)*/
        this.props.navigation.goBack()
    }

    onNextClick = () => {
        this.props.navigation.navigate(
            'CompleteDonationDelivery',  
            {          
                backKey: this.props.navigation.state.key,
                postData: this.props.navigation.state.params.postData
            }
        )
    }

    render() {
        return(
        <View style={styles.container} >
            <View style={styles.containerTop} >
                <ImageBackground source={this.state.avatar ? this.state.avatar : Images.complete_donation_top_bg} style={styles.imgBg} resizeMode={'cover'} >
                    {this.state.avatar && <View style={styles.overlay} />}
                    <View style={styles.nav}>
                        <TouchableOpacity onPress={() => this.onBackClick() }>
                            <Image source={Images.backIcon} style={styles.navLeftIcon} />
                        </TouchableOpacity>
                        <Text style={styles.navText}>New Food Donation</Text>
                        {!this.state.isServiceSelected &&
                        <TouchableOpacity onPress={() => this.onNextClick()} >
                            <Text style={[styles.postBtnText,]}>SKIP</Text>
                        </TouchableOpacity>
                        }
                        
                    </View>
                    <Image source={Images.status_full} style={styles.statusImg} resizeMode={'contain'} />
                    <Text style={styles.statusText} >STEP 2</Text>
                    <View style={styles.titleTextFrame} >
                            <Text style={styles.titleText} >Request Services</Text>
                    </View>                        
                </ImageBackground>                    
            </View>

            <FlatList
                data={this.state.dataSource}
                renderItem={({item, index}) =>this._renderItem(item, index)}
                keyExtractor={(item, index) => index}
                style={{marginBottom: 60}}
            />
            {!this.state.isServiceSelected ?
            <TouchableOpacity 
                style={styles.skipFrame} 
                onPress={() => this.onNextClick()} 
            >
                <Text style={styles.buttonText} >Skip This Step</Text>
                <Image source={Images.skip} style={styles.skipIcon} />
            </TouchableOpacity>
            :
            <TouchableOpacity 
                style={styles.requestFrame} 
                onPress={() => this.onNextClick()} 
            >
                <Text style={styles.buttonText} >ADD REQUESTED SERVICES</Text>
            </TouchableOpacity>
            }
            
        </View>
        )
        
    }

}

