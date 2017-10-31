import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
// App directory AppNavigation
import AppNavigation from '../Navigation/AppNavigation'
// MyApp directory AppNavigation
//import AppNavigation from '../../MyApp/AppNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <AppNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
