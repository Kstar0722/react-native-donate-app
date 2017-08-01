import { StyleSheet, Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');
console.log(height);
console.log('------');
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
  }

})
