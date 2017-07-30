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
    }
    
})
