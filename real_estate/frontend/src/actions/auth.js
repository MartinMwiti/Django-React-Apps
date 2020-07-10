import axios from 'axios'
import { setAlert } from './alert'
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types'


export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({email, password});

    try {
        const res = await axios.post('http://localhost:8000/api/token/', body, config); // get access token then pass body+config

        dispatch({
            type: LOGIN_SUCCESS,
            dispatch: res.data
        });

        dispatch(setAlert('Authenticated Successfully', 'success'))
    } catch(err){
        dispatch({
            type: LOGIN_FAIL
        })
        dispatch(setAlert("Error Authenticating", "error"));
    }
}


export const signup = ({ name, email, password, password2 }) => async dispatch =>{
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ name, email, password, password2 });

    try {
      const res = await axios.post(
        "http://localhost:8000/api/accounts/signup/",
        body,
        config
      ); // get access token then pass body+config

      dispatch({
        type: SIGNUP_SUCCESS,
        dispatch: res.data,
      });

      dispatch(login(email, password)); // after signing up, call the login func to sign you in.
    } catch (err) {
      dispatch({
        type: SIGNUP_FAIL,
      });
      dispatch(setAlert("Error Authenticating", "error"));
    }
}


export const logout = () => dispatch => {
    dispatch(setAlert("logout successful.", 'success'))
    dispatch({
        type: LOGOUT
    })
}