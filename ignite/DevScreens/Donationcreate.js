import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Switch
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Slider } from 'react-native-elements'
import { Images } from './DevTheme'

export default class HomeScreen extends React.Component {
// var HomeScreen = React.createClass({
  constructor () {
    super()
    this.state = {
      value: 0,
      switchValue: false,
      van: 0
    }
    this.toggleSwitch = this.toggleSwitch.bind(this)
  }
//   static navigationOptions = {
//     title: 'Create a Donation',
//     headerStyle: {
//       backgroundColor: '#dd8d6c'
//     }
//   };
  toggleSwitch (val) {
    this.setState({
      switchValue: val
    })
  }
  food_type(){
      return(
          <TouchableOpacity style={styles.type}>
            <Text style={styles.slide_text1}>Food Type(s):</Text>
            <Icon name='chevron-right' size={20} color='#f3f3f3' style={{backgroundColor: 'transparent', width: 20}} />
          </TouchableOpacity>
      );
  }
food_type1(){
      return(
          <TouchableOpacity style={styles.type1}>
              <View style={{alignItems: 'center'}}>
                <Text style={{backgroundColor: 'transparent',color: '#eeb9aa'}}>Select Food Type(s):</Text>
                <Text style={styles.slide_text1}>Perishable and Produce</Text>
            </View>
            <Text style={styles.slide_text11}>Edit</Text>
          </TouchableOpacity>
      );
  }
    deliver_type(){
        return (
            <TouchableOpacity style={styles.type}>
              <Text style={styles.slide_text1}>Deliver Type:</Text>
              <Icon name='chevron-right' size={20} color='#f3f3f3' style={{backgroundColor: 'transparent'}} />
            </TouchableOpacity>
        );
    }
    deliver_type1 (){
        return (
            <TouchableOpacity style={styles.type1}>
              <View style={{alignItems: 'center'}}>
                <Text style={{backgroundColor: 'transparent',color: '#eeb9aa'}}>Select Deliver Type:</Text>
                <Text style={styles.slide_text1}>Pick-Up by Rescuer   </Text>
            </View>
            <Text style={styles.slide_text11}>Edit</Text>
          </TouchableOpacity>
        );
    }
  render () {     
            
    return (
      <View style={styles.container}>
        <Image source={Images.overlay} style={styles.body}>
          <TouchableOpacity onPress={this.props.screenProps.toggle} style={{
            position: 'absolute',
            paddingTop: 30,
            paddingHorizontal: 10,
            zIndex: 10
          }}>
            <Image source={Images.closeButton} />
          </TouchableOpacity>
          <View style={styles.menu}>

            <TouchableOpacity style={styles.add}>
              <Image source={Images.add} />
              <Text style={styles.text}>Image</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.add}>
              <Image source={Images.data} />
              <Text style={styles.text}>Date</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.add}>
              <Image source={Images.data_copy} />
              <Text style={styles.text}>Time</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.vehicle}>
            <Text style={styles.vehicle_text}>
                        Vehicle Size for Rescue
                    </Text>
            <View style={styles.vehicle_img}>
              <TouchableOpacity style={styles.menu_image}>
                <Image source={Images.car} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_image} onPress={() => this.van()}>
                <Image source={this.state.van === 0 ? Images.van : Images.van1} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_image}>
                <Image source={Images.truck} />
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
                value={this.state.van === 0 ? this.state.value : 60}
                onValueChange={(value) => this.setState({value})}
                style={styles.slide}
                maximumTrackTintColor='#f4b9b2'
                minimumTrackTintColor='#fff'
                thumbTintColor='#ffb660'
                maximumValue={500}
                trackStyle={{height: 7}}
                thumbStyle={{width: 25, height: 25, borderRadius: 20}}
                            />
              <Text style={styles.text_slider}>{this.state.van === 0 ? parseInt(this.state.value): 60}</Text>
            </View>
          </View>

          <Image source={Images.bg1} style={styles.footer}>
            <View style={{flex: 1, backgroundColor: '#ef8579', justifyContent: 'center', borderColor: '#e09579', borderWidth: 1, alignItems: 'center', paddingTop: 10}}>
              <Text style={styles.slide_text2}>Description:</Text>
            </View>
            <TextInput placeholder='WRITE HERE' placeholderTextColor='#dd8d6c' style={styles.write} />
          </Image>
        </Image>

      </View>
    )
  }
  van () {
      if(this.state.van === 0){
        this.setState({
            van: 1,
            switchValue: true
        })
      }else {
          this.setState({
              van: 0,
              switchValue: false
            })
      }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  body: {
    flex: 6
    // justifyContent: 'flex-end',

  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'

  },
  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 50
  },
  write: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 40
  },
  menu: {
    flex: 1,
    flexDirection: 'row'
  },
  add: {
    flex: 1,
    justifyContent: 'center',
    borderColor: '#e09579',
    borderWidth: 1,
    alignItems: 'center'
  },
  vehicle: {
    flex: 1,
    alignItems: 'center',
    borderColor: '#e09579',
    borderWidth: 1
  },
  text: {
    backgroundColor: 'transparent',
    color: '#f3f3f3'
  },
  vehicle_img: {

    flexDirection: 'row',
    alignItems: 'center',
    //marginTop: 17,
    //paddingBottom: 15
  },
  menu_image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  vehicle_text: {
    backgroundColor: 'transparent',
    color: '#f3f3f3',
    fontSize: 18,
    paddingTop: 15
  },
  slider: {
    flex: 1,
    borderColor: '#e09579',
    borderWidth: 1
  },
  slide: {
    marginLeft: 10,
    marginRight: 10
  },
  text_slider: {
    backgroundColor: 'transparent',
    color: '#f3f3f3',
    marginLeft: 15
  },
  view_slide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  slide_text: {
    backgroundColor: 'transparent',
    color: '#f3f3f3',
    fontSize: 20
  },
  type: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderColor: '#e09579',
    borderWidth: 1,
    paddingVertical: 20
  },
    type1: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderColor: '#e09579',
        borderWidth: 1,
        paddingVertical: 13
    },
  slide_text1: {
    backgroundColor: 'transparent',
    color: '#f3f3f3',
    fontSize: 20

  },
slide_text11: {
    
    backgroundColor: 'transparent',
    color: '#f3f3f3',
    fontSize: 15,
    alignSelf:'flex-end'

  },
  slide_text2: {

    backgroundColor: '#ef8579',
    alignSelf: 'center',
    color: '#f3f3f3',
    fontSize: 20

  }

})
