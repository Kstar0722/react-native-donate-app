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
dtView:{
  paddingHorizontal:15,
  paddingVertical:20,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
},
dtViewInner:{
  flexDirection:'row',
  justifyContent:'space-between',
},
dtDate:{
  color:'#C3CDB9',
  fontWeight:'bold',
  fontSize:20,
},
dtMonth:{
  color:'#C3CDB9',
  fontWeight:'bold',
  fontSize:10,
},
dtDescription:{
  paddingHorizontal:15,
},
dtText:{
  color:'#5B5B5B',
  fontSize:14,
  fontWeight:'bold',
},
dtFDate:{
    color:'#8E8E8E',
    fontSize:10,
},
dtEditText:{
  color:'#EBBEAC',
  fontSize:12,
  fontWeight:'bold'
},
})
