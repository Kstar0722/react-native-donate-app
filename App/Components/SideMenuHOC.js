import React, { Component } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Modal,
    Text,
    StyleSheet,
    Easing,
    ScrollView
} from 'react-native'

import Menu, {
    MenuContext,
    MenuTrigger,
    MenuOptions,
    MenuOption,
    renderers
} from 'react-native-popup-menu';

import styles from './Styles/SideMenuStyles'
import { Images } from '../Themes'
import TapBar from './Tapbar'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'
import SideMenu from 'react-native-side-menu'
import SideBar from './SideMenu'
const { SlideInMenu } = renderers;

export default SideHOC = (WrappedComponent) => {
    return class SideHOC extends Component {
        constructor(props) {
            super(props)
            this.state = {
                isOpenSideMenu: false,
                segmentIndex: 0,
                popupFullScreenFlag: false,
            };
        }
        static navigationOptions = {
            header: null,
        }
        sideMenuToggle = (flag) => {
            this.setState({ isOpenSideMenu: flag });
        }
        render() {
            const { navigate } = this.props.navigation;
            const menu = <SideBar navigator={navigate} close={() => this.sideMenuToggle(false)} />;
            return (
                <View style={styles.mainView}>
                    <SideMenu menu={menu} isOpen={this.state.isOpenSideMenu}>
                        <WrappedComponent {...this.props} sideMenuToggle = {this.sideMenuToggle}/>
                    </SideMenu>
                </View>
            )

        }
    }
}