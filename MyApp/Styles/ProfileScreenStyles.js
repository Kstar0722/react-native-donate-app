import { Dimensions, StyleSheet } from 'react-native';
let { height, width } = Dimensions.get('window');
export default StyleSheet.create({
  menuIconNav:{
    height:16,
    width:16,
  },
    container:{
        flex: 1,
        backgroundColor: 'transparent',
        height,
        width
    },
    profilebg2:{
        width,
        height: width*700/750,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    profilebg1:{
        width,
        height: width*400/750,
    },
    header:{
        flexDirection: 'row',
        alignItems:'center',
        marginTop: 20,
        padding: 10,
        height: 40,
    },
    headerTitle:{
        width: 40,
        paddingRight: 10,
        width: width-55,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    headerIcon:{
        fontSize: 20,
        color: '#fff',
        width: 40,
    },
    profilePicView:{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#fff5',
        marginTop: -85,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePic:{
        width: 86,
        height: 86,
        borderRadius: 43,
    },
    profileTitle:{
        padding: 5,
        fontSize: 24,
        fontWeight: '500',
        color: '#666666',
    },
    profileSubTitle:{
        padding: 5,
        textAlign: 'center',
        fontSize: 14,
        color: '#BBBBBB',
    },
    menuTab:{
        marginHorizontal: 20,
        marginTop: -50,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menuTabBtn:{
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menuTabBtnIconBg:{
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuTabBtnIcon:{
        top: -2,
        width: 30,
        height: 30,
    },
    menuTabBtnText:{
        fontSize: 12,
        letterSpacing: 0.6,
        color: '#666666',
    },
    tabTitle:{
        alignSelf: 'center',
        marginTop: 20,
        padding: 10,
        fontSize: 17,
        fontWeight: '400',
        color: '#595959',
    },
    description:{
        fontSize: 17,
        padding: 20,
        textAlign: 'center',
        color: '#9B9B9B',
    },
    readMoreBtn:{
        borderRadius: 15,
        borderWidth:2,
        borderColor: '#FD8383',
        width: 125,
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 60,
    },
    readMoreBtnTitle:{
        padding: 5,
        fontSize: 15,
        fontWeight: '600',
        color: '#FD8383',
    },
    listingTab: {
        marginHorizontal: 10,
        backgroundColor: 'transparent',
        width: width- 20,
        height: (width- 20) * 164/710,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listingTabDate:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
    },
    listingTabDateText:{
        fontSize: 24,
        bottom: -2,
        fontWeight: 'bold',
        color: '#b1bdf8',
    },
    listingTabDateMonth:{
        top: -2,
        fontSize: 13,
        fontWeight: '700',
        color: '#b1bdf8',
    },
    listingTabDecription:{
        width: width - 120,
        paddingRight: 15,
    },
    listingTabDecriptionText:{
        fontSize: 15,
        fontWeight: '600',
        color: '#666666',
    },
    listingTabDecriptionTime:{
        paddingTop: 1,
        fontSize: 12,
        color: '#989898',
    },
    addressmap:{
        width,
        height: width * 4/5,
    },
    contactBtn:{
        backgroundColor: '#DD8D6C',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contactBtnText:{
        fontSize: 17,
        fontWeight: '500',
        color: '#fff',
    },

    reactAngleModelBg:{
      height:181,
      width:295,
    },
    bgC:{
      width:width,
      height:height,
      backgroundColor:'rgba(0,0,0,0.45)',
      alignItems:'center',
      flexDirection:'row'
    },
    bgCi:{
      width:width,
      alignItems:'center',
    },
    likeFlagCover:{
      paddingVertical:30,
    },
    likeFlag:{
        fontSize:17,
        color:'#FFFFFF',
        paddingHorizontal:20,
        textAlign:'center',
        width:200,
        alignSelf:'center'
    },
    buttonC:{
      flexDirection:'row',
      paddingHorizontal:10,
      justifyContent:'space-between',
      marginTop:25,
    },
    buttonC1:{
      flexDirection:'row',
      paddingHorizontal:10,
      justifyContent:'space-between',
      marginTop:25,
      alignItems:'center',
    },
    contactBtnm:{
      backgroundColor:'#FFB660',
      width:125,
      paddingVertical:10,
      borderRadius:5,
    },
    contactBtnTextm:{
        textAlign:'center',
        color:'#FFFFFF',
        fontSize:10,
    },header1: {
        position: 'absolute',
        top: 0,
        backgroundColor: '#dd8d6c',
        width:Dimensions.get('window').width,
        height: 20
    },
    // header: {
    //     position: 'absolute',
    //     top: 20,
    //     width:Dimensions.get('window').width,
    //     height: 44,
    //     flexDirection: 'row',
    //     backgroundColor: 'white',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderTopLeftRadius: 5,
    // },

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
    setButton:{
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
        marginTop:15
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
    dContainer:{
        flex:1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    dHeader: {
        backgroundColor: '#dd8d6c',
        width:Dimensions.get('window').width,
        height: 30,
    },
    dDoneBtn:{
      color: '#dd8d6c',
      fontSize: 12,
      fontWeight:'bold',

    },
    dHeaderInner: {
        width:Dimensions.get('window').width,
        height: 44,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        top:-10,
        borderBottomWidth:2,
        borderBottomColor: 'rgba(216,216,216,0.8)',
        shadowColor: '#D8D8D8',
        shadowOffset: {
        width:0,
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
    entryTxt:{
      color:'#D8D8d8',
      fontSize:8,
      paddingHorizontal:15,
    },
    mLineText:{
        color:'#D8D8d8',
        fontSize:14,
        padding:15,
        marginTop:30,
        marginBottom:15,
        width:Dimensions.get('window').width,
        flexDirection: 'column',
        flex:1,
    },
    orangeBack:{
      height:16,
      width:16,

    },
    reactAngleModelBg:{
      height:181,
      width:295,
    },
    bgC:{
      width:width,
      height:height,
      backgroundColor:'rgba(0,0,0,0.45)',
      alignItems:'center',
      flexDirection:'row'
    },
    bgCi:{
      width:width,
      alignItems:'center',
    },
    likeFlagCover:{
      paddingVertical:30,
    },
    likeFlag:{
        fontSize:17,
        color:'#FFFFFF',
        paddingHorizontal:20,
        textAlign:'center',
        width:200,
        alignSelf:'center'
    },
    buttonC:{
      flexDirection:'row',
      paddingHorizontal:10,
      justifyContent:'space-between',
      marginTop:25,
    },
    contactBtnm:{
      backgroundColor:'#FFB660',
      width:125,
      paddingVertical:10,
      borderRadius:5,
    },
    contactBtnTextm:{
        textAlign:'center',
        color:'#FFFFFF',
        fontSize:10,
    },
    header1: {
        position: 'absolute',
        top: 0,
        backgroundColor: '#dd8d6c',
        width:Dimensions.get('window').width,
        height: 20
    },
    // header: {
    //     position: 'absolute',
    //     top: 20,
    //     width:Dimensions.get('window').width,
    //     height: 44,
    //     flexDirection: 'row',
    //     backgroundColor: 'white',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderTopLeftRadius: 5,
    // },

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
    setButton:{
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
        marginTop:15
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
    dContainer:{
        flex:1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    dHeader: {
        backgroundColor: '#dd8d6c',
        width:Dimensions.get('window').width,
        height: 30,
    },
    dDoneBtn:{
      color: '#dd8d6c',
      fontSize: 12,
      fontWeight:'bold',

    },
    dHeaderInner: {
        width:Dimensions.get('window').width,
        height: 44,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        top:-10,
        borderBottomWidth:2,
        borderBottomColor: 'rgba(216,216,216,0.8)',
        shadowColor: '#D8D8D8',
        shadowOffset: {
        width:0,
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
    entryTxt:{
      color:'#D8D8d8',
      fontSize:8,
      paddingHorizontal:15,
    },
    mLineText:{
        color:'#D8D8d8',
        fontSize:14,
        padding:15,
        marginTop:30,
        marginBottom:15,
        width:Dimensions.get('window').width,
        flexDirection: 'column',
        flex:1,
    },
    orangeBack:{
      height:16,
      width:16,

    },
    reactAngleModelBg:{
      height:181,
      width:295,
    },
    bgC:{
      width:width,
      height:height,
      backgroundColor:'rgba(0,0,0,0.45)',
      alignItems:'center',
      flexDirection:'row'
    },
    bgCi:{
      width:width,
      alignItems:'center',
    },
    likeFlagCover:{
      paddingVertical:30,
    },
    likeFlag:{
        fontSize:17,
        color:'#FFFFFF',
        paddingHorizontal:20,
        textAlign:'center',
        width:200,
        alignSelf:'center'
    },
    buttonC:{
      flexDirection:'row',
      paddingHorizontal:10,
      justifyContent:'space-between',
      marginTop:25,
    },
    contactBtnm:{
      backgroundColor:'#FFB660',
      width:125,
      paddingVertical:10,
      borderRadius:5,
    },
    contactBtnTextm:{
        textAlign:'center',
        color:'#FFFFFF',
        fontSize:10,
    }
})
