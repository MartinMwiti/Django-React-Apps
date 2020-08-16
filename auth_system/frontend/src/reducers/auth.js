import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  LOGOUT,
} from "../actions/types";


const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),

  isAuthenticated: null,
  user: null
};


export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
      case AUTHENTICATED_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
        };

      case AUTHENTICATED_FAIL:
        return {
          ...state,
          isAuthenticated: false,
        };

      case LOGIN_SUCCESS:
        localStorage.setItem("access", payload.access);
        return {
          // update state
          ...state,
          isAuthenticated: true,
          access: payload.access,
          refresh: payload.refresh,
        };

      case LOGIN_FAIL:
      case SIGNUP_FAIL:
      case LOGOUT:
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        return {
          // update state
          ...state,
          isAuthenticated: false,
          access: null,
          refresh: null,
          user: null,
        };

      case SIGNUP_SUCCESS:
        return {
          ...state,
          isAuthenticated: false,
        };

      case USER_LOADED_SUCCESS:
        return {
          // update state
          ...state,
          user: payload,
        };

      case USER_LOADED_FAIL:
        return {
          // update state
          ...state,
          user: null,
        };

      case PASSWORD_RESET_SUCCESS:
      case PASSWORD_RESET_FAIL:
      case PASSWORD_RESET_CONFIRM_SUCCESS:
      case PASSWORD_RESET_CONFIRM_FAIL:
      case ACTIVATION_SUCCESS:
      case ACTIVATION_FAIL:
        return {
          ...state,
        };

      default:
        return state;
    }
}