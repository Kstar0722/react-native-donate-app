import { StyleSheet,Dimensions } from 'react-native'
const { width, height } =Dimensions.get('window')

export default StyleSheet.create({

    container: {
        flex: 1, 
        alignItems: 'center', 
    },

    nav: {
        flexDirection: 'row',
        marginTop: 20,
        height: 44,
        alignItems: 'center',
        paddingHorizontal: 15,
        width: width,
    },

    navLeftImg: {
        height: 38,
        width: 82,
        marginLeft: -44,
    },

    navCenterText: {
        flex: 1,
        backgroundColor: 'transparent',
        fontFamily: 'Avenir',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

    navRightText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 18,
    },

    titleText: {
        backgroundColor: 'transparent', 
        textAlign: 'center',
        color: 'white',
        fontSize: 28,
        marginTop: 8,
    },

    textInputFrame: {
        width: width-50,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },

    textInputTitle: {
        paddingVertical: 10, 
        backgroundColor: 'transparent', 
        color: 'white',
        fontSize: 14,
    },

    textInput: {
        fontSize: 17,
        color: 'white',
        flex: 1,
        textAlign: 'left',
        paddingLeft: 25,                                
    },

    nextButtonFrame: {
        position: 'absolute',
        bottom: 0,
        width: width,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },



})