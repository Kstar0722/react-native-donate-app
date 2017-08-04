import React from 'react'
import { Text, View, Image, TouchableOpacity, Switch, Modal, Dimensions, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images } from '../../DevTheme'
import styles from '../../Styles/ModalStyles'
import KeyboardSpacer from 'react-native-keyboard-spacer';
export default class DescriptionModal extends React.Component {
    constructor() {
        super ()
        this.state={
          descriptionText:_dText,
        }
    }

    shareMessage = (t) => {
        let p=_dText;
        _dText=''
        if(t){
            this.setState({descriptionText:t});
        }else{
            this.setState({descriptionText:''});
        }
        _dText=t;
    }

    render () {
        return (
            <Modal animationType={'fade'} transparent={true} visible={this.props.descriptionModalVisible}
                onRequestClose={() => alert()}>
                <View style={styles.dContainer}>
                    <View style={styles.dHeader}></View>
                    <View style={styles.dHeaderInner}>
                        <TouchableOpacity style={styles.dLeftHeader} onPress={this.props.close}>
                            <Icon name='arrow-left' size={20} color='#dd8d6c'/>
                        </TouchableOpacity>
                        <Text style={styles.dTitle}>Description:</Text>
                        <TouchableOpacity style={styles.dRightHeader} onPress={this.props.close}>
                          <Text style={styles.dDoneBtn}>DONE</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                      <Text style={styles.entryTxt}>Entry for January 4, 2017 | 10:30 PM</Text>
                    </View>
                    <View style={{flex:1}}>
                        <TextInput style={[styles.mLineText]} multiline={true} editable={true}
                            underlineColorAndroid="transparent" value={this.state.descriptionText}
                            selectionColor={'#dd8d6c'} onChangeText={(t) => this.shareMessage(t)}/>
                    </View>
                    <KeyboardSpacer />
                </View>
            </Modal>
        );
    }
}
