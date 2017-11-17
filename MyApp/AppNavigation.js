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
import CompleteDonationService from './containers/CompleteDonation/CompleteDonationService'
import CompleteDonationDelivery from './containers/CompleteDonation/CompleteDonationDelivery'
import DonationAssignDriver from './containers/CompleteDonation/DonationAssignDriver'
import DonationAssignBusiness from './containers/CompleteDonation/DonationAssignBusiness'

import GiveFoodListingDetails from './containers/GiveFoodListing/GiveFoodListingDetails'
import GiveFoodListingRepeat from './containers/GiveFoodListing/GiveFoodListingRepeat'
import GiveFoodListingCustom from './containers/GiveFoodListing/GiveFoodListingCustom'

import Signup from './containers/Signup/Signup'
import SignupHelp from './containers/Signup/SignupHelp'
import SignupHelpBusiness from './containers/Signup/SignupHelpBusiness'
import SignupHelpTeam from './containers/Signup/SignupHelpTeam'
import SignupHelpIndividual from './containers/Signup/SignupHelpIndividual'
import SignupBusiness from './containers/Signup/SignupBusiness'
import SignupBusinessAccountInfo from './containers/Signup/SignupBusinessAccountInfo'
import SignupBusinessOperationInfo from './containers/Signup/SignupBusinessOperationInfo'
//import SignupBusinessService from './containers/Signup/SignupBusinessService'
//import SignupBusinessHour from './containers/Signup/SignupBusinessHour'
import RescueDonationView from './containers/RescueDonationView'

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

  ViewListings: {screen: ViewListings},
  CircularMenuTest: {screen: CircularMenuTest},

  DonationDetail: {screen: DonationDetail},

  CompleteDonationDetails: {screen: CompleteDonationDetails},
  CompleteDonationRepeat: {screen: CompleteDonationRepeat},
  CompleteDonationCustom: {screen: CompleteDonationCustom},
  CompleteDonationService: {screen: CompleteDonationService},
  CompleteDonationDelivery: {screen: CompleteDonationDelivery},
  DonationAssignDriver: {screen: DonationAssignDriver},
  DonationAssignBusiness: {screen: DonationAssignBusiness},

  GiveFoodListingDetails: {screen: GiveFoodListingDetails},
  GiveFoodListingRepeat: {screen: GiveFoodListingRepeat},
  GiveFoodListingCustom: {screen: GiveFoodListingCustom},

  Signup: {screen: Signup, navigationOptions: { gesturesEnabled: false}},
  SignupHelp: {screen: SignupHelp, navigationOptions: { gesturesEnabled: false}},
  SignupHelpBusiness: {screen: SignupHelpBusiness, navigationOptions: { gesturesEnabled: false}},
  SignupHelpTeam: {screen: SignupHelpTeam, navigationOptions: { gesturesEnabled: false}},
  SignupHelpIndividual: {screen: SignupHelpIndividual, navigationOptions: { gesturesEnabled: false}},
  SignupBusiness: {screen: SignupBusiness},
  SignupBusinessAccountInfo: {screen: SignupBusinessAccountInfo},
  SignupBusinessOperationInfo: {screen: SignupBusinessOperationInfo},
  //SignupBusinessService: {screen: SignupBusinessService},
  //SignupBusinessHour: {screen: SignupBusinessHour},

  DonationView: {screen: DonationView},
  RescueDonationView: {screen: RescueDonationView},
  
}, {
    initialRouteName: 'RescueDonationView',
    heaerStyle: styles.header
  })
export default PrimaryNav
