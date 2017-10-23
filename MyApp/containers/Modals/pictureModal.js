import React from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Switch,
    Modal,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Images } from '../../DevTheme'
import styles from '../../Styles/ModalStyles'
var ImagePicker = require('react-native-image-picker');

export default class PictureModal extends React.Component {
    constructor() {
        super()
        this.onLibrary = this.onLibrary.bind(this)
        this.onCamera = this.onCamera.bind(this)
        this.state = { avatarSource: null }
    }

    onLibrary() {
        var options = {
            title: 'Select Avatar',
            customButtons: [
                { name: 'fb', title: 'Choose Photo from Facebook' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            // Same code as in above section!
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };


                this.props.chooseAvatar(source)
            }
        });
    }

    onCamera() {
        console.log('camera');
        var options = {
            title: 'Select Avatar',
            customButtons: [
                { name: 'fb', title: 'Choose Photo from Facebook' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.launchCamera(options, (response) => {
            // Same code as in above section!
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.props.chooseAvatar(source)
            }
        });
    }

    render() {
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
                            <Icon name='md-arrow-back' size={20} color='#dd8d6c' />
                        </TouchableOpacity>
                        <Text style={styles.headertitle}>Add photo</Text>
                    </View>
                    <TouchableOpacity style={styles.pictureimage} onPress={this.onLibrary}>
                        <Image source={Images.libphoto} />
                    </TouchableOpacity>
                    <Text style={styles.picturetext}>Add image from your photo</Text>
                    <Text style={{ color: 'white', fontSize: 16, marginBottom: 15 }}>library</Text>
                    <TouchableOpacity style={styles.pictureimage} onPress={this.onCamera}>
                        <Image source={Images.takepicture} />
                    </TouchableOpacity>
                    <Text style={styles.picturetext}>Take a picture</Text>
                </View>
            </Modal>
        );
    }
}