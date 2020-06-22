import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'react-redux'

import rootReducer from './reducers' // This will look for 'index.js' inside 'reducers' folder


const initialState = {}

const middleware = [thunk]


const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;