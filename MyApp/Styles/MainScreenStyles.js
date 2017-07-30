import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  bg: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    resizeMode: 'cover'
    // alignItems: 'center'
  },

  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 50
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
  icon: {
    backgroundColor: 'transparent',
    paddingLeft: 15,
    zIndex: 100
  },
  icon1: {
    backgroundColor: 'transparent',
    paddingRight: 15,
    zIndex: 100
  },
  Tooltip: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 70,
    alignItems: 'center'

  }
})
