import { StyleSheet,Dimensions } from 'react-native'
const { width, height } =Dimensions.get('window')

export default StyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: '#f58a55'
    },

    innerContainer: {
        marginTop: 25,
        marginLeft: 8,
        marginRight: 8,
        flex: 1,
    },

    searchFrame: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 45,
        backgroundColor: 'white'
    },

    gap: {
        width: width,
        height: 3,
        backgroundColor: '#f58a55'
    },

    searchBtnFrame: {
        width: 30,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },

    backImg: {
        width: 20, 
        height: 20, 
        tintColor: 'black',
    },

    closeImg: {
        width: 25, 
        height: 25, 
        tintColor: 'black',
    },

    searchInput: {
        flex: 1,
        alignSelf: 'center',
        paddingHorizontal: 20,
        textAlign: 'left',
        fontSize: 17,
    },

    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth:1, 
        borderBottomColor: '#e7e7e9',
        backgroundColor: 'white',
        paddingHorizontal: 16,
    },

})