import axios from 'axios'

import { returnErrors } from './messages'
import { USER_LOADING, USER_LOADED, AUTH_ERROR } from "./types";


// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ 
        type: USER_LOADING
    })

    // Get token from state
    const token = getState().auth.token
// Same way done in Postman
    // Headers
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add to header config
    if (token) {
        config.header['Authorization'] = `Token ${token}`
    }

    axios.get('/api/auth/user', config)
    .then(res => {
        dispatch ({
            type: USER_LOADED,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
        dispatch({
            type: AUTH_ERROR,
        })
    })
}