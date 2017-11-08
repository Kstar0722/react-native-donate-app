import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
        // backgroundColor: 'white'
    },
    facebook: {
        marginTop: 56,
        alignSelf: 'center'
    },
    google: {
        marginTop: 16,
        alignSelf: 'center'
    },
    /*login: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 25
    },*/
    login: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 75,
        backgroundColor: 'white'
    },
    button: {
        marginVertical: 8
    },
    logoBig: {
        width: 182,
        height: 145,
        position: 'absolute',
        top: 150
    },

    info: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: 'white',
        position: 'absolute',
        bottom: 40,
        fontFamily : 'Ubuntu',
        fontWeight : 'bold',
        fontStyle : 'italic'
    },

    back_btn: {
        width: 16,
        height: 16,
        position: 'absolute',
        top: 40,
        left: 20,
    },

    option_view: {
        width: "100%",
        height: 70,
        flexDirection: "row",
        backgroundColor: "white",
        borderBottomColor: "rgba(0, 0, 0, 0.09)",
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    options_next: {
        position: 'absolute',
        right: 20
    },

    option_button: {
        position: 'absolute',
        left: 80,
        right: 0,

    },

    option_text: {
        backgroundColor: 'transparent',
        fontSize: 16,
        color: '#666666',
        flexDirection: 'row',
        fontFamily : 'Ubuntu',
        fontWeight : '600'

    },

    tipIcon: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 40
    },

    button_txt : {
        width : '100%',
        backgroundColor : 'transparent',
        fontFamily : 'Ubuntu',
        fontSize : 14
    },

    button_login_txt : {
        width : 42,
        height : 14,
        resizeMode : 'contain'

    }

})