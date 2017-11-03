import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  Text,
  Dimensions,
} from 'react-native'
import styles from '../Styles/ViewListingsStyle'
import { Images } from '../../../Themes'
import TapBar from '../../../Components/Tapbar'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'
import SegmentedControlTab from 'react-native-segmented-control-tab'

import CircularMenu from '../../../Components/Modals/CircularMenu'
var {height, width} = Dimensions.get('window');
const reactMixin = require('react-mixin')
import TimerMixin from 'react-timer-mixin'

const ANIMATION_DURATION = 300
const TRANSITION_BUFFER = 10



export default class ViewListings extends Component {
  constructor () {
    super()
    this.state = {
        tooltip: 0,
        reservedModal: false,
        openModal: false,
        closedModal: false,
        reservedDonation:true,
        headerTab: 0,
        segmentIndex: 0,
    }

    this.handlePress = this.handlePress.bind(this)
    this.callback = this.callback.bind(this)
  }

  static navigationOptions = {
    header:null,
  }

  segmentIndexChange = (index) => {
    this.setState({
        segmentIndex: index,
        headerTab:0,
    });
  }

  callback() {
    /*this.setTimeout(() => {
        this.setState({
            circleColor: 'white'
        })
    }, TRANSITION_BUFFER + 5)*/
}



    handlePress() {
        this.setState(this.circleTransition.start(this.callback))        
    }

    handleMenuRightItem = () => {
        console.log('Right Menu Button Clicked...')
        this.setTimeout(() => {
            this.props.navigation.navigate("CreateListing")
        }, 400)
    }

    handleMenuLeftItem = () => {
        console.log('Left Menu Button Clicked...')
        this.setTimeout(() => {
            this.props.navigation.navigate("CompletedDonationScreen")
        }, 400)
        
    }

  render () {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainView}>
      <Image source={Images.rectangle} style={styles.bg}>
      <View style={styles.cNavigation}>

      <TouchableOpacity onPress={() => {}}>
          <Image source={Images.menuList} style={styles.menuIconNav} />
          </TouchableOpacity>
          
          <SegmentedControlTab
                values={['Donatations', 'GiveAways']}
                selectedIndex={this.state.segmentIndex}
                onTabPress={this.segmentIndexChange}
                tabsContainerStyle={{ backgroundColor:'rgba(255, 255, 255, 0)', marginTop:5, marginHorizontal: 60, borderRadius:5 }}
                tabStyle={{ backgroundColor:'rgba(255, 255, 255, 0)', borderWidth: 1, borderColor:'white' }}
                activeTabStyle={{ backgroundColor:'white'}}
                tabTextStyle={{fontFamily:'ubuntu', color: '#fff'}}
                activeTabTextStyle={{fontFamily:'ubuntu', color: '#243B53' }} 
            />

          <Image source={Images.whiteNot} style={styles.whiteNot} />
      </View>
        <View style={styles.menu}>
          <TouchableOpacity style={this.state.headerTab==0?styles.activeTabStyle:styles.tabStyle} onPress={() => { this.setState({headerTab:0})}}>
            <Text style={this.state.headerTab==0?styles.textWhite14:styles.textNotActive14}>Created</Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.headerTab==1?styles.activeTabStyle:styles.tabStyle} onPress={() => { this.setState({headerTab:1})}}>
            <Text style={this.state.headerTab==1?styles.textWhite14:styles.textNotActive14}>Reserved</Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.headerTab==2?styles.activeTabStyle:styles.tabStyle} onPress={() => { this.setState({headerTab:2})}}>
            <Text style={this.state.headerTab==2?styles.textWhite14:styles.textNotActive14}>Closed</Text>
          </TouchableOpacity>
       
        </View>
        {this.state.segmentIndex == 0?
            <ScrollView style={{backgroundColor: 'white', flex: 1}}>
            <View style={styles.dtBody}>
                <View style={styles.dtListings}>
                    <View style={styles.dtDAte}>
                        <Text style={styles.dtDate}>11</Text>
                        <Text style={styles.dtMonth}>JAN</Text>
                    </View>
                    <View style={styles.dtDescription}>
                        <Text style={styles.dtText}>Groceries</Text>
                    </View>
                    <Image source={Images.grayVan}></Image>
                    <TouchableOpacity style={styles.dtDesEditBtn}>
                        <Text style={styles.dtEditText}>EDIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.dtBody}>
                <View style={styles.dtListings}>
                    <View style={styles.dtDAte}>
                        <Text style={styles.dtDate}>01</Text>
                        <Text style={styles.dtMonth}>JAN</Text>
                    </View>
                    <View style={styles.dtDescription}>
                        <Text style={styles.dtText}>Groceries</Text>
                    </View>
                    <Image source={Images.car_black}></Image>
                    <TouchableOpacity style={styles.dtDesEditBtn}>
                        <Text style={styles.dtEditText}>EDIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.dtBody}>
                <View style={styles.dtListings}>
                    <View style={styles.dtDAte}>
                        <Text style={styles.dtDate}>12</Text>
                        <Text style={styles.dtMonth}>JUN</Text>
                    </View>
                    <View style={styles.dtDescription}>
                        <Text style={styles.dtText}>Groceries</Text>
                    </View>
                    <Image source={Images.car_black}></Image>
                    <TouchableOpacity style={styles.dtDesEditBtn}>
                        <Text style={styles.dtEditText}>EDIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.dtBody}>
                <View style={styles.dtListings}>
                    <View style={styles.dtDAte}>
                        <Text style={styles.dtDate}>11</Text>
                        <Text style={styles.dtMonth}>JAN</Text>
                    </View>
                    <View style={styles.dtDescription}>
                        <Text style={styles.dtText}>Groceries</Text>
                    </View>
                    <Image source={Images.grayVan}></Image>
                    <TouchableOpacity style={styles.dtDesEditBtn}>
                        <Text style={styles.dtEditText}>EDIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.dtBody}>
                <View style={styles.dtListings}>
                    <View style={styles.dtDAte}>
                        <Text style={styles.dtDate}>11</Text>
                        <Text style={styles.dtMonth}>JAN</Text>
                    </View>
                    <View style={styles.dtDescription}>
                        <Text style={styles.dtText}>Groceries</Text>
                    </View>
                    <Image source={Images.grayVan}></Image>
                    <TouchableOpacity style={styles.dtDesEditBtn}>
                        <Text style={styles.dtEditText}>EDIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </ScrollView>:
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
            <View style={styles.dtBody}>
                <View style={styles.dtListings}>
                    <View style={styles.dtDAte}>
                        <Text style={styles.dtDate}>11</Text>
                        <Text style={styles.dtMonth}>JAN</Text>
                    </View>
                    <View style={styles.dtDescription}>
                        <Text style={styles.dtText}>Groceries</Text>
                    </View>
                    <TouchableOpacity style={styles.dtDesEditBtn}>
                        <Text style={styles.dtEditText}>EDIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.dtBody}>
                <View style={styles.dtListings}>
                    <View style={styles.dtDAte}>
                        <Text style={styles.dtDate}>01</Text>
                        <Text style={styles.dtMonth}>JAN</Text>
                    </View>
                    <View style={styles.dtDescription}>
                        <Text style={styles.dtText}>Groceries</Text>
                    </View>
                    <TouchableOpacity style={styles.dtDesEditBtn}>
                        <Text style={styles.dtEditText}>EDIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.dtBody}>
                <View style={styles.dtListings}>
                    <View style={styles.dtDAte}>
                        <Text style={styles.dtDate}>12</Text>
                        <Text style={styles.dtMonth}>JUN</Text>
                    </View>
                    <View style={styles.dtDescription}>
                        <Text style={styles.dtText}>Groceries</Text>
                    </View>
                    <TouchableOpacity style={styles.dtDesEditBtn}>
                        <Text style={styles.dtEditText}>EDIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.dtBody}>
                <View style={styles.dtListings}>
                    <View style={styles.dtDAte}>
                        <Text style={styles.dtDate}>11</Text>
                        <Text style={styles.dtMonth}>JAN</Text>
                    </View>
                    <View style={styles.dtDescription}>
                        <Text style={styles.dtText}>Groceries</Text>
                    </View>
                    <TouchableOpacity style={styles.dtDesEditBtn}>
                        <Text style={styles.dtEditText}>EDIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.dtBody}>
                <View style={styles.dtListings}>
                    <View style={styles.dtDAte}>
                        <Text style={styles.dtDate}>11</Text>
                        <Text style={styles.dtMonth}>JAN</Text>
                    </View>
                    <View style={styles.dtDescription}>
                        <Text style={styles.dtText}>Groceries</Text>
                    </View>
                    <TouchableOpacity style={styles.dtDesEditBtn}>
                        <Text style={styles.dtEditText}>EDIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </ScrollView>
            
        }
      </Image>
        
            <View style={styles.fDfooter}>
                <View style={styles.fDfooterInner}>
                    <View style={{flex: 1, alignItems: 'center', opacity: 1}}>
                        <TouchableOpacity style={[styles.addButton, {backgroundColor: '#7d9eff', borderColor: '#7d9eff'}]} underlayColor='#7d9eff' onPress={() => navigate('FindDonation')}> 
                            <Image source={Images.fDsearch} style={styles.addButtonImage} resizeMode={'contain'} />          
                        </TouchableOpacity>                            
                    </View>

                    <TouchableOpacity style={styles.addButton} underlayColor='#ffb660' onPress={this.handlePress}> 
                        <Image source={Images.plus_1} style={styles.addButtonImage} />          
                    </TouchableOpacity>
                        
                    <View style={{ flex: 1, alignItems: 'center', opacity: 1 }} >
                        <TouchableOpacity style={[styles.addButton, {backgroundColor: '#7d9eff', borderColor: '#7d9eff'}]} underlayColor='#7d9eff'> 
                            <Image source={Images.message} style={styles.messageButtonImage} resizeMode={'contain'}/>          
                        </TouchableOpacity>
                        <View style={{width: 50, height: 5, backgroundColor: '#ffb660', bottom: 8}} />
                    </View>


                    <CircularMenu
                        ref={(circle) => {this.circleTransition = circle}}                    
                        duration={ANIMATION_DURATION}
                        size = {width}
                        transitionBuffer={TRANSITION_BUFFER}
                        rightPress={this.handleMenuRightItem}
                        leftPress={this.handleMenuLeftItem}
                    />
                </View>
            </View>

      </View>
    )
  }
}

reactMixin(ViewListings.prototype, TimerMixin)
