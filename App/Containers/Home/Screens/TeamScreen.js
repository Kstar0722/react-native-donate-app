import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Dimensions, ScrollView, TextInput, Switch } from 'react-native'
import { Images } from '../../../Themes';
import styles from '../Styles/TeamScreenStyles';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Meteor, { createContainer } from 'react-native-meteor';
import { RNS3 } from 'react-native-aws3';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Item, Input } from 'native-base'

export default class TeamScreen extends Component {
    constructor() {
        super()
        this.state = {
            toggleType: false,
            toggleSearch: false,
            searchText: ""
        }
    }

    static navigationOptions = {
        header: null,
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
                        <Text style={styles.headertitlen}>My Team</Text>
                        <TouchableOpacity style={styles.dRightHeader} onPress={() => this.setState({ toggleSearch: !this.state.toggleSearch })}>
                            <Image source={this.state.toggleSearch ? Images.setting : Images.search_white} style={styles.backwhite} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabMenuPart}>
                        {
                            this.state.toggleSearch ?
                                <View style={styles.tabMenuPart2}>
                                    <Item rounded style={styles.search_bar}>
                                        <Icon name='search' color="#DD8D6C" />
                                        <Input placeholder='Enter name here' style={{ fontSize: 12, fontFamily: 'Ubuntu' }} value={this.state.searchText} onChangeText={(e) => this.setState({ searchText: e })} />
                                    </Item>
                                </View>
                                :
                                <View style={styles.tabMenuPart2}>
                                    <TouchableOpacity style={this.state.toggleType ? styles.tabmenu : styles.tabmenuActive} onPress={() => this.setState({ toggleType: false })}>
                                        <Text style={this.state.toggleType ? styles.tabmenuText : styles.tabmenuactiveText} >STAFF</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={this.state.toggleType ? styles.tabmenuActive : styles.tabmenu} onPress={() => this.setState({ toggleType: true })}>
                                        <Text style={this.state.toggleType ? styles.tabmenuactiveText : styles.tabmenuText}>DRIVER</Text>
                                    </TouchableOpacity>
                                </View>
                        }

                    </View>

                </Image>
                <TeamListViewContainer mode={this.state.toggleSearch} searchText={this.state.searchText} searchFilter={this.state.toggleType} navigate={navigate} />


            </View>

        )
    }
}


class TeamListView extends React.Component {
    render() {
        const { team, mode, searchText, searchFilter, users, navigate } = this.props
        var prevChar = ""
        var filteredMember = team.length > 0 ? team[0].members.filter((member) => {
            const user = users.filter(user => user._id === member.userId)
            if (user.length == 0) return false
            member.name = user[0].profile.name
            if (mode) {
                return user[0].profile.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
            } else {
                return member.role === searchFilter
            }
        }) : []
        filteredMember = filteredMember.sort((a, b) => a.name > b.name)
        return (
            <Container>
                <Content>
                    <List>
                        {
                            filteredMember.map(member => {
                                console.log(member)
                                const name = member.name
                                if (prevChar !== name[0]) {
                                    prevChar = name[0]
                                    return (
                                        <View>
                                            <ListItem itemDivider style={styles.listItemSection}>
                                                <Text style={styles.listItemSectionText}>{name[0]}</Text>
                                            </ListItem>
                                            <ListItem icon >
                                                <Left>
                                                    <Icon name="circle" color="#F5F5F5" />
                                                </Left>
                                                <Body>
                                                    <Text style={member.status ? styles.listItemText : styles.listItemTextPending}>{name}</Text>
                                                </Body>
                                                {
                                                    member.status ? null :
                                                        <Right>
                                                            <Text style={styles.pendingText}>PENDING</Text>
                                                        </Right>
                                                }
                                            </ListItem>
                                        </View>
                                    )
                                } else {
                                    return (
                                        <ListItem icon >
                                            <Left>
                                                <Icon name="circle" color="#F5F5F5" />
                                            </Left>
                                            <Body>
                                                <Text style={member.status ? styles.listItemText : styles.listItemTextPending}>{name}</Text>
                                            </Body>
                                            {
                                                member.status ? null :
                                                    <Right>
                                                        <Text style={styles.pendingText}>PENDING</Text>
                                                    </Right>
                                            }
                                        </ListItem>
                                    )
                                }
                            })
                        }
                    </List>
                </Content>
                {
                    team.length > 0 && team[0].admin === Meteor.userId() ?
                        <TouchableOpacity style={styles.dAddButton} onPress={() => navigate("AddMemberScreen")}>
                            <Image source={Images.addButton} style={styles.addButton} />
                        </TouchableOpacity>
                        : null
                }

            </Container>
        )
    }
}

const TeamListViewContainer = createContainer((params) => {
    Meteor.subscribe('myteam', Meteor.user().profile.teamId)
    return ({
        team: Meteor.collection('Team').find({ _id: Meteor.user().profile.teamId }),
        users: Meteor.collection('users').find({})
    })
}, TeamListView)