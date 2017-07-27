import { StackNavigator } from 'react-navigation'
import LaunchScreen from './containers/LaunchScreen';
import MainScreen from './containers/MainScreen';
import styles from './Styles/NavigationStyles';

const PrimaryNav = StackNavigator({
    LaunchScreen: { screen: LaunchScreen },
    MainScreen: { screen: MainScreen}
},{
    
    initialRouteName: 'MainScreen',
    heaerStyle: styles.header
})
export default PrimaryNav