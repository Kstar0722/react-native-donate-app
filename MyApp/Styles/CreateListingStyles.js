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
        backgroundColor:'transparent',
    },

    detsilSElection:{
        flexDirection:'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
    },
    hLine:{
        position:"absolute",
        height: 120,
        top: 0, 
        left: width*0.5, 
        right: 0, 
        borderLeftWidth:2,
        borderColor:'#e09579',
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
    contentText:{
        flex:1,
        backgroundColor: 'transparent',
        color: '#f3f3f3',
        fontSize: 16, 
    },

    btnTopEdit:{
        backgroundColor: 'transparent',
        color: '#f3f3f3',
        fontSize:16,
    },
    foodTypeText:{
        backgroundColor: 'transparent',
        color: '#f3f3f3',
        fontSize:14,
 
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
   
    sliderS:{
        width:netWidth(30),
        alignSelf:'center',
        marginTop:20,
    },
    sliderCover:{
        alignItems:'center',
        borderBottomColor: '#e09579',
        borderBottomWidth: 2,
        paddingVertical:25,
    },

    container: {
        width:netWidth(0),
        height:height,
    },
    body: {
        flex: 6
    },
});