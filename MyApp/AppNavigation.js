import { StackNavigator } from 'react-navigation'
import LaunchScreen from './containers/LaunchScreen'
import MainScreen from './containers/MessageScreen'
import HomeScreen from './containers/HomeScreen'
import SignupScreen from './containers/SignupScreen'
import OnboardingScreen from './containers/OnboardingScreen'
import BusinessScreen from './containers/BusinessScreen'
import RescueProgress from './containers/RescueProgress'
import SideMenu from './containers/SideMenu'
import FindDonation from './containers/FindDonation'
import SelectedItems from './containers/SelectedItems'
import OperationInformationScreen from './containers/OperationInformationScreen'
import AddItemsModal from './containers/AddItemsModal'
import CreateListing from './containers/CreateListing'

import styles from './Styles/NavigationStyles'

const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  MainScreen: { screen: MainScreen },
  HomeScreen: { screen: HomeScreen },
  SignupScreen: { screen: SignupScreen },
  BusinessScreen: { screen: BusinessScreen },
  RescueProgress: {screen: RescueProgress},
  FindDonation: {screen: FindDonation},
  SideMenu: { screen: SideMenu },
  SelectedItems: { screen: SelectedItems },
  OperationInformationScreen: { screen: OperationInformationScreen },
  AddItemsModal: { screen: AddItemsModal },
  OnboardingScreen: { screen: OnboardingScreen },
  CreateListing: { screen: CreateListing }
}, {
    initialRouteName: 'CreateListing',
    heaerStyle: styles.header
  })
export default PrimaryNav
