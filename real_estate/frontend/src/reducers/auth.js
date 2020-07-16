import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../actions/types'

// state to be updated by the reducer func below
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false
}

// action argument being passed comes from the store
export default function(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
      case LOGIN_SUCCESS:
        localStorage.setItem("token", payload.access);
        return {
          ...state, //take whatever is in the state and append token, isAuthenticated, loading from the action.payload
          token: payload.access,
          isAuthenticated: true,
          loading: false,
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          isAuthenticated: false,
          loading: true,
        };
      case SIGNUP_FAIL:
      case LOGIN_FAIL:
      case LOGOUT:
        localStorage.removeItem("token");
        return {
          ...state,
          isAuthenticated: false,
          loading: false,
        };
      default:
        return state; // switch statement has a default, that returns the state of our application if we do not trigger any of the case statements inside our switch.
    }
}