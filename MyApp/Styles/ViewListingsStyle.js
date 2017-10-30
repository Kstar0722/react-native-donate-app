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
},
dtMonth:{
  color:'#96A883',
  fontFamily: 'ubuntu',
  fontSize:12,
  marginLeft: 5
},
dtDescription:{
    flex:1,
    flexDirection: 'row',
    textAlign:'center',
    
},
dtText:{
  fontFamily: 'ubuntu',
  fontWeight:'bold',
  color:'#666666',
  fontSize:18,
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
}

})
