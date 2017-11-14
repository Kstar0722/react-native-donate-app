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
        fontSize: (width < 370) ? 15 : 17,
    },

    cameraImgFrame: {
        position: 'absolute',
        top: 170,
        right: 16,
        width: 60,
        height: 60,
    },

    cameraImg: {
        //position: 'absolute', 
        //top: -50, 
        height: 60, 
        width: 60, 
        //right: 16,
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
        fontSize: (width < 370) ? 16 : 18,
        backgroundColor:'transparent',
    },

    postBtnText:{ 
        fontSize: (width < 370) ? 14 : 16,
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
        fontSize: (width < 370) ? 25 : 30,
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
        paddingLeft: (width < 370) ? 16 : 30
    },

    dateFrame: {
        width: (width < 370) ? width-32 : width-60, 
        height: 60, 
        borderBottomColor: '#f3f3f4', 
        borderBottomWidth: 1,  
        marginLeft: (width < 370) ? 16 : 30,
        marginRight: (width < 370) ? 16 : 30,
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
        fontSize: (width < 370) ? 8 : 10, 
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
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },    

    text: {
        fontSize: (width < 370) ? 13 : 15,
    },


})

