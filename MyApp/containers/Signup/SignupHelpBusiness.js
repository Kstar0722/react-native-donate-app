import React from 'react'
import { 
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    Dimensions, 
    ImageBackground, 
    TouchableWithoutFeedback,
    AsyncStorage,
} from 'react-native'

import { Images } from '../../../App/Themes'
import styles from './Styles/SignupHelpBusinessStyles'

const { width, height } =Dimensions.get('window')

export default class SignupHelpBusiness extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
        }
    }

    static navigationOptions = {
        header : null,
    }

    onBackClick = () => {
        this.props.navigation.goBack()
    }

    onCloseClick = () => {
        let key = this.props.navigation.state.params.backKey
        this.props.navigation.goBack(key)
    }

    render() {
        return (
            <ImageBackground source={Images.signbg_new} style={styles.container} >

                <View style={styles.nav} >
                    <TouchableOpacity onPress={() => this.onBackClick()}>
                        <Image source={Images.back_img} style={styles.navLeftImg} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <Text style={styles.navCenterText}>Help</Text>
                    <TouchableOpacity onPress={() => this.onCloseClick()}>
                        <Image source={Images.close} resizeMode={'contain'} style={styles.navRightImg} />
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <ImageBackground style={styles.rectFrame} source={Images.right_rectangle_frame} resizeMode={'contain'} >
                        <Image style={styles.rectFrameIcon} source={Images.building_heart_sel} resizeMode={'contain'} />
                        <Text style={styles.rectFrameTitleText} >Business or Non-Profit</Text>
                        <Text style={styles.rectFrameDescriptionText} >This account type is for users that will be posting on behalf of a business or non-profit. We can add as much text as we would like in this area.</Text>
                    </ImageBackground>
                </View>
            </ImageBackground>
        )
    }

}