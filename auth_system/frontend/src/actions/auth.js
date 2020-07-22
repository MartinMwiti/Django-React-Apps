import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
} from "./types";


export const load_user = () => async (dispatch) => {};

// LOGIN
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // Turn to JSON format to be passed in my API
    const body = JSON.stringify({email, password})

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config);

        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data // which will be the access and refresh token
        });
    } catch (err) {
        
    }
}
