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
import DonationView from './containers/DonationView'
import ProfileScreen from './containers/ProfileScreen'
import EmptyDonation from './containers/EmptyDonation'
import LoginScreen from './containers/LoginScreen'
import DonationDetail from './containers/DonationDetail'
import DonationList from './containers/DonationList'
import MessageScreen from './containers/MessageScreen'
import ReservedDonationDetail from './containers/ReservedDonationDetail'
import CreateListing from './containers/CreateListing'
import completedDonationScreen  from './containers/completedDonationScreen'

import ViewListings from './containers/ViewListings'
import CircularMenuTest from './containers/CircularMenuTest'

import CompleteDonationDetails from './containers/CompleteDonation/CompleteDonationDetails'
import CompleteDonationRepeat from './containers/CompleteDonation/CompleteDonationRepeat'
import CompleteDonationCustom from './containers/CompleteDonation/CompleteDonationCustom'

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
  DonationList: { screen: DonationList},
  ProfileScreen: {screen: ProfileScreen},
  ReservedDonationDetail: {screen: ReservedDonationDetail},
  completedDonationScreen: { screen: completedDonationScreen},
  CreateListing: {screen:CreateListing},

  DonationList: {screen: DonationList},

  ViewListings: {screen: ViewListings},
  CircularMenuTest: {screen: CircularMenuTest},

  DonationDetail: {screen: DonationDetail},

  CompleteDonationDetails: {screen: CompleteDonationDetails},
  CompleteDonationRepeat: {screen: CompleteDonationRepeat},
  CompleteDonationCustom: {screen: CompleteDonationCustom},
  
}, {
    initialRouteName: 'CompleteDonationDetails',
    heaerStyle: styles.header
  })
export default PrimaryNav
