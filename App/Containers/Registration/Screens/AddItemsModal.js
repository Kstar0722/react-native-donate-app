import React from 'react'
import { Text, View, Image, TouchableOpacity, Switch, Modal, Dimensions, TextInput, ScrollView } from 'react-native'
//import Icon from 'react-native-vector-icons/FontAwesome'
import { Images } from '../../../Themes'
import styles from '../Styles/AddItemsModalStyle'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { guid, validateEmail } from '../../../Transforms'
import AppConfig from '../../../Config'
import Meteor from 'react-native-meteor'
import { RNS3 } from 'react-native-aws3'
import AlertModal from '../../../Components/AlertModal'

export default class AddItemsModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msgBox: false,
            msgText: "",
            items: [],
            item: null
        }
        this.onAdd = this.onAdd.bind(this)
        this.onRemove = this.onRemove.bind(this)
        this.onSignup = this.onSignup.bind(this)
        this.showDialog = this.showDialog.bind(this);
    }

    static navigationOptions = {
        header: null,
    }

    showDialog = (show, title) => {
        if (show) this.setState({ msgBox: show, msgText: title })
        else this.setState({ msgBox: show })
    }

    onAdd() {
        var tmpItems = this.state.items.slice();
        tmpItems.push(this.state.item)
        this.setState({ items: tmpItems })
    }

    onRemove(index) {
        this.setState({ items: this.state.items.filter((obj, item) => item != index) })
    }

    onSignup() {
        var { avatar, user, businessInfo } = this.props.navigation.state.params
        businessInfo.items = this.state.items
        let self = this
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
        user.profile.businessInfo = businessInfo

        RNS3.put(file, options).then(response => {
            user.profile.image = response.body.postResponse.location
            Meteor.call('onCreateUser', user, (err, res) => {
                if (err) {
                    this.showDialog(true, err.message)
                } else {
                    this.props.navigation.navigate('FindDonation')
                }
            })
        })

    }


    render() {

        return (
            <View style={[styles.dContainer]}>
                <Image source={Images.mHeder} style={styles.dHeader}></Image>
                <View style={styles.dHeaderInner}>
                    <TouchableOpacity style={styles.dLeftHeader} onPress = {() => this.props.navigation.goBack()}>
                        <Text style={styles.dCancelBtn}>CANCEL</Text>
                    </TouchableOpacity>
                    <Text style={styles.dTitle}>Items I can receive</Text>
                    <TouchableOpacity style={styles.dRightHeader} onPress={this.onAdd}>
                        <Text style={styles.dDoneBtn}>ADD</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, width: Dimensions.get('window').width }}>
                        <TextInput placeholder='Start writing name of a food item…'
                            style={styles.multi_text}
                            onChangeText={(text) => this.setState({ item: text })}
                            value={this.state.item} />
                        {
                            this.state.items.map((item, index) => {
                                return (
                                    <View style={styles.commentRow}>
                                        <TouchableOpacity onPress={() => this.onRemove(index)}>
                                            <Image source={Images.trashIcon} style={styles.trashIcon}></Image>
                                        </TouchableOpacity>
                                        <View style={styles.rightBlock}>
                                            <Text style={styles.titleName}>{item}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }

                    </View>
                </ScrollView>

                <AlertModal show={this.state.msgBox} modal={() => this.showDialog(false)} title={this.state.msgText} />
                <TouchableOpacity onPress={() => this.onSignup()}>
                    <Image style={styles.footer} source={Images.reactAngleModelBg}>
                        <Text style={styles.signup_btn}>SIGN UP</Text>
                    </Image>
                </TouchableOpacity>
                <KeyboardSpacer />
            </View>
        );
    }
}
