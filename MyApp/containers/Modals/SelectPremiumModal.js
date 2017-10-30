import React from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Modal,
    Dimensions,
    FlatList,
} from 'react-native'
import { Images } from '../../DevTheme'
import styles from '../../Styles/SelectPremiumModalStyles'
import { Button } from 'react-native-elements'

screenWidth=Dimensions.get('window').width;
screenHeight=Dimensions.get('window').height;

export default class SelectPremiumModal extends React.Component {
    constructor() {
        super()

        const dataObjects = [
            {name: 'Deduction Slip', checked: false},
            {name: 'Containers', checked: true},
            {name: 'Refrigiration', checked: true},
            {name: 'Service Name', checked: false},
            {name: 'Service Name', checked: false},
            {name: 'Service Name', checked: false},
            {name: 'Service Name', checked: false},
            {name: 'Service Name', checked: false},
            {name: 'Service Name', checked: false},
            {name: 'Service Name', checked: false},
            {name: 'Service Name', checked: false},
            {name: 'Service Name', checked: false},
            {name: 'Service Name', checked: false},
        ]

        this.state = {
            dataSource: dataObjects
        }
    }

    _renderItem(item, index) {
        return (
            <TouchableOpacity onPress={() => this._updateDataSource(!item.checked, index)} activeOpacity={1} >
                <View style={styles.item} >
                    <View style={[styles.itemCheckFrame, item.checked ? {backgroundColor: '#dd8d6c'} : {backgroundColor: '#e8e8e9'}]} ></View>
                    <Text style={styles.itemText} >{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _updateDataSource(checked, index) {
        console.log('Checked', checked)
        console.log('Index', index)
        let dataSource = [...this.state.dataSource]
        dataSource[index].checked = checked
        this.setState({dataSource})
    }

    render() {
        return (
            <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.selectPremiumModalVisible}
            onRequestClose={() => {alert()}}
            >
                <View style={styles.container}>
                    <View style={styles.nav} >
                        <TouchableOpacity onPress={this.props.close}>
                            <Image source={Images.arrow_left} style={styles.backImg} />
                        </TouchableOpacity>
                        <Text style={styles.navTitle}>Select Premium Services required</Text>
                        <TouchableOpacity  onPress={this.props.next} >
                            <Image source={Images.arrow_right} style={styles.backImg} />
                        </TouchableOpacity>
                    </View>

                    <FlatList
                    data={this.state.dataSource}
                    renderItem={({item, index}) =>this._renderItem(item, index)}
                    keyExtractor={(item, index) => index}
                    />

                    <TouchableOpacity style={styles.addButton} underlayColor='#ffb660' onPress={()=>{}} > 
                        <Image source={Images.plus} style={styles.addButtonImage} />          
                    </TouchableOpacity>

                </View>
            </Modal>
        )
    }


}





