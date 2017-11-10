import { StyleSheet,Dimensions } from 'react-native'
const { width, height } =Dimensions.get('window')

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    containerTop: {
        height: 200,
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    nav: {
        flexDirection:'row',
        marginTop: 20,
        height: 44,
        alignItems:'center',
        paddingHorizontal:15,
    },

    navLeftImg: {
        height: 38,
        width: 82,
        marginLeft: -44,
    },

    titleText: {
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center'
    },

    cameraImgFrame: {
        position: 'absolute',
        top: 170,
        right: 16,
        width: 60,
        height: 60,
    },

    cameraImg: {
        height: 60, 
        width: 60, 
    },

    content: {
        paddingHorizontal: 30,
        flex: 1,
        paddingTop: 20,
    },

    item: {
        height: 60,
        borderBottomColor: 'rgba(0, 0, 0, 0.23)',
        borderBottomWidth: 1,
        justifyContent: 'center',
    },

    itemText: {
        color: 'rgba(0, 0, 0, 0.5)'
    },

})