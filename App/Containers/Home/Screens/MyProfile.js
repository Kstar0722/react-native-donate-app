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
import DescriptionModal from '../../../Components/Modals/descriptionModal';
import Switch from 'react-native-customisable-switch';
_dText='';
export default class MainScreen extends Component {
    constructor() {
        super()
        
        let profile = Meteor.user().profile
        this.state = { 
            avatar: profile.image,
            
            // setting
            userName: profile.name,
            userEmail: profile.email,
            userPassword: 'kingstar601',
            userPhoneNumber: profile.phone,
            userAddress: profile.businessInfo.address,
            
            //bussiness
            bRescueFood:profile.bRescueFood,
            bCreateFoodDonation:profile.bCreateFoodDonation,
            bussinessName: profile.businessInfo.name,
            businessAddress: profile.businessInfo.address,
            businessEIN : profile.businessInfo.ein,

            toggleRescue:profile.businessInfo.bContainer,
            toggleRescueone:profile.businessInfo.bReceiveDonation,
            toggleRescuetwo: profile.businessInfo.bVehicles,
            
            countOne:""+profile.businessInfo.vehicles.cars,
            countTwo:""+profile.businessInfo.vehicles.vans,
            countThree:""+profile.businessInfo.vehicles.trucks,
            cToggle:profile.businessInfo.vehicles.cars,
            vToggle:profile.businessInfo.vehicles.vans,
            tToggle:profile.businessInfo.vehicles.trucks,
            
            picturemodalVisible: false,
            descriptionModalVisible:false,
            tabState: 1,
            changeImageFlag: false,
         }
         _dText = profile.businessInfo.description
    }

    static navigationOptions = {
        header: null,
    }

    chooseAvatar = (avatar) => {
        this.setState({avatar : avatar, changeImageFlag:true,picturemodalVisible : false})
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
            if(_dText.length>50)
                t=_dText.substring(0, 49)+'...';
            else
            t=_dText;

            return (
                <View style={[styles.bussinesstab, styles.arrowSpace]}>
                    <TouchableOpacity  onPress={()=>this.setState({descriptionModalVisible: true})}>
                        <Text style={styles.bussinesstabsmLabel}>EDIT</Text>
                    </TouchableOpacity>
                    <Text style={[styles.toggleWidth1, styles.bussinesstabsmTitle]}>{t}</Text>
              </View>
            );
        }else{
            return (
                <View >
                    <TouchableOpacity  onPress={()=>this.setState({descriptionModalVisible: true})}>
                    <View style={[styles.bussinesstab, styles.arrowSpace]}>
                        <Text style={styles.bussinesstabsmTitle}>Business Description</Text>                            
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
            if(this.state.tabState == 1)
            {
                Meteor.collection('users').update(Meteor.userId(),
                { $set: { 'profile.name': this.state.userName,
                    'profile.email': this.state.userEmail,
                    'profile.phone':this.state.userPhoneNumber,
                    'profile.image':image,
                    'profile.businessInfo.address':this.state.userAddress}});
            }else if(this.state.tabState == 2)
            {
                Meteor.collection('users').update(Meteor.userId(),
                { $set: { 'profile.bRescueFood': this.state.bRescueFood,
                    'profile.bCreateFoodDonation': this.state.bCreateFoodDonation,
                    'profile.businessInfo.name':this.state.bussinessName,
                    'profile.businessInfo.address':this.state.businessAddress,
                    'profile.businessInfo.ein': this.state.businessEIN,
                    'profile.businessInfo.description': _dText,
                    'profile.image':image,
                }});
            }else if(this.state.tabState == 3)
            {
                Meteor.collection('users').update(Meteor.userId(),
                { $set: { 'profile.businessInfo.bContainer': this.state.toggleRescue,
                    'profile.businessInfo.bReceiveDonation': this.state.toggleRescueone,
                    'profile.businessInfo.bVehicles':this.state.toggleRescuetwo,
                    'profile.businessInfo.vehicles.cars':Number.parseInt(this.state.countOne, 10),
                    'profile.businessInfo.vehicles.vans': Number.parseInt(this.state.countTwo, 10),
                    'profile.businessInfo.vehicles.trucks': Number.parseInt(this.state.countThree, 10),
                    'profile.image':image,
                }});
            }
            
        });
    }
    settingTabShow()
    {
        return(
            <View style={{flex:1}}>
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
                        style={[styles.inputc,{fontWeight:'bold'}]} 
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
                        style={[styles.inputc,{fontWeight:'bold'}]} 
                        value={this.state.userAddress} 
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.saveBtn} onPress={() => this.upDateData()}>
                    <Text style={styles.saveBtn_button}>SAVE</Text>
                </TouchableOpacity>
            </View>
        )
    }
    bussinessTabShow()
    {
        return (
            <View style={{flex:1}}>
                <View style={styles.bussinesstab}>
                <Text style={[styles.bussinesstabsmTitle, {marginBottom:10}]}>Business Name</Text>
                  <TextInput
                    placeholder="Business Name"
                    editable = {true}
                    onChangeText={(text) => this.setState({bussinessName: text})}
                    style={styles.bussinesstabsmLabel} 
                    value={this.state.bussinessName}
                    />
              </View>
              <View style={styles.bussinesstab}>
                <Text style={[styles.bussinesstabsmTitle, {marginBottom:10}]}>Business Address</Text>
                  <TextInput
                    placeholder="Business Address"
                    editable = {true}
                    onChangeText={(text) => this.setState({businessAddress: text})}
                    style={styles.bussinesstabsmLabel} 
                    value={this.state.businessAddress}
                    />
              </View>
              <View style={styles.bussinesstab}>
                  <Text style={[styles.bussinesstabsmTitle, {marginBottom:10, fontWeight:'bold'}]}>Business-EIN</Text>
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
                  <Text style={styles.toggle}>{this.state.bRescueFood?"YES":"NO"}</Text>
                  <Switch
                    onChangeValue={(value) => {
                        this.setState({bRescueFood:value})
                    }}
                    defaultValue={this.state.bRescueFood}
                    value={this.state.bRescueFood}
                    switchWidth={50}
                    switchHeight={30}
                    buttonWidth={30}
                    buttonHeight={30}
                    buttonBorderColor={'#D8D8D8'}
                    buttonBorderWidth={1}
                    switchBorderColor={'#D8D8D8'}
                    switchBorderWidth={1}
                    activeBackgroundColor={'#fff'}
                    inactiveBackgroundColor={'#fff'}
                    activeButtonBackgroundColor={'#FFB660'}
                    inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                    padding={false}
                  />
              </View>

              <View style={styles.toggleContainer}>
                  <Text style={[styles.bussinesstabsmTitle,styles.toggleWidth]}>Will you use this system to create food donations?</Text>
                  <Text style={styles.toggle}>{this.state.bCreateFoodDonation?"YES":"NO"}</Text>
                  <Switch
                    onChangeValue={(value) => {
                        this.setState({bCreateFoodDonation:value})
                    }}
                    defaultValue={this.state.bCreateFoodDonation}
                    value={this.state.bCreateFoodDonation}
                    switchWidth={50}
                    switchHeight={30}
                    buttonWidth={30}
                    buttonHeight={30}
                    buttonBorderColor={'#D8D8D8'}
                    buttonBorderWidth={1}
                    switchBorderColor={'#D8D8D8'}
                    switchBorderWidth={1}
                    activeBackgroundColor={'#fff'}
                    inactiveBackgroundColor={'#fff'}
                    activeButtonBackgroundColor={'#FFB660'}
                    inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                    padding={false}
                  />
              </View>
              <TouchableOpacity style={styles.saveBtn} onPress={() => this.upDateData()}>
                <Text style={styles.saveBtn_button}>SAVE</Text>
            </TouchableOpacity>
        </View>
        )
    }
    operationTabShow()
    {
        return (
            <View style={{flex:1}}>
                <View style={[styles.toggleContainer, {marginBottom:10}]}>
                    <Text style={[styles.bussinesstabsmTitle,styles.toggleWidth]}>Can you receive food donations at this location?</Text>
                    <Text style={styles.toggle}>{this.state.toggleRescue?"YES":"NO"}</Text>
                    <Switch
                        onChangeValue={(value) => {
                            this.setState({toggleRescue:value})
                        }}
                        defaultValue={this.state.toggleRescue}
                        value={this.state.toggleRescue}
                        switchWidth={50}
                        switchHeight={30}
                        buttonWidth={30}
                        buttonHeight={30}
                        buttonBorderColor={'#D8D8D8'}
                        buttonBorderWidth={1}
                        switchBorderColor={'#D8D8D8'}
                        switchBorderWidth={1}
                        activeBackgroundColor={'#fff'}
                        inactiveBackgroundColor={'#fff'}
                        activeButtonBackgroundColor={'#FFB660'}
                        inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                        padding={false}
                    />
                </View>
                <View style={[styles.toggleContainer, {marginBottom:15}]}>
                    <Text style={[styles.bussinesstabsmTitle,styles.toggleWidth]}>Do you have containers for the food if the donor cannot provide them?</Text>
                    <Text style={styles.toggle}>{this.state.toggleRescueone?"YES":"NO"}</Text>
                    <Switch
                        onChangeValue={(value) => {
                            this.setState({toggleRescueone:value})
                        }}
                        defaultValue={this.state.toggleRescueone}
                        value={this.state.toggleRescueone}
                        switchWidth={50}
                        switchHeight={30}
                        buttonWidth={30}
                        buttonHeight={30}
                        buttonBorderColor={'#D8D8D8'}
                        buttonBorderWidth={1}
                        switchBorderColor={'#D8D8D8'}
                        switchBorderWidth={1}
                        activeBackgroundColor={'#fff'}
                        inactiveBackgroundColor={'#fff'}
                        activeButtonBackgroundColor={'#FFB660'}
                        inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                        padding={false}
                    />
                </View>
                <View style={[styles.toggleContainer, {marginBottom:15}]}>
                    <Text style={[styles.bussinesstabsmTitle,styles.toggleWidth]}>Do you have containers for the food if the donor cannot provide them?</Text>
                    <Text style={styles.toggle}>{this.state.toggleRescuetwo?"YES":"NO"}</Text>
                    <Switch
                        defaultValue={this.state.toggleRescuetwo}
                        value={this.state.toggleRescuetwo}
                        switchWidth={50}
                        switchHeight={30}
                        buttonWidth={30}
                        buttonHeight={30}
                        buttonBorderColor={'#D8D8D8'}
                        buttonBorderWidth={1}
                        switchBorderColor={'#D8D8D8'}
                        switchBorderWidth={1}
                        activeBackgroundColor={'#fff'}
                        inactiveBackgroundColor={'#fff'}
                        activeButtonBackgroundColor={'#FFB660'}
                        inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                        padding={false}
                        onChangeValue={(value) => {
                            this.setState({toggleRescuetwo:value})
                        }}
                    />
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
                        keyboardType='phone-pad'
                        style={[styles.bussinesstabsmTitleone, {fontSize:15, fontWeight:'bold', marginLeft:30}]} 
                        value={this.state.countOne}
                    />
                    <TextInput
                        editable = {true}
                        onChangeText={(text) => this.setState({countTwo: text})}
                        keyboardType='phone-pad'
                        style={[styles.bussinesstabsmTitleone, {fontSize:15, fontWeight:'bold',marginLeft:40}]} 
                        value={this.state.countTwo}
                    />
                    <TextInput
                        editable = {true}
                        onChangeText={(text) => this.setState({countThree: text})}
                        keyboardType='phone-pad'
                        style={[styles.bussinesstabsmTitleone, {fontSize:15, fontWeight:'bold', marginLeft:30}]} 
                        value={this.state.countThree}
                    />
                </View>

                <TouchableOpacity style={styles.saveBtn} onPress={() => this.upDateData()}>
                <Text style={styles.saveBtn_button}>SAVE</Text>
                </TouchableOpacity>
            </View>
        )
        
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={[styles.dContainer]}>
            <Image source={Images.settingBackground} style={styles.settingBack}>
                <View style={styles.dHeaderInner}>
                    <TouchableOpacity style={styles.dLeftHeader} onPress={() => /*navigate("FindDonation")*/this.props.navigation.goBack()}>
                        <Image source={Images.back_new} style={styles.backwhite} />
                    </TouchableOpacity>
                    <Text style={styles.headertitlen}>My Profile</Text>
                </View>
                <View style={styles.tabMenuPart}>
                    <View style={styles.tabMenuPart2}>
                        <TouchableOpacity style={this.state.tabState==1?[styles.tabmenu, styles.tabmenuActive]:styles.tabmenu} onPress={() => this.setState({tabState:1})}>
                            <Text style={this.state.tabState==1?styles.tabmenuactiveText:styles.tabmenuText}>Personal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.tabState==2?[styles.tabmenu, styles.tabmenuActive]:styles.tabmenu} onPress={() => this.setState({tabState:2})}>
                            <Text style={this.state.tabState==2?styles.tabmenuactiveText:styles.tabmenuText}>Business</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.tabState==3?[styles.tabmenu, styles.tabmenuActive]:styles.tabmenu} onPress={() => this.setState({tabState:3})}>
                            <Text style={this.state.tabState==3?styles.tabmenuactiveText:styles.tabmenuText}>Operation</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.profileImageCover} onPress = {() => this.setState({picturemodalVisible : true})}>
                        <Image source={this.state.changeImageFlag?this.state.avatar:{url:this.state.avatar}} style={styles.profileImage} />
                        <Image source={Images.camera_new} style={styles.camerai} />
                    </TouchableOpacity>
                </View>
            </Image>
            <Text style={styles.scTitle}>PERSONAL INFORMATION</Text>
            {this.state.tabState==1&&this.settingTabShow()}
            {this.state.tabState==2&&this.bussinessTabShow()}
            {this.state.tabState==3&&this.operationTabShow()}
            <PictureModal picturemodalVisible={this.state.picturemodalVisible} close={this.closePictureModal} chooseAvatar = {this.chooseAvatar} />
            <DescriptionModal descriptionModalVisible={this.state.descriptionModalVisible} close={this.closeDescriptionModal}/>
        </View>
        )
    }
}
