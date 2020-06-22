// 'rootReducer' is simply the meeting place for all your other reducers.
import { combineReducers } from 'redux'
import leads from './leads'

export default combineReducers({
    leads
})