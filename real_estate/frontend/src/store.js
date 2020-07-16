import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers'


const initialState = {};

const middleWare = [thunk]


const store = createStore(
    rootReducer, //allow created reducers to interact with the store
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare)) 
)
export default store

//NB: 'composeWithDevTools' is helpful in development stage but not in production, thus can be removed in prod stage