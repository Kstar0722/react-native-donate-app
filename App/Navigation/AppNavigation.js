import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/Registration/Screens/LaunchScreen'
// import MainScreen from './containers/MessageScreen'
// import SignupScreen from './containers/SignupScreen'
// import OnboardingScreen from './containers/OnboardingScreen'
// import BusinessScreen from './containers/BusinessScreen'
// import SideMenu from './containers/SideMenu'
// import FindDonation from './containers/FindDonation'
// import SelectedItems from './containers/SelectedItems'
// import OperationInformationScreen from './containers/OperationInformationScreen'
// import AddItemsModal from './containers/AddItemsModal'

import styles from './Styles/NavigationStyles'

const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  
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

