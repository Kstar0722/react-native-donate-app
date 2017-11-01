import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  dContainer: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  settingBack: {
    width: Dimensions.get('window').width,
    height: 112,
  },
  addMemberBack: {
    width: Dimensions.get('window').width,
    height: 64,
  },
  dLeftHeader: {
    width: 25,
    height: 25,
  },
  dAddButton: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 22,
    right: 26,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    borderRadius: 30,
    borderWidth: 0
  },
  dAddUserButton: {
    width: '100%',
    height: 55,
    marginBottom: 20,
    borderRadius: 40,
    backgroundColor: "#F58A55",
    justifyContent: 'center',
    alignItems: 'center'
  },
  dRightHeader: {
    width: 25,
    height: 25
  },
  backwhite: {
    width: 25,
    height: 25,
  },
  addButton: {
    width: 60,
    height: 60,
  },
  listItem: {
    width: 15,
    height: 15,
  },

  headertitlen: {
    fontSize: 17,
    color: '#FFF',
    marginLeft: 15,
    flex: 1
  },
  dHeaderInner: {
    backgroundColor: 'transparent',
    paddingTop: 25,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  scTitle: {
    color: '#1D1D26',
    fontSize: 14,
    backgroundColor: '#F8F8F9',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  tabMenuPart: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  search_bar: {
    width: '90%',
    height: 35,
    paddingHorizontal: 22,
    backgroundColor: 'white'
  },
  tabMenuPart2: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listItemSection: {
    backgroundColor: "#FFB660",
    color: 'white'
  },
  listItemSectionText: {
    fontSize: 13,
    fontFamily: 'Avenir',
    color: 'white'
  },
  listItemText: {
    fontSize: 17,
    fontFamily: 'Avenir',
    color: '#52536E'
  },
  listItemTextPending: {
    fontSize: 17,
    fontFamily: 'Avenir',
    color: 'rgba(82, 83, 110, 0.3)'
  },
  pendingText : {
    fontSize: 8,
    fontFamily: 'Ubuntu',
    color: 'rgba(82, 83, 110, 0.3)'
  },
  tabmenu: {
    borderRadius: 40,
    width: 80,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  tabmenuActive: {
    borderRadius: 30,
    width: 80,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#FFF',

    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.5,
  },
  tabmenuText: {
    color: '#FFF',
    fontSize: 10,
    fontFamily: 'Avenir',
    textAlign: 'center'
  },
  tabmenuactiveText: {
    color: '#000',
    fontSize: 10,
    fontFamily: 'Avenir',
    textAlign: 'center'
  },
  inputContainer: {
    marginHorizontal: 15,
    marginBottom: 20,
  },
  inputContainerInner: {
    paddingBottom: 0,
  },
  profileImageCover: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: 40,
    width: 80,
    height: 80,
  },
  camerai: {
    width: 30,
    height: 29,
    position: 'absolute',
    top: 25.5,

  },
  lIcon: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 7,
  },

  inputc: {
    color: '#1D1D26',
    fontSize: 18,
    fontFamily: 'Avenir',
    paddingLeft: 35,
    height: 40,
  },
  borderBottom: {
    backgroundColor: '#DCDCDE',
    height: 2,
  },
  saveBtn: {
    backgroundColor: '#F58A55',
    marginVertical: 20,
    marginHorizontal: 15,
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
  },
  saveBtn_button: {
    color: '#FFF',
    fontFamily: 'Avenir',
    fontSize: 20,
  },
  bussinesstab: {
    borderBottomColor: '#B0B0B3',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  bussinesstabsmTitle: {
    color: '#98989c',
    fontFamily: 'Ubuntu',
    fontSize: 16,
  },
  bussinesstabsmLabel: {
    color: '#000',
    fontFamily: 'Ubuntu',
    fontSize: 20,
  },
  right_gray: {
    width: 15,
    height: 24,
  },
  arrowSpace: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100
  },

  coverInner: { flexDirection: 'row', paddingVertical: 20, alignItems: 'center', paddingHorizontal: 15, },
  gray_carn: { flex: 1, width: 30, height: 45, marginHorizontal: 10, },
  gray_vann: { flex: 1, width: 30, height: 30, marginHorizontal: 10, },
  gray_tmpn: { flex: 1, width: 50, height: 50, marginHorizontal: 10, },
  bussinesstabsmTitleone: {
    color: '#98989c',
    fontFamily: 'Ubuntu',
    fontSize: 16,
    flex: 1,
  },
  txtCenter: { textAlign: 'center', },
  vDetsilSElection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  imgBoxCover: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  vImgBoxCover: {
    flex: 1,
    width: 75,
    height: 75,
    alignSelf: 'center',
  },
  addMemberView: {
    paddingHorizontal: 30,
    paddingVertical: 23,
    flex: 1,
  },
  addMemberLabel: {
    fontFamily: 'Ubuntu',
    fontSize: 10,
    fontWeight: '600',
    color: 'rgba(29, 29, 38, 0.5)',
    marginBottom: 12,
    lineHeight: 16
  },
  addMemberField: {
    fontWeight: '600',
    fontFamily: 'Avenir',
    fontSize: 14,
    color: '#1D1D26',
    paddingBottom: 14,
    borderBottomColor: 'rgba(29, 29, 38, 0.1)',
    borderBottomWidth: 1,
    marginBottom: 20

  },
  roleView: {
    flexDirection: 'row',
    paddingBottom: 18,
    borderBottomColor: 'rgba(29, 29, 38, 0.1)',
    borderBottomWidth: 1

  },
  toggleContainer: {
    paddingVertical: 30,
    width: '100%',
    borderBottomColor: 'rgba(29, 29, 38, 0.1)',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },

  toggleLabel: {
    color: 'rgba(29, 29, 38, 0.5)',
    fontSize: 10,
    backgroundColor: 'transparent',
    width: '70%',
    lineHeight: 32
  },

  toggle: {
    width: '15%',
    height: '100%',
    color: 'rgba(29, 29, 38, 1.0)',
    fontSize: 14,
    backgroundColor: 'transparent',
    lineHeight: 30,
    textAlign: 'right',
    marginRight: 5
  },
  addUserButtonLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
    color: 'white'
  },
  rescue_bg: {
    width: 290,
    height: 181,
    borderRadius : 9,
    marginTop: 30,
    alignItems: 'center',
    paddingHorizontal: 10
  },
  rescueModal: {
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent : 'center'
  },
  modalTitle: {
    fontFamily: 'Ubuntu',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
    width : 196,
    textAlign : 'center'
  },
  modalContent: {
    fontFamily: 'Ubuntu',
    fontSize: 9,
    textAlign: 'center',
    lineHeight: 13,
    width : 196,
    color: 'white',
    marginTop: 10,
    marginBottom: 25
  },
  modaButton: {
    height: 32,
    width: 125,
    backgroundColor: '#ffb660',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 25
  },
  buttonText: {
    fontFamily: 'Helvetica',
    backgroundColor: 'transparent',
    fontSize: 12,
    color: 'white'
  },
})
