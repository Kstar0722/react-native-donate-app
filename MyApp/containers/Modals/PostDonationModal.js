import React from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Modal,
    Dimensions,
    FlatList,
    ImageBackground,
} from 'react-native'
import { Images } from '../../DevTheme'
import styles from '../../Styles/PostDonationModalStyles'
import { Button } from 'react-native-elements'

screenWidth=Dimensions.get('window').width;
screenHeight=Dimensions.get('window').height;

export default class PostDonationModal extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.postDonationModalVisible}
            onRequestClose={() => {alert()}}
            >
                <View style={styles.container}>
                    <ImageBackground source={Images.popup_bg} resizeMode={'stretch'} style={styles.bgImg}>                    
                        <Text style={styles.titleText} >Post Donation</Text>
                        <View style={styles.centerFrame} >
                            <View style={{flexDirection: 'row'}} >
                                <Image source={Images.hand_shake} style={styles.handShakeImg} />
                                <TouchableOpacity onPress={() => {}} >
                                    <Image source={Images.questionMark} style={styles.questionMarkImg}/>
                                </TouchableOpacity>                                
                            </View>
                            
                            <Button                            
                            title='Assign To Business'
                            containerViewStyle={styles.btnContainer}
                            backgroundColor={'#ffb660'}
                            borderRadius={10}
                            fontWeight={'bold'}
                            fontSize={14}
                            onPress={() => {}}
                            />
                        </View>
                        <TouchableOpacity onPress={this.props.close} >
                        <View style={styles.bottomFrame} >
                            <Text style={styles.bottomText} >Skip This Step</Text>
                            <Image source={Images.arrow_right} style={styles.bottomImg} ></Image>
                        </View>
                        </TouchableOpacity>
                    </ImageBackground>

                </View>
            </Modal>
        )
    }



}