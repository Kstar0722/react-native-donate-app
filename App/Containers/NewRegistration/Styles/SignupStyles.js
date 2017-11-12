import { StyleSheet,Dimensions } from 'react-native'
const { width, height } =Dimensions.get('window')

export default StyleSheet.create({

    container: {
        flex: 1, 
        justifyContent: 'center', 
    },

    nav: {
        flexDirection: 'row',
        marginTop: 20,
        height: 44,
        alignItems: 'center',
        paddingHorizontal: 15,
        position: 'absolute',
        top: 0,
        width: width,
    },

    navLeftImg: {
        height: 38,
        width: 82,
        marginLeft: -44,
    },

    navCenter: {
        flex: 1,
        backgroundColor: 'transparent',
    },

    navRightImg: {
        width: 25,
        height: 25,
    },

    titleText: {
        backgroundColor: 'transparent', 
        textAlign: 'center',
        position: 'absolute',
        top: 80,
        width: width,
        color: 'white',
        fontSize: 28,
    },

    content: {
        flex: 1, 
        justifyContent: 'center', 
        marginTop: 20
    },

    contentTop: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
    },

    contentBottom: {
        alignItems: 'center'
    },

    rectFrame: {
        width: width/2-30, 
        height:width/2-30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    rectFrameIcon: {
        width: width/4, 
        height: width/4, 
        marginBottom:8, 
        marginTop: 8 
    },

    rectFrameText: {
        backgroundColor: 'transparent', 
        fontSize: 13,
        textAlign: 'center',
    },

    checkMark: {
        width: 30, 
        height: 30, 
        position: 'absolute', 
        bottom: -8, 
        right: -8,
    },

    bottomText: {
        backgroundColor: 'transparent', 
        textAlign: 'center',
        position: 'absolute',
        bottom: 70,
        width: width,
        color: 'white',
        fontSize: 14,
    },

    signupButton: {
        position: 'absolute', 
        bottom: 0, 
        width: width, 
        height: 70, 
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center'
    },



})