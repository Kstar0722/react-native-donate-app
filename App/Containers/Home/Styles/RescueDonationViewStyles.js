import { StyleSheet,Dimensions } from 'react-native'
const { width, height } =Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    containerTop: {
        height: 200,
        //zIndex: 1,
    },

    imgBg: {
        flex: 1,
    },    

    cameraImg: {
        position: 'absolute',
        top: 155,
        right: 10,
        //width: 80,
        //height: 80,
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },

    nav: {
        flexDirection:'row',
        paddingTop: 20,
        height: 64,
        alignItems:'center',
        paddingHorizontal:15,
        zIndex: 1,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        width: width,
    },

    navLeftIcon: {
        height:20,
        width:20,
    },

    navRightIcon : {
        width: 25, 
        height: 25
    },

    navText: {
        flex:1,
        paddingHorizontal:20,
        textAlign:'left',
        color:'#fff',
        fontSize: (width < 370) ? 16 : 18,
        backgroundColor:'transparent',
    },

    titleText: { 
        textAlign: 'center',
        fontSize: (width < 370) ? 25 : 30,
        color: 'white',
        backgroundColor:'transparent',
    },

    text: {
        backgroundColor:'transparent',
        fontSize: (width < 370) ? 13 : 15
    },

    stars: {
        alignItems: 'center', 
        backgroundColor: 'transparent',
        marginTop: 5,
    },

    distanceText: {
        position: 'absolute', 
        bottom: 10, 
        fontSize: 14, 
        width: width,
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: 'white'
    },

    itemFrame: {
        height: 60,
        width: width-32,
        borderBottomColor: 'rgba(0, 0, 0, 0.15)',
        borderBottomWidth: 1,
        flexDirection: 'row'                         ,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        marginTop: 8,
    },

    sectionHeader: {
        paddingVertical: 20, 
        backgroundColor: 'rgba(0, 0, 0, 0.05)', 
        paddingHorizontal: 16
    },

    contactItemFrame: {
        paddingHorizontal: 16,
        borderBottomColor: 'rgba(0, 0, 0, 0.15)',
        borderBottomWidth: 1,
        width: width,
        justifyContent: 'center'
    },

    foodTypeText: {
        fontSize: (width < 370) ? 9 : 10, 
        marginTop: 5, 
        paddingHorizontal: (width < 370) ? 5 : 8
    },

    foodTypeIcon: {
        width: 30, 
        height: 30
    },

    vehicleSizeIcon: {
        width: 40, 
        height: 40
    },

    buttonGroupFrame: {
        //marginTop: 50,
        paddingBottom: 8,
        width: width, 
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
    },

    contactTitleText: {
        color: 'rgba(0, 0, 0, 0.5)', 
        fontSize: 13, 
        marginBottom: 5,
        marginTop: 16,
    },

    buttonImage: {
        width: 60, 
        height: 60
    },

    blurView: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0,
    },

    bottomBackground: {
        width: width, 
        height: 53,
        position: 'absolute',
        bottom: 0,
        borderTopWidth:2,
        borderTopColor: 'rgba(216,216,216,0.8)',
        shadowColor: '#D8D8D8',
        shadowOffset: {
            width:2,
            height: 2,
        },
        shadowOpacity: 0.7,
    },





    rescueModal: {
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0.4)',
        alignItems: 'center'
      },
      rescue_bg: {
        width: width-80,
        height: (width-80)*832/580,
        marginTop: 30,
        alignItems: 'center',
        paddingHorizontal: 30
      },
      modalTitle: {
        fontFamily: 'Helvetica',
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20
      },
      modalContent: {
        fontFamily: 'Helvetica',
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 20,
        color: 'white',
        marginTop: 10,
        marginBottom: 25
      },
      volunteer: {
        width: 55,
        height: 55*101.27/100,
        paddingHorizontal: 20
      },
      helpicon: {
        width: 17,
        height: 17,
        position: 'absolute',
        right: -40,
        top: 20
      },
      modaButton: {
        width: width-170,
        height: (width-150)*52.58/349.41,
        backgroundColor: '#ffb660',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 25
      },
      buttonText: {
        fontFamily: 'Helvetica',
        backgroundColor: 'transparent',
        fontSize: 12,
        color: 'white'
      },
      
      statusModal_bg: {
        width: width-80,
        height: (width-80)*962/580,
        marginTop: 30,
        alignItems: 'center',
        paddingHorizontal: 0
      },
      mapView1: {
        width: width-82,
        height: (width-80)*311.34/580,  
      },
      pinception: {
        width: 70,
        height: 70*125/101
      },
      statusModal_to: {
        width: width-82,
        borderBottomColor: 'rgba(255,255,255,0.4)',
        borderBottomWidth: 1,
        backgroundColor: 'transparent',
        marginTop: 12,
        flexDirection: 'row',  
        height: 30
      },
      to: {
        fontFamily: 'Helvetica',
        fontSize: 12,
        color: 'white',
        position: 'absolute',
        left: 20,
        marginTop: 8
      },
      name: {
        fontFamily: 'Helvetica',
        fontSize: 12,
        color: 'white',
        position: 'absolute',
        right: 20
      },
      statusModal_aroundButton: {
        width: 65,
        height: 65,
        borderRadius: 65/2,
        backgroundColor: '#ffb660',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black', 
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 0.2,
        borderWidth: 0.4,
        borderColor: 'rgba(255,255,255,0.3)',
        position: 'absolute'
      },
      aroundButtonView: {
        flexDirection: 'row',
        width: width-82,
        marginTop: -10
      
      },
      deliver_guy: {
        width: 70,
        height: 70*80/114
      },



    
})