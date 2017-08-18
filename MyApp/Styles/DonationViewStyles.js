import { StyleSheet, Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');
export default StyleSheet.create({

  bg: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    resizeMode: 'cover',
    backgroundColor:'#8B9E78',
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
  mainView:{
    flex:1,
  },
  cNavigation:{
    flexDirection:'row',
    paddingTop: 20,
    height: 64,
    alignItems:'center',
    paddingHorizontal:15,
    backgroundColor:'#DD8D6C',
  },
  menuIconNav:{
    height:16,
    width:16,
  },
  refedText:{
    flex:1,
    paddingHorizontal:10,
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
    fontSize:17,
    backgroundColor:'transparent',
  },
  foodBoxes:{
    width:width,
    height:251,
  },
  dtBody:{
    paddingHorizontal:15,
    paddingTop:15,
  },
  dtBtSpace:{
    marginBottom:15,
  },
  dtDonation:{
    shadowColor: '#000000',
    borderRadius:5,
    shadowOffset: {
    width:0,
    height: 1,
    },
    shadowOpacity: 0.3,
},
ddRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:15,
    paddingVertical:15,
    borderBottomColor:'#EEEEEE',
    borderBottomWidth:1,
    backgroundColor:'#FFFFFF',
},
ddRowLeftp:{
  width:width,
  alignItems:'center',
},
ddDeliveryLabel:{
  color:'#9D9D9D',
  fontSize:10,
},
addressBox:{
    paddingHorizontal:15,
    paddingTop:15,
},
address:{
  color:'#666666',
  fontSize:12,
  textAlign:'center',
},
ddDeliveryTypeLabel:{
  color:'#666666',
  fontSize:14,
  marginTop:5,
},
grayVan:{
  width:53,
  height:22,
  position:'absolute',
  right:15,
},
ddLbs:{
  width:53,
  height:22,
  position:'absolute',
  right:15,
  fontSize:10,
  fontWeight:'bold',
  color:'#C1C1C1',
},
ddTitleRCover:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
},
ddTitleR:{
  color:'#9D9D9D',
  fontSize:14,
  alignSelf:'center',
  textAlign:'center',
  paddingHorizontal:15,
  paddingVertical:15,
  flex:1,
},
upArrow:{
  width:12,
  height:8,
  position:'absolute',
  left:30,
},
ddDescription:{
  color:'#BBBBBB',
  fontSize:12,
  textAlign:'center',
  paddingHorizontal:15,
  fontStyle:'italic',
  paddingBottom:20,
},
ddDescriptionBox:{
  borderBottomWidth:2,
  borderBottomColor: 'rgba(216,216,216,0.8)',
  shadowColor: '#D8D8D8',
  shadowOffset: {
  width:0,
  height: 2,
  },
  shadowOpacity: 0.7,
},
ddEditBtn:{
  alignSelf:'center',
  shadowColor: '#000000',
  shadowOffset: {
  width:1,
  height: 1,
  },
  shadowOpacity: 0.3,
  paddingVertical:11,
  paddingHorizontal:15,
  width:200,
  borderRadius:20,
  position:'absolute',
  bottom:-20,
  zIndex:9999999
},
ddEdit:{
  color:'#F5804B',
  fontSize:16,
  fontWeight:'bold',
  textAlign:'center',
},
ddBtnBox:{
  flex:1,
  backgroundColor:'#F4F3F4',
  alignItems:'center',
  flexDirection:'row',
  zIndex:-1,
  justifyContent:'space-around',
  paddingBottom:50
},
ddBtnCircle:{
  width:70,
  height:70,
  borderRadius:50,
  shadowColor: '#000000',
  shadowOffset: {
  width:1,
  height: 1,
  },
  shadowOpacity: 0.3,
  backgroundColor:'#FFFFFF',
  alignItems:'center',
  flexDirection:'row',
},
cLockR:{
  width:9,
  height:8,
  position:'absolute',
  right:26,
},
cLock:{
  width:19,
  height:24,
  position:'absolute',
  left:26,
},
ddDuplicate:{
  width:23,
  height:23.33,
  alignSelf:'center',
  flexDirection:'row',
  left:25,
},
ddClose:{
  width:26,
  height:25,
  alignSelf:'center',
  flexDirection:'row',
  left:25,
},
ddBtnText:{
  color:'#666666',
  fontSize:16,
  fontWeight:'bold',
  marginTop:5,
},
ddReservedByLabel:{
  color:'#666666',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:16,
  paddingVertical:15,
  backgroundColor:'#F4F3F4',
},
ddHope:{
  backgroundColor:'#FFFFFF',
  width:width-40,
  alignSelf:'center',
  paddingHorizontal:15,
  paddingTop:30,
  paddingBottom:10,
  alignItems:'center',
  shadowColor: '#000000',
  borderRadius:5,
  shadowOffset: {
  width:1,
  height: 1,
  },
  shadowOpacity: 0.3,
},
ddHopeText:{
  color:'#96A883',
  fontSize:18,
  textAlign:'center',
},
ddHopeProfile:{
  color:'#666666',
  fontSize:9,
  marginTop:10,
},
ddBtnBoxInnner:{
    height:100,
    width:70,
    alignItems:'center',
     marginTop:20
}
})
