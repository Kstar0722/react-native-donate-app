import { StyleSheet, Dimensions } from 'react-native'
var { height, width } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    //justifyContent: 'flex-end',
    //paddingTop: 70,
    resizeMode: 'cover'

  },

  viewContainer: {
    flex: 1,
    width: '100%'
  },

  back_btn: {
    width: 16,
    height: 16,
    marginLeft: 20
  },
  but: {

    width: '100%',
    bottom: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 25
  },


  but_continue: {
    opacity: 0.3
  },

  toggleContainer: {
    width: '100%',
    padding: 20,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },

  toggleLabel: {
    color: 'white',
    fontSize: 14,
    backgroundColor: 'transparent',
    width: '70%'
  },

  toggle: {
    width: '15%',
    height: '100%',
    color: 'white',
    fontSize: 14,
    backgroundColor: 'transparent',
    lineHeight: 30,
    textAlign: 'right',
    marginRight: 5
  },

  vehicleContainer: {
    flexDirection: 'column',
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomWidth: 1
  },

  vehicleIconContainer: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    color: 'white',
  },

  vehicleLabel: {
    color: 'white',
    fontSize: 12,
    width: 70,
    textAlign: 'center',
  },

  car_inactive: {
    width: 45,
    height: 30
  },

  van_inactive: {
    width: 63,
    height: 30
  },

  truck_inactive: {
    width: 45,
    height: 30
  },

  vehicle_inactive: {
    // width: '100%',
    // justifyContent : 'center',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  text: {
    fontSize: 12,
    height: 20,
    width: 30,
    color: '#fff',
    opacity: 1,
    alignSelf: 'center'
  },

  foodTypeContainer: {
    flexDirection: 'column',
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomWidth: 1,
    justifyContent : 'center',
    alignItems : 'center',
    padding : 20
  },

  label : {
    color: 'white',
    fontSize: 14,
    backgroundColor: 'transparent',
    marginBottom : 10
  },

  subLabel : {
    color: 'white',
    fontSize: 10,
    backgroundColor: 'transparent',
    marginBottom : 20
  },

  rowDirection : {
    flexDirection : 'row'
  }

})
