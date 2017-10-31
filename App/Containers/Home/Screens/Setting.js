import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native'
import { Images } from '../../../Themes';
import styles from '../Styles/SettingStyles';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Meteor from 'react-native-meteor';
import { RNS3 } from 'react-native-aws3';
import { guid, validateEmail } from '../../../Transforms'
import AppConfig from '../../../Config'
import PictureModal from '../../../Components/Modals/pictureModal';

export default class MainScreen extends Component {
    constructor() {
        super()
        profile = Meteor.user().profile
        this.state = { 
            userName: profile.name,
            userEmail: profile.email,
            userPassword: 'kingstar601',
            userPhoneNumber: profile.phone,
            userAddress: profile.businessInfo.address,
            picturemodalVisible: false,
            avatar: profile.image
         }
    }

    static navigationOptions = {
        header: null,
    }

    chooseAvatar = (avatar) => {
        this.setState({avatar : avatar, picturemodalVisible : false})
    }

    closePictureModal = () => {
        this.setState({
            picturemodalVisible: false
        })
    }
    upDateData = () => {
        
        const file = {
            uri: this.state.avatar,
            name: guid() + ".png",
            type: "image/png"
        }
        const options = {
            keyPrefix: AppConfig.KEY_PREFIX,
            bucket: AppConfig.BUCKET,
            accessKey: AppConfig.ACCESS_KEY,
            secretKey: AppConfig.SECRET_KEY,
            region: AppConfig.REGION
        }
        RNS3.put(file, options).then(response => {
            image = response.body.postResponse.location
            Meteor.collection('users').update(Meteor.userId(),
            { $set: { 'profile.name': this.state.userName,
                'profile.email': this.state.userEmail,
                'profile.phone':this.state.userPhoneNumber,
                'profile.image':image,
                'profile.businessInfo.address':this.state.userAddress}});
        });
    }

    render() {
        const { navigate } = this.props.navigation;
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
                        <TouchableOpacity style={styles.tabmenu} onPress={() => navigate('Bussiness')}>
                            <Text style={styles.tabmenuText}>Business</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabmenu} onPress={() => navigate('Operation')}>
                            <Text style={styles.tabmenuText}>Operation</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.profileImageCover} onPress = {() => this.setState({picturemodalVisible : true})}>
                        <Image source={this.state.avatar} style={styles.profileImage} />
                        <Image source={Images.camera_new} style={styles.camerai} />
                    </TouchableOpacity>
                </View>
            </Image>
            <Text style={styles.scTitle}>PERSONAL INFORMATION</Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputContainerInner}>
                  <Image source={Images.nuser} style={styles.lIcon} />
                  <TextInput
                    placeholder="User Name"
                    editable = {true}
                    onChangeText={(text) => this.setState({userName: text})}
                    style={styles.inputc} 
                    value={this.state.userName}
                    />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputContainerInner}>
                  <Image source={Images.nemail} style={styles.lIcon} />
                  <TextInput
                    placeholder="example@mail.com"
                    editable = {true}
                    onChangeText={(text) => this.setState({userEmail: text})}
                    style={styles.inputc} 
                    value={this.state.userEmail}
                
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputContainerInner}>
                  <Image source={Images.nlocks} style={styles.lIcon} />
                  <TextInput
                    placeholder="User Password"
                    editable = {true}
                    onChangeText={(text) => this.setState({userPassword: text})}
                    style={styles.inputc} 
                    value={this.state.userPassword} secureTextEntry
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputContainerInner}>
                  <Image source={Images.phone} style={styles.lIcon} />
                  <TextInput
                    placeholder="User PhoneNumber"
                    editable = {true}
                    onChangeText={(text) => this.setState({userPhoneNumber: text})}
                    style={styles.inputc} 
                    value={this.state.userPhoneNumber}
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputContainerInner}>
                  <Image source={Images.nlocation} style={styles.lIcon} />
                  <TextInput
                    placeholder="User Address"
                    editable = {true}
                    onChangeText={(text) => this.setState({userAddress: text})}
                    style={styles.inputc} 
                    value={this.state.userAddress} 
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.saveBtn} onPress={() => this.upDateData()}>
                <Text style={styles.saveBtn_button}>SAVE</Text>
            </TouchableOpacity>
            <PictureModal picturemodalVisible={this.state.picturemodalVisible} close={this.closePictureModal} chooseAvatar = {this.chooseAvatar} />
            </View>
        )
    }
}
