import { StyleSheet, Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');
export default StyleSheet.create({

  bg: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    resizeMode: 'cover'
  },
  mainView:{
    flex:1,
  },
  cNavigation:{
    flexDirection:'row',
    marginTop: 20,
    height: 39,
    alignItems:'center',
    paddingHorizontal:15,
  },
  cNavigation1:{
    flexDirection:'row',
    marginTop: 40,
    alignItems:'center',
    paddingHorizontal:15,
  },
  locationNav:{
    flexDirection:'row',
    marginTop: 10,
    height: 44,
    alignItems:'center',
    paddingHorizontal:15,
  },
  locationNav2:{
    flexDirection:'row',
    marginTop: 10,
    height: 25,
    alignItems:'center',
    paddingHorizontal:15,
  },
  menuIconNav:{
    height:20,
    width:15,
  },
  refedText:{
    flex:1,
    paddingHorizontal:10,
    backgroundColor:'rgba(0,0,0,0)',
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
    fontSize:16
  },
  smallText:{
    flex:1,
    paddingHorizontal:10,
    backgroundColor:'rgba(0,0,0,0)',
    textAlign:'center',
    color:'#fff',
  },
  normalVCText:{
    flex:1,
    paddingHorizontal:10,
    backgroundColor:'rgba(0,0,0,0)',
    textAlign:'center',
    fontSize:15,
    color:'#fff',
  },
  locationNav1:{
    paddingTop: 20,
    height: 85,
    paddingHorizontal:20,
    backgroundColor:'white'
  },
  NormalTextBlack:{
    backgroundColor:'rgba(0,0,0,0)',
    fontWeight:'bold',
  },
  normalTextWhite:{
    color:'#fff',
    textAlign:'center',
    backgroundColor:'rgba(0,0,0,0)',
    marginBottom:10
  },
  smallTextBlack:{
    backgroundColor:'rgba(0,0,0,0)',
      paddingTop: 10,
      fontSize:12,
      color:'#9E9E9E',
  },
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'lightgray',
  },
  map: {
      flex:1,
  },
  rateStyle:{
    alignItems: 'center',
    backgroundColor:'rgba(0,0,0,0)',
  },
  smallTextWhite:{
    backgroundColor:'rgba(0,0,0,0)',
    paddingLeft: 20,
    color: "#fff",
    fontSize: 12
  },
  pickData:{
    flexDirection: 'row',
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderColor: '#fff'
  },
  vLayout:{
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonGroup1:{
    position:'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: -60,
    marginHorizontal:20
  },
  buttonGroup:{
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -30
  },
  descriptionTitle:{
    textAlign: 'center',
    color:'#9E9E9E',
    marginVertical: 20,
  },
  descriptionContent:{
    textAlign: 'center',
    color:'#9E9E9E',
    fontSize: 12,
    paddingHorizontal: 40,
    paddingBottom: 30
  },
  contactItems:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:15,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor:'#9E9E9E',
  },
  contactBtn:{
    
    position:'absolute',
    bottom: 10,
    right: 10
  },
  step1Iamges:{
    position: 'absolute',
    bottom: 70
  },
  absoluteBottomCenter: {
    position: 'absolute',
    left: 0, 
    right: 0, 
    bottom: 10, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  absTopCenter:{
    position: 'absolute', 
    top: -12.25, 
    left: 0, 
    right: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  popNumStyle:{
    textAlign: 'center',
    width:38,
    height:38,
    paddingTop: 10,
    borderWidth:0.3,
    borderColor:'#9E9E9E',
    borderRadius:19,
    marginRight: 20,
    zIndex:1
  },
  contactText:{
    height: 85,
    padding: 10,
    flex:1,
    borderWidth:0.3,
    borderColor:'#9E9E9E',
    borderRadius:5,
    marginHorizontal:0,
    marginVertical:0
  },
  messageContact:{
    flex:1,
    marginLeft:20,
  },
  subMenuItems:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:15,
    paddingVertical: 10,
  },
  verticalLine:{
    position:"absolute",
    height: 70,
    top: 71,
    left: 34,
    borderLeftWidth:0.4,
    borderColor:'#9E9E9E',
    zIndex:999
  }
})
