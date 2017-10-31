import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Dimensions, ScrollView, TextInput, Switch } from 'react-native'
import { Images } from '../../../Themes';
import styles from '../Styles/SettingStyles';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Meteor from 'react-native-meteor';
import { RNS3 } from 'react-native-aws3';
import PictureModal from '../../../Components/Modals/pictureModal';
import DescriptionModal from '../../../Components/Modals/descriptionModal';
import { guid, validateEmail } from '../../../Transforms';
import AppConfig from '../../../Config';
_dText='';

export default class MainScreen extends Component {
    constructor() {
        super()
        profile = Meteor.user().profile
        this.state = { 
            toggleRescue:profile.bRescueFood,
            toggleRescueone:profile.bCreateFoodDonation,
            bussinessName: profile.businessInfo.name,
            businessAddress: profile.businessInfo.address,
            businessEIN : profile.businessInfo.ein,
            avatar: profile.image,

            picturemodalVisible: false,
            descriptionModalVisible:false,
        }
        _dText = profile.businessInfo.description
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
    closeDescriptionModal = () => {
        this.setState({
          descriptionModalVisible: false
        })
    }
    writeHere = () => {
        let t='';
          if(_dText){
              if(_dText.length>50){
                  t=_dText.substring(0, 49)+'...';
              }else{
                t=_dText;
              }
    
            return (
                <View style={[styles.bussinesstab, styles.arrowSpace]}>
                    <TouchableOpacity  onPress={()=>this.setState({descriptionModalVisible: true})}>
                        <Text style={styles.bussinesstabsmTitle}>EDIT</Text>
                    </TouchableOpacity>
                    <Text style={styles.toggleWidth}>{t}</Text>
              </View>
            );
        }else{
            return (
                <View >
                    <TouchableOpacity  onPress={()=>this.setState({descriptionModalVisible: true})}>
                    <View style={[styles.bussinesstab, styles.arrowSpace]}>
                        <Text style={styles.bussinesstabsmTitle}>Description</Text>                            
                        <Image source={Images.right_gray} style={styles.right_gray} />
                    </View>
                    </TouchableOpacity>
                </View>
                );
            }
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
                { $set: { 'profile.bRescueFood': this.state.bRescueFood,
                    'profile.bCreateFoodDonation': this.state.bCreateFoodDonation,
                    'profile.businessInfo.name':this.state.bussinessName,
                    'profile.businessInfo.address':this.state.businessAddress,
                    'profile.businessInfo.ein': this.state.businessEIN,
                    'profile.businessInfo.description': _dText,
                    'profile.image':image,
                }});
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

                        <TouchableOpacity style={styles.tabmenu} onPress={() => navigate('Setting')}>
                            <Text style={styles.tabmenuText} >Personal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.tabmenu, styles.tabmenuActive]}>
                            <Text style={styles.tabmenuactiveText}>Business</Text>
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
            <ScrollView bounces={false}>
            <Text style={styles.scTitle}>BUSINESS INFORMATION</Text>
              <View style={styles.bussinesstab}>
                <Text style={[styles.bussinesstabsmTitle, {fontSize:14, marginBottom:10}]}>Business Name</Text>
                  <TextInput
                    placeholder="Business Name"
                    editable = {true}
                    onChangeText={(text) => this.setState({bussinessName: text})}
                    style={styles.bussinesstabsmLabel} 
                    value={this.state.bussinessName}
                    />
              </View>
              <View style={styles.bussinesstab}>
                <Text style={[styles.bussinesstabsmTitle, {fontSize:14, marginBottom:10}]}>Business Address</Text>
                  <TextInput
                    placeholder="Business Address"
                    editable = {true}
                    onChangeText={(text) => this.setState({businessAddress: text})}
                    style={styles.bussinesstabsmLabel} 
                    value={this.state.businessAddress}
                    />
              </View>
              <View style={styles.bussinesstab}>
                  <Text style={[styles.bussinesstabsmTitle, {fontSize:14, marginBottom:10}]}>Business-EIN</Text>
                  <TextInput
                    placeholder="Business-EIN"
                    editable = {true}
                    onChangeText={(text) => this.setState({businessEIN: text})}
                    style={styles.bussinesstabsmLabel} 
                    value={this.state.businessEIN}
                    />
              </View>
              {this.writeHere()}
              <View style={styles.toggleContainer}>
                  <Text style={[styles.bussinesstabsmTitle,styles.toggleWidth]}>Are you using this service to rescue food?</Text>
                  <Text style={styles.toggle}>{this.state.toggleRescue?"YES":"NO"}</Text>
                  <Switch onValueChange={(val) => this.setState({toggleRescue:val})} value={this.state.toggleRescue}
                      onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
              </View>

              <View style={styles.toggleContainer}>
                  <Text style={[styles.bussinesstabsmTitle,styles.toggleWidth]}>Will you use this system to create food donations?</Text>
                  <Text style={styles.toggle}>{this.state.toggleRescueone?"YES":"NO"}</Text>
                  <Switch onValueChange={(val) => this.setState({toggleRescueone:val})} value={this.state.toggleRescueone}
                      onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
              </View>
              <TouchableOpacity style={styles.saveBtn} onPress={() => this.upDateData()}>
                <Text style={styles.saveBtn_button}>SAVE</Text>
            </TouchableOpacity>
            </ScrollView>
            <PictureModal picturemodalVisible={this.state.picturemodalVisible} close={this.closePictureModal} chooseAvatar = {this.chooseAvatar} />
            <DescriptionModal descriptionModalVisible={this.state.descriptionModalVisible} close={this.closeDescriptionModal}/>
            </View>
              
        )
    }
}
