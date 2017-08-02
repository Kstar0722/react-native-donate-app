import { StyleSheet, Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');
export default StyleSheet.create({

  bg: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    resizeMode: 'cover'
    // alignItems: 'center'
  },

  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 50
  },
  addButton: {
    position: 'absolute',
    zIndex: 10,
    alignSelf: 'center',
    bottom: 7

  },
  menu: {

    flexDirection: 'row',
    justifyContent: 'space-around'

  },
  icon: {
    backgroundColor: 'transparent',
    paddingLeft: 15,
    zIndex: 100
  },
  icon1: {
    backgroundColor: 'transparent',
    paddingRight: 15,
    zIndex: 100
  },
  Tooltip: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 70,
    alignItems: 'center'

  },
  mainView:{
    flex:1,
  },
  mainViewClone:{
      height:height,
      width:width,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'rgba(130, 131, 150, 0.8)',
  },
  opacityBtn:{
      height:height,
      width:width,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'transparent',

  },
  modalCover:{
    alignItems:'center',
    width:width,
  },
  modalBody:{
    width:294,
    height:275,
    alignSelf:'center',
  },
  lock:{
    width:70,
    height:93.33,
    marginTop:10,
    marginBottom:15,
  },
  textView:{
    width:294,
    height:275,
    top:0,
    position:'absolute',
    alignItems:'center',
  },
  bigText:{
    fontSize:16.5,
    color:'#FFFFFF',
    fontWeight:'bold',
    width:200,
    textAlign:'center',
  },
  smallText:{
    fontSize:12,
    color:'#FFFFFF',
    width:200,
    marginTop:10,
    marginBottom:30,
    textAlign:'center',
    fontWeight:'bold',
  },
  gotItBtn:{
      backgroundColor:'#ffb660',
      padding:10,
      borderRadius:5,
      width:105,
  },
  gotItBtnTxt:{
      fontSize:10,
      color:'#FFFFFF',
      textAlign:'center',
      fontWeight:'bold',
  },
  sidemenuBody:{
    width:width,
    height:height,
    backgroundColor:'#FFFFFF',
    paddingVertical:5,
    paddingHorizontal:5,
    width:250
  },
  sidemenuInner:{
    paddingHorizontal:5,
  },
  sideMneuClose:{
    width:25,
    height:24,
    marginTop:10
  },
  profileName:{
    fontSize:36,
    color:'#1d1d26',
    marginTop:15,
    marginBottom:5,
  },
  profileEmail:{
    fontSize:16,
    color:'rgba(29, 29, 38, 0.6)',
    marginBottom:30,
  },
  sideMenuRowCover:{
    flexDirection:'row',
    paddingVertical:15,
    alignItems:'center',

  },
  sideMenuRowCover1:{
    borderBottomColor:'rgba(29, 29, 38, 0.1)',
    borderBottomWidth:2,

  },
  lastSideMenuRowCover:{
    flexDirection:'row',
    paddingBottom:20,
    marginBottom:20,
    alignItems:'center',
  },
  donationIcon:{
    width:33.33,
    height:29.33,
  },
  impactIcon:{
    width:29.33,
    height:29.33,
  },
  profileIcon:{
    width:26.67,
    height:25.33,
  },
  notificationIcon:{
    width:26,
    height:30,
  },
  logoutIcon:{
    width:26.67,
    height:28,
  },
  sideMenuTextInput:{
    paddingVertical:0,
    paddingHorizontal:15,
    height:40,
    lineHeight:40,
    fontSize:22,
    flexDirection:'column',
    marginLeft:10,
    color:'#1d1d26',
  },
  dCount:{
    fontSize:20,
    color:'rgba(29, 29, 38, 0.6)',
  },
  cNavigation:{
    flexDirection:'row',
    marginTop: 20,
    height: 44,
    alignItems:'center',
    paddingHorizontal:15,
  },
  whiteNot:{
    height:22,
    width:18,
  },
  menuIconNav:{
    height:20,
    width:15,
  },
  refedText:{
    flex:1,
    paddingHorizontal:10,
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
    fontSize:16
  }

})
