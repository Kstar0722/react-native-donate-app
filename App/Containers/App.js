import AppConfig from '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import Meteor from 'react-native-meteor'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'

Meteor.connect(AppConfig.METEOR_URL)
// create our store
const store = createStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default App
