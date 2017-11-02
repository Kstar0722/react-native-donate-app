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

export default class LaunchScreen extends Component {
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
            <View style = {{width : '100%', height :'100%'}}>
                <Image source={Images.signbg} style={styles.container}>
                    <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source = {Images.logoBig} style = {styles.logoBig} />
                        <Text style = {styles.info}>WE BELIEVE IN A FULL AMERICA</Text>
                    </View>
                    <View style={styles.login}>
                        <TouchableOpacity onPress={() => navigate('OnboardingScreen')} style={styles.button}>
                            <Image source={Images.SINGUP1} />
                        </TouchableOpacity>
                        <Image source={Images.devide} style={{ marginBottom: 1 }} />
                        <TouchableOpacity style={styles.button}>
                            <Image source={Images.LOGIN} />
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>

        );
    }
}
