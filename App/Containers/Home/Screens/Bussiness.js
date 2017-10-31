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
          <ScrollView bounces={false}>
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
                        <TouchableOpacity style={[styles.tabmenu, styles.tabmenuActive]}>
                            <Text style={styles.tabmenuactiveText}>Business</Text>
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
            <Text style={styles.scTitle}>BUSINESS INFORMATION</Text>
              <View style={styles.bussinesstab}>
                  <Text style={styles.bussinesstabsmTitle}>Business Name</Text>
                  <Text style={styles.bussinesstabsmLabel}>Marie Simpson</Text>
              </View>
              <View style={styles.bussinesstab}>
                  <Text style={styles.bussinesstabsmTitle}>Business Address</Text>
                  <Text style={styles.bussinesstabsmLabel}>85 Main St, San Francisco, CA 94000</Text>
              </View>
              <View style={styles.bussinesstab}>
                  <Text style={styles.bussinesstabsmTitle}>Business-EIN</Text>
                  <Text style={styles.bussinesstabsmLabel}>11-7777777</Text>
              </View>
              <View style={[styles.bussinesstab, styles.arrowSpace]}>
                  <Text style={styles.bussinesstabsmTitle}>Business Dscription</Text>
                  <Image source={Images.right_gray} style={styles.right_gray} />
              </View>
              <View style={styles.toggleContainer}>
                  <Text style={[styles.bussinesstabsmTitle,styles.toggleWidth]}>Are you using this service to rescue food?</Text>
                  <Text style={styles.toggle}>Yes</Text>
                  <Switch onValueChange={this.toggleRescue}
                      onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
              </View>

              <View style={styles.toggleContainer}>
                  <Text style={[styles.bussinesstabsmTitle,styles.toggleWidth]}>Are you using this service to rescue food?</Text>
                  <Text style={styles.toggle}>No</Text>
                  <Switch onValueChange={this.toggleRescueone}
                      onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
              </View>
            <TouchableOpacity style={styles.saveBtn}>
                <Text style={styles.saveBtn_button}>SAVE</Text>
            </TouchableOpacity>

            </View>
              </ScrollView>
        )
    }
}
