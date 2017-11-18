import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/Registration/Screens/LaunchScreen'
import OnboardingScreen from '../Containers/Registration/Screens/OnboardingScreen'
import SignupScreen from '../Containers/Registration/Screens/SignupScreen'
import BusinessScreen from '../Containers/Registration/Screens/BusinessScreen'
import OperationInformationScreen from '../Containers/Registration/Screens/OperationInformationScreen'
import AddItemsModal from '../Containers/Registration/Screens/AddItemsModal'
import LoginScreen from '../Containers/Registration/Screens/LoginScreen'
import FindDonation from '../Containers/Home/Screens/FindDonation'
import DonationView from '../Containers/Home/Screens/DonationView'
import CreateListing from '../Containers/Home/Screens/CreateListing'
import Description from '../Containers/Home/Screens/Description'
import MyProfile from '../Containers/Home/Screens/MyProfile'
import TeamScreen from '../Containers/Home/Screens/TeamScreen'
import AddMemberScreen from '../Containers/Home/Screens/AddMemberScreen'
import RescueProgress from '../Containers/Home/Screens/RescueProgress'
import ViewListings from '../Containers/Home/Screens/ViewListings'
import Meteor from 'react-native-meteor'
import styles from './Styles/NavigationStyles'

import CompletedDonationScreen from '../Containers/Home/Screens/completedDonationScreen'

import CompleteDonationDetails from '../Containers/CompleteDonation/CompleteDonationDetails'
import CompleteDonationRepeat from '../Containers/CompleteDonation/CompleteDonationRepeat'
import CompleteDonationCustom from '../Containers/CompleteDonation/CompleteDonationCustom'
import CompleteDonationService from '../Containers/CompleteDonation/CompleteDonationService'
import CompleteDonationDelivery from '../Containers/CompleteDonation/CompleteDonationDelivery'
import DonationAssignDriver from '../Containers/CompleteDonation/DonationAssignDriver'
import DonationAssignBusiness from '../Containers/CompleteDonation/DonationAssignBusiness'

import Signup from '../Containers/NewRegistration/Signup'
import SignupHelp from '../Containers/NewRegistration/SignupHelp'
import SignupHelpBusiness from '../Containers/NewRegistration/SignupHelpBusiness'
import SignupHelpTeam from '../Containers/NewRegistration/SignupHelpTeam'
import SignupHelpIndividual from '../Containers/NewRegistration/SignupHelpIndividual'
import SignupBusiness from '../Containers/NewRegistration/SignupBusiness'
import SignupGeneral from '../Containers/NewRegistration/SignupGeneral'
import SignupBusinessAccountInfo from '../Containers/NewRegistration/SignupBusinessAccountInfo'
import SignupBusinessWelcome from '../Containers/NewRegistration/SignupBusinessWelcome'
import SignupBusinessOperationInfo from '../Containers/NewRegistration/SignupBusinessOperationInfo'
//import SignupBusinessService from '../Containers/NewRegistration/SignupBusinessService'
//import SignupBusinessHour from '../Containers/NewRegistration/SignupBusinessHour'

import GiveFoodListingDetails from '../Containers/Home/Screens/GiveFoodListingDetails'

import RescueDonationView from '../Containers/Home/Screens/RescueDonationView'
import ProfileScreen from '../../MyApp/containers/ProfileScreen'

const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  OnboardingScreen: { screen: OnboardingScreen },
  SignupScreen: { screen: SignupScreen },
  BusinessScreen: { screen: BusinessScreen },
  OperationInformationScreen: { screen: OperationInformationScreen },
  AddItemsModal: { screen: AddItemsModal },
  LoginScreen: { screen: LoginScreen },
  /*===============================*/
  FindDonation: { screen: /*FindDonation*/ FindDonation, navigationOptions: { gesturesEnabled: true} },
  DonationView: { screen: DonationView },
  CreateListing: {screen: CreateListing},
  Description: {screen: Description},
  MyProfile:{screen:MyProfile},
  CompletedDonationScreen: { screen: CompletedDonationScreen },
  TeamScreen : {screen : TeamScreen},
  AddMemberScreen : {screen : AddMemberScreen},
  RescueProgress: {screen: RescueProgress},
  ViewListings: {screen: ViewListings, navigationOptions: { gesturesEnabled: true}},

  CompleteDonationDetails: {screen: CompleteDonationDetails},
  CompleteDonationRepeat: {screen: CompleteDonationRepeat},
  CompleteDonationCustom: {screen: CompleteDonationCustom},
  CompleteDonationService: {screen: CompleteDonationService},
  CompleteDonationDelivery: {screen: CompleteDonationDelivery},
  DonationAssignDriver: {screen: DonationAssignDriver},
  DonationAssignBusiness: {screen: DonationAssignBusiness},

  Signup: {screen: Signup, navigationOptions: { gesturesEnabled: true}},
  SignupHelp: {screen: SignupHelp, navigationOptions: { gesturesEnabled: false}},
  SignupHelpBusiness: {screen: SignupHelpBusiness, navigationOptions: { gesturesEnabled: true}},
  SignupHelpTeam: {screen: SignupHelpTeam, navigationOptions: { gesturesEnabled: true}},
  SignupHelpIndividual: {screen: SignupHelpIndividual, navigationOptions: { gesturesEnabled: true}},
  SignupBusiness: {screen: SignupBusiness},
  SignupGeneral: {screen: SignupGeneral},
  SignupBusinessAccountInfo: {screen: SignupBusinessAccountInfo},
  SignupBusinessWelcome: {screen: SignupBusinessWelcome, navigationOptions: { gesturesEnabled: false}},
  SignupBusinessOperationInfo: {screen: SignupBusinessOperationInfo, navigationOptions: { gesturesEnabled: false}},
  //SignupBusinessService: {screen: SignupBusinessService},
  //SignupBusinessHour: {screen: SignupBusinessHour},

  GiveFoodListingDetails: {screen: GiveFoodListingDetails},

  RescueDonationView: {screen: RescueDonationView},
  ProfileScreen: {screen: ProfileScreen},
}, {
//    initialRouteName: Meteor.userId() !== null ? 'FindDonation' : 'CreateListing',
    initialRouteName: 'LaunchScreen',
    headerStyle: styles.header
  })
export default PrimaryNav
