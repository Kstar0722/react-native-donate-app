import { StyleSheet,Dimensions } from 'react-native'
const { width, height } =Dimensions.get('window')

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    containerTop: {
        height: 200,
    },

    imgBg: {
        flex: 1,
    },

    statusImg: {
        width: width/2, 
        marginLeft: width/2, 
        height: 30,
    },

    statusText: {
        marginLeft: width/2-30, 
        backgroundColor: 'transparent', 
        color: 'white', 
        fontSize: 17,
    },

    cameraImg: {
        position: 'absolute', 
        top: -50, 
        height: 60, 
        width: 60, 
        right: 16,
    },

    nav: {
        flexDirection:'row',
        marginTop: 20,
        height: 44,
        alignItems:'center',
        paddingHorizontal:15,
    },

    navLeftIcon: {
        height:20,
        width:20,
    },

    navText: {
        flex:1,
        paddingHorizontal:20,
        textAlign:'left',
        color:'#fff',
        fontSize:18,
        backgroundColor:'transparent',
    },

    postBtnText:{
        fontSize:16,
        backgroundColor:'transparent',
        textAlign:'center',
        color:'#fff',
    },

    titleTextFrame: {
        position: 'absolute',
        bottom: 40,
        alignItems: 'center',
        width: width,
    },

    titleText: {        
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor:'transparent',
    },

    containerBottom: {
        position: 'absolute', 
        width: width, 
        height: 55, 
        backgroundColor: '#fcdccb', 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    buttonText: {
        color: 'white', 
        fontSize: 18, 
        fontWeight: 'bold'
    },

    descriptionFrame: {
        width: width, 
        height: 60, 
        borderBottomColor: '#f3f3f4', 
        borderBottomWidth: 1, 
        justifyContent: 'center', 
        paddingLeft: 30
    },

    dateFrame: {
        width: width-60, 
        height: 60, 
        borderBottomColor: '#f3f3f4', 
        borderBottomWidth: 1,  
        marginLeft: 30,
        marginRight: 30,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center'       
    },

    icon: {
        width: 30, 
        height: 30,
        tintColor: 'black'//'#1e1e28',
    },

    iconFrame: {
        flexDirection: 'row', 
        alignItems: 'flex-end', 
        justifyContent: 'center'
    },

    checkboxCircle: {
        width: 15, 
        height: 15, 
        marginRight: 5,
    },

    iconText: {
        color: '#bebec0', 
        fontSize: 10, 
        marginTop: 3, 
        textAlign: 'center',
    },

    datePickerStyle:{
        backgroundColor:'white',
        marginRight: -5,
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },


})

