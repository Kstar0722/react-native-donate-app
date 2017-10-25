import { StyleSheet, Dimensions } from 'react-native'
var { height, width } = Dimensions.get('window');
export default StyleSheet.create({

  bg: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    resizeMode: 'cover',
    backgroundColor: '#8B9E78',
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
  mainView: {
    flex: 1,
  },
  cNavigation: {
    flexDirection: 'row',
    paddingTop: 20,
    height: 64,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#DD8D6C',
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 0
  },
  menuIconNav: {
    height: 18,
    width: 18,
  },
  refedText: {
    paddingHorizontal: 10,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    fontSize: 17,
    backgroundColor: 'transparent',
  },
  foodBoxes: {
    width: width,
    height: 251,
    marginTop: -251,
    zIndex: 1
  },
  dtBody: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  dtBtSpace: {
    marginBottom: 15,
  },
  dtDonation: {
    shadowColor: '#000000',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
  },
  ddRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  ddRowLeftp: {
    width: width,
    alignItems: 'center',
  },
  ddDeliveryLabel: {
    color: '#9D9D9D',
    fontSize: 10,
  },
  addressBox: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  address: {
    color: '#666666',
    fontSize: 12,
    textAlign: 'center',
  },
  ddDeliveryTypeLabel: {
    color: '#666666',
    fontSize: 14,
    marginTop: 5,
  },
  grayVan: {
    width: 53,
    height: 22,
    position: 'absolute',
    right: 15,
  },
  ddLbs: {
    width: 53,
    height: 22,
    position: 'absolute',
    right: 15,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#C1C1C1',
  },
  ddTitleRCover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ddTitleR: {
    color: '#9D9D9D',
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1,
  },
  upArrow: {
    width: 12,
    height: 8,
    position: 'absolute',
    left: 30,
  },
  ddDescription: {
    color: '#BBBBBB',
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 15,
    fontStyle: 'italic',
    paddingBottom: 20,
  },
  ddDescriptionBox: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(216,216,216,0.8)',
    shadowColor: '#D8D8D8',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
  },
  ddEditBtn: {
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    paddingVertical: 11,
    paddingHorizontal: 15,
    width: 200,
    borderRadius: 20,
    position: 'absolute',
    bottom: -20,
    zIndex: 9999999
  },
  ddEdit: {
    color: '#F5804B',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ddBtnBox: {
    flex: 1,
    backgroundColor: '#F4F3F4',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: -1,
    justifyContent: 'space-around',
    paddingBottom: 50
  },
  ddBtnCircle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cLockR: {
    width: 9,
    height: 8,
    position: 'absolute',
    right: 26,
  },
  cLock: {
    width: 19,
    height: 24,
    position: 'absolute',
    left: 26,
  },
  ddDuplicate: {
    width: 23,
    height: 23.33,
    alignSelf: 'center',
    flexDirection: 'row',
    left: 25,
  },
  ddClose: {
    width: 26,
    height: 25,
    alignSelf: 'center',
    flexDirection: 'row',
    left: 25,
  },
  ddBtnText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  ddReservedByLabel: {
    color: '#666666',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 15,
    backgroundColor: '#F4F3F4',
  },
  ddHope: {
    backgroundColor: '#FFFFFF',
    width: width - 40,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingTop: 30,
    paddingBottom: 10,
    alignItems: 'center',
    shadowColor: '#000000',
    borderRadius: 5,
    shadowOffset: {
      width: 1,
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
},
gradient_bg: {
  width: width,
  height: width*407/750,
  alignItems: 'center',
  zIndex: 10
},
donatorname: {
  alignSelf: 'center',
  fontSize: 17,
  backgroundColor: 'transparent',
  color: 'white',
  fontWeight: '500',
  marginTop: 6
},
stars: {
  width: width*175/750,
  height: width*32/750,
  alignSelf: 'center',
  marginTop: 10
},
pickupView: {
  width: width-50,
  borderBottomColor: 'rgba(255,255,255,0.4)',
  borderBottomWidth: 1,
  backgroundColor: 'transparent',
  marginTop: 12
},
pickup: {
  color: 'white',
  paddingBottom: 13,
  fontSize: 13
},
time: {
  fontSize: 12
},
apple: {
  width: 18,
  height: 18*35/32.8,
  marginTop: 10
},
foodtype: {
  fontSize: 13,
  backgroundColor: 'transparent',
  color: 'white'
},
vehicle: {
  width: 18*84/32.8,
  height: 18*35/32.8,
  marginTop: 10
},
appleview: {
  alignItems: 'center'  
},
shapeView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 10,   
},
click_to_zoom: {
  fontSize: 15,
  color: 'white',
  backgroundColor: 'transparent'
},
search_small: {
  width: 17,
  height: 17*31.5/30
},
transparent: {justifyContent:'center',
alignItems:'center',
backgroundColor:'rgba(0,0,0,0.4)',
width: width,
height: 131,
zIndex: 10
},
key: {
  width: 18,
  height: 18*42.11/32.8,
},
keyAround: {
  width: 70,
  height: 70,
  borderRadius: 35,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: 'black', 
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowRadius: 3,
  shadowOpacity: 0.2
},
rescue: {
  fontSize: 15,
  color: 'rgba(0,0,0,0.6)',
  backgroundColor: 'transparent',
  marginTop: 7,  
},
roundView: {
  flexDirection: 'row',
  width: width,
  justifyContent: 'center',
  marginTop: -20,
  zIndex: 11
},
flagIcon: {
  width: 19,
  height: 19*90/69
},
donation_description: {
  fontSize: 16,
  backgroundColor: 'transparent',
  marginTop: 35,
  alignSelf: 'center'
},
donation_content: {
  fontSize: 14,
  backgroundColor: 'transparent',
  width: width-50,
  alignSelf: 'center',
  marginTop: 15,
  letterSpacing : 2,
  lineHeight: 17,
  fontFamily: 'Helvetica'
},
createdby_View: {
  width: width-50,
  borderTopColor: 'rgba(0,0,0,0.1)',
  borderTopWidth: 1,
  borderBottomColor: 'rgba(0,0,0,0.1)',
  borderBottomWidth: 1,
  alignSelf: 'center',
  marginTop: 25,
  marginBottom: 25
},
createdBy: {
  width: 150,
  height: 150,
  borderRadius : 75,
  alignSelf: 'center',
  marginTop: 25,
  marginBottom: 25
},
donator_name: {
  fontFamily: 'Helvetica',
  fontSize: 17,
  color: 'rgba(0,0,0,0.7)',
  alignSelf: 'center'
},
mapView: {
  width: width,
  height: 150,
  marginBottom: 0,
  marginTop: 25
},
get_bg: {
  width: width,
  height: width*106/750,
  alignItems: 'center',
  justifyContent: 'center'
},
get_direction: {
  color: 'white',
  fontFamily: 'Helvetica',
  fontSize: 19,  
},
pin: {
  width: 18,
  height: 18*43/32
},
rescueModal: {
  width: width,
  height: height,
  backgroundColor: 'rgba(0,0,0,0.4)',
  alignItems: 'center'
},
rescue_bg: {
  width: width-80,
  height: (width-80)*832/580,
  marginTop: 30,
  alignItems: 'center',
  paddingHorizontal: 30
},
modalTitle: {
  fontFamily: 'Helvetica',
  fontSize: 17,
  fontWeight: 'bold',
  color: 'white',
  marginTop: 20
},
modalContent: {
  fontFamily: 'Helvetica',
  fontSize: 12,
  textAlign: 'center',
  lineHeight: 20,
  color: 'white',
  marginTop: 10,
  marginBottom: 25
},
volunteer: {
  width: 55,
  height: 55*101.27/100,
  paddingHorizontal: 20
},
helpicon: {
  width: 17,
  height: 17,
  position: 'absolute',
  right: -40,
  top: 20
},
modaButton: {
  width: width-170,
  height: (width-150)*52.58/349.41,
  backgroundColor: '#ffb660',
  borderRadius: 3,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 15,
  marginBottom: 25
},
buttonText: {
  fontFamily: 'Helvetica',
  backgroundColor: 'transparent',
  fontSize: 12,
  color: 'white'
},
deliver_guy: {
  width: 70,
  height: 70*80/114
},
statusModal_bg: {
  width: width-80,
  height: (width-80)*962/580,
  marginTop: 30,
  alignItems: 'center',
  paddingHorizontal: 0
},
mapView1: {
  width: width-82,
  height: (width-80)*311.34/580,  
},
pinception: {
  width: 70,
  height: 70*125/101
},
statusModal_to: {
  width: width-82,
  borderBottomColor: 'rgba(255,255,255,0.4)',
  borderBottomWidth: 1,
  backgroundColor: 'transparent',
  marginTop: 12,
  flexDirection: 'row',  
  height: 30
},
to: {
  fontFamily: 'Helvetica',
  fontSize: 12,
  color: 'white',
  position: 'absolute',
  left: 20,
  marginTop: 8
},
name: {
  fontFamily: 'Helvetica',
  fontSize: 12,
  color: 'white',
  position: 'absolute',
  right: 20
},
statusModal_aroundButton: {
  width: 65,
  height: 65,
  borderRadius: 65/2,
  backgroundColor: '#ffb660',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: 'black', 
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowRadius: 3,
  shadowOpacity: 0.2,
  borderWidth: 0.4,
  borderColor: 'rgba(255,255,255,0.3)',
  position: 'absolute'
},
aroundButtonView: {
  flexDirection: 'row',
  width: width-82,
  marginTop: -10

}
})
