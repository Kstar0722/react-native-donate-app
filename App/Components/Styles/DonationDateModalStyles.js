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

    shadowView: {
        position: 'absolute', 
        bottom: 10, 
        height: 10, 
        width: width, 
        borderRadius: 5, 
        shadowOffset: {width: 5, height: 5}, 
        shadowColor: 'black', 
        shadowOpacity: 0.5,
        backgroundColor: 'red',
    },

    containerBottom: {
        flex: 2, 
        backgroundColor: '#f5f5f5',
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
        fontSize:15,
        backgroundColor:'transparent',
        fontFamily: 'Avenir',
    },

    navRightItem: {
        fontSize:14, 
        backgroundColor:'transparent', 
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontFamily: 'Avenir',
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
        fontSize: 13,
        fontFamily: 'Ubuntu',
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
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: 'Ubuntu',
    },

    calendarFrame: {
        flex: 1, 
        marginBottom: 110, 
        marginTop: -38, 
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    calendarStyle: {
        width: width - 30,
        marginLeft: 0,
        borderRadius: 10,
        borderColor: 'gray',
        height: 200,
        borderRadius: 5, 
        shadowOffset: {width: 0, height: 3}, 
        shadowColor: 'black', 
        shadowOpacity: 0.4,
    },

    bottomButtonContainerStyle: {
        width: width - 40, 
        position: 'absolute', 
        bottom: 10, 
        marginLeft: 20,
    },

    notesFrame: {
        position: 'absolute', 
        alignItems: 'center', 
        justifyContent: 'center', 
        bottom: 65, 
        flex: 1, 
        flexDirection: 'row', 
        backgroundColor: 'transparent'
    },

    notesText: {
        textAlign: 'center', 
        color: '#809efd', 
        marginLeft: 20, 
        backfaceVisibility: 'hidden', 
        fontFamily: 'Ubuntu',
        fontSize: 13,
    },

    addButton: {
        backgroundColor: 'white',
        borderColor: 'white',
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

    arrowFrame: {
        width: 26, 
        height: 26, 
        borderRadius: 13, 
        backgroundColor: '#f7f8fc', 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    
})
