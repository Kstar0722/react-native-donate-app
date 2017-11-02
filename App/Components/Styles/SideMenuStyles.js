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
    //paddingHorizontal:5,
    flex: 1
  },
  sideMneuClose:{
    width:18,
    height:18,
    marginTop:15,
    marginLeft: 10,
    marginBottom: 37

  },
  profileName:{
    fontFamily: 'Ubuntu',
    fontWeight:"500",
    fontSize:20,
    color:'#1d1d26',
    marginTop:15,
    marginBottom:50,
    width : "100%",
    textAlign : "center"
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
    marginLeft : 25,
    marginRight : 25,
    borderBottomColor:'rgba(29, 29, 38, 0.1)',
    borderBottomWidth:2,

  },
  lastSideMenuRowCover:{
    width: "80%",
    paddingRight : 25,
    marginLeft : 25,
    flexDirection:'row',
    borderTopWidth : 1,
    borderTopColor : 'rgba(29, 29, 38, 0.1)',
    paddingTop : 15,
    marginBottom:20,
    position: 'absolute',
    bottom : 0,
    alignItems:'center',
  },
  donationIcon:{
    width:25,
    height:25,
  },
  sideMenuTextInput:{
    fontFamily: 'Ubuntu',
    fontWeight:"300",
    paddingVertical:0,
    paddingHorizontal:15,
    height:25,
    lineHeight:25,
    fontSize:14,
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
