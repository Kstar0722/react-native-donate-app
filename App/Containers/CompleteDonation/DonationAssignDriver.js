import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Dimensions, ScrollView, TextInput, Switch } from 'react-native'
import { Images } from '../../Themes'
import styles from './Styles/DonationAssignBusinessStyles';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Meteor, { createContainer } from 'react-native-meteor';
import { RNS3 } from 'react-native-aws3';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Item, Input } from 'native-base'

export default class DonationAssignDriver extends Component {
    constructor() {
        super()
        this.state = {
            toggleType: false,
            toggleSearch: false,
            searchText: "",
            isEnabledButton: false,
            selectedIndex: -1,
            selectedMember: null,
        }
    }

    static navigationOptions = {
        header: null,
    }

    onItemClick = (index, member) => {
        this.setState({
            selectedIndex: index,
            selectedMember: member,
            isEnabledButton: true,
        })

    }

    onToggleSwitchClick = () => {
        this.setState({ 
            toggleSearch: !this.state.toggleSearch,
            selectedIndex: -1, 
            isEnabledButton: false,
        })
    }

    onToggleTypeClick = (type) => {
        this.setState({
            toggleType: type,
            selectedIndex: -1, 
            isEnabledButton: false,
        })
    }

    onAssignClick = () => {
        this.props.navigation.state.params.onGoBack(this.state.selectedMember)
        this.props.navigation.goBack()        
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={[styles.dContainer]}>
                <Image source={Images.settingBackground} style={styles.settingBack}>
                    <View style={styles.dHeaderInner}>
                        <TouchableOpacity style={styles.dLeftHeader} onPress={() => this.props.navigation.goBack()}>
                            <Image source={Images.back_new} style={styles.backwhite} />
                        </TouchableOpacity>
                        <Text style={styles.headertitlen}>Assign to Driver</Text>
                        <TouchableOpacity style={styles.dRightHeader} onPress={() => this.onToggleSwitchClick()}>
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
                                    <TouchableOpacity style={this.state.toggleType ? styles.tabmenu : styles.tabmenuActive} onPress={() => this.onToggleTypeClick(false)}>
                                        <Text style={this.state.toggleType ? styles.tabmenuText : styles.tabmenuactiveText} >STAFF</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={this.state.toggleType ? styles.tabmenuActive : styles.tabmenu} onPress={() => this.onToggleTypeClick(true)}>
                                        <Text style={this.state.toggleType ? styles.tabmenuactiveText : styles.tabmenuText}>DRIVER</Text>
                                    </TouchableOpacity>
                                </View>
                        }

                    </View>

                </Image>
                <TeamListViewContainer 
                    mode={this.state.toggleSearch} 
                    searchText={this.state.searchText} 
                    searchFilter={this.state.toggleType} 
                    selectedIndex={this.state.selectedIndex}
                    onClick = {this.onItemClick} />                
                
                <TouchableOpacity 
                    style={[styles.assignBtn, this.state.isEnabledButton ? {backgroundColor: '#ffb660'} : {backgroundColor : '#ffb660'}]} 
                    disabled={this.state.isEnabledButton ? false : true} 
                    onPress={() => this.onAssignClick()}                    
                >
                    <Text style={styles.assignText} >ASSIGN</Text>
                </TouchableOpacity>

            </View>

        )
    }
}


class TeamListView extends React.Component {
    render() {
        /*const members = [
            {name: 'Alex Smith', role: true, status: true},
            {name: 'Anthony Baldwin', role: true, status: true},
            {name: 'Brittnay Boyd', role: false, status: true},
            {name: 'Ronand Sanchez', role: true, status: true},
            {name: 'Steven Wright', role: false, status: true},
            {name: 'Edward Baker', role: true, status: true},
            {name: 'Jason Adams', role: false, status: true},
            {name: 'Matthew Nelson', role: true, status: true},
            {name: 'Timothy Ramirez', role: false, status: true},
            {name: 'Scott Roberts', role: true, status: true},
            {name: 'Raymond Flores', role: false, status: true},
            {name: 'Joshua Morris', role: true, status: true},
            {name: 'Dennis Roger', role: false, status: true},
            {name: 'Jack Kelly', role: true, status: true},
            {name: 'Gerald Howard', role: false, status: true},
            {name: 'Nicholas Richardson', role: true, status: true},
            {name: 'Brandon Hughes', role: false, status: true},
            {name: 'Russell Foster', role: true, status: true},
            {name: 'Clarence Sanders', role: false, status: true},

            
        ]
        const {mode, searchText, searchFilter, selectedIndex, onClick} = this.props
        var prevChar = ""
        var filteredMember = members.filter((member) => {
            if (mode) {
                return member.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
            } else {
                return member.role == searchFilter
            }
        })
        filteredMember = filteredMember.sort((a, b) => a.name > b.name)*/
        const { team, mode, searchText, searchFilter, users, selectedIndex, onClick } = this.props
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
            <Container style={{marginBottom: 60}}>
                <Content>
                    <List  >
                        {
                            filteredMember.map((member, index) => {
                                //console.log(member)
                                const name = member.name
                                if (prevChar !== name[0]) {
                                    prevChar = name[0]
                                    return (
                                        <View>
                                            <ListItem itemDivider style={styles.listItemSection} >
                                                <Text style={styles.listItemSectionText}>{name[0]}</Text>
                                            </ListItem>
                                            <ListItem icon onPress={() => {onClick(index, member)}}>                                                                            
                                                <Left style={index == selectedIndex ? {paddingLeft: 3, paddingRight: 14} : {paddingLeft: 10, paddingRight: 20}} >
                                                    {index == selectedIndex ?
                                                    <View style={{
                                                            alignItems: 'center', 
                                                            justifyContent: 'center', 
                                                            width: 24, 
                                                            height: 24,
                                                            borderRadius: 12,
                                                            backgroundColor: '#ffb660',
                                                        }} 
                                                    >
                                                        <Image source={Images.checked} resizeMode={'contain'} style={{width:15, height: 15}} />
                                                    </View>
                                                    :
                                                    <Icon name="circle" color="#F5F5F5" />
                                                    }
                                                    
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
                                        <ListItem icon onPress={() => onClick(index, member)}  >
                                            <Left style={index == selectedIndex ? {paddingLeft: 3, paddingRight: 14} : {paddingLeft: 10, paddingRight: 20}}>
                                                {index == selectedIndex ?
                                                <View style={{
                                                        alignItems: 'center', 
                                                        justifyContent: 'center', 
                                                        width: 24, 
                                                        height: 24,
                                                        borderRadius: 12,
                                                        backgroundColor: '#ffb660',
                                                    }} 
                                                >
                                                    <Image source={Images.checked} resizeMode={'contain'} style={{width:15, height: 15}} />
                                                </View>
                                                :
                                                <Icon name="circle" color="#F5F5F5" />
                                                }
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