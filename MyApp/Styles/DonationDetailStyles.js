import { StyleSheet, Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');
export default StyleSheet.create({

  bg: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    resizeMode: 'cover'
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
    fontSize:16,
    backgroundColor:'transparent',
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
    borderTopWidth:1,
    borderBottomWidth:1,
    borderTopColor:'#EEEEEE',
    borderBottomColor:'#EEEEEE',
},
ddRowLeftp:{
  width:width,
  alignItems:'center',

},
ddDeliveryLabel:{
  color:'#9D9D9D',
  fontSize:10,
},
ddDeliveryTypeLabel:{
  color:'#5B5B5B',
  fontSize:14,
  fontWeight:'bold',
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

ddTitle:{
  color:'#9D9D9D',
  fontSize:10,
  textAlign:'center',
  paddingHorizontal:15,
  paddingVertical:10
},
ddDescription:{
  color:'#B8B7B8',
  fontSize:12,
  textAlign:'center',
  paddingHorizontal:15,
  fontStyle:'italic',
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
  paddingBottom:40,
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
ddDuplicate:{
  width:20,
  height:26,
  alignSelf:'center',
  flexDirection:'row',
  left:25,
},
ddClose:{
  width:20,
  height:24,
  alignSelf:'center',
  flexDirection:'row',
  left:27,
},
ddBtnText:{
  color:'#5B5B5B',
  fontSize:10,
  fontWeight:'bold',
  marginTop:5,

}

})
