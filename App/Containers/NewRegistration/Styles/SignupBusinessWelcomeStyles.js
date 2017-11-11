import { StyleSheet, Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');

export default StyleSheet.create({

    mainView: {
        flex: 1,
    },

    fDheadr:{
        width:width,
        height:128,
    },

    cNavigation:{
        flexDirection:'row',
        marginTop: 20,
        height: 44,
        alignItems:'center',
        paddingHorizontal:15,
    },

    menuIconNav:{
        height:24,
        width:24,
    },

    refedText:{
        flex:1,
        paddingHorizontal:10,
        color:'#fff',
        fontWeight:'bold',
        fontSize:16,
        backgroundColor:'transparent',
    },

    refedSmallText:{
        fontSize:12,
        color:'#fff',
        backgroundColor:'transparent',
        marginRight:10,
    },

    dateLayout:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15,        
    },

    dayStyle:{
        fontFamily: 'Ubuntu',
        fontWeight:"500",
        backgroundColor:'rgba(0,0,0,0)',
        fontSize:43,
        color:'#fff',
    },

    weekAndYearLayout:{
        flex:1,
        marginLeft:10,
    },

    weekAndYearStyle:{
        fontFamily: 'Ubuntu',
        backgroundColor:'rgba(0,0,0,0)',
        fontSize:15,
        fontWeight:'600',
        color:'#fff',
    },

    fDfooter:{
        backgroundColor:'#ffffff',
        position: 'absolute',
        bottom: 0,
        flex: 1,
        width: width,
    },

    fDfooterInner:{
        flexDirection:'row',
        borderTopWidth:2,
        borderTopColor: 'rgba(216,216,216,0.8)',
        shadowColor: '#D8D8D8',
        shadowOffset: {
            width:2,
            height: 2,
        },
        shadowOpacity: 0.7,
        alignItems:'center',
        height:53,
        justifyContent: 'space-around',
    },

    addButton: {
        backgroundColor: '#ffb660',
        borderColor: '#ffb660',
        borderWidth: 1,
        height: 60,
        width: 60,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000000",
        shadowOpacity: 0.7,
        shadowRadius: 3,
        shadowOffset: {
            height: 3,
            width: 0
        },
        top: -15,
    },

    addButtonImage: {
        width: 30, 
        height: 30, 
        tintColor: 'white'
    },

    messageButtonImage: {
        width: 25,
        height: 34,
        tintColor: 'white',
    },

    buttonSelectedBar: {
        width: 50, 
        height: 5, 
        backgroundColor: '#ffb660', 
        bottom: 8
    },

    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.46)'
    },

    modalFrame: {
        position: 'absolute',
        top: height/2 - 135,
        marginLeft: (width - 270)/2,
        width: 270,
        height: 274,
        backgroundColor: '#f07b74',
        borderRadius: 16,
        alignItems: 'center',
    },

    modalTitle: {
        color: 'white',
        fontSize: 28,
        marginTop: 30,
        textAlign: 'center'
    },

    modalDescription: {
        color: 'white',
        paddingHorizontal: 16,
        marginTop: 30,
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 25,
    },

    modalButtonFrame: {
        backgroundColor: '#ffb660',
        borderRadius: 5,
        width: 140,
        height: 35,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalButtonTitle: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Avenir',
    },


})