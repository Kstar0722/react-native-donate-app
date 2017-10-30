import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  dContainer: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center'
  },
  dHeader: {
      backgroundColor: '#DD8D6C',
      width: Dimensions.get('window').width,
      height: 30,
  },
  dHeaderInner: {
      width: Dimensions.get('window').width,
      height: 44,
      flexDirection: 'row',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      top: -10,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(216,216,216,0.8)',
  },
  dLeftHeader: {
      position: 'absolute',
      zIndex: 10,
      left: 15
  },
  orange_baak_button:{
      width:16,
      height:16,
  },
  headertitle: {
      color: '#dd8d6c',
      fontSize: 20,
      fontWeight: '600',
      marginVertical: 18,
      fontFamily: 'Avenir'
  },
  dRightHeader: {
      position: 'absolute',
      zIndex: 10,
      right: 15,
  },
  save_button:{
      color : "#000",
      fontSize:14,
      fontWeight:'bold',
  },
  mLineText: {
      color: '#A6A6A6',
      fontSize: 14,
      width: Dimensions.get('window').width - 67,
      flexDirection: 'column',
  },


})
