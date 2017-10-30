import { StyleSheet,Dimensions } from 'react-native'
width=Dimensions.get('window').width;
height=Dimensions.get('window').height;
function netWidth(data){
     return (width-data);
}
export default StyleSheet.create({

   vehicleTitleDescription:{
        backgroundColor: 'transparent',
        color:'#FFFFFF',
        fontSize:12,
        textAlign:'center',
        marginBottom:5,
    },

    foodTypeText: {
        color: 'white', 
        backgroundColor: 'transparent', 
        textAlign: 'center', 
        fontSize: 13,
        paddingBottom: 8,
    },

    deliverOptionFrame: {
        flex:1, 
        flexDirection:'row', 
        alignItems:'center',
        paddingVertical: 5,
    },

    deliverOptionRightFrame: {
        paddingVertical:15, 
        paddingRight:25, 
        marginLeft:-10, 
        flex:1, 
        borderBottomColor: '#e09579', 
        borderBottomWidth: 1,
    },

    deliverOptionDetailText: {
        fontWeight: 'bold', 
        fontSize: 14, 
        color: 'white', 
        textAlign: 'center', 
        backgroundColor: 'transparent', 
        marginLeft: -25
    },

    questionMarkImage: {
        width:15, 
        height:15, 
        marginRight: 20
    },

    deliverOptionImageFrame: {
        width:130, 
        alignItems: 'center'
    },






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
        fontSize:16,
        backgroundColor:'transparent',
    },
    postBtnText:{
        fontSize:16,
        backgroundColor:'transparent',
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
    },
    detsilSElection:{
        flexDirection:'row',
    },
    boxCover:{
        //width:125,
        flex:1,
        height:125,
        alignItems:'center',
        backgroundColor: 'transparent',
        borderBottomColor: '#e09579',
        borderBottomWidth: 1,
        borderRightColor: '#e09579',
        borderRightWidth: 1,
        paddingTop:20,
    },
    pImgB:{
        width:70,
        height:70,
        borderRadius:35,
        borderColor:'#EABBA9',
        borderWidth:5,
        marginBottom:10,
    },
    pImg:{
        width:60,
        height:60,
        borderRadius:30,
    },
    btnEdit:{
        backgroundColor: 'transparent',
        color: '#f3f3f3',
        fontSize:15,
        textAlign: 'center',
    },
    btnEtxt:{
        lineHeight:80,
        color:'#FFFFFF',
        fontSize:14,
        fontWeight:'bold'
    },
    vehicleTitle:{
        backgroundColor: 'transparent',
        color:'#FFFFFF',
        fontSize:17,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:8,
        marginBottom:5,
    },

    vehicleTitleV:{
        backgroundColor: 'transparent',
        color:'#FFFFFF',
        fontSize:14,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:7,
        marginBottom:13,
    },
    imgBoxCover:{
        //width:125,
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    vImgBoxCover:{
        width:75,
        height:75,
        alignSelf:'center',
    },
    vDetsilSElection:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor: '#e09579',
        borderBottomWidth: 1,
    },
    vehicleTitleS:{
        backgroundColor: 'transparent',
        color:'#FFFFFF',
        fontSize:14,
        fontWeight:'bold',
        textAlign:'center',
        alignSelf:'center',
        paddingHorizontal:20,
        width:netWidth(45)
    },
    vDetsilSElectionS:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor: '#e09579',
        borderBottomWidth: 1,
        paddingBottom:12,
    },
    btnEdit:{
        backgroundColor: 'transparent',
        color: '#f3f3f3',
        fontSize:12,
        paddingHorizontal:10,
    },
    vehicleTitleSm:{
        backgroundColor: 'transparent',
        color: '#f3f3f3',
        fontSize:8,
        textAlign:'center',
        marginTop:5,
        marginBottom:10,
    },
    slVs:{
        fontSize:12,
        backgroundColor: 'transparent',
        color:'#FFFFFF',
        marginRight:15,
    },
    vehicleTitleSw:{
        backgroundColor: 'transparent',
        color:'#FFFFFF',
        fontSize:17,
        fontWeight:'bold',
        textAlign:'left',
        alignSelf:'center',
        paddingHorizontal:20,
        width:netWidth(120),
    },
    vDetsilSElectionSL:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    sSection:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15,
    },
    sliderS:{
        width:netWidth(30),
        alignSelf:'center',
        marginTop:10,
    },
    sliderCover:{
        borderBottomColor: '#e09579',
        borderBottomWidth: 1,
        paddingVertical:17,
    },
    write1: {
        paddingRight: 50,
        width:100,
        color:'white',
        overflow:'hidden',
        fontSize: 16,
        fontWeight: 'bold',
    },
    write3: {
        color:'white',
        overflow:'hidden',
        paddingLeft:20,
        flexWrap:'wrap',
        width:netWidth(180),
        fontSize:15,
        fontWeight: 'bold',
    },
    editContent:{
        paddingVertical:5,
        flexDirection:'row',
        alignItems:'center',
        overflow:'hidden',
        height:65,
        marginBottom: 40,
    },
    setBottomPost:{
        //bottom:0,
        //position:'absolute',
        width:width,
        backgroundColor:'transparent',
        minHeight:65,
        marginTop: 40,
    },
    bottomPostBtn:{
        width: 130,
        height: 131,
        right:0,
        bottom:0,
        position:'absolute',
    },
    container: {
        width:netWidth(0),
        height:height,
    },
    body: {
        flex: 6
    },
});
