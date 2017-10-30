import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native'
import { Images } from '../../../Themes';
import styles from '../Styles/SettingStyles';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Meteor from 'react-native-meteor';
import { RNS3 } from 'react-native-aws3';


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
            <Image source={Images.settingBackground} style={styles.settingBack}>
                <View style={styles.dHeaderInner}>
                    <TouchableOpacity style={styles.dLeftHeader}>
                        <Image source={Images.back_new} style={styles.backwhite} />
                    </TouchableOpacity>
                    <Text style={styles.headertitlen}>My Profile</Text>
                </View>
                <View style={styles.tabMenuPart}>
                    <View style={styles.tabMenuPart2}>
                        <TouchableOpacity style={[styles.tabmenu, styles.tabmenuActive]}>
                            <Text style={styles.tabmenuactiveText}>Personal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabmenu}>
                            <Text style={styles.tabmenuText}>Business</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabmenu}>
                            <Text style={styles.tabmenuText}>Operation</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileImageCover}>
                        <Image source={Images.prImg} style={styles.profileImage} />
                        <Image source={Images.camera_new} style={styles.camerai} />
                    </View>
                </View>
            </Image>
            <Text style={styles.scTitle}>PERSONAL INFORMATION</Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputContainerInner}>
                  <Image source={Images.nuser} style={styles.lIcon} />
                  <TextInput value="Adam Lane" style={styles.inputc} />
                </View>
                <Text style={styles.borderBottom} ></Text>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputContainerInner}>
                  <Image source={Images.nemail} style={styles.lIcon} />
                  <TextInput value='adam@invisionapp.com' style={styles.inputc} />
                </View>
                <Text style={styles.borderBottom} ></Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputContainerInner}>
                  <Image source={Images.nlocks} style={styles.lIcon} />
                  <TextInput value='password' style={styles.inputc} />
                </View>
                <Text style={styles.borderBottom} ></Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputContainerInner}>
                  <Image source={Images.nlocation} style={styles.lIcon} />
                  <TextInput value='323.777.1111' style={styles.inputc} />
                </View>
                <Text style={styles.borderBottom} ></Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputContainerInner}>
                  <Image source={Images.nlocation} style={styles.lIcon} />
                  <TextInput value='85 Main St, San Francisco, CA 94000' style={styles.inputc} />
                </View>
                <Text style={styles.borderBottom} ></Text>
            </View>
            <TouchableOpacity style={styles.saveBtn}>
                <Text style={styles.saveBtn_button}>SAVE</Text>
            </TouchableOpacity>
            </View>
        )
    }
}
