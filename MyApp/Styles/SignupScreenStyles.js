import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
       alignItems: 'center',
       justifyContent: 'flex-end',
       paddingTop: 70,
       resizeMode: 'cover'
     
    },
    
    text: {        
        fontSize:15,
        height:27,
        width:317 ,      
        color:'#fff',
        marginTop: 20,
        borderBottomColor:'#fff',
        borderBottomWidth: 1,
        opacity: 1,
        alignSelf: 'center'  
    },

    multi_text: {    
        opacity : 0.1,    
        fontSize:15,
        height:88,
        padding: 11,
        width:317 ,      
        color:'#fff',
        marginTop: 20,
        borderColor:'#fff',
        borderWidth: 1,
        opacity: 1,
        alignSelf: 'center' ,
    //    marginBottom : 130
    },

    option: {
        marginVertical: 60,

        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    but: {
        
        width: 500,
        bottom: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
       paddingVertical: 25
    },
    but_business: {
        marginTop: 120,
        width: 500,
        bottom: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
       paddingVertical: 25
    },

    but_continue : {
        opacity: 0.3
    },

    label : {
        marginTop : 10,
        marginBottom : 10,
        fontSize: 16,
        backgroundColor : 'transparent',
        color : 'white'
    },

    operation_button : {
        width : 40,
        height : 40,
        marginLeft : 5,
        borderColor : "#fff",
        borderWidth : 1,
        borderRadius : 20,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'transparent'
    },

    operation_button_active : {
        width : 40,
        height : 40,
        marginLeft : 5,
        backgroundColor : '#fff',
        borderColor : "#fff",
        borderWidth : 1,
        borderRadius : 20,
        alignItems : 'center',
        justifyContent : 'center'
    },

    operation_label : {
        fontSize : 10,
        backgroundColor: 'transparent',
        color : 'white'
    },

    operation_label_active : {
        fontSize : 10,
        backgroundColor: 'transparent',
        color : '#E36679'
    },

    operation_view : {
        flexDirection : 'row',
        marginBottom: 10
    },

    operation_hours_view : {
        width : 230,
        height : 30,
        borderRadius : 15,
        backgroundColor : 'white',
        borderColor : 'white',
        borderWidth : 1,
        marginBottom: 10
    },

    operation_image : {
        width: 15,
        height : 15,
        position : 'absolute',
        right : 10,
        top : 7
        /*
        alignItems : 'center',
        justifyContent : 'flex-end' */
    },

    back_btn : {
        width : 16,
        height : 16,
        marginLeft : 20
    },

    camera : {
        width : 88,
        height : 88,
        borderRadius : 44,
        borderWidth : 2,
        borderColor : 'white'
    },

    plus : {
        position : 'absolute',
        width : 30,
        height : 30,
        right : 0,
        top : -5,

    },

    subLabel : {
        fontSize : 10,
        color : 'white',
        marginTop : 20,
        marginBottom : 40,
        backgroundColor : 'transparent'
    }


    
})
