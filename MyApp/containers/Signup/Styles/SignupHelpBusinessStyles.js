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

    navRightImg: {
        width: 23,
        height: 23,
        tintColor: 'white',
    },

    content: {
        width: width, 
        alignItems: 'center', 
        marginTop: 10,
        paddingHorizontal: 20,
    },

    rectFrame: {
        width: width-40,
        height: width-40,
        //justifyContent: 'center',
        alignItems: 'center',
    },

    rectFrameIcon: {
        width: width/3,
        height: width/3,
        marginTop: 30,
    },

    rectFrameTitleText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 8,
    },
    
    rectFrameDescriptionText: {
        textAlign: 'center',
        backgroundColor: 'transparent',
        marginTop: 8,
        paddingHorizontal: 20,
        fontSize: 15,
    },



})