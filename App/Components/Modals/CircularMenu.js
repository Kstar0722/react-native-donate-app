import React, { Component, PropTypes } from 'react'
import { 
    Easing, 
    Modal, 
    Dimensions, 
    Animated, 
    Text, 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    Image,
    TouchableWithoutFeedback, 
} from 'react-native'
const { width, height } = Dimensions.get('window')
const reactMixin = require('react-mixin')
import TimerMixin from 'react-timer-mixin'
import { Images } from '../../Themes'

class CircularMenu extends Component {
    constructor (props) {
        super(props)
        const {
            expand
        } = this.props
      this.state = {
          visible: false,
          scale: new Animated.Value(0),
          isButtonDisabled: true,
          leftButtonVisible: false,
      }
      this.setVisible = this.setVisible.bind(this)
      this.handlePress = this.handlePress.bind(this)
    }

    componentDidMount() {
        this.setTimeout(function() {
            this.setState({
                isButtonDisabled: false
            })
        }, 1000);    
    }

    start (callback) {
        const {expand} = this.props
        this.setVisible(true, () => this.animate(expand, callback))
    }

    animate (expand, callback) {
        this.setState({
            leftButtonVisible: false,
        })
        const {
            easing,
            transitionBuffer
        } = this.props
        let toValue = expand ? 1 : 0
        Animated.timing(this.state.scale, {
            toValue: toValue,
            duration: this.props.duration,
            easing: easing
          }).start(() => {
              callback()
              this.setTimeout(() => {
                 this.setState({leftButtonVisible: true})
              }, transitionBuffer) 
        })
    }

    dismiss () {
        this.setState({
            leftButtonVisible: false,
        })
        const {
            easing,
            transitionBuffer
        } = this.props
        let toValue = 0
        Animated.timing(this.state.scale, {
            toValue: toValue,
            duration: 200,
            easing: easing
          }).start(() => {
              this.setState({
                  visible: false
              })
              this.setTimeout(() => {
                 this.setState({leftButtonVisible: true})
              }, transitionBuffer)   

        })
    }

    setVisible (visible, callback) {
        this.setState({
            visible: visible
        }, callback)
    }

    getLeftPosition () {
        const {size} = this.props
        const halfSize = size / 2
        const halfWidth = width / 2

        return halfWidth - halfSize
    }

    getTopPosition () {
        const {size} = this.props
        const halfSize = size / 2

        return height - halfSize
    }

    handlePress(event) {
        console.log('Press..............')
        let pageX = event.nativeEvent.pageX
        let pageY = event.nativeEvent.pageY
        console.log('pageX', pageX)
        console.log('pageY', pageY)
        console.log('Radius', width/2)
        let deltaX = Math.abs(pageX - width/2)
        let deltaY = Math.abs(pageY - height)
        console.log('deltaX', deltaX)
        console.log('deltaY', deltaY)        
        let distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))
        console.log('distance', distance) 
        if (distance > width/2 + 10)  this.dismiss()
    }

    render () {
        const {scale, visible} = this.state
        const { size} = this.props
        let topPosition = this.getTopPosition() - 15
        let leftPosition = this.getLeftPosition()
        return (
            <Modal
                animationType='none'
                transparent
                visible={visible}
                onRequestClose={() => {}}>
                
                <TouchableWithoutFeedback onPress={this.handlePress} style={{flex: 1}} >
                <View style={styles.container}>
                               
                    <Animated.View style={{
                        backgroundColor: 'white',
                        top: topPosition,
                        left: leftPosition,
                        width: size,
                        height: size ,
                        borderRadius: (size) / 2,
                        transform: [{
                          scale: scale
                        }],                        
                      }}                      
                    >
                    <Image source={Images.modalBg} style={{width: size - 10, height: size - 10, borderRadius: (size - 10) / 2, marginLeft: 5, marginTop: 5}} />                                           
                    </Animated.View>                                   
                  

                     <View style={styles.content}>
                        <View style={[styles.menuItem, this.state.leftButtonVisible ? {opacity: 1} : {opacity: 0}, {left: 20}]} >
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity style={styles.menuItemImageFrame} onPress={() => {this.props.leftPress(), this.dismiss()}}>
                                    <Image source={Images.donate_excess_food} style={styles.menuItemImage}></Image>
                                </TouchableOpacity>
                                <Text style={styles.menuItemText} >Donate excess food</Text>
                            </View>
                        </View>                     
                  
                        <TouchableOpacity style={styles.addButton} underlayColor='white' disabled={this.state.isButtonDisabled} onPress={() => {this.dismiss()}}  > 
                            <Image source={Images.setButton} style={styles.addButtonImage} />          
                        </TouchableOpacity>

                        <View style={[styles.menuItem, this.state.leftButtonVisible ? {opacity: 1} : {opacity: 0},{right: 20}]} >
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity style={styles.menuItemImageFrame} onPress={() => {this.props.rightPress(), this.dismiss()}}>
                                    <Image source={Images.feed_community} style={styles.menuItemImage}></Image>
                                </TouchableOpacity>
                                <Text style={styles.menuItemText} >Feed the community</Text>
                            </View>
                        </View>

                        <View style={[styles.menuItemCenterFrame, this.state.leftButtonVisible ? {opacity: 1} : {opacity: 0}]} >
                            <Text style={styles.menuCenterTopText} >Create a post:</Text>
                            <Text style={styles.menuCenterBottomText} >SELECT AN OPTION BELOW</Text>
                        </View>

                        
                    </View> 
                                     
                
                </View>
                </TouchableWithoutFeedback>
              
          </Modal>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    touchable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    touchableView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        width: width,
        height: height,
    },

    content: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row', 
    },

    menuItem: {
        position: 'absolute', 
        bottom: 10,
    },

    menuItemImageFrame: {
        width: width/2 - 70 , 
        alignItems:'center', 
        marginBottom: 10,
    },

    menuItemImage: {
        width: 60, 
        height: 60*115/142,
    },

    menuItemText: {
        fontSize: (width < 370) ? 11 : 14, 
        color: 'white', 
        textAlign: 'center'
    },

    menuItemCenterFrame: {
        position: 'absolute', 
        bottom: width/2 - 70,
    },

    menuCenterTopText: {
        fontSize: (width < 370) ? 13 : 15, 
        color: 'white', 
        fontWeight: 'bold', 
        textAlign: 'center'
    },

    menuCenterBottomText: {
        fontSize: (width < 370) ? 12 : 14, 
        color: 'white', 
        textAlign: 'center', 
        marginTop: 8
    },

    addButton: {
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        height: 60,
        width: 60,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.7,
        shadowRadius: 2,
        shadowOffset: {
            height: 3,
            width: 0
        }
    },

    addButtonImage: {
        width: 30, 
        height: 11, 
        tintColor: '#ffb660',
    },


})

reactMixin(CircularMenu.prototype, TimerMixin)

CircularMenu.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    duration: PropTypes.number,
    transitionBuffer: PropTypes.number,
    easing: PropTypes.func,
    sizeBeforeExpanding: PropTypes.number,
    expand: PropTypes.bool,
    leftPress: PropTypes.func,
    rightPress: PropTypes.func,

}

CircularMenu.defaultProps = {
    color: 'orange',
    size: Math.min(width, height) - 1,
    duration: 800,
    transitionBuffer: 5,
    easing: Easing.linear,
    expand: true,
    leftPress: () => {},
    rightPress: () => {},
}



export default CircularMenu