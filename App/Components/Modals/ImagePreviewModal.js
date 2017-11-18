import React from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Modal,
    Dimensions,
    StyleSheet
} from 'react-native'
import PhotoView from 'react-native-photo-view'

import { Images } from '../../Themes'

var {height, width} = Dimensions.get('window');

export default class ImagePreviewModal extends React.Component {

    constructor() {
        super()
        this.state = {
            imgUrl: '',
        }
    }

    componentWillReceiveProps () {
        if (this.props.imgUrl != "") {
            this.setState({
                imgUrl: this.props.imgUrl
            })
        }        
    }

    render() {
        return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.imagePreviewModalVisible}
            onRequestClose={() => {alert()}}
        >
            <View style={styles.container} >
                <View style={styles.nav}>
                    <TouchableOpacity onPress={this.props.close}>
                        <Image source={Images.backIcon} style={styles.backImg} />
                    </TouchableOpacity>
                    <Text style={styles.navTitle}>{' '}</Text>
                </View>
                <PhotoView
                    source={this.state.imgUrl ? {uri: this.state.imgUrl} : Images.complete_donation_top_bg}
                    minimumZoomScale={0.5}
                    maximumZoomScale={3}
                    androidScaleType="center"
                    style={{flex: 1}}
                />
            </View>
        </Modal>
        )
    }



}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#dd8d6c',
    },

    nav: {
        flexDirection:'row',
        marginTop: 20,
        height: 44,
        alignItems:'center',
        paddingHorizontal:15,
    },

    backImg: {
        height: 20, 
        width: 20,
    },

    navTitle: {
        flex:1,
        paddingHorizontal:10,
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:17,
        backgroundColor:'transparent',
    },

})