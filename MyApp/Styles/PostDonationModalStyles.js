import { StyleSheet, Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');
export default StyleSheet.create({

    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0,0,0,0.7)',
    },

    bgImg: {
        width: 280, 
        height: height - 128,
        backgroundColor: 'transparent', 
        borderRadius: 15,
    },

    titleText: {
        marginTop: 50, 
        backfaceVisibility: 'hidden', 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'white', 
        textAlign: 'center'
    },

    centerFrame: {
        backfaceVisibility: 'hidden', 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: -50
    },

    handShakeImg: {
        width: 80, 
        height: 40, 
        marginLeft: 50
    },

    questionMarkImg: {
        width:20, 
        height:20, 
        marginLeft: 30
    },

    btnContainer: {
        width: 180, 
        height: 35, 
        marginTop: 15
    },

    bottomFrame: {
        position: 'absolute', 
        right: 20, 
        bottom: 30, 
        flexDirection: 'row'
    },

    bottomText: {
        color: 'white', 
        fontSize: 15,
    },

    bottomImg: {
        width: 20, 
        height: 15
    },


})