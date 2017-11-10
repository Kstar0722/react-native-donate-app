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
import styles from './Styles/SignupStyles'

const { width, height } =Dimensions.get('window')

export default class Signup extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            signupType: 0,
        }
    }

    static navigationOptions = {
        header : null,
    }

    onSignupTypeClick = (typeIndex) => {
        this.setState({signupType: typeIndex})
    }

    onSignupClick = () => {
        switch (this.state.signupType) {
            case 1: // Business Signup...
                this.props.navigation.navigate('SignupBusiness')
                break;
            case 2: // Team Signup...
                
                break;
            case 3: // Individual Signup...
                
                break;
        
            default:
                break;
        }

    }

    onBackClick = () => {

    }

    onHelpClcik = () => {
        this.setState({signupType: 0}, function() {
            this.props.navigation.navigate('SignupHelp')
        })        
    }



    render() {
        return (
            <ImageBackground source={Images.signbg_new} style={styles.container} >
                
                
                <Text style={styles.titleText}>Choose Account Type</Text>                

                <View style={styles.content} >
                    <View style={styles.contentTop} >
                        <View>
                            <ImageBackground style={[styles.rectFrame, {marginLeft: 8}]} 
                                source={Images.right_rectangle_small} 
                                resizeMode={'contain'} >
                                <TouchableOpacity onPress={() => this.onSignupTypeClick(1)} >
                                    <Image 
                                        source={(this.state.signupType == 1) ? Images.building_heart_sel : Images.building_heart} 
                                        resizeMode={'contain'} 
                                        style={styles.rectFrameIcon} />
                                </TouchableOpacity>
                                <Text style={styles.rectFrameText} >Business or Non-Profit</Text>
                                {(this.state.signupType == 1) &&
                                <Image source={Images.checkmark} resizeMode={'contain'} style={styles.checkMark} />
                                }                                
                            </ImageBackground>
                        </View>
                        
                        <View>
                            <ImageBackground style={[styles.rectFrame, {marginRight: 8}]} 
                                source={Images.right_rectangle_small} 
                                resizeMode={'contain'} >
                                <TouchableOpacity onPress={() => this.onSignupTypeClick(2)} >
                                    <Image 
                                        source={(this.state.signupType == 2) ? Images.team_sel : Images.team} 
                                        resizeMode={'contain'} 
                                        style={styles.rectFrameIcon} />
                                </TouchableOpacity>
                                <Text style={styles.rectFrameText} >Team Member</Text>
                                {(this.state.signupType == 2) &&
                                <Image source={Images.checkmark} resizeMode={'contain'} style={styles.checkMark} />
                                }                                
                            </ImageBackground>
                        </View>                        
                    </View>

                    <View style={styles.contentBottom} >
                        <View  >
                            <ImageBackground style={[styles.rectFrame, {marginTop: 20}]} 
                                source={Images.right_rectangle_small} 
                                resizeMode={'contain'} 
                            >
                                <TouchableOpacity onPress={() => this.onSignupTypeClick(3)}>
                                    <Image 
                                        source={(this.state.signupType == 3) ? Images.person_sel : Images.person} 
                                        resizeMode={'contain'} 
                                        style={styles.rectFrameIcon} />
                                </TouchableOpacity>
                                <Text style={styles.rectFrameText} >Individual</Text>
                                {(this.state.signupType == 3) &&
                                <Image source={Images.checkmark} resizeMode={'contain'} style={styles.checkMark} />
                                }                                
                            </ImageBackground>
                        </View>
                    </View>
                </View>
                
                {(this.state.signupType == 0) &&
                <TouchableOpacity>
                    <Text style={styles.bottomText}>Not sure? Click here.</Text> 
                </TouchableOpacity> 
                }    

                <View style={styles.nav} >
                    <TouchableOpacity onPress={() => this.onBackClick()}>
                        <Image source={Images.back_img} style={styles.navLeftImg} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <Text style={styles.navCenter}>{' '}</Text>
                    <TouchableOpacity onPress={() => this.onHelpClcik()}>
                        <Image source={Images.help} resizeMode={'contain'} style={styles.navRightImg} />
                    </TouchableOpacity>
                </View>                           

                {(this.state.signupType > 0) &&
                <TouchableOpacity onPress={() => this.onSignupClick()} 
                    activeOpacity={0.8} 
                    style={styles.signupButton}>
                    <Text style={{fontSize: 17}}>Sign Up</Text>
                </TouchableOpacity>
                }
            </ImageBackground>
        )
    }



}