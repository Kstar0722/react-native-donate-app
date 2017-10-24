import React, { Component } from 'react';
//import ImageSlider from 'react-native-image-slider';
import {
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from '../Styles/LoginScreenStyles'

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

                        <View style={{ top: '15%' }}>
                            <TextInput placeholder='USERNAME OR EMAIL'
                                placeholderTextColor='rgba(255,255,255,0.5)' style={styles.text}
                                underlineColorAndroid='white'
                                onChangeText={(text) => this.setState({ name: text })}
                                value={this.state.name} />
                            <Image source={Images.underline} />
                            <TextInput placeholder='PASSWORD'
                                placeholderTextColor='rgba(255,255,255,0.5)' style={styles.text}
                                onChangeText={(text) => this.setState({ email: text })}
                                value={this.state.email} />
                            <Image source={Images.underline} />
                        </View>

                        <Text style = {styles.info}>WE BELIEVE IN A FULL AMERICA</Text>
                    </View>

                    <View style={styles.login}>
                        <TouchableOpacity style={styles.button}>
                            <Image source={Images.LOGIN} />
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>

        );
    }
}
