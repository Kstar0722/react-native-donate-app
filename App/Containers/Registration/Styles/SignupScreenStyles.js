import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 25,
        resizeMode: 'cover',
        height : '100%',
        zIndex : 1

    },

    text: {
        fontSize: 15,
        height: 27,
        width: 317,
        color: '#fff',
        marginTop: 15,
        borderBottomColor: '#fff',
        borderBottomWidth: 0,
        opacity: 1,
        alignSelf: 'center',
        fontFamily: 'Ubuntu',
        fontWeight : '600'
    },

    multi_text: {
        opacity: 0.1,
        fontSize: 15,
        height: 88,
        padding: 11,
        width: 317,
        color: '#fff',
        marginTop: 20,
        borderColor: '#fff',
        borderWidth: 1,
        opacity: 1,
        alignSelf: 'center',
        fontFamily: 'Ubuntu',
        fontWeight : '600'
        //    marginBottom : 130
    },

    option: {
        position: 'absolute', bottom: 0, width: '100%'
    },
    but: {
        width: '100%',
        borderWidth : 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 25
    },

    but1: {
        width: '100%',
        borderWidth : 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        position : 'absolute',
        bottom : 20
    },

    but_business: {
        marginTop: 120,
        width: 500,
        bottom: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 25
    },

    but_continue: {
        opacity: 0.7,
        fontFamily: 'Ubuntu',
        fontWeight : '600'
    },

    label: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        backgroundColor: 'transparent',
        color: 'white',
        fontFamily: 'Ubuntu',
        fontWeight : '600'
    },

    operation_button: {
        width: 40,
        height: 40,
        marginLeft: 5,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    operation_button_active: {
        width: 40,
        height: 40,
        marginLeft: 5,
        backgroundColor: '#fff',
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    operation_label: {
        fontSize: 10,
        backgroundColor: 'transparent',
        color: 'white',
        fontFamily: 'Ubuntu',
        fontWeight : '600'
    },

    operation_label_active: {
        fontSize: 10,
        backgroundColor: 'transparent',
        color: '#E36679',
        fontFamily: 'Ubuntu',
        fontWeight : '600'
    },

    operation_view: {
        flexDirection: 'row',
        marginBottom: 10
    },

    operation_hours_view: {
        width: 280,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 60
    },

    operation_image: {
        width: 15,
        height: 15,
        position: 'absolute',
        right: 10,
        top: 7
        /*
        alignItems : 'center',
        justifyContent : 'flex-end' */
    },

    operation_text : {
        position: 'absolute',
        left : '20%',
        top :'20%',
        width : "60%",
        textAlign: 'center',
        color : "#E36679",
        backgroundColor : 'transparent',
        fontFamily: 'Ubuntu',
        fontWeight : '600'
    },

    back_btn: {
        width: 16,
        height: 16,
        marginLeft: 20
    },

    camera: {
        width: 88,
        height: 88,
        borderRadius: 44,
        borderWidth: 2,
        borderColor: 'white'
    },

    plus: {
        position: 'absolute',
        width: 30,
        height: 30,
        right: 0,
        top: -5,

    },

    subLabel: {
        fontSize: 10,
        color: 'white',
        marginTop: 10,
        marginBottom: 30,
        backgroundColor: 'transparent',
        fontFamily: 'Ubuntu',
        fontWeight : '600'
    },

    slide_text1: {
        backgroundColor: 'transparent',
        color: '#f3f3f3',
        fontSize: 20,
        alignSelf: 'center',
        flex: 1,
        textAlign: "center",
        paddingLeft: 15,
        fontSize: 14,
        fontWeight: 'bold',

    },

    text1: {
        color: '#f3f3f3',
        fontSize: 15,
        paddingHorizontal: 15,
        backgroundColor: 'transparent',
        fontSize: 10,
        textAlign: 'center',
    },
    option_view: {
        width: "100%",
        height: 70,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },

    tipIcon: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 10
    },

    toggleContainer: {
        width: '100%',
        padding: 20,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        borderBottomWidth: 1,
        flexDirection: 'row'
      },

      toggleLabel: {
        color: 'white',
        fontSize: 14,
        backgroundColor: 'transparent',
        marginLeft : 20,
        width: '65%',
        fontFamily: 'Ubuntu',
        fontWeight : '600'
      },

      toggle: {
        width: '15%',
        height: '100%',
        color: 'white',
        fontSize: 14,
        backgroundColor: 'transparent',
        lineHeight: 30,
        textAlign: 'right',
        marginRight: 5,
        fontFamily: 'Ubuntu',
        fontWeight : '600'
      },

})
