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
import Setting from '../Containers/Home/Screens/Setting'
import Bussiness from '../Containers/Home/Screens/Bussiness'
import Operation from '../Containers/Home/Screens/Operation'
import Meteor from 'react-native-meteor'
import styles from './Styles/NavigationStyles'

import CompletedDonationScreen from '../Containers/Home/Screens/completedDonationScreen'

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
  Description: {screen: Description},
  Setting:{screen:Setting},
  Bussiness:{screen:Bussiness},
  Operation:{screen:Operation},
  CompletedDonationScreen: { screen: CompletedDonationScreen },
}, {
//    initialRouteName: Meteor.userId() !== null ? 'FindDonation' : 'CreateListing',
    initialRouteName: 'LaunchScreen',
    headerStyle: styles.header
  })
export default PrimaryNav
