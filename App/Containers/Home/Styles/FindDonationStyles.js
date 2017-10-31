import { StyleSheet, Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  mainView:{
    flex:1,
  },
  fDheadr:{
    width:width,
    height:128,
  },
  fDheadr2:{
    width:width,
    height:115,
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
      backgroundColor:'transparent',
      bottom:0,
      position:'absolute',
      zIndex:1
  },
  mainViewClone2:{
      height:height,
      width:width,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'rgba(0,0,0,0.3)',
      bottom:0,
      position:'absolute',
      zIndex:1,
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
    alignSelf:'center',
    backgroundColor:'#52536E',
    padding:20,
    alignItems:'center',
    borderRadius:15,
  },
  modalBodyToggle:{
    width:294,
    alignSelf:'center',
    backgroundColor:'#52536E',
    padding:20,
    alignItems:'center',
    borderRadius:15,
    bottom:90,
    position:'absolute',
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
      fontSize:9,
    },
    gotItBtn:{
      backgroundColor:'#FFB660',
      width:115,
      paddingVertical:10,
      borderRadius:5,
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
      justifyContent: 'space-around',
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
      top:-12,
  },
  searchBtnText:{
    color:'#666666',
    fontSize:14,
  },
  MapView:{
    width:width,
    height:height-110,
  },
  triangle:{
    width:35,
    height:16,
    bottom:-33,
  },
  mapViewDetail:{
      //paddingHorizontal:15,
      //paddingTop:15,
  },

  listMapView:{
    width:width,
    height:130,
    borderRadius:10
  },
  listMapView1:{
    width:width,
    height:130,
  },
  listMapViewText:{
    paddingVertical:20,
    paddingHorizontal:15,
    backgroundColor:'#FFFFFF',
  },
  listMapViewTopRow:{
      flexDirection:'row',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
  },
  donaterName:{
    width:40,
    height:40,
    borderRadius:20,
    marginRight:10,
  },
  name:{
    fontSize:16,
    color:'#2C2C3D',
  },
  nameText:{
    color:'#666666',
    fontSize:12,
  },
  distance:{
    color:'#2C2C3D',
    fontSize:8,
    textAlign:'center',
    //alignContent:'flex-end',
    //alignSelf:'flex-end'
  },
  description:{
    fontSize:14,
    color:'#2C2C3D',
    marginTop:10
  },
  vehicleIcon:{
    width:94,
    height:96,
    position:'absolute',
    right:10,
    top:-30,
    zIndex:1
  },
  awayMeter:{
      marginTop:13,
  },
  markericon:{
      width:14,
      height:20,
  },
  absCover:{
    width:width,
    height:height-110,
    position:'absolute',
    top:0,
  },
  navigatioNsearch:{
    backgroundColor:'#FFFFFF',
    paddingVertical:0,
    height:30,
    borderRadius:5,
    fontSize:14,
    textAlign:'center',
    width:width-20,
    alignSelf:'center',
    marginVertical:10,
    color:'#8C8C8C',
  },
  close:{
    width:40,
    height:40,
    alignSelf:'center',
    bottom:-5,
    zIndex:1,
  },
  wCircle:{
    width:66,
    height:66,
    borderRadius:33,
    backgroundColor:'#FFFFFF',
    alignItems:'center',
    marginTop:20,
  },
  orangeLock:{
    width:19,
    height:24,
    top:20,
  },
  rescue:{
    color:'#FFFFFF',
    fontSize:12,
    marginTop:10,
    alignSelf:'center',
    textAlign:'center',
  },
  timeSet:{
    flexDirection:'row',
  },
  timeSetPart:{
    flex:1,
  },
  timeSetPartTitle:{
      color:'#2C2C3D',
      fontSize:12,
      textAlign:'center' ,
  },
  timeSetPartTitleValue:{
    color:'#666666',
    fontSize:12,
    textAlign:'center' ,
    marginTop:10,
  },
  clickToOpen:{
    color:'#666666',
    fontSize:10,
    textAlign:'center',

  },
  clickToOpenBtn:{
      flexDirection:'row',
      alignSelf:'center',
  },
  buttonCover:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:width-30,
  },
  callIcon:{
    width:26,
    height:25,
    top:19,
  },
  centerAllBtn:{
    flexDirection:'row',
    justifyContent:'space-around',
     width:width,
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
  contactBtnm1:{
    backgroundColor:'#FFB660',
    width:125,
    paddingVertical:10,
    borderRadius:5,
    marginLeft:85,
    marginTop:25,
  },
  contactBtnTextm:{
      textAlign:'center',
      color:'#FFFFFF',
      fontSize:10,
  },
  dateLayout:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:15,
    
  },
  weekAndYearLayout:{
    flex:1,
    marginLeft:10,
  },
  dayStyle:{
    fontFamily: 'Ubuntu',
    fontWeight:"500",
    backgroundColor:'rgba(0,0,0,0)',
    fontSize:43,
    color:'#fff',
  },
  weekAndYearStyle:{
    fontFamily: 'Ubuntu',
    backgroundColor:'rgba(0,0,0,0)',
    fontSize:15,
    fontWeight:'600',
    color:'#fff',
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
  }



})
