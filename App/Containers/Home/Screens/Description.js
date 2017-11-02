import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Dimensions, TextInput, ScrollView } from 'react-native'
import { Images } from '../../../Themes'
import styles from '../Styles/DescriptionStyles'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Meteor from 'react-native-meteor'
import { RNS3 } from 'react-native-aws3'


export default class MainScreen extends Component {
    constructor() {
        super()
        this.state = {  }
    }

    static navigationOptions = {
        header: null,
    }


    render() {
        return (
            <View style={[styles.dContainer]}>
                <View style={styles.dHeader}></View>
                <View style={styles.dHeaderInner}>
                    <TouchableOpacity style={styles.dLeftHeader}>
                        <Image source={Images.orangeBack} style={styles.orange_baak_button} />
                    </TouchableOpacity>
                    <Text style={styles.headertitle}>Description:</Text>
                    <TouchableOpacity style={styles.dRightHeader} onPress={this.onAdd}>
                        <Text style={styles.save_button}>Save</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, width: Dimensions.get('window').width }}>
                        <TextInput placeholder='Start writing name of a food item…'
                            style={styles.multi_text} multiline={true} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
