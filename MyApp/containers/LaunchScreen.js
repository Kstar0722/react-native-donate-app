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
import styles from '../Styles/LaunchScreenStyles'
import DateTimePicker from 'react-native-modal-datetime-picker'
import PictureModal from './Modals/pictureModal'
import DescriptionModal from './Modals/descriptionModal'
_dText='';

export default class HomeScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      value: 0,
      car: false,
      truck: false,
      switchValue: false,
      van: 0,
      isDateTImePickerVisible: false,
      picturemodalVisible: false,
      descriptionModalVisible:false,
      date: new Date()
    }
    this.toggleSwitch = this.toggleSwitch.bind(this)
  }
  static navigationOptions = {
    title: 'Create a Donation',
    headerStyle: {
      backgroundColor: '#dd8d6c'
    }
  };

  _showDateTimerPicker=() => {
    this.setState({ isDateTImePickerVisible: true })
  }
  _hideDateTimerPicker=() => {
    this.setState({ isDateTImePickerVisible: false })
  }

  _handleDatePicked=(date) => {
        // alert('A date has been picked: '+date)
    this._hideDateTimerPicker()
  }
  toggleSwitch (val) {
    this.setState({
      switchValue: val
    })
  }
  food_type () {
    return (
      <TouchableOpacity style={styles.type}>
        <Text style={styles.slide_text1}>Food Type(s):</Text>
        <Icon name='chevron-right' size={20} color='#f3f3f3' style={{backgroundColor: 'transparent', width: 20}} />
      </TouchableOpacity>
    );
  }
   food_type1() {
    return (
      <TouchableOpacity style={styles.type1}>
        <View style={{alignItems: 'center'}}>
          <Text style={{backgroundColor: 'transparent', color: '#eeb9aa'}}>Select Food Type(s):</Text>
          <Text style={styles.slide_text1}>Perishable and Produce</Text>
        </View>
        <Text style={styles.slide_text11}>Edit</Text>
      </TouchableOpacity>
    );
  }
  deliver_type () {
    return (
      <TouchableOpacity style={styles.type} onPress={()=>this.setState({ deliverModalVisible: true })}>
        <Text style={styles.slide_text1}>Deliver Type:</Text>
        <Icon name='chevron-right' size={20} color='#f3f3f3' style={{backgroundColor: 'transparent'}} />
      </TouchableOpacity>
    )
  }
  deliver_type1 () {
    return (
      <TouchableOpacity style={styles.type1}>
        <View style={{alignItems: 'center'}}>
          <Text style={{backgroundColor: 'transparent', color: '#eeb9aa'}}>Select Deliver Type:</Text>
          <Text style={styles.slide_text1}>Pick-Up by Rescuer</Text>
        </View>
        <Text style={styles.slide_text11}>Edit</Text>
      </TouchableOpacity>
    )
  }
  closePictureModal = () => {
    this.setState({
      picturemodalVisible: false
    })
  }
  closedeliverModal = () => {
    this.setState({
      deliverModalVisible: false
    })
  }
  closeDescriptionModal = () => {
    this.setState({
      descriptionModalVisible: false
    })
  }

  setModalVisible = (visible) => {
    this.setState({
      modalVisible: visible
    })
  }
  onDateChange =(date) => {
    this.setState({date: date})
  }
  writeHere = () => {
    let t='';
      if(_dText){
          if(_dText.length>50){
              t=_dText.substring(0, 49)+'...';
          }else{
            t=_dText;
          }

        return (
          <View style={styles.editContent}>
              <TouchableOpacity  onPress={()=>this.setState({descriptionModalVisible: true})}>
                  <Text style={styles.write1}>EDIT</Text>
              </TouchableOpacity>
              <Text style={styles.write3}>{t}</Text>
              <Image source={Images.markPostIcon}  style={{width: 130,height: 131, right:0, bottom:0, position:'absolute', zIndex:999999}}/>
        </View>)
    }else{
      return (<TouchableOpacity onPress={()=>this.setState({descriptionModalVisible: true})}>
          <Text style={styles.write}>WRITE HERE</Text>
          <Image source={Images.postIcon}  style={{width: 81,height: 65, right:0, bottom:0, position:'absolute'}}/>
      </TouchableOpacity>);
    }
  }


  render () {
    return (
      <View style={styles.container}>
        <Image source={Images.overlay} style={styles.body}>
          <View style={styles.menu}>

            <TouchableOpacity style={styles.add} onPress={()=>this.setState({picturemodalVisible: true})}>
              <Image source={Images.add} />
              <Text style={styles.text}>Image</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.add} onPress={()=>{this.setModalVisible(true)}}>
              <Image source={Images.data} />
              <Text style={styles.text}>Date</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.add} onPress={this._showDateTimerPicker}>
              <Image source={Images.data_copy} />
              <Text style={styles.text}>Time</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.vehicle}>
            <Text style={styles.vehicle_text}>
                        Vehicle Size for Rescue
                    </Text>
            <View style={styles.vehicle_img}>
              <TouchableOpacity style={styles.menu_image} onPress={()=>this.setState({car:!this.state.car})}>
                <Image source={this.state.car ? Images.car1 : Images.car} style={styles.active} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_image} onPress={() => this.van()}>
                <Image source={this.state.van === 0 ? Images.van : Images.van1} style={styles.active}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_image} onPress={()=>this.setState({truck:!this.state.truck})}>
                <Image source={this.state.truck ? Images.truck1 : Images.truck} style={styles.active}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 1}}>
            { this.state.van === 0 ? this.food_type() : this.food_type1()}
            { this.state.van === 0 ? this.deliver_type() : this.deliver_type1()}
          </View>
          <View style={styles.slider}>
            <View style={styles.view_slide}>
              <Text style={styles.slide_text}>Add Weight? (lbs)</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.text}>{this.state.switchValue ? 'YES' : 'NO'}</Text>
                <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}
                  onTintColor='#ffb660'
                            />
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
              <Slider
                value={this.state.value}
                onValueChange={(value) => this.setState({value})}
                style={styles.slide}
                maximumTrackTintColor='#f4b9b2'
                minimumTrackTintColor='#fff'
                thumbTintColor='#ffb660'
                maximumValue={500}
                trackStyle={{height: 7}}
                thumbStyle={{width: 25, height: 25, borderRadius: 20}}
                            />
              <Text style={styles.text_slider}>{parseInt(this.state.value)}</Text>
            </View>
          </View>
          <DateTimePicker
            isVisible={this.state.isDateTImePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimerPicker}
            mode={'time'}
            />
          <Image source={Images.bg1} style={styles.footer}>
            <View style={styles.description}>
              <Text style={styles.slide_text2}>Description:</Text>
            </View>
            {this.writeHere()}
          </Image>
           <DescriptionModal descriptionModalVisible={this.state.descriptionModalVisible} close={this.closeDescriptionModal}/>
           <PictureModal picturemodalVisible={this.state.picturemodalVisible} close={this.closePictureModal}/>
        </Image>

      </View>
    )
  }
  van () {
    if (this.state.van === 0) {
      this.setState({
        van: 1,
        switchValue: true,
        value: 60
      })
    } else {
      this.setState({
        van: 0,
        switchValue: false,
        value: 0
      })
    }
  }
}
