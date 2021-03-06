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

import { Images } from '../../Themes'
import styles from './Styles/SignupHelpBusinessStyles'

const { width, height } =Dimensions.get('window')

export default class SignupHelpTeam extends React.Component {

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
            <ImageBackground source={Images.signbg_new} style={styles.container} resizeMode='cover'>

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
                        <Image style={styles.rectFrameIcon} source={Images.team_sel} resizeMode={'contain'} />
                        <Text style={styles.rectFrameTitleText} >Team Member</Text>
                        <Text style={styles.rectFrameDescriptionText} >This account type is for users that are joining an existing team. We can add as much text as we would like in this area.</Text>
                    </ImageBackground>
                </View>
            </ImageBackground>
        )
    }

}