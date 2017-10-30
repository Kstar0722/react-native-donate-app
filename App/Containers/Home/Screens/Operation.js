import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Dimensions, ScrollView, TextInput, Switch } from 'react-native'
import { Images } from '../../../Themes';
import styles from '../Styles/SettingStyles';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Meteor from 'react-native-meteor';
import { RNS3 } from 'react-native-aws3';


export default class MainScreen extends Component {
    constructor() {
        super()
        this.state = { toggleRescue:false,toggleRescueone:true }
    }

    static navigationOptions = {
        header: null,
    }


    render() {

        return (
          <ScrollView bounces={false} contentContainerStyle={{flex:1}}>
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

                        <TouchableOpacity style={styles.tabmenu}>
                            <Text style={styles.tabmenuText}>Personal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabmenu}>
                            <Text style={styles.tabmenuText}>Business </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.tabmenu, styles.tabmenuActive]}>
                            <Text style={styles.tabmenuactiveText}>Operation</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileImageCover}>
                        <Image source={Images.prImg} style={styles.profileImage} />
                        <Image source={Images.camera_new} style={styles.camerai} />
                    </View>
                </View>
            </Image>
            <Text style={styles.scTitle}>OPERATION  INFORMATION</Text>
              <View style={styles.toggleContainer}>
                  <Text style={[styles.bussinesstabsmTitle,styles.toggleWidth]}>Can you receive food donations at this location?</Text>
                  <Text style={styles.toggle}>Yes</Text>
                  <Switch onValueChange={this.toggleRescue}
                      onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
              </View>
              <View style={styles.coverInner}>
                <Text style={[styles.bussinesstabsmTitle,{width:50}]}>Size:</Text>
                <Image source={Images.gray_carn} style={styles.gray_carn} />
                <Image source={Images.gray_vann} style={styles.gray_vann} />
                <Image source={Images.gray_tmpn} style={styles.gray_tmpn} />
              </View>
              <View style={styles.coverInner}>
                <Text style={[styles.bussinesstabsmTitleone]}>Quantity:</Text>
                <Text style={[styles.bussinesstabsmTitleone, styles.txtCenter]}>0</Text>
                <Text style={[styles.bussinesstabsmTitleone, styles.txtCenter]}>0</Text>
                <Text style={[styles.bussinesstabsmTitleone, styles.txtCenter]}>0</Text>
              </View>


            <TouchableOpacity style={styles.saveBtn}>
                <Text style={styles.saveBtn_button}>SAVE</Text>
            </TouchableOpacity>

            </View>
              </ScrollView>
        )
    }
}
