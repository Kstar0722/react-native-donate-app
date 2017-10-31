import { StyleSheet, Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');
export default StyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: 'white',
    },

    nav: {
        flexDirection:'row',
        paddingTop: 20,
        height: 64,
        alignItems:'center',
        paddingHorizontal:15,
        backgroundColor: '#dd8d6c'
    },

    backImg: {
        height: 20, 
        width: 25,
    },

    navTitle: {
        flex:1,
        paddingHorizontal:10,
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:16,
        backgroundColor:'transparent',
    },

    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth:1, 
        borderBottomColor: '#e7e7e9'
    },

    addButton: {
        backgroundColor: '#ffb660',
        borderColor: '#ffb660',
        borderWidth: 1,
        height: 70,
        width: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right:20,
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        }
    },

    itemCheckFrame: {
        width: 14, 
        height: 14, 
        borderRadius: 7, 
        marginLeft: 16
    },

    itemText: {
        marginLeft: 16, 
        marginRight: 8, 
        marginVertical: 30, 
        fontSize: 17
    },
    
    addButtonImage: {
        width:35, 
        height:35, 
        tintColor: 'white'
    },
    
})