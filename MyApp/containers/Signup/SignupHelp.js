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
import styles from './Styles/SignupHelpStyles'

const { width, height } =Dimensions.get('window')

export default class SignupHelp extends React.Component {

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

    onHelpTypeClick = (helpType) => {
        switch (helpType) {
            case 1: // Business Help...
                this.props.navigation.navigate('SignupHelpBusiness', {
                    backKey: this.props.navigation.state.key,
                })
                break;
            case 2: // Team Help...
                this.props.navigation.navigate('SignupHelpTeam', {
                    backKey: this.props.navigation.state.key,
                })
                break;
            case 3: //Individual Help...
                this.props.navigation.navigate('SignupHelpIndividual', {
                    backKey: this.props.navigation.state.key,
                })
                break;
        
            default:
                break;
        }
    }

    render() {
        return (
            <ImageBackground source={Images.signbg_new} style={styles.container} >
                <View style={styles.nav} >
                    <TouchableOpacity onPress={() => this.onBackClick()}>
                        <Image source={Images.close_img} style={styles.navLeftImg} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <Text style={styles.navCenterText}>Help</Text>
                </View> 

                <View style={styles.content}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => this.onHelpTypeClick(1)} >
                        <ImageBackground source={Images.rectangle_frame} resizeMode={'contain'} style={styles.rectFrame} >
                            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: -15}} >
                                <TouchableOpacity onPress={() => this.onHelpTypeClick(1)} >
                                    <Image source={Images.building_heart_sel}
                                        resizeMode={'contain'}
                                        style={styles.rectFrameIcon} />
                                </TouchableOpacity>
                                <Text style={styles.rectFrameText} >Business or Non-Profit</Text>
                            </View>            
                            <Text style={styles.navFrameClickText} >CLICK TO LEARN MORE</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.9} onPress={() => this.onHelpTypeClick(2)} >
                        <ImageBackground source={Images.rectangle_frame} resizeMode={'contain'} style={styles.rectFrame} >
                            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: -15}} >
                                <TouchableOpacity onPress={() => this.onHelpTypeClick(2)} >
                                    <Image source={Images.team_sel}
                                        resizeMode={'contain'}
                                        style={styles.rectFrameIcon} />
                                </TouchableOpacity>
                                <Text style={styles.rectFrameText} >Team Member</Text>
                            </View>            
                            <Text style={styles.navFrameClickText} >CLICK TO LEARN MORE</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.9} onPress={() => this.onHelpTypeClick(3)} >
                        <ImageBackground source={Images.rectangle_frame} resizeMode={'contain'} style={styles.rectFrame} >
                            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: -15}} >
                                <TouchableOpacity onPress={() => this.onHelpTypeClick(3)} >
                                    <Image source={Images.person_sel}
                                        resizeMode={'contain'}
                                        style={styles.rectFrameIcon} />
                                </TouchableOpacity>
                                <Text style={styles.rectFrameText} >Individual</Text>
                            </View>            
                            <Text style={styles.navFrameClickText} >CLICK TO LEARN MORE</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }

}