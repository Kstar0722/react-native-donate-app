import React, { Component } from 'react';
//import ImageSlider from 'react-native-image-slider';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from '../Styles/SplashStyles';
import { Images } from '../DevTheme'

export default class SplashScreen extends Component {
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
                    {/*
                <ImageSlider 
                    images={[
                        'https://firebasestorage.googleapis.com/v0/b/fir-test-a3cb2.appspot.com/o/Slide1.png?alt=media&token=b759b7dd-3dc5-488c-8469-2ed78237dfe7',
                        'https://firebasestorage.googleapis.com/v0/b/fir-test-a3cb2.appspot.com/o/step2.png?alt=media&token=40361524-976d-401f-92b0-9ca753c92253',
                        'https://firebasestorage.googleapis.com/v0/b/fir-test-a3cb2.appspot.com/o/step3.png?alt=media&token=a26c3814-65b2-4623-8c00-05675d05cef5'
                    ]}
                    height={440}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({position})}
                />
                
                    <TouchableOpacity style={styles.facebook}>
                        <Image source={Images.facebook} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.google}>
                        <Image source={Images.google} />
                    </TouchableOpacity>
                */}
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