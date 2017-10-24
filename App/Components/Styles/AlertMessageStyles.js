import { StyleSheet, Dimensions  } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'
var { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: Metrics.section
  },
  contentContainer: {
    alignSelf: 'center',
    alignItems: 'center'
  },
  message: {
    marginTop: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    color: Colors.steel
  },
  icon: {
    color: Colors.steel
  },
  mainViewClone: {
    height: height - 110,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    bottom: 0,
    position: 'absolute',
    zIndex: 1
  },
  mainViewClone2: {
    height: height,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    bottom: 0,
    position: 'absolute',
    zIndex: 1,
  },
  opacityBtn: {
    height: height,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  modalCover: {
    alignItems: 'center',
    width: width,
  },
  modalBody: {
    alignSelf: 'center',
    backgroundColor: '#52536E',
    padding: 20,
    alignItems: 'center',
    borderRadius: 15,
  },
  modalBodyToggle: {
    width: 294,
    alignSelf: 'center',
    backgroundColor: '#52536E',
    padding: 20,
    alignItems: 'center',
    borderRadius: 15,
    bottom: 90,
    position: 'absolute',
  },
  smallText: {
    fontSize: 12,
    color: '#FFFFFF',
    width: 200,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  gotItBtnTxt: {
    fontSize: 10,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 9,
  },
  gotItBtn: {
    backgroundColor: '#FFB660',
    width: 115,
    paddingVertical: 10,
    borderRadius: 5,
  }
})
