import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
        flex: 1,
        width: '100%'
    },
    logoBig: {
        width: 182,
        height: 145,
        position: 'absolute',
        top: 150
    },
    info: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: 'white',
        position: 'absolute',
        bottom: 40
    },
    login: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 64
    },
    button: {
        marginVertical: 8
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
    bodyContainer: {
       alignItems: 'center',
       justifyContent: 'flex-end',
       paddingTop: 70,
       resizeMode: 'cover'
     
    }
    
})
