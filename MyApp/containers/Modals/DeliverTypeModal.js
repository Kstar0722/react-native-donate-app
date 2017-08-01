import React from 'react'
import { Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
  Modal,
  Dimensions,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images } from '../../DevTheme'
import styles from '../../Styles/ModalStyles'

export default class PictureModal extends React.Component {
    constructor() {
        super ()
        
    }
    render () {
        return (
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={this.props.deliverModalVisible}
                onRequestClose={() => alert()}
            >
                <View style={styles.picturemodal_container}>
                    <View style={styles.header1}></View>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headerleft} onPress={this.props.close}>
                            <Icon name='arrow-left' size={20} color='#dd8d6c'/>
                        </TouchableOpacity>
                        <Text style={styles.headertitle}>Delivery Type</Text>
                        <TouchableOpacity style={styles.headerright} onPress={this.props.close}>
                            <Text style={{color:'#82A0FA', fontFamily: 'Avenir', fontSize: 14}}>
                                SET DELIVERY
                            </Text>
                        </TouchableOpacity>                        
                    </View>
                    <Image source={Images.deliverBG} style={styles.deliverBG}>
                        <TouchableHighlight onPress={this.props.setType1}>
                            <View style={styles.deliverlist} >                            
                                <Icon name='circle' size={20} color={this.props.deliverType === 1 ? '#dd8d6c' : 'gray'} style={{marginRight: 24}} />
                                <Text style={this.props.deliverType === 1 ? styles.deliverType1 : styles.deliverType}>Pick Up</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.props.setType2}>
                            <View style={styles.deliverlist} >
                                <Icon name='circle' size={20} color={this.props.deliverType === 2 ? '#dd8d6c' : 'gray'} style={{marginRight: 24}} />
                                <Text style={this.props.deliverType === 2 ? styles.deliverType1 : styles.deliverType} >Guarentee Rescue(Pay)</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.props.setType3}>
                            <View style={styles.deliverlist} >
                                <Icon name='circle' size={20} color={this.props.deliverType === 3 ? '#dd8d6c' : 'gray'} style={{marginRight: 24}} />
                                <Text style={this.props.deliverType === 3 ? styles.deliverType1 : styles.deliverType}>I will deiiver</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableOpacity style={styles.setButton}>
                            <Image source={Images.setButton} />
                        </TouchableOpacity>
                    </Image>
                </View>
            </Modal>
        );
    }
}