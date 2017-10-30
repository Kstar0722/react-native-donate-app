import React, { Component } from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Text,
    Easing,
    TouchableWithoutFeedback,
    Dimensions,
    StyleSheet,  

} from 'react-native'
import { Images } from '../DevTheme'
import CircularMenu from './Modals/CircularMenu'

var {height, width} = Dimensions.get('window');

const ANIMATION_DURATION = 300
const TRANSITION_BUFFER = 10

const reactMixin = require('react-mixin')
import TimerMixin from 'react-timer-mixin'

export default class ButtomMenu extends Component {
    constructor (props) {
        super(props)
        this.state = {
        }
        this.handlePress = this.handlePress.bind(this)
        this.callback = this.callback.bind(this)
    }

    callback() {
        /*this.setTimeout(() => {
            this.setState({
                circleColor: 'white'
            })
        }, TRANSITION_BUFFER + 5)*/
    }

    handlePress() {
        this.setState(this.circleTransition.start(this.callback))
    }

    handleMenuRightItem = () => {
        console.log('Right Menu Button Clicked...')
    }

    handleMenuLeftItem = () => {
        console.log('Left Menu Button Clicked...')
    }

    render() {
        console.log('Render ButtomMenu...')
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                <TouchableOpacity style={styles.addButton} underlayColor='#ffb660' onPress={this.handlePress}> 
                    <Image source={Images.plus_1} style={styles.addButtonImage} />          
                </TouchableOpacity>
                </View>               
                <CircularMenu
                    ref={(circle) => {this.circleTransition = circle}}                    
                    duration={ANIMATION_DURATION}
                    size = {width}
                    transitionBuffer={TRANSITION_BUFFER}
                    rightPress={this.handleMenuRightItem}
                    leftPress={this.handleMenuLeftItem}
                />
            </View>
        )
    }
    

}

reactMixin(ButtomMenu.prototype, TimerMixin)


const styles = StyleSheet.create({
    addButton: {
      backgroundColor: '#ffb660',
      borderColor: '#ffb660',
      borderWidth: 1,
      height: 50,
      width: 50,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 15,
      shadowColor: "#000000",
      shadowOpacity: 0.7,
      shadowRadius: 3,
      shadowOffset: {
        height: 3,
        width: 0
      }
    },
  
    addButtonImage: {
      width:25, 
      height:25, 
      tintColor: 'white'
    },
  
  
})








