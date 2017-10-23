import React, { Component } from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Text

} from 'react-native'
import styles from '../Styles/SignupScreenStyles'
import { Images } from '../DevTheme'
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default class BusinessScreen extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            description: '',
            switchValue: false,
            weekday: [false, false, false, false, false, false, false]
        }
        this.toggleSwitch = this.toggleSwitch.bind(this)
        this.onWeekDayPress = this.onWeekDayPress.bind(this)
    }
    static navigationOptions = {
        title: 'Business Information',
        headerStyle: {
            backgroundColor: '#dd8d6c'
        },
        headerTintColor: 'white'
    }
    toggleSwitch(val) {
        this.setState({
            switchValue: val
        })
    }
    onWeekDayPress(val) {
        var tmp_weekday = this.state.weekday.slice()
        tmp_weekday[val] = !tmp_weekday[val]
        this.setState({ weekday: tmp_weekday })
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Image source={Images.signbg} style={styles.container} >

                    <TextInput placeholder='BUSINESS NAME'
                        placeholderTextColor='#f0b7ae' style={styles.text}
                        underlineColorAndroid='white'
                        onChangeText={(text) => this.setState({ name: text })}
                        value={this.state.name} />
                    <Image source={Images.underline} />
                    <TextInput placeholder='ADDRESS'
                        placeholderTextColor='#f0b7ae' style={styles.text}
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email} />
                    <Image source={Images.underline} />
                    <TextInput placeholder='PHONE'
                        placeholderTextColor='#f0b7ae' style={styles.text}
                        onChangeText={(text) => this.setState({ phone: text })}
                        value={this.state.phone} />
                    <Image source={Images.underline} />
                    <TextInput placeholder='EIN'
                        placeholderTextColor='#f0b7ae' style={styles.text}
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password} />
                    <Image source={Images.underline} />

                    <TextInput placeholder='BUSINESS DESCRIPTION'
                        placeholderTextColor='#f0b7ae' style={styles.multi_text}
                        onChangeText={(text) => this.setState({ description: text })}
                        value={this.state.description} multiline numberOfLines={5} />

                    <Text style={styles.label}>Operation Days:</Text>

                    <View style={styles.operation_view}>
                        <TouchableOpacity style={this.state.weekday[0] ? styles.operation_button_active : styles.operation_button}
                            onPress={() => this.onWeekDayPress(0)}>
                            <Text style={this.state.weekday[0] ? styles.operation_label_active : styles.operation_label}>SUN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.weekday[1] ? styles.operation_button_active : styles.operation_button}
                            onPress={() => this.onWeekDayPress(1)}>
                            <Text style={this.state.weekday[1] ? styles.operation_label_active : styles.operation_label}>MON</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.weekday[2] ? styles.operation_button_active : styles.operation_button}
                            onPress={() => this.onWeekDayPress(2)}>
                            <Text style={this.state.weekday[2] ? styles.operation_label_active : styles.operation_label}>TUE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.weekday[3] ? styles.operation_button_active : styles.operation_button}
                            onPress={() => this.onWeekDayPress(3)}>
                            <Text style={this.state.weekday[3] ? styles.operation_label_active : styles.operation_label}>WED</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.weekday[4] ? styles.operation_button_active : styles.operation_button}
                            onPress={() => this.onWeekDayPress(4)}>
                            <Text style={this.state.weekday[4] ? styles.operation_label_active : styles.operation_label}>THU</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.weekday[5] ? styles.operation_button_active : styles.operation_button}
                            onPress={() => this.onWeekDayPress(5)}>
                            <Text style={this.state.weekday[5] ? styles.operation_label_active : styles.operation_label}>FRI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.weekday[6] ? styles.operation_button_active : styles.operation_button}
                            onPress={() => this.onWeekDayPress(6)}>
                            <Text style={this.state.weekday[6] ? styles.operation_label_active : styles.operation_label}>SAT</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.label}>Operation Hours:</Text>

                    <View style={styles.operation_hours_view}>
                        
                    <Image source={Images.clockIcon} style = {styles.operation_image}/>

                    </View>

                    <TouchableOpacity style={styles.but} onPress={() => navigate('MainScreen')}>
                        <Text style={styles.but_continue}>CONTINUE</Text>
                    </TouchableOpacity>
                    <KeyboardSpacer />
                </Image>
            </View>
        );
    }


}