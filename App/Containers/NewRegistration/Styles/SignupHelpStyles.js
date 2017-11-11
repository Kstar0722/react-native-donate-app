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
        //position: 'absolute',
        //top: 0,
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
        marginRight: 25,
        color: 'white',
        textAlign: 'center',
    },

    rectFrame: {
        width: width*0.75, 
        height: width*0.42,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },

    rectFrameIcon: {
        height: width*0.22,
        width: width*0.22,
    },

    rectFrameText: {
        backgroundColor: 'transparent',
    },

    navFrameClickText: {
        backgroundColor: 'transparent',
        fontFamily: 'Avenir',
        fontSize: 13,
        position: 'absolute',
        bottom: 8,
        color: 'black',
        opacity: 0.54,
    },

    content: {
        width: width, 
        alignItems: 'center', 
        marginTop: 10
    },

})