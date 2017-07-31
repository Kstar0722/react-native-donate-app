import React from 'react'
import { Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
  Modal,
  Dimensions
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
                animationType={'fade'}
                transparent={true}
                visible={this.props.picturemodalVisible}
                onRequestClose={() => alert()}
            >
                <View style={styles.picturemodal_container}>
                    <View style={styles.header1}></View>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headerleft} onPress={this.props.close}>
                            <Icon name='arrow-left' size={20} color='#dd8d6c'/>
                        </TouchableOpacity>
                        <Text style={styles.headertitle}>Add photo</Text>
                    </View>
                    <TouchableOpacity style={styles.pictureimage}>
                        <Image source={Images.libphoto} />
                    </TouchableOpacity>
                    <Text style={styles.picturetext}>Add image from your photo</Text>
                    <Text style={{color: 'white', fontSize: 16}}>library</Text>
                    <TouchableOpacity style={styles.pictureimage}>
                        <Image source={Images.takepicture} />
                    </TouchableOpacity>
                    <Text style={styles.picturetext}>Take a picture</Text>
                </View>
            </Modal>
        );
    }
}