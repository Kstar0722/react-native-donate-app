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
import Meteor from 'react-native-meteor'
import styles from './Styles/NavigationStyles'

const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  OnboardingScreen: { screen: OnboardingScreen },
  SignupScreen: { screen: SignupScreen },
  BusinessScreen: { screen: BusinessScreen },
  OperationInformationScreen: { screen: OperationInformationScreen },
  AddItemsModal: { screen: AddItemsModal },
  LoginScreen: { screen: LoginScreen },
  /*===============================*/
  FindDonation: { screen: FindDonation },
  DonationView: { screen: DonationView },
  CreateListing: {screen: CreateListing},
}, {
    initialRouteName: Meteor.userId() !== null ? 'FindDonation' : 'CreateListing',
    headerStyle: styles.header
  })
export default PrimaryNav

