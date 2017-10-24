import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate, persistStore } from 'redux-persist'
import Config from '../Config/DebugConfig'
import thunk from 'redux-thunk'

// creates the store
export default (rootReducer, rootSaga) => {
  const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    autoRehydrate()
  ))

  persistStore(store)

  return store
}
