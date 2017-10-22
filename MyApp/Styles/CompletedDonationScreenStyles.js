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
        width:15,
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
        width:125,
        height:145,
        alignItems:'center',
        backgroundColor: 'transparent',
        borderBottomColor: '#e09579',
        borderBottomWidth: 1,
        borderRightColor: '#e09579',
        borderRightWidth: 1,
        paddingTop:20,
    },
    pImgB:{
        width:90,
        height:90,
        borderRadius:45,
        borderColor:'#EABBA9',
        borderWidth:5,
        marginBottom:10
    },
    pImg:{
        width:80,
        height:80,
        borderRadius:40,
    },
    btnEdit:{
        backgroundColor: 'transparent',
        color: '#f3f3f3',
        fontSize:15,
    },
    btnEtxt:{
        lineHeight:100,
        color:'#FFFFFF',
        fontSize:14,
        fontWeight:'bold'
    },
    vehicleTitle:{
        backgroundColor: 'transparent',
        color:'#FFFFFF',
        fontSize:14,
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
        width:125,
        alignItems:'center',
    },
    vImgBoxCover:{
        width:83,
        height:83,
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
        fontSize:14,
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
        paddingHorizontal: 20,
        width:80,
        color:'#dd8d6c',
        overflow:'hidden',
    },
    write3: {
        color:'rgba(102, 102, 102, 0.6)',
        overflow:'hidden',
        paddingRight:20,
        flexWrap:'wrap',
        width:netWidth(180),
        fontSize:10,
    },
    editContent:{
        paddingVertical:5,
        flexDirection:'row',
        alignItems:'center',
        overflow:'hidden',
        height:65,
    },
    setBottomPost:{
        bottom:0,
        position:'absolute',
        width:375,
        backgroundColor:'#FFFFFF',
        minHeight:65,
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
