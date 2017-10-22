import React from 'react'
import { Text, View, Image, TouchableOpacity, Switch, Modal, Dimensions, TextInput, ScrollView} from 'react-native'
//import Icon from 'react-native-vector-icons/FontAwesome'
import { Images } from '../DevTheme'
import styles from '../Styles/MessageStyles'
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default class DescriptionModal extends React.Component {
    constructor() {
        super ()
        this.state={
        }
    }

    static navigationOptions = {
      header:null,
    }

    render () {
        return (
                <View style={[styles.dContainer]}>
                    <Image source={Images.mHeder} style={styles.dHeader}></Image>
                    <View style={styles.dHeaderInner}>
                        <Text style={styles.dTitle}>Message</Text>
                        <TouchableOpacity style={styles.dRightHeader}>
                          <Text style={styles.dDoneBtn}>CLOSE</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{flex:1}}>
                            <View style={styles.commentRow}>
                                <Image source={Images.avatar} style={styles.avatar}></Image>
                                <View style={styles.rightBlock}>
                                    <Text style={styles.titleName}>Church of Hope</Text>
                                    <Text style={styles.subTitleName}>Yeah, I would like to go there next year. Can you please share to me the itinerary?</Text>
                                    <View style={styles.agoRow}>
                                        <Text style={styles.replayLabel}>Reply</Text>
                                        <Text style={styles.replay}>2 hour {'\n'} ago</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.commentRow}>
                                <Image source={Images.avatar} style={styles.avatar}></Image>
                                <View style={styles.rightBlock}>
                                    <Text style={styles.titleName}>My Account Name</Text>
                                    <Text style={styles.subTitleName}>Haha. That’s nice! Looking great!</Text>
                                    <View style={styles.agoRow}>
                                        <Text style={styles.replayLabel}>Reply</Text>
                                        <Text style={styles.replay}>1 hour {'\n'} ago</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.commentRow}>
                                <Image source={Images.avatar} style={styles.avatar}></Image>
                                <View style={styles.rightBlock}>
                                    <Text style={styles.titleName}>Church of Hope</Text>
                                    <Text style={styles.subTitleName}>Really? I would like to go there soon. I love beach and coconuts. Where did you stay there? Is it cheap?</Text>
                                    <View style={styles.agoRow}>
                                        <Text style={styles.replayLabel}>Reply</Text>
                                        <Text style={styles.replay}>{'1 hour\nago'}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.commentRow}>
                                <Image source={Images.avatar} style={styles.avatar}></Image>
                                <View style={styles.rightBlock}>
                                    <Text style={styles.titleName}>My Account Name</Text>
                                    <Text style={styles.subTitleName}>Yeah! Me too! I love beaches and things in Bali. I would love to go back again.</Text>
                                    <View style={styles.agoRow}>
                                        <Text style={styles.replayLabel}>Reply</Text>
                                        <Text style={styles.replay}>{'30 min\nago'}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.commentRow}>
                                <Image source={Images.avatar} style={styles.avatar}></Image>
                                <View style={styles.lastRightBlock}>
                                    <Text style={styles.titleName}>My Account Name</Text>
                                    <Text style={styles.subTitleName}>Yeah! Me too! I love beaches and things in Bali. I would love to go back again.</Text>
                                    <View style={styles.agoRow}>
                                        <Text style={styles.replayLabel}>Reply</Text>
                                        <Text style={styles.replay}>{'30 min \n ago'}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput style={[styles.mLineText]}
                            underlineColorAndroid="transparent"
                            placeholder='Write a comment'
                            placeholderTextColor= {'#A6A6A6'} />
                        <TouchableOpacity style={styles.Tooltip} onPress={this.tooltip}>
                            <Image source={Images.sendButton} style={styles.sendButton}></Image>
                        </TouchableOpacity>
                      </View>
                      <KeyboardSpacer />
                </View>
        );
    }
}
