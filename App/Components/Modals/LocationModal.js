import React from 'react'
import { 
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    Dimensions, 
    TouchableWithoutFeedback,
    FlatList,
    Modal,
    TextInput,
} from 'react-native'
import RNGooglePlaces from 'react-native-google-places'

import { Images } from '../../Themes'
import styles from '../Styles/LocationModalStyles'

const { width, height } =Dimensions.get('window')

export default class LocationModal extends React.Component {

    constructor(props) {
        super (props)

        const tempData = [
            {primaryText: 'New York Avenue Northwest New York Avenue Northwest', secondaryText: 'Washington, DC, United States'},
            {primaryText: 'New York 25A', secondaryText: 'Queens, NY, United States'},
            {primaryText: 'New York 59', secondaryText: 'Hillburn, NY, United States'},
            {primaryText: 'New York Avenue', secondaryText: 'Huntington Station, NY, United States'},
            {primaryText: 'New York Avenue', secondaryText: 'Washington, DC, United States'},
        ]
        this.state={
            searchTerm: '',
            dataSource: [],
        }
    }

    onSearch = (text) => {
        this.setState({searchTerm: text})
        if (text.length > 3) {
            RNGooglePlaces.getAutocompletePredictions(text, {
                //type: 'address',                
            }).then((place) => {
                //console.log(place)
                this.setState({dataSource: place})
            }).catch(error =>console.log(error.message))
        } else {
            this.setState({dataSource: []})
        }

    }

    onSubmitEditing = () => {
        /*RNGooglePlaces.lookUpPlaceByID('ChIJGzEJAF2z5YkRut_Kgv1Z0bE').then((results) => {
            console.log(results)
        }).catch(error => console.log(error.message))*/
    }

    onClose = () => {        
        this.setState({searchTerm: '', dataSource: []}, function() {
            this.props.close()
        })
    }

    onDelete =  () => {
        this.setState({
            searchTerm: '',
            dataSource: [],
        })
    }

    _renderItem(item, index) {
        return (
            <TouchableOpacity onPress={() => {}} activeOpacity={1} >
                <View style={styles.item} >
                    <Image 
                        source={Images.pin_orange} 
                        resizeMode= {'contain'} 
                        style={{width: 25, height: 25, tintColor: '#9e9e9e', marginRight: 10}} 
                    />
                    <View style={{flex: 1, flexDirection: 'column'}} >
                        <Text style={{fontSize: 17, paddingTop: 16, flex: 1, }} >{item.primaryText}</Text>
                        <Text style={{fontSize: 15, paddingBottom: 16, flex: 1, color: '#9e9e9e'}}>{item.secondaryText}</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.onItemClick(item)} >
                        <Image source={Images.arrow_45} resizeMode={'contain'} style={{width: 20, height: 20, tintColor: '#9e9e9e', marginLeft: 10}} />
                    </TouchableOpacity>                                        
                    
                </View>
            </TouchableOpacity>
        )
    }

    onItemClick = (item) => {
        RNGooglePlaces.lookUpPlaceByID(item.placeID).then((results) => {
           // console.log(results)
           let locationData={
               lat: results.latitude,
               lon: results.longitude,
               address: results.address,
               name: results.name,
           }
            this.props.itemSelected(locationData)
            this.setState({searchTerm: '', dataSource: []}, function() {
                this.props.close()
            })
        }).catch(error => console.log(error.message))
    }

    render() {
        return (
        <Modal animationType={'fade'} transparent={true} visible={this.props.locationModalVisible}
            onRequestClose={() => alert()}>

            <View style={styles.container} >
                <View style={styles.innerContainer} >
                    <View style={styles.searchFrame} >
                        <TouchableOpacity onPress={() =>this.onClose()} >
                            <View style={styles.searchBtnFrame} >
                                <Image source={Images.arrow_left} resizeMode={'contain'} style={styles.backImg} />
                            </View>
                        </TouchableOpacity>
                        <TextInput
                            autoFocus
                            placeholder='Search'
                            style={styles.searchInput}
                            value={this.state.searchTerm}
                            onChangeText={(text) => this.onSearch(text)}
                            autoCapitalize='none'
                            onSubmitEditing={() => this.onSubmitEditing()}
                            returnKeyType={'search'}
                            autoCorrect={false}
                        />  
                        <TouchableOpacity onPress={() => this.onDelete()} >
                            <View style={styles.searchBtnFrame}>
                                <Image source={Images.close} resizeMode={'contain'} style={styles.backImg} />
                            </View>                        
                        </TouchableOpacity>   
                    </View>

                    <View style={styles.gap} />

                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({item, index}) =>this._renderItem(item, index)}
                        keyExtractor={(item, index) => index}
                        style={{}}
                    />

                </View>

            </View>

        </Modal>
        )
    }


}