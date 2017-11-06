import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    header1: {
        position: 'absolute',
        top: 0,
        backgroundColor: '#dd8d6c',
        width: Dimensions.get('window').width,
        height: 20
    },
    header: {
        position: 'absolute',
        top: 20,
        width: Dimensions.get('window').width,
        height: 44,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 5,
    },

    headerleft: {
        position: 'absolute',
        zIndex: 10,
        left: 10
        //marginVertical: 25
    },
    deliverBG: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 37
    },
    headerright: {
        position: 'absolute',
        zIndex: 10,
        right: 10
    },
    setButton: {
        position: 'absolute',
        bottom: 15,
        zIndex: 100,
        alignSelf: 'center'
    },
    headertitle: {
        color: '#dd8d6c',
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 18,
        fontFamily: 'Avenir'

        //marginLeft: Dimensions.get('window').width/2-80
    },
    picturemodal_container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },


    picturetext: {
        color: 'white',
        fontSize: 16,
        marginTop: 9,


    },
    pictureimage: {
        marginTop: 15
    },

    deliverlist: {
        flexDirection: 'row',
        marginBottom: 30

    },
    deliverType: {
        fontSize: 22,
        fontFamily: 'Avenir',
        color: 'gray'
    },
    deliverType1: {
        fontSize: 22,
        fontFamily: 'Avenir',
        color: '#dd8d6c'
    },
    title_: {
        position: 'absolute',
        top: 18,
        fontSize: 18,
        alignSelf: 'center',
        color: 'gray'
    },
    delivericon: {
        marginRight: 24,
        marginVertical: 3
    },
    dContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    dHeader: {
        backgroundColor: '#dd8d6c',
        width: Dimensions.get('window').width,
        height: 30,
    },
    dDoneBtn: {
        color: '#7696F9',
        fontSize: 12,
        fontWeight: 'bold',
    },
    dHeaderInner: {
        width: Dimensions.get('window').width,
        height: 44,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        top: -10,
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(216,216,216,0.8)',
        shadowColor: '#D8D8D8',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.7,
    },
    dLeftHeader: {
        position: 'absolute',
        zIndex: 10,
        left: 10
    },
    dLeftHeader: {
        position: 'absolute',
        zIndex: 10,
        left: 15
    },
    dRightHeader: {
        position: 'absolute',
        zIndex: 10,
        right: 15,
    },
    dTitle: {
        color: '#dd8d6c',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 18,
    },
    entryTxt: {
        color: '#D8D8d8',
        fontSize: 8,
        paddingHorizontal: 15,
    },
    mLineText: {
       // color: '#D8D8d8',
        fontSize: 12,
        padding: 15,
        marginTop: 30,
        marginBottom: 15,
        width: Dimensions.get('window').width,
        flexDirection: 'column',
        flex: 1,
    },
    timepickermodal_container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    timepicker_container: {
        width: "100%",
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    }
})
