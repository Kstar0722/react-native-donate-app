import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Dimensions, ScrollView, TextInput, Switch, Modal, TouchableHighlight } from 'react-native'
import { Images } from '../../../Themes';
import styles from '../Styles/TeamScreenStyles';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Meteor, { createContainer } from 'react-native-meteor';
import { RNS3 } from 'react-native-aws3';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Item, Input, Label } from 'native-base'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var radio_props = [
    { label: 'Staff', value: 0 },
    { label: 'Driver', value: 1 }
];

export default class AddMemberScreen extends Component {
    constructor() {
        super()
        this.state = {
            fullname: '',
            email: '',
            type: 0,
            showConfirmationDialog: false,
            showCongratulationDialog: false,
            createFoodGiveaway: false,
            reserveDonation: false
        }
        this.addTeamMember = this.addTeamMember.bind(this)
    }

    static navigationOptions = {
        header: null,
    }

    addTeamMember() {
        const values = {
            fullName: this.state.fullname, email: this.state.email,
            role: this.state.type == 0 ? false : true, createFoodGiveaway: this.state.createFoodGiveaway, reserveDonation: this.state.reserveDonation
        }
        Meteor.call('addTeamMember', values, Meteor.user().profile.teamId, (err, res) => {
            if (err) {
                console.log(err.message)
            } else {
                this.setState({showCongratulationDialog: true})
            }
        })
        this.setState({ showConfirmationDialog: false })
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={[styles.dContainer]}>
                <Image source={Images.settingBackground} style={styles.addMemberBack}>
                    <View style={styles.dHeaderInner}>
                        <TouchableOpacity style={styles.dLeftHeader} onPress={() => this.props.navigation.goBack()}>
                            <Image source={Images.back_new} style={styles.backwhite} />
                        </TouchableOpacity>
                        <Text style={styles.headertitlen}>My Team</Text>
                    </View>
                </Image>
                <View style={styles.addMemberView}>
                    <Text style={styles.addMemberLabel}>FULL NAME</Text>
                    <TextInput style={styles.addMemberField}
                        onChangeText={(text) => this.setState({ fullname: text })}
                        value={this.state.fullname} />

                    <Text style={styles.addMemberLabel}>EMAIL</Text>
                    <TextInput style={styles.addMemberField}
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email} />
                    <View style={styles.roleView}>
                        <Text style={styles.addMemberLabel}>ROLE</Text>
                        <RadioForm
                            style={{ position: 'absolute', right: 0, paddingVertical: 0 }}
                            buttonSize={12}
                            radioStyle={{ marginLeft: 30 }}
                            buttonOuterSize={12}
                            selectedButtonColor="#F58A55"
                            buttonColor="rgba(29, 29, 26, 0.2)"
                            radio_props={radio_props}
                            initial={0}
                            formHorizontal={true}
                            onPress={(value) => { this.setState({ type: value }) }}
                        />
                    </View>
                    <View style={styles.toggleContainer}>
                        <Text style={styles.toggleLabel}>ALLOW TO CREATE FOOD GIVEAWAY’S</Text>
                        <Text style={styles.toggle}>{this.state.createFoodGiveaway ? "YES" : "NO"}</Text>
                        <Switch style={{ height: 28 }} onValueChange={() => this.setState({ createFoodGiveaway: !this.state.createFoodGiveaway })} value={this.state.createFoodGiveaway}
                            onTintColor='rgba(245,138,85,0.5)' thumbTintColor="#F58A55" />
                    </View>
                    <View style={styles.toggleContainer}>
                        <Text style={styles.toggleLabel}> ALLOW TO RESERVE DONATIONS</Text>
                        <Text style={styles.toggle}>{this.state.reserveDonation ? "YES" : "NO"}</Text>
                        <Switch style={{ height: 28 }} onValueChange={() => this.setState({ reserveDonation: !this.state.reserveDonation })} value={this.state.reserveDonation}
                            onTintColor='rgba(245,138,85,0.5)' thumbTintColor="#F58A55" />
                    </View>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity style={styles.dAddUserButton} onPress={() => { this.setState({ showConfirmationDialog: true }) }}>
                        <Text style={styles.addUserButtonLabel}> Add New User</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.showConfirmationDialog ?
                        <View>
                            <Modal
                                transparent={true}
                                animationType="slide"
                            >
                                <View style={styles.rescueModal}>
                                    <Image source={Images.rescue_bg} style={styles.rescue_bg} >
                                        <Text style={styles.modalTitle}>Add new user to your team?</Text>
                                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", width: "100%" }} >
                                            <TouchableOpacity style={styles.modaButton} onPress={this.addTeamMember}>
                                                <Text style={styles.buttonText}>YES</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.modaButton} onPress={() => { this.setState({ showConfirmationDialog: false }) }}>
                                                <Text style={styles.buttonText}>NO</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={styles.modalContent}>An email will be sent to this user with instruction on how to join your team.</Text>
                                    </Image>
                                </View>
                            </Modal>
                        </View>
                        : null
                }
                {
                    this.state.showCongratulationDialog ?
                        <View>
                            <Modal
                                transparent={true}
                                animationType="slide"
                            >
                                <View style={styles.rescueModal}>
                                    <Image source={Images.rescue_bg} style={styles.rescue_bg} >
                                        <Text style={styles.modalTitle}>An invite has been sent to {this.state.fullname}.</Text>
                                        <TouchableOpacity style={[styles.modaButton, { marginTop: 30 }]} onPress={() => { this.setState({ showCongratulationDialog: false }) }}>
                                            <Text style={styles.buttonText}>CLOSE</Text>
                                        </TouchableOpacity>

                                    </Image>
                                </View>
                            </Modal>
                        </View>
                        : null
                }

            </View>

        )
    }
}
