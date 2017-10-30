import { StyleSheet, Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');
export default StyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: 'white',
    },

    containerTop: {
        flex: 1, 
        backgroundColor: '#dd8d6c', 
        justifyContent: 'space-between', 
        paddingBottom: 40,
    },

    containerBottom: {
        flex: 2, 
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    nav: {
        flexDirection:'row',
        marginTop: 20,
        height: 44,
        alignItems:'center',
        paddingHorizontal:15,
    },

    backImg: {
        height: 20, 
        width: 20,
    },

    navTitle: {
        flex:1,
        paddingHorizontal:10,
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:17,
        backgroundColor:'transparent',
    },

    navRightItem: {
        fontSize:16, 
        backgroundColor:'transparent', 
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
    },

    timeFrame: {
        marginLeft: 15, 
        marginRight: 15, 
        height: 100, 
        backgroundColor: 'white', 
        borderRadius: 5, 
        shadowOffset: {width: 3, height: 3}, 
        shadowColor: 'black', 
        shadowOpacity: 0.4,
    },

    startTimeFrame: {
        height:51, 
        marginHorizontal: 20, 
        borderBottomColor: '#efefef', 
        borderBottomWidth: 2, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
    },

    timerIcon: {
        width: 25, 
        height: 25
    },

    timerLabel: {
        color: '#ababab',
        backgroundColor: 'transparent', 
        paddingLeft: 15, 
        fontSize: 15
    },

    endTimeFrame: {
        height:49, 
        marginHorizontal: 20, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
    },

    descriptionLabel: {
        color: 'white', 
        backgroundColor: 'transparent', 
        textAlign: 'center', 
        fontSize: 15
    },

    calendarFrame: {
        flex: 1, 
        marginBottom: 60, 
        marginTop: -30, 
    },

    calendarStyle: {
        width: width - 30,
        marginLeft: 15,
        borderRadius: 10,
        borderColor: 'gray',
        height: 120
    },

    bottomButtonContainerStyle: {
        width: width - 40, 
        position: 'absolute', 
        bottom: 20, 
        marginLeft: 20, 
        height: 40,
    },

    addButton: {
        backgroundColor: '#f5f5f5',
        borderColor: '#f5f5f5',
        borderWidth: 1,
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        }
    },

    addButtonImage: {
        width:10, 
        height:10, 
        tintColor: '#809efd'
    },
    
})
