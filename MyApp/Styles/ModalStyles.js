import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    header1: {
        position: 'absolute',
        top: 0,
        backgroundColor: '#dd8d6c',
        width:Dimensions.get('window').width,
        height: 20
    },
    header: {
        position: 'absolute',
        top: 20,
        width:Dimensions.get('window').width,
        height: 44,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 5,
    },

    headerleft: {
        position: 'absolute',
        zIndex: 10,
        left: 10
        //marginVertical: 25
    },
    headertitle: {
        color: '#dd8d6c',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 18,

        //marginLeft: Dimensions.get('window').width/2-80
    },
    picturemodal_container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    picturetext: {
        color: 'white',
        fontSize: 16,
        marginTop: 9,

    },
    pictureimage: {
        marginTop:15
    },


dContainer:{
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
},
dHeader: {
    backgroundColor: '#dd8d6c',
    width:Dimensions.get('window').width,
    height: 20,
},
dHeaderInner: {
    width:Dimensions.get('window').width,
    height: 44,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
},
dLeftHeader: {
    position: 'absolute',
    zIndex: 10,
    left: 10
},
dLeftHeader: {
    position: 'absolute',
    zIndex: 10,
    left: 15
},
dRightHeader: {
    position: 'absolute',
    zIndex: 10,
    right: 15,
},

dTitle: {
    color: '#dd8d6c',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 18,
},
entryTxt:{
    color:'#D8D8d8',
    fontSize:8,
    paddingHorizontal:15,

},
mLineText:{
    color:'#D8D8d8',
    fontSize:12,
    padding:15,
    height:100,
    marginTop:50,
    height:Dimensions.get('window').height-(100)}





})
