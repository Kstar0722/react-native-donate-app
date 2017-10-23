import React from 'react'
import { Text, View, Image, TouchableOpacity, Switch, Modal, Dimensions, TextInput, ScrollView } from 'react-native'
//import Icon from 'react-native-vector-icons/FontAwesome'
import { Images } from '../DevTheme'
import styles from '../Styles/AddItemsModalStyle'
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default class AddItemsModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            item: null
        }
        this.onAdd = this.onAdd.bind(this)
        this.onRemove = this.onRemove.bind(this)
    }

    static navigationOptions = {
        header: null,
    }

    onAdd() {
        var tmpItems = this.state.items.slice();
        tmpItems.push(this.state.item)
        this.setState({ items: tmpItems })
    }

    onRemove(index) {
        this.setState({ items: this.state.items.filter((obj, item) => item != index) })
    }


    render() {

        return (
            <View style={[styles.dContainer]}>
                <Image source={Images.mHeder} style={styles.dHeader}></Image>
                <View style={styles.dHeaderInner}>
                    <TouchableOpacity style={styles.dLeftHeader}>
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
                <TouchableOpacity>
                    <Image style={styles.footer} source={Images.reactAngleModelBg}>
                        <Text style={styles.signup_btn}>SIGN UP</Text>
                    </Image>
                </TouchableOpacity>
                <KeyboardSpacer />
            </View>
        );
    }
}
