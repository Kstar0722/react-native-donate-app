import React from 'react'
import { Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
  Modal,
  Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Slider } from 'react-native-elements'
import { Images } from '../DevTheme'
import styles from '../Styles/CompletedDonationScreenStyles'
import DateTimePicker from 'react-native-modal-datetime-picker'

export default class HomeScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      cToggle:false,
      vToggle:true,
      tToggle:false,
      value: 60,
      car: false,
      truck: false,
      switchValue: false,
    }
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }
  static navigationOptions = {
    header:null,
  }




  toggleSwitch (val) {
    this.setState({
      switchValue: val
    })
  }
    sliderValue (){

      if(this.state.value){
        let p=Dimensions.get('window').width-(30);
        let cs=(p*this.state.value)/500;
        return(
          <Text style={[styles.slVs, {marginLeft:cs}]}>{this.state.value.toFixed(0)}</Text>
        )
      }else{
          <Text style={[styles.slVs, {marginLeft:0}]}>{0}</Text>
      }

    }
  render () {

    return (
      <View style={styles.container}>
          <Image source={Images.overlay} style={styles.body}>
              <View style={styles.cNavigation}>
                  <TouchableOpacity onPress={() => {this.sideMenuToggle(true)}}>
                      <Image source={Images.menuList} style={styles.menuIconNav} />
                  </TouchableOpacity>
                  <Text style={styles.refedText}>Create a Donation</Text>
                  <TouchableOpacity>
                      <Text style={styles.postBtnText}>POST</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.detsilSElection}>
                <View style={styles.boxCover}>
                <View style={styles.pImgB}><Image source={Images.bgImage} style={styles.pImg} /></View>

                    <TouchableOpacity>
                        <Text style={styles.btnEdit}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxCover}>
                    <Text style={styles.btnEtxt}>Jan, 11, 2017</Text>
                    <TouchableOpacity>
                        <Text style={styles.btnEdit}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxCover}>
                    <Text style={styles.btnEtxt}>2: 10 PM</Text>
                    <TouchableOpacity>
                        <Text style={styles.btnEdit}>Edit</Text>
                    </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.vehicleTitle}>Vehicle size for rescue</Text>
              <View style={styles.vDetsilSElection}>
                  <TouchableOpacity style={styles.imgBoxCover} onPress={()=>{this.setState({cToggle:!this.state.cToggle})}}>
                        <Image source={this.state.cToggle?Images.car1:Images.car} style={styles.vImgBoxCover} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.imgBoxCover} onPress={()=>{this.setState({vToggle:!this.state.vToggle})}}>
                        <Image source={this.state.vToggle?Images.van1:Images.van} style={styles.vImgBoxCover} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.imgBoxCover} onPress={()=>{this.setState({tToggle:!this.state.tToggle})}}>
                        <Image source={this.state.tToggle?Images.truck1:Images.truck} style={styles.vImgBoxCover} />
                  </TouchableOpacity>
              </View>
              <Text style={styles.vehicleTitleSm}>Select Food Type(s):</Text>
              <View style={styles.vDetsilSElectionS}>
                  <Text style={styles.vehicleTitleS}>Vehicle size for rescue</Text>
                  <TouchableOpacity>
                      <Text style={styles.btnEdit}>Edit</Text>
                  </TouchableOpacity>
              </View>
              <Text style={styles.vehicleTitleSm}>Select DElivery Type:</Text>
              <View style={styles.vDetsilSElectionS}>
                  <Text style={styles.vehicleTitleS}>Pick-Up by rescuer</Text>
                  <TouchableOpacity>
                      <Text style={styles.btnEdit}>Edit</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.sliderCover}>
                  <View style={styles.vDetsilSElectionSL}>
                      <Text style={styles.vehicleTitleSw}>Add weight? (lbs)</Text>
                      <View style={styles.sSection}>
                          <Text style={styles.btnEdit}>Yes</Text>
                          <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}
                              onTintColor="#FFFFFF"
                              thumbTintColor="#FFAD55"/>
                          </View>
                      </View>
                      <Slider
                          value={this.state.value}
                          onValueChange={(value) => this.setState({value})}
                          style={styles.sliderS}
                          maximumTrackTintColor='#f4b9b2'
                          minimumTrackTintColor='#fff'
                          thumbTintColor='#ffb660'
                          maximumValue={500}
                          trackStyle={{height: 10}}
                          thumbStyle={{width: 30, height: 30, borderRadius: 15}}/>
                      {this.sliderValue()}
                  </View>
                  <Text style={styles.vehicleTitleV}>Add Description:</Text>
                  <View style={styles.setBottomPost}>
                  <View style={styles.editContent}>
                      <TouchableOpacity  onPress={()=>this.setState({descriptionModalVisible: true})}>
                          <Text style={styles.write1}>EDIT</Text>
                      </TouchableOpacity>
                      <Text style={styles.write3}>{'We had a banquet and have 10 boxes of milk for pick-up...'}</Text>
                  </View>
              <Image source={Images.markPostIcon}  style={styles.bottomPostBtn} />
              </View>
          </Image>
      </View>
    )
}

}
