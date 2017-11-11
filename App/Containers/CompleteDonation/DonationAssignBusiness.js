import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Dimensions, ScrollView, TextInput, Switch } from 'react-native'
import { Images } from '../../Themes'
import styles from './Styles/DonationAssignBusinessStyles';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Meteor, { createContainer } from 'react-native-meteor';
import { RNS3 } from 'react-native-aws3';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Item, Input } from 'native-base'

export default class DonationAssignBusiness extends Component {
    constructor() {
        super()
        this.state = {
            searchText: "",
            isEnabledButton: false,
            selectedIndex: -1,
            selectedBusiness: null,
        }
    }

    static navigationOptions = {
        header: null,
    }

    onItemClick = (index, business) => {
        this.setState({
            selectedIndex: index,
            selectedBusiness: business,
            isEnabledButton: true,
        })
    }

    onAssignClick = () => {
        this.props.navigation.state.params.onGoBack(this.state.selectedBusiness)
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
                        <Text style={styles.headertitlen}>Receiving Agency</Text>
                    </View>
                    <View style={styles.tabMenuPart}>
                        <View style={styles.tabMenuPart2}>
                            <Item rounded style={styles.search_bar}>
                                <Icon name='search' color="#DD8D6C" />
                                <Input placeholder='Enter name here' style={{ fontSize: 12, fontFamily: 'Ubuntu' }} value={this.state.searchText} onChangeText={(e) => this.setState({ searchText: e })} />
                             </Item>
                        </View>
                    </View>

                </Image>
                <AgencyListViewContainer 
                    searchText={this.state.searchText} 
                    selectedIndex={this.state.selectedIndex}
                    onClick = {this.onItemClick}
                />                
                
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


class AgencyListView extends React.Component {
    
    
    render() {
        /*const agencies = [
            {name: 'Alex Smith'},
            {name: 'Anthony Baldwin'},
            {name: 'Brittnay Boyd'},
            {name: 'Ronand Sanchez'},
            {name: 'Steven Wright'},
            {name: 'Edward Baker'},
            {name: 'Jason Adams'},
            {name: 'Matthew Nelson'},
            {name: 'Timothy Ramirez'},
            {name: 'Scott Roberts'},
            {name: 'Raymond Flores'},
            {name: 'Joshua Morris'},
            {name: 'Dennis Roger'},
            {name: 'Jack Kelly'},
            {name: 'Gerald Howard'},
            {name: 'Nicholas Richardson'},
            {name: 'Brandon Hughes'},
            {name: 'Russell Foster'},
            {name: 'Clarence Sanders'},            
        ]
        const {searchText, selectedIndex, onClick} = this.props
        var prevChar = ""
        var filteredAgency = agencies.filter((agency) => {
            return agency.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
        })
        filteredAgency = filteredAgency.sort((a, b) => a.name > b.name)


        return (
            <Container style={{marginBottom: 60}}>
                <Content>
                    <List  >
                        {
                            filteredAgency.map((agency, index) => {
                                //console.log(member)
                                const name = agency.name
                                if (prevChar !== name[0]) {
                                    prevChar = name[0]
                                    return (
                                        <View>
                                            <ListItem itemDivider style={styles.listItemSection} >
                                                <Text style={styles.listItemSectionText}>{name[0]}</Text>
                                            </ListItem>
                                            <ListItem icon onPress={() => {onClick(index, agency)}}>                                                                            
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
                                                    <Text style={styles.listItemText}>{name}</Text>
                                                </Body>
                                            </ListItem>
                                        </View>
                                    )
                                } else {
                                    return (
                                        <ListItem icon onPress={() => onClick(index, agency)}  >
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
                                                <Text style={styles.listItemText}>{name}</Text>
                                            </Body>
                                        </ListItem>
                                    )
                                }
                            })
                        }
                    </List>
                </Content>
                

            </Container>
        )*/



        
        const {searchText, selectedIndex, onClick, users} = this.props
        var prevChar = ""
        var filteredAgency = users.filter((agency) => {
            return (agency.profile.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) && (agency.profile.bType == false)
        })
        filteredAgency = filteredAgency.sort((a, b) => a.profile.name > b.profile.name)

        //filteredAgency = filteredAgency.sort((a, b) => a.localeCompare(b))


        return (
            <Container style={{marginBottom: 60}}>
                <Content>
                    <List  >
                        {
                            filteredAgency.map((agency, index) => {
                                //console.log(member)
                                const name = agency.profile.name
                                if (prevChar !== name[0]) {
                                    prevChar = name[0]
                                    return (
                                        <View>
                                            <ListItem itemDivider style={styles.listItemSection} >
                                                <Text style={styles.listItemSectionText}>{name[0]}</Text>
                                            </ListItem>
                                            <ListItem icon onPress={() => {onClick(index, agency)}}>                                                                            
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
                                                    <Text style={styles.listItemText}>{name}</Text>
                                                </Body>
                                            </ListItem>
                                        </View>
                                    )
                                } else {
                                    return (
                                        <ListItem icon onPress={() => onClick(index, agency)}  >
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
                                                <Text style={styles.listItemText}>{name}</Text>
                                            </Body>
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



const AgencyListViewContainer = createContainer((params) => {
    Meteor.subscribe('business')
    return ({
        users: Meteor.collection('users').find({})
    })
}, AgencyListView)
