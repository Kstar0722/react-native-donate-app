import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  dContainer: {
      flex: 1,
      backgroundColor:'#FFF'
  },
  settingBack:{
    width: Dimensions.get('window').width,
    height:144,
  },
  dLeftHeader:{
    width:32,
    height:32,
  },
  backwhite:{
    marginTop:7,
    width:20,
    height:20,
    
  },
  headertitlen:{
      marginLeft:10,
      fontSize:17,
      color:'#FFF',
      fontFamily: 'Ubuntu',
      fontWeight: '500'
  },
  dHeaderInner:{
    alignItems:'center',
    backgroundColor:'transparent',
    paddingTop:25,
    paddingHorizontal:15,
    flexDirection:'row',
  },
  scTitle:{
      paddingTop: 22,
      fontFamily: 'Ubuntu',
      fontWeight: '500',
      color: '#1D1D26',
      fontSize: 11,
      height:60,
      backgroundColor:'#F8F8F9',
      paddingHorizontal:25,
  },
  tabMenuPart:{
    backgroundColor:'transparent',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 10,
    paddingHorizontal:25,
  },
  tabMenuPart2:{
    backgroundColor:'transparent',
    flexDirection:'row',
    alignItems:'center',
  },
  tabmenu:{
      borderRadius:30,
      paddingHorizontal:12,
      paddingVertical:12,
      backgroundColor:'transparent',
  },
  tabmenuActive:{
      borderRadius:30,
      paddingHorizontal:20,
      paddingVertical:11,
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
      fontSize:11,
      fontFamily:'Ubuntu',
      fontWeight:'500'
  },
  tabmenuactiveText:{
      color:'#000',
      fontSize:11,
      fontFamily:'Ubuntu',
      fontWeight:'500'
  },
  inputContainer:{
      marginHorizontal:15,
      marginBottom:20,
  },
  inputContainerInner:{
      paddingBottom:0,
  },
  profileImageCover:{
      position:'absolute',
      top:-30,
      right:15,
      width:90,
      height:90,
      borderRadius:40,
      alignItems:'center',
  },
  profileImage:{
    borderRadius:45,
    width:90,
    height:90,
  },
  camerai:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:25,
    height:25,
    position:'absolute',
    top: 32

  },
  lIcon:{
      width:25,
      height:25,
      position:'absolute',
      top:7,
  },

  inputc:{
      color:'#1D1D26',
      fontSize:15,
      fontFamily: 'Ubuntu',
      fontWeight: '500',
      paddingLeft:50,
      height:45,
  },
  borderBottom:{
      backgroundColor:'#DCDCDE',
      height:2,
  },
  saveBtn:{
    
    backgroundColor:'#F58A55',
    position: 'absolute', 
    left: 0, 
    right: 0, 
    bottom: 20, 
    justifyContent: 'center', 
    alignItems: 'center',
    height:55,
    marginHorizontal:30,
    borderRadius:40
  },

  saveBtn_button:{
    color:'#FFF',
    fontFamily: 'Ubuntu',
    fontWeight:'bold',
    fontSize:16,
  },
  bussinesstab:{
     paddingHorizontal:25,
     paddingVertical:10,
  },
  bussinesstabsmTitle:{
    color:'#98989c',
    fontFamily: 'Ubuntu',
    fontWeight:'500',
    fontSize:12,
  },
  bussinesstabsmLabel:{
    color:'#000',
    fontFamily: 'Ubuntu',
    fontWeight: '500',
    fontSize:15,
  },
  right_gray:{
    width:13,
    height:13,
  },
  arrowSpace:{justifyContent:'space-between',
    marginVertical:15,
    flexDirection:'row',
    alignItems:'center',
    height: 50
  },
toggleContainer: {
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical:10,
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
    width:Dimensions.get('window').width-(150)
  },
  toggleWidth1:{
    width:Dimensions.get('window').width-(100)
  },
  toggle: {
    fontFamily:'Ubuntu',
    marginTop:7,
    color: '#000',
    fontSize: 11,
    fontWeight:'bold',
    marginHorizontal: 5
  },
  coverInner:{flexDirection:'row', paddingVertical:20, alignItems:'center', paddingHorizontal:25,},
  gray_carn:{flex:1, width:30, height:45, marginHorizontal:10,},
  gray_vann:{flex:1,width:30, height:30, marginHorizontal:10,},
  gray_tmpn:{flex:1,width:50, height:50, marginHorizontal:10,},
  bussinesstabsmTitleone:{
    color:'#98989c',
    fontFamily: 'Ubuntu',
    fontWeight:'500',
    fontSize:12,
    flex:1,
  },
  txtCenter:{textAlign:'center',},
  vDetsilSElection:{
    height:50,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:25
},
imgBoxCover:{
  flex:1,
  alignItems:'center',
  justifyContent: 'center'
},
vImgBoxCover:{
  flex:1,
  width:55,
  height:55,
  alignSelf:'center',
},
})
