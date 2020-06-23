// 'rootReducer' is simply the meeting place for all your other reducers.
import { combineReducers } from 'redux'
import leads from './leads'
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
    leads,
    errors,
    messages

})