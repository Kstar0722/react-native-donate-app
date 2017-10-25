import { combineReducers } from 'redux'
import configureStore from './CreateStore'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    github: require('./GithubRedux').reducer,
    search: require('./SearchRedux').reducer
  })

  return configureStore(rootReducer)
}
