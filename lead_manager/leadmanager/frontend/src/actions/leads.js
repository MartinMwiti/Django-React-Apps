import axios from "axios";

import { createMessage } from  './messages'

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from "./types";


// ADD LEAD
export const addLead = (lead) => (dispatch) => {
  axios
    .post("/api/leads/", lead) // since i'm in the same server. no need to add the prefix 'localhost:8000/'
    .then(res => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors, // bundled
      });
    });
};

// GET LEADS
export const getLeads = () => (dispatch) => {
  axios
    .get("/api/leads/") // since i'm in the same server. no need to add the prefix 'localhost:8000/'
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    });
  // .catch((err = console.log(err.response.data)));
};

// DELETE LEAD
export const deleteLead = (id) => (dispatch) => {
  axios.delete(`/api/leads/${id}/`).then((res) => {
    dispatch(createMessage({ deleteLead: 'Lead Deleted'}) )
    dispatch({
      type: DELETE_LEAD,
      payload: id,
    });
  });
  // .catch((err) => console.log(err.response.data));
};
