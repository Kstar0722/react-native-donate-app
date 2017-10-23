import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/Registration/Screens/LaunchScreen'
import OnboardingScreen from '../Containers/Registration/Screens/OnboardingScreen'
import SignupScreen from '../Containers/Registration/Screens/SignupScreen'


import styles from './Styles/NavigationStyles'

const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  OnboardingScreen: { screen: OnboardingScreen },
  SignupScreen: { screen: SignupScreen },
  
  // LaunchScreen: { screen: LaunchScreen },
  // MainScreen: { screen: MainScreen },
  // SplashScreen: { screen: SplashScreen },
  // BusinessScreen: { screen: BusinessScreen },
  // SideMenu: { screen: SideMenu },
  // SelectedItems: { screen: SelectedItems },
  // OperationInformationScreen: { screen: OperationInformationScreen },
  // AddItemsModal: { screen: AddItemsModal },
  // OnboardingScreen: { screen: OnboardingScreen }
}, {

    initialRouteName: 'LaunchScreen',
    headerStyle: styles.header
  })
export default PrimaryNav

