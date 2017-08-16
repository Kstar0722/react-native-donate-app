import { StyleSheet, Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  mainView:{
    flex:1,
  },
  fDheadr:{
    width:width,
    height:64,
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
  mainViewClone:{
      height:height-110,
      width:width,
      flexDirection:'row',
      alignItems:'center',
      top:60,
      //backgroundColor:'#979797',
      //backgroundColor:'rgba(130, 131, 150, 0.8)',
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
    alignSelf:'center',
    backgroundColor:'#52536E',
    padding:20,
    alignItems:'center',
    borderRadius:15,
  },
  smallText:{
    fontSize:12,
    color:'#FFFFFF',
    width:200,
    marginBottom:30,
    textAlign:'center',
    fontWeight:'bold',
  },
  gotItBtnTxt:{
      fontSize:10,
      color:'#FFFFFF',
      textAlign:'center',
      fontWeight:'bold',
      backgroundColor:'#FFB660',
      width:115,
      paddingVertical:10,
      borderRadius:10,
      fontSize:9,
    },
    gotItBtn:{
      borderRadius:10,
    },
  fDsearch:{
    width:18,
    height:19,
  },
  fDowal:{
    width:68,
    height:68,
  },
  fDmessage:{
    width:18,
    height:18,
  },
  fDfooter:{

    backgroundColor:'#ffffff',
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
  },
  fDBtnActive:{
      borderBottomWidth:3, borderBottomColor:'#DD8D6C',
      flex:1,
  },
  fBtn:{
    paddingVertical:6,
       alignItems:'center',
  },
  fDcenterBtn:{
      top:-12
  },
  searchBtnText:{
    color:'#666666',
    fontSize:14,
  }
})
