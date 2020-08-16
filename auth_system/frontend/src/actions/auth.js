import axios from "axios";
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
  LOGOUT,
} from "./types";


// Check if a user is Authenticated BY verifying if there is a correct token in the local storage
//  Helps keep you logged in after refresh
export const checkAuthenticated = () => async (dispatch) => {
  if (localStorage.getItem('access')) {
    const config = {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        };

        const body = JSON.stringify({ token:localStorage.getItem('access') })
        try {
          const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)
          if (res.data.code !== 'token_not_valid'){
            dispatch({
              type: AUTHENTICATED_SUCCESS,
            });
          }
        } catch (err) {
          dispatch({
            type: AUTHENTICATED_FAIL,
          });
        }
  } else {
    dispatch({
      type: AUTHENTICATED_FAIL
    });
  }
}


// LOAD USER - Retrieve details of the Authenticated user
// Helps keep you logged in after refresh
export const load_user = () => async (dispatch) => {
    if (localStorage.getItem('access')) {
        const config = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${localStorage.getItem("access")}`,
            "Accept": "application/json"
          },
        }; 
        try {
              const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/auth/users/me/`,
                config
              ); // Use this endpoint to retrieve(get request)/update/delete(delete request) the authenticated user.

              dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data, // Returns {'id', 'email', 'name'} as specified in the serializer in the backend.
              });
            } catch (err) {
          dispatch({
            type: USER_LOADED_FAIL,
          });
        }
    } else { // if you don't have access token
        dispatch({
          type: USER_LOADED_FAIL,
        });
    }
};



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
        // load user after login
        dispatch(load_user())

    } catch (err) {
        dispatch({
          type: LOGIN_FAIL,
        });
    }
}


// PASSWORD RESET
export const reset_password = (email) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({email})

  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/reset_password/`,
      body,
      config
    );

    dispatch ({
      type: PASSWORD_RESET_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: PASSWORD_RESET_FAIL,
    });
  }
}

// password reset confirm
export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ uid, token, new_password, re_new_password });

  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`,
      body,
      config
    );

    dispatch({
      type: PASSWORD_RESET_CONFIRM_SUCCESS
    });
  } catch (error) {
    dispatch ({
      type: PASSWORD_RESET_CONFIRM_FAIL
    })
  }
}



// LOGOUT
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
