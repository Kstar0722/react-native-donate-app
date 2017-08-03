import { StyleSheet,Dimensions } from 'react-native'

width=Dimensions.get('window').width;
height=Dimensions.get('window').height;

export default StyleSheet.create({

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
  postBtnText:{
    fontSize:16,
    backgroundColor:'transparent',
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
  },
  detsilSElection:{
    flexDirection:'row',
  },
  boxCover:{
    width:125,
    height:145,
    alignItems:'center',
    backgroundColor: 'transparent',
    borderBottomColor: '#e09579',
    borderBottomWidth: 1,
    borderRightColor: '#e09579',
    borderRightWidth: 1,
    paddingTop:20,
  },
  pImgB:{
    width:90,
    height:90,
    borderRadius:45,
    borderColor:'#EABBA9',
    borderWidth:5,
    marginBottom:10
  },
  pImg:{
    width:80,
    height:80,
    borderRadius:40,
  },
  btnEdit:{
    backgroundColor: 'transparent',
    color: '#f3f3f3',
    fontSize:15,
  },
  btnEtxt:{
      lineHeight:100,
      color:'#FFFFFF',
      fontSize:14,
      fontWeight:'bold'
  },
  vehicleTitle:{
      backgroundColor: 'transparent',
      color:'#FFFFFF',
      fontSize:14,
      fontWeight:'bold',
      textAlign:'center',
      marginTop:8,
      marginBottom:5,
  },
  vehicleTitleV:{
      backgroundColor: 'transparent',
      color:'#FFFFFF',
      fontSize:14,
      fontWeight:'bold',
      textAlign:'center',
      marginTop:7,
      marginBottom:13,
  },
  imgBoxCover:{
    width:125,
    alignItems:'center',
  },
  vImgBoxCover:{
    width:83,
    height:83,
    alignSelf:'center',

  },
  vDetsilSElection:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomColor: '#e09579',
    borderBottomWidth: 1,
  },
  vehicleTitleS:{
      backgroundColor: 'transparent',
      color:'#FFFFFF',
      fontSize:14,
      fontWeight:'bold',
      textAlign:'center',
      alignSelf:'center',
      paddingHorizontal:20,
      width:width-(45)
  },
  vDetsilSElectionS:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomColor: '#e09579',
    borderBottomWidth: 1,
    paddingBottom:12,
  },

  btnEdit:{
    backgroundColor: 'transparent',
    color: '#f3f3f3',
    fontSize:12,
    paddingHorizontal:10,
  },
  vehicleTitleSm:{
    backgroundColor: 'transparent',
    color: '#f3f3f3',
    fontSize:8,
    textAlign:'center',
    marginTop:5,
    marginBottom:10,
  },
  slVs:{
    fontSize:12,
    backgroundColor: 'transparent',
    color:'#FFFFFF',
    marginRight:15,
  },

  vehicleTitleSw:{
      backgroundColor: 'transparent',
      color:'#FFFFFF',
      fontSize:14,
      fontWeight:'bold',
      textAlign:'left',
      alignSelf:'center',
      paddingHorizontal:20,
      width:width-120
  },
  vDetsilSElectionSL:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  sSection:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:15,
  },
  sliderS:{
    width:width-30,
    alignSelf:'center',
    marginTop:10,

  },
  sliderCover:{
    borderBottomColor: '#e09579',
    borderBottomWidth: 1,
    paddingVertical:17,
  },
  write1: {
    paddingHorizontal: 20,
    width:80,
    color:'#dd8d6c',
    overflow:'hidden',
  },
  write3: {
    color:'rgba(102, 102, 102, 0.6)',
    overflow:'hidden',
    paddingRight:20,
    flexWrap:'wrap',
    width:Dimensions.get('window').width-(180),
    fontSize:10,
  },
  editContent:{
      paddingVertical:5,
    flexDirection:'row',
    alignItems:'center',
    overflow:'hidden',
    height:65,

},
setBottomPost:{
  bottom:0,
  position:'absolute',
  width:375,
  backgroundColor:'#FFFFFF',
  minHeight:65,
},
bottomPostBtn:{
    width: 130,
    height: 131,
    right:0,
    bottom:0,
    position:'absolute',
},
  container: {
    width:width,
    height:height,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF'
  },
  body: {
    flex: 6

  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',

  },
  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 50
  },
  write: {
    justifyContent: 'center',
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 20,
    color:'#dd8d6c',
  },
  menu: {
    flex: 1,
    flexDirection: 'row'
  },
  add: {
    flex: 1,
    justifyContent: 'center',
    borderColor: '#e09579',
    borderWidth: 1,
    alignItems: 'center'
  },
  vehicle: {
    flex: 1,
    alignItems: 'center',
    borderColor: '#e09579',
    borderWidth: 1
  },
  text: {
    backgroundColor: 'transparent',
    color: '#f3f3f3'
  },
  vehicle_img: {
    flex:1,

    flexDirection: 'row',
    alignItems: 'center'
    // marginTop: 17,
    // paddingBottom: 15
  },
  menu_image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  vehicle_text: {
    backgroundColor: 'transparent',
    color: '#f3f3f3',
    fontSize: 18,
    paddingTop: 15
  },
  slider: {
    flex: 1,
    borderColor: '#e09579',
    borderWidth: 1
  },
  slide: {
    marginLeft: 10,
    marginRight: 10
  },
  text_slider: {
    backgroundColor: 'transparent',
    color: '#f3f3f3',
    marginLeft: 15
  },
  view_slide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  slide_text: {
    backgroundColor: 'transparent',
    color: '#f3f3f3',
    fontSize: 20
  },
  type: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderColor: '#e09579',
    borderWidth: 1,
    paddingVertical: 15
  },
  type1: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderColor: '#e09579',
    borderWidth: 1,
    paddingVertical: 13
  },
  slide_text1: {
    backgroundColor: 'transparent',
    color: '#f3f3f3',
    fontSize: 20

  },
  slide_text11: {

    backgroundColor: 'transparent',
    color: '#f3f3f3',
    fontSize: 15,
    alignSelf: 'flex-end'

  },
  slide_text2: {

    backgroundColor: '#ef8579',
    alignSelf: 'center',
    color: '#f3f3f3',
    fontSize: 20

  },
  description: {
    flex: 1,
    backgroundColor: '#ef8579',
    justifyContent: 'center',
    borderColor: '#e09579',
    borderWidth: 1,
    alignItems: 'center',
  },
  active:{
    width: 83,
    height: 83,
    flex: 1,
    backgroundColor: '#ef8579',
    justifyContent: 'center',
    borderColor: '#e09579',
    borderWidth: 1,
    alignItems: 'center',
  },


})
