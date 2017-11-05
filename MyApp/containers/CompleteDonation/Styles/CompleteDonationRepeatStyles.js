import { StyleSheet,Dimensions } from 'react-native'
const { width, height } =Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efeff4',
    },

    nav: {
        flexDirection:'row',
        marginTop: 20,
        height: 44,
        alignItems:'center',
        paddingHorizontal: 15,
        borderBottomColor: '#c6c6ca',
        borderBottomWidth: 1,
        backgroundColor: '#f6f6f8',
    },

    navLeftIcon: {
        height: 20,
        width: 20,
        tintColor: '#ff3b30',
    },

    navLeftText: {
        color: '#ff3b30', 
        fontSize: 16
    },

    navText: {
        flex: 1,
        paddingHorizontal: 20,
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginLeft: -60,
    },

    gapFrame: {
        width: width, 
        height: 35, 
        backgroundColor: '#efeff4', 
        borderBottomColor: '#c6c6ca', 
        borderBottomWidth: 1
    },

    content: {
        backgroundColor: 'white', 
        paddingLeft: 20
    },

    item: {
        height: 45, 
        borderBottomColor: '#c6c6ca', 
        borderBottomWidth: 1,  
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center'       
    },

    itemText: {
        fontSize: 19
    },

    icon: {
        width: 15, 
        height: 15,
        tintColor: '#ff3b30',
    },


})