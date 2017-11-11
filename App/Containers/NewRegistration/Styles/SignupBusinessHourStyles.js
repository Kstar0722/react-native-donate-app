import { StyleSheet,Dimensions } from 'react-native'
const { width, height } =Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    containerTop: {
        height: 72,
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

    navCenter: {
        flex: 1, 
        backgroundColor: 'transparent',
        color: 'white',
        paddingLeft: 24,
        fontSize: 20,
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

    content: {
        marginLeft: 16,
        marginBottom: 24,
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.23)',
        height: 50,
        justifyContent: 'space-between'
    },

    itemTimeText: {
        fontSize: 17, 
        paddingRight: 24, 
        color: 'rgba(0, 0, 0, 0.5)',
    },





})