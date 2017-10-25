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
        fontSize: 10,
        fontWeight: 'bold',
    },
    dCancelBtn: {
        color: '#999999',
        fontSize: 10,
        fontWeight: 'bold',
    },
    dHeaderInner: {
        width: Dimensions.get('window').width,
        height: 44,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        top: -10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(216,216,216,0.8)',
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
        color: '#666666',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    entryTxt: {
        color: '#D8D8d8',
        fontSize: 8,
        paddingHorizontal: 15,
    },
    mLineText: {
        color: '#A6A6A6',
        fontSize: 14,
        width: Dimensions.get('window').width - 67,
        flexDirection: 'column',
    },
    footer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        height: 64,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'rgba(216,216,216,0.8)',
        backgroundColor: '#FFFFFF',
        justifyContent : 'center',
        alignItems : 'center'
    },
    sendButton: {
        width: 36,
        height: 36,
    },
    trashIcon: {
        width: 25,
        height: 25,
        marginLeft: 10,
        marginTop: 5,
    },
    commentRow: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        alignItems : 'flex-start',
        justifyContent : 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
    },

    rightBlock: {
        paddingLeft: 10,
        paddingRight : 10,
        flex: 1,
    },
    lastRightBlock: {
        paddingVertical: 15,
        paddingRight: 15,
        marginLeft: 15,
        flex: 1,
    },
    titleName: {
        fontSize: 32,
        color: '#000000',
    },
    subTitleName: {
        fontSize: 12,
        color: 999999,
        marginVertical: 10,
    },
    agoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    replayLabel: {
        color: '#666666',
        fontSize: 12,
    },
    replay: {
        color: '#C8C8C8',
        fontSize: 12,
        textAlign: 'right',

    },
    multi_text: {    
        fontSize:15,
        padding: 20,
        height : 60,
        width:'100%' ,      
        color:'black'
    },
    signup_btn : {
        color : "white",
        width : 100, 
        backgroundColor : 'transparent', 
        height : '100%', 
        lineHeight : 64,
        textAlign : "center",
    }
})
