import { StyleSheet,Dimensions } from 'react-native'
width=Dimensions.get('window').width;
height=Dimensions.get('window').height;
function netWidth(data){
     return (width-data);
}
export default StyleSheet.create({

    cNavigation:{
        flexDirection:'row',
        marginTop: 20,
        height: 44,
        alignItems:'center',
        paddingHorizontal:15,
    },
    whiteNot:{
        height:22,
        width:18,
    },
    menuIconNav:{
        height:20,
        width:20,
    },
    refedText:{
        flex:1,
        paddingHorizontal:10,
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
        fontFamily: 'Ubuntu',
        backgroundColor:'transparent',
    },
    camera : {
        alignItems:'center',
        width : 55,
        height : 55,
        borderRadius : 27.5,
        borderWidth : 2,
        borderColor : 'white'
    },
    write3: {
        color:'#fff',
        overflow:'hidden',
        paddingRight:20,
        flexWrap:'wrap',
        width:Dimensions.get('window').width-(170),
        backgroundColor:'transparent',
        fontFamily: 'Ubuntu',
    },
    write1: {
        paddingHorizontal: 20,
        fontWeight:'bold',
        width:80,
        color:'#fff',
        overflow:'hidden',
        backgroundColor:'transparent',
        fontFamily: 'Ubuntu',
      },
    editContent:{
      paddingVertical:5,
      flexDirection:'row',
      height:80,
      alignItems:'center',
      overflow:'hidden',
      borderBottomColor:'#e09579',
      borderBottomWidth:2
    },
    detsilSElection:{
        flexDirection:'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
    },
    hLine:{
        position:"absolute",
        height: 120,
        width:1,
        top: 0, 
        left: width*0.5, 
        right: 0, 
        borderLeftWidth:2,
        borderColor:'#e09579',
        zIndex:999
    },
    bottomLine:{
        width:width,
        borderBottomColor: '#e09579',
        borderBottomWidth: 2,
    },
    rowStyle:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:30,
        borderBottomColor: '#e09579',
        borderBottomWidth: 2,
    },
    rowStyle1:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:25,
    },
    rowRecurrStyle:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:15,
    },
    rowStyleRepeat:{
        flexDirection:'column',
        alignItems:'center'
    },
    buttonGroup:{
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
    rowStyleRepeat_1:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:20,
    },
    rowStyleRepeat_2:{
        flexDirection:'column',
    },

    rowStyle2:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        marginLeft:30,
        paddingHorizontal:20,
    },
    contentText:{
        flex:1,
        backgroundColor: 'transparent',
        color: '#f3f3f3',
        fontSize: 16, 
        fontFamily: 'Ubuntu',
    },    
    contentText1:{
        backgroundColor: 'transparent',
        color: '#f3f3f3',
        fontSize: 16, 
        fontFamily: 'Ubuntu',
    },

    btnTopEdit:{
        backgroundColor: 'transparent',
        color: '#f3f3f3',
        textAlign:'center',
        fontSize:16,
        fontFamily: 'Ubuntu'
    },
    foodTypeText:{
        backgroundColor: 'transparent',
        color: '#f3f3f3',
        fontSize:14,
        fontFamily: 'Ubuntu'
    },

    vehicleTitleV:{
        backgroundColor: 'transparent',
        color:'#FFFFFF',
        fontSize:14,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:7,
        marginBottom:13,
        fontFamily: 'Ubuntu'
    },

    vImgBoxCover:{
        width:75,
        height:75,
        alignSelf:'center',
    },
    vImgBoxCover1:{
        
        alignSelf:'center',
    },
    vDetsilSElection:{
        flexDirection:'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderBottomColor: '#e09579',
        borderBottomWidth: 2,
    },
    stateDateText:{
        textAlign:'center',
        marginTop:15,
        backgroundColor: 'transparent',
        fontSize: 16,
        color:'#fff',
        fontFamily: 'Ubuntu'
    },
    sliderS:{
        width:netWidth(30),
        marginHorizontal:30,
        alignSelf:'center',
        marginTop:20,
    },
    sliderCover:{
        
        borderBottomColor: '#e09579',
        borderBottomWidth: 2,
        paddingVertical:25,
    },
    repeatOffStyles:{
        width: 46,
        height: 46,
        borderColor:'#fff',
        borderWidth:2,
        borderRadius: 23,
        marginRight: 20
    },
    repeatOnStyles:{
        width: 46,
        height: 46,
        backgroundColor:'#fff',
        borderColor:'#fff',
        borderWidth:2,
        borderRadius: 23,
        marginRight: 20
    },
    repeatOffText:{
        textAlign:'center',
        marginTop:15,
        backgroundColor: 'transparent',
        fontSize: 10,
        color:'#fff'
    },
    repeatOnText:{
        textAlign:'center',
        marginTop:15,
        backgroundColor: 'transparent',
        fontSize: 10,
        color:'#DD8D6C',
        fontFamily: 'Ubuntu'
    },
    datePickerStyle:{
        width: width*0.7,
        backgroundColor:'#fff',
        borderRadius:50,
        marginVertical: 20
    },

    operation_view: {
        flexDirection: 'row',
        marginBottom: 10
    },
    operation_button_active: {
        width: 40,
        height: 40,
        marginLeft: 5,
        backgroundColor: '#fff',
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    operation_button: {
        width: 40,
        height: 40,
        marginLeft: 5,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    operation_label_active: {
        fontSize: 10,
        backgroundColor: 'transparent',
        color: '#DD8D6C'
    },
    operation_label: {
        fontSize: 10,
        backgroundColor: 'transparent',
        color: 'white',
        fontFamily: 'Ubuntu'
    },
    slVs:{
        fontSize:12,
        backgroundColor: 'transparent',
        color:'#FFFFFF',
        fontFamily: 'Ubuntu',
        marginRight:15,
    },
    container: {
        width:netWidth(0),
        height:height,
    },
    body: {
        flex: 6
    },

    addressModalStyle:{
        marginTop:100,
        marginHorizontal:20,
        height:250,
        borderRadius:5,
        backgroundColor:'#fff'
    }
});