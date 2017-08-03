import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  body: {
    flex: 6
    // justifyContent: 'flex-end',

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
