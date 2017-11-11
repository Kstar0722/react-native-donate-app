import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import styles from '../Styles/LaunchScreenStyles';
import { Images } from '../../../Themes'

const { width, height } =Dimensions.get('window')

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
            <View style = {{flex: 1}}>
                <ImageBackground source={Images.signbg_new} style={{width: width, height: height - 75, justifyContent: 'center', alignItems: 'center'}} >
                    <Image source = {Images.logoBig} style={{width: 182, height: 145, marginBottom: 50}} resizeMode={'contain'} />
                    <Text style = {styles.info}>WE BELIEVE IN A FULL AMERICA</Text>
                </ImageBackground>
                <View style={[styles.login, {position: 'absolute', bottom: 0, width: width}]}>
                    <TouchableOpacity onPress={() => navigate('Signup')} style={styles.button}>
                        <Text style = {styles.button_txt} >SIGN UP</Text>
                    </TouchableOpacity>
                    <Image source={Images.devide} style={{ marginBottom: 1 }} />
                    <TouchableOpacity onPress={() => navigate('LoginScreen')} style={styles.button}>
                        <Image source={Images.LOGIN} style = {styles.button_login_txt} />
                    </TouchableOpacity>
                </View>

            </View>           

        );
    }
}
