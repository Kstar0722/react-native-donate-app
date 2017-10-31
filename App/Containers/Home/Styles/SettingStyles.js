import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  dContainer: {
      flex: 1,
      backgroundColor:'#FFF'
  },
  settingBack:{
    width: Dimensions.get('window').width,
    height:200,
  },
  dLeftHeader:{
    width:32,
    height:32,
  },
  backwhite:{
    width:32,
    height:32,
  },
  headertitlen:{
      fontSize:25,
      fontWeight:'bold',
      color:'#FFF',
      marginLeft:30,
  },
  dHeaderInner:{
    backgroundColor:'transparent',
    paddingTop:25,
    paddingHorizontal:15,
    flexDirection:'row',
  },
  scTitle:{
      color: '#1D1D26',
      fontSize: 14,
      backgroundColor:'#F8F8F9',
      paddingHorizontal:15,
      paddingVertical:20,
  },
  tabMenuPart:{
    backgroundColor:'transparent',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:15,
    paddingVertical:30,
  },
  tabMenuPart2:{
    backgroundColor:'transparent',
    flexDirection:'row',
    alignItems:'center',
  },
  tabmenu:{
      borderRadius:30,
      paddingHorizontal:12,
      paddingVertical:10,
      backgroundColor:'transparent',
  },
  tabmenuActive:{
      borderRadius:30,
      paddingHorizontal:12,
      paddingVertical:10,
      backgroundColor:'#FFF',

      shadowColor: '#000000',
      shadowOffset: {
      width:1,
      height: 2,
      },
      shadowOpacity: 0.5,
  },
  tabmenuText:{
      color:'#FFF',
      fontSize:14,
      fontFamily:'Ubuntu',
  },
  tabmenuactiveText:{
      color:'#000',
      fontSize:14,
      fontFamily:'Avenir',
  },
  inputContainer:{
      marginHorizontal:15,
      marginBottom:20,
  },
  inputContainerInner:{
      paddingBottom:0,
  },
  profileImageCover:{
      width:80,
      height:80,
      borderRadius:40,
      alignItems:'center',
  },
  profileImage:{
    borderRadius:40,
    width:80,
    height:80,
  },
  camerai:{
    width:30,
    height:29,
    position:'absolute',
    top:25.5,

  },
  lIcon:{
      width:25,
      height:25,
      position:'absolute',
      top:7,
  },

  inputc:{
      color:'#1D1D26',
      fontSize:18,
      fontFamily: 'Avenir',
      paddingLeft:35,
      height:40,
  },
  borderBottom:{
      backgroundColor:'#DCDCDE',
      height:2,
  },
  saveBtn:{
    backgroundColor:'#F58A55',
    marginVertical:20,
    marginHorizontal:15,
    padding:15,
    alignItems:'center',
    borderRadius:30,
  },
  saveBtn_button:{
    color:'#FFF',
    fontFamily: 'Avenir',
    fontSize:20,
  },
  bussinesstab:{
     borderBottomColor:'#B0B0B3',
     borderBottomWidth:1,
     paddingHorizontal:15,
     paddingVertical:10,
  },
  bussinesstabsmTitle:{
    color:'#98989c',
    fontFamily: 'Ubuntu',
    fontSize:16,
  },
  bussinesstabsmLabel:{
    color:'#000',
    fontFamily: 'Ubuntu',
    fontSize:20,
  },
  right_gray:{
    width:15,
    height:24,
  },
  arrowSpace:{justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    height: 100
  },
toggleContainer: {
    width: '100%',
    padding: 20,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent:'space-between'
  },

  toggleLabel: {
    color: 'white',
    fontSize: 12,
    backgroundColor: 'transparent',
    marginLeft : 20,
    width: '65%'
  },
  toggleWidth:{
    width:Dimensions.get('window').width-(120)
  },
  toggle: {
    marginTop:7,
    color: '#000',
    fontSize: 14,
    marginHorizontal: 5
  },
  coverInner:{flexDirection:'row', paddingVertical:20, alignItems:'center', paddingHorizontal:15,},
  gray_carn:{flex:1, width:30, height:45, marginHorizontal:10,},
  gray_vann:{flex:1,width:30, height:30, marginHorizontal:10,},
  gray_tmpn:{flex:1,width:50, height:50, marginHorizontal:10,},
  bussinesstabsmTitleone:{
    color:'#98989c',
    fontFamily: 'Ubuntu',
    fontSize:16,
    flex:1,
  },
  txtCenter:{textAlign:'center',},
  vDetsilSElection:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:15
},
imgBoxCover:{
  flex:1,
  alignItems:'center',
  justifyContent: 'center'
},
vImgBoxCover:{
  flex:1,
  width:75,
  height:75,
  alignSelf:'center',
},
})
