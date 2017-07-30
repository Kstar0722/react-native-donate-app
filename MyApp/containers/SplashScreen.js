import React, { Component } from 'react';
import ImageSlider from 'react-native-image-slider';
import { 
  Text,
  View,  
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../Styles/SplashStyles';
import { Images } from '../DevTheme'

export default class SplashScreen extends Component {
    constructor () {
        super ()
        this.state = {
            position: 0,
            interval: null
        }
    }
    static navigationOptions = {
        header:<Text style={{display:'none'}}></Text>,
            headerStyle: {
        backgroundColor: '#dd8d6c'
        }
    }

    componentWillMount () {
        this.setState({ interval: setInterval(()=>{
            this.setState({ position: this.state.position === 2 ? 0 : this.state.position+1});
        }, 2000) });
    }
    componentWillUnmount () {
        clearInterval(this.state.interval);
    }
    render () {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <ImageSlider 
                    images={[
                        'https://firebasestorage.googleapis.com/v0/b/fir-test-a3cb2.appspot.com/o/Slide1.png?alt=media&token=261ae3b2-631f-4a5a-aac5-9e4ce1c2ca8a',
                        'https://firebasestorage.googleapis.com/v0/b/fir-test-a3cb2.appspot.com/o/step2.png?alt=media&token=aa4c300c-94be-43f3-ac20-4b3b91bc6022',
                        'https://firebasestorage.googleapis.com/v0/b/fir-test-a3cb2.appspot.com/o/step3.png?alt=media&token=784fb079-ffb5-4fe2-9cce-4d5336256fbf'
                    ]}
                    height={405}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({position})}
                />
                
                    <TouchableOpacity style={styles.facebook}>
                        <Image source={Images.facebook} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.google}>
                        <Image source={Images.google} />
                    </TouchableOpacity>
                    <View style={styles.login}>
                        <TouchableOpacity onPress={() => navigate('SignupScreen')}>
                            <Image source={Images.SINGUP} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={Images.LOGIN} />
                        </TouchableOpacity>
                    </View>
            </View>
          
        );
    }
}