import { StyleSheet, Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');
export default StyleSheet.create({

  bg: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  /*addButton: {
    position: 'absolute',
    zIndex: 10,
    alignSelf: 'center',
    bottom: 7

  },*/
  menu: {
    marginHorizontal:20,
    marginVertical:7,
    flexDirection: 'row',
    alignItems:'center',
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
dtDAte:{
    marginHorizontal:20
},
dtDesEditBtn:{
    marginHorizontal:20
},
dtDate:{
  fontFamily: 'ubuntu',
  fontWeight: 'bold',
  color:'#96A883',
  fontSize:28,
  textAlign : 'center',
  width: 40
},
dtMonth:{
  color:'#96A883',
  fontFamily: 'ubuntu',
  fontSize:12,
  //marginLeft: 5,
  textAlign : 'center',
  width: 40
},
dtDescription:{
    flex:1,
    flexDirection: 'row',    
    
},
dtText:{
  fontFamily: 'ubuntu',
  fontWeight:'bold',
  color:'#666666',
  fontSize:18,
  textAlign:'center',
},
dtEditText:{
  fontFamily: 'ubuntu',
  fontWeight: 'bold',
  color:'#DD8D6C',
  fontSize:14,
},
tabStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:80,
    height:80,
    backgroundColor:'#fff',
    borderRadius:5,
    borderColor:'#fff',
    borderWidth:1,
},
activeTabStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:80,
    height:80,
    backgroundColor:'#FFB660',
    borderRadius:5,
    borderColor:'#fff',
    borderWidth:1,
},
textWhite14:{
    fontFamily: 'ubuntu',
    fontWeight: 'bold',
    fontSize:14,
    color:'#fff',
    backgroundColor:'transparent',
},
textNotActive14:{
  fontFamily: 'ubuntu',
  fontSize:14,
  fontWeight: 'bold',
  color:'#666666',
  backgroundColor:'transparent',
},
dtListings:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height:95,
    marginBottom:20,
    shadowColor: '#000000',
    borderRadius:5,
    shadowOffset: {
    width:0,
    height: 1,
    },
    shadowOpacity: 0.3,
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

searchButtonImage: {
  width: 30*54/57,
  height: 30,
  tintColor: 'white',
},

messageButtonImage: {
  width: 25,
  height: 34,
  tintColor: 'white',
},

carImage : {
  width: 40,
  height : 40,
}



})
