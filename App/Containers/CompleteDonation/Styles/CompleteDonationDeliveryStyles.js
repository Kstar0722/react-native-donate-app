import { StyleSheet,Dimensions } from 'react-native'
const { width, height } =Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    containerTop: {
        height: 200,
    },

    imgBg: {
        flex: 1,
    },

    nav: {
        flexDirection:'row',
        marginTop: 20,
        height: 44,
        alignItems:'center',
        paddingHorizontal:15,
    },

    navLeftIcon: {
        height:20,
        width:20,
    },

    navText: {
        flex:1,
        paddingHorizontal:20,
        textAlign:'left',
        color:'#fff',
        fontSize:(width < 370) ? 16 : 18,
        backgroundColor:'transparent',
    },

    statusImg: {
        width: width/2,  
        height: 30,        
    },

    statusText: {
        marginLeft: width/2-30, 
        backgroundColor: 'transparent', 
        color: 'white', 
        fontSize: (width < 370) ? 15 : 17,
    },

    titleTextFrame: {
        position: 'absolute',
        bottom: 40,
        alignItems: 'center',
        width: width,
    },

    titleText: {        
        textAlign: 'center',
        fontSize: (width < 370) ? 25 : 30,
        color: 'white',
        backgroundColor:'transparent',
    },

    containerBottom: {
        position: 'absolute', 
        width: width, 
        height: 55, 
        backgroundColor: '#fcdccb', 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    buttonText: {
        color: 'white', 
        fontSize: 18, 
        fontWeight: 'bold'
    },

    item: {
        width: width, 
        height: (width < 370) ? 80 : 100, 
        flexDirection: 'row', 
        alignItems: 'center',
    },

    borderBottom: {
        borderBottomColor: '#f3f3f4',
        borderBottomWidth: 1,
    },

    itemImg: {
        width: (width < 370) ? 40 : 50, 
        height: (width < 370) ? 40 : 50, 
        marginLeft: 8
    },

    itemCheckFrame: {
        width: (width < 370) ? 25 : 30, 
        height: (width < 370) ? 25 : 30, 
        borderRadius: 15, 
        marginLeft: (width < 370) ? 16 : 25,
        borderColor: '#e8e8e9', 
        borderWidth: 1.5,
    },

    itemCheckDone: {
        width: (width < 370) ? 25 : 30,
        height: (width < 370) ? 25 : 30,
        marginLeft: (width < 370) ? 16 : 25,
        tintColor: '#50d2c2',
    },

    itemText: {         
        marginLeft: (width < 370) ? 8 : 8,
        fontSize: (width < 370) ? 12 : 14,
    },

    contentFrame: {
        marginTop: 20,
        marginLeft: (width < 370) ? 8 : 30,
        marginRight: (width < 370) ? 8 : 30,
        flex: 1,
    },

    contentItem: {
        width: (width < 370) ? width-16 : width-60,
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
    },

    contentItemImg: {
        width: (width < 370) ? 25 : 30, 
        height: (width < 370) ? 25 : 30, 
        marginLeft: 5,
        marginRight: (width < 370) ? 10 : 20,
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    text: {
        fontSize: (width < 370) ? 13 : 15,
    },

})