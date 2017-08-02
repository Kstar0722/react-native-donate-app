import { StackNavigator } from 'react-navigation'
import LaunchScreen from './containers/LaunchScreen'
import MainScreen from './containers/MainScreen'
import SplashScreen from './containers/SplashScreen'
import SignupScreen from './containers/SignupScreen'
import BusinessScreen from './containers/BusinessScreen'
import SideMenu from './containers/SideMenu'

import styles from './Styles/NavigationStyles'

const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  MainScreen: { screen: MainScreen },
  SplashScreen: { screen: SplashScreen },
  SignupScreen: { screen: SignupScreen },
  BusinessScreen: {screen: BusinessScreen},
    SideMenu: {screen: SideMenu}
}, {

  initialRouteName: 'SplashScreen',
  heaerStyle: styles.header
})
export default PrimaryNav
