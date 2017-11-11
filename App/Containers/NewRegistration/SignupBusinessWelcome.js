import React from 'react'
import { 
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    Dimensions, 
    ImageBackground, 
    TextInput,
    Switch,
} from 'react-native'
import dateFormat from 'dateformat'

import { Images } from '../../Themes'
import styles from './Styles/SignupBusinessWelcomeStyles'

const { width, height } =Dimensions.get('window')

export default class SignupBusinessWelcome extends React.Component {

    constructor(props) {
        super(props)

        currentDate = new Date()
        cDate = dateFormat(currentDate, 'dddd,mmm,dd,yyyy').split(",")
        this.state = {
            currentWeek: cDate[0],
            currentDay: cDate[2],
            currentMonth: cDate[1],
            currentYear: cDate[3],
        }
    }

    static navigationOptions = {
        header: null,
    }

    onContinueClick = () => {
        const { user, accountType, businessInfo } = this.props.navigation.state.params
        this.props.navigation.navigate('SignupBusinessOperationInfo', {
            user: user,
            accountType: accountType,
            businessInfo: businessInfo,
        })
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainView}>                
                <ImageBackground source={Images.rectangle} style={styles.fDheadr}>
                    <View style={styles.cNavigation}>
                        <Image source={Images.fDbar} style={styles.menuIconNav} />
                        <Text style={styles.refedText}>Find a Donation</Text>
                        <Text style={styles.refedSmallText}>Map View ?</Text>
                        <Switch  value={ false } onTintColor='#96A883' disabled={true} />
                    </View>
                    <View style={styles.dateLayout}>
                        <Text style={styles.dayStyle} >{this.state.currentDay}</Text>
                        <View style={styles.weekAndYearLayout}>
                            <Text style={styles.weekAndYearStyle}>{this.state.currentWeek}</Text>
                            <Text style={styles.weekAndYearStyle}>{this.state.currentMonth} {this.state.currentYear}</Text>
                        </View>
                        <Image source={Images.ic_chevron_right} />
                    </View>
                </ImageBackground>
                <View style={styles.fDfooter}>
                    <View style={styles.fDfooterInner}>
                        <View style={{flex: 1, alignItems: 'center', opacity: 1}}>
                            <View style={[styles.addButton, {backgroundColor: '#7d9eff', borderColor: '#7d9eff'}]} > 
                                <Image source={Images.fDsearch} style={styles.addButtonImage} resizeMode={'contain'} />          
                            </View>
                            <View style={styles.buttonSelectedBar} />
                        </View>

                        <View style={styles.addButton}> 
                            <Image source={Images.plus_1} style={styles.addButtonImage} />          
                        </View>
                        
                        <View style={{ flex: 1, alignItems: 'center', opacity: 1 }} >
                            <View style={[styles.addButton, {backgroundColor: '#7d9eff', borderColor: '#7d9eff'}]}> 
                                <Image source={Images.message} style={styles.messageButtonImage} resizeMode={'contain'}/>          
                            </View>
                        </View>

                    </View>
                </View>


                <View style={styles.overlay} />

                <View style={styles.modalFrame} >
                    <Text style={styles.modalTitle} >Welcome!</Text>
                    <Text style={styles.modalDescription} >You must add a little more information before you can begin using this app.</Text>
                    
                    <TouchableOpacity onPress={() => this.onContinueClick()} activeOpacity={0.5} style={styles.modalButtonFrame} >
                        <Text style={styles.modalButtonTitle} >CONTINUE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

