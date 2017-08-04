import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  body: {
    flex: 6,
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
    paddingLeft: 20,
    color:'#dd8d6c',
    paddingVertical:60,
  },
  menu: {
    flex: 1,
    flexDirection: 'row'
  },
  add: {
    flex: 1,
    justifyContent: 'center',
    borderBottomColor: '#e09579',
    borderBottomWidth: 1,
    borderRightColor: '#e09579',
    borderRightWidth: 1,
    alignItems: 'center',
  },
  add: {
    flex: 1,
    justifyContent: 'center',
    borderBottomColor: '#e09579',
    borderBottomWidth: 1,
    borderRightColor: '#e09579',
    borderRightWidth: 1,
    alignItems: 'center',
  },
  vehicle: {
    alignItems: 'center',
    borderBottomColor: '#e09579',
    borderBottomWidth: 1
  },
  text: {
    color: '#f3f3f3',
    fontSize:15,
    paddingHorizontal:15,
    backgroundColor: 'transparent',
    fontSize: 10,
    textAlign:'center',
  },
  vehicle_img: {
    flexDirection: 'row',
    alignItems: 'center',
    width:Dimensions.get('window').width,
  },
  menu_image: {
    flex: 1,
    alignItems:'center',
  },
  dNlabel:{
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'space-between',
      paddingVertical:18,
      paddingRight:15,
      borderBottomColor: '#e09579',
      borderBottomWidth: 1
  },
  vehicle_text: {
    backgroundColor: 'transparent',
    color:'#FFFFFF',
    fontSize:14,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:15,
    marginBottom:8,
  },
  dTypeRow:{
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'space-between',
      paddingBottom:10,
  },
  deliverTlabel:{
      backgroundColor: 'transparent',
      color: '#eeb9aa',
      fontSize:8,
      textAlign:'center',
      marginTop:11,
      marginBottom:7
  },
  slider: {
    paddingVertical:10,
  },
  slide: {
    marginLeft: 10,
    marginRight: 10
  },
  text_slider: {
    backgroundColor: 'transparent',
    color: '#f3f3f3',
    marginLeft: 15,
    fontSize:10,
  },
  view_slide: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:5,
  },
  slide_text: {
    backgroundColor: 'transparent',
    color: '#f3f3f3',
    fontSize: 20,
    alignSelf:'center',
    flex:1,
    paddingLeft:15,
    fontSize:14,
    fontWeight:'bold',
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
    fontSize: 20,
    alignSelf:'center',
    flex:1,
    textAlign:"center",
    paddingLeft:15,
    fontSize:14,
    fontWeight:'bold',

  },
  slide_text11: {
    paddingHorizontal:15,
    backgroundColor: 'transparent',
    color: '#f3f3f3',
    fontSize: 10,
    alignSelf: 'flex-end'

  },
  slide_text2: {
    backgroundColor: '#ef8579',
    alignSelf: 'center',
    color: '#f3f3f3',
    fontSize: 15,
    fontWeight:'bold',
  },
  description: {
    backgroundColor: '#ef8579',
    justifyContent: 'center',
    borderColor: '#e09579',
    borderWidth: 1,
    alignItems: 'center',
    paddingTop:20,
    paddingBottom:10,
  },
  active:{
    width: 83,
    height: 83,

  },
  write1: {
    paddingHorizontal: 20,
    width:80,
    color:'#dd8d6c',
    overflow:'hidden',
  },
  write3: {
    color:'#dd8d6c',
    overflow:'hidden',
    paddingRight:20,
    flexWrap:'wrap',
      width:Dimensions.get('window').width-(170),
  },
  editContent:{
      paddingVertical:5,
    flexDirection:'row',
    height:67,
    alignItems:'center',
    overflow:'hidden',
}

})
