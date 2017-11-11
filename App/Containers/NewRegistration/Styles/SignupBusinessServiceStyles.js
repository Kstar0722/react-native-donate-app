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

    navCenter: {
        flex: 1, 
        backgroundColor: 'transparent'
    },

    navRightFrame: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 34,
        borderBottomLeftRadius: 17,
        borderBottomRightRadius: 17,
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
        backgroundColor: 'white',
        width: 120,
    },

    item: {
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth:1, 
        borderBottomColor: '#e7e7e9'
    },

    itemCheckFrame: {
        width: 30, 
        height: 30, 
        borderRadius: 15, 
        marginLeft: 30,
        borderColor: '#e8e8e9', 
        borderWidth: 1.5,
    },

    itemCheckDone: {
        width: 30,
        height: 30,
        tintColor: '#50d2c2',
        marginLeft: 30,
    },

    itemText: {
        marginLeft: 16, 
        marginRight: 8, 
        marginVertical: 25, 
        fontSize: 17,
    },



})