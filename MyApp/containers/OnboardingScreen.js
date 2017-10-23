import React, { Component } from 'react';
//import ImageSlider from 'react-native-image-slider';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from '../Styles/LaunchScreenStyles';
import { Images } from '../DevTheme'
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class OnboardingScreen extends Component {
    constructor() {
        super()
        this.state = {
            position: 0,
            interval: null
        }
    }
    static navigationOptions = {
        header: <Text style={{ display: 'none' }}></Text>,
        headerStyle: {
            backgroundColor: '#dd8d6c'
        }
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({ position: this.state.position === 2 ? 0 : this.state.position + 1 });
            }, 2000)
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ width: '100%', height: '100%', flex: 1 }}>
                <TouchableOpacity onPress={() => this.props.navigation.dispatch(NavigationActions.back())} style={{ zIndex: 1 }}>
                    <Image source={Images.backIcon} style={styles.back_btn} />
                </TouchableOpacity>
                <Image source={Images.signbg} style={styles.container}>
                    <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>


                        <Image source={Images.logoBig} style={styles.logoBig} />
                        <Text style={styles.info}>WE BELIEVE IN A FULL AMERICA</Text>
                    </View>
                </Image>
                <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>  
                    <View style={styles.option_view} >
                        <TouchableOpacity style={styles.tipIcon} >
                            <Image source={Images.tipIcon} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.option_button}>
                            <Text  style={styles.option_text} >Sign Up As a Business</Text>
                            <Icon name="chevron-right" size={12} color="#666666" style={styles.options_next} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.option_view} >
                        <TouchableOpacity style={styles.tipIcon} >
                            <Image source={Images.tipIcon} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.option_button}>
                            <Text  style={styles.option_text} >Sign Up As a Individual</Text>
                            <Icon name="chevron-right" size={12} color="#666666" style={styles.options_next} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.option_view} >
                        <TouchableOpacity style={styles.tipIcon} >
                            <Image source={Images.tipIcon} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.option_button}>
                            <Text  style={styles.option_text} >Sign Up As a Team Member</Text>
                            <Icon name="chevron-right" size={12} color="#666666" style={styles.options_next} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        );
    }
}