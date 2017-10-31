import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Dimensions, ScrollView, TextInput, Switch } from 'react-native'
import { Images } from '../../../Themes';
import styles from '../Styles/SettingStyles';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Meteor from 'react-native-meteor';
import { RNS3 } from 'react-native-aws3';
import PictureModal from '../../../Components/Modals/pictureModal';

export default class MainScreen extends Component {
    constructor() {
        super()
        profile = Meteor.user().profile
        this.state = { 
            toggleRescue:profile.businessInfo.bContainer,
            toggleRescueone:profile.businessInfo.bReceiveDonation,
            toggleRescuetwo: profile.businessInfo.bVehicles,
            
            countOne:""+profile.businessInfo.vehicles.cars,
            countTwo:""+profile.businessInfo.vehicles.vans,
            countThree:""+profile.businessInfo.vehicles.trucks,
            cToggle:profile.businessInfo.vehicles.cars,
            vToggle:profile.businessInfo.vehicles.vans,
            tToggle:profile.businessInfo.vehicles.trucks,
            avatar: profile.Image,
            picturemodalVisible: false,
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
                        <TouchableOpacity style={styles.tabmenu} onPress={() => navigate('Bussiness')}>
                            <Text style={styles.tabmenuText} >Business </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.tabmenu, styles.tabmenuActive]}>
                            <Text style={styles.tabmenuactiveText}>Operation</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.profileImageCover} onPress = {() => this.setState({picturemodalVisible : true})}>
                        <Image source={this.state.avatar} style={styles.profileImage} />
                        <Image source={Images.camera_new} style={styles.camerai} />
                    </TouchableOpacity>
                </View>
            </Image>
            <ScrollView bounces={false}>
            <Text style={styles.scTitle}>OPERATION  INFORMATION</Text>
              <View style={styles.toggleContainer}>
                  <Text style={[styles.bussinesstabsmTitle,styles.toggleWidth]}>Can you receive food donations at this location?</Text>
                  <Text style={styles.toggle}>{this.state.toggleRescue?"YES":"NO"}</Text>
                  <Switch onValueChange={(val) => this.setState({toggleRescue:val})} value={this.state.toggleRescue}
                    onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
              </View>
              <View style={styles.toggleContainer}>
                  <Text style={[styles.bussinesstabsmTitle,styles.toggleWidth]}>Do you have containers for the food if the donor cannot provide them?</Text>
                  <Text style={styles.toggle}>{this.state.toggleRescueone?"YES":"NO"}</Text>
                  <Switch onValueChange={(val) => this.setState({toggleRescueone:val})} value={this.state.toggleRescueone}
                    onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
              </View>
              <View style={styles.toggleContainer}>
                  <Text style={[styles.bussinesstabsmTitle,styles.toggleWidth]}>Do you have containers for the food if the donor cannot provide them?</Text>
                  <Text style={styles.toggle}>{this.state.toggleRescuetwo?"YES":"NO"}</Text>
                  <Switch onValueChange={(val) => this.setState({toggleRescuetwo:val})} value={this.state.toggleRescuetwo}
                    onTintColor='#FFFFFF' thumbTintColor="#FFB660" />
              </View>
              <View style={styles.vDetsilSElection}>
                <Text style={[styles.bussinesstabsmTitle,{width:50}]}>Size:</Text>
                <TouchableOpacity style={styles.imgBoxCover} onPress={()=> this.setState({cToggle:this.state.cToggle?false:true})}>
                    <Image source={this.state.cToggle?Images.car1:Images.gray_carn} style={styles.vImgBoxCover} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.imgBoxCover} onPress={()=> this.setState({vToggle:this.state.vToggle?false:true})}>
                    <Image source={this.state.vToggle?Images.van1:Images.gray_vann} style={styles.vImgBoxCover} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.imgBoxCover} onPress={()=> this.setState({tToggle:this.state.tToggle?false:true})}>
                    <Image source={this.state.tToggle?Images.truck1:Images.gray_tmpn} style={styles.vImgBoxCover} />
                </TouchableOpacity>
              </View>
              <View style={styles.coverInner}>
                <Text style={[styles.bussinesstabsmTitleone,]}>Quantity:</Text>
                <TextInput
                    editable = {true}
                    onChangeText={(text) => this.setState({countOne: text})}
                    style={[styles.bussinesstabsmTitleone, {marginLeft:20}]} 
                    value={this.state.countOne}
                />
                <TextInput
                    editable = {true}
                    onChangeText={(text) => this.setState({countTwo: text})}
                    style={[styles.bussinesstabsmTitleone, {marginLeft:30}]} 
                    value={this.state.countTwo}
                />
                <TextInput
                    editable = {true}
                    onChangeText={(text) => this.setState({countThree: text})}
                    style={[styles.bussinesstabsmTitleone, {marginLeft:20}]} 
                    value={this.state.countThree}
                />
              </View>

            <TouchableOpacity style={styles.saveBtn}>
                <Text style={styles.saveBtn_button}>SAVE</Text>
            </TouchableOpacity>
            <PictureModal picturemodalVisible={this.state.picturemodalVisible} close={this.closePictureModal} chooseAvatar = {this.chooseAvatar} />
            </ScrollView>
            </View>
              
        )
    }
}
