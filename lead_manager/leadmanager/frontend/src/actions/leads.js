import axios from 'axios'

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";


// ADD LEAD
export const addLead = (lead) => (dispatch) => {
  axios
    .post("/api/leads/", lead) // since i'm in the same server. no need to add the prefix 'localhost:8000/'
    .then((res) => {
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      }).catch((err = console.log(err)));
    });
};




// GET LEADS
export const getLeads = () => dispatch =>{
    axios.get('/api/leads/') // since i'm in the same server. no need to add the prefix 'localhost:8000/'
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })
            .catch(err=console.log(err))
        })
}


// DELETE LEAD
export const deleteLead = (id) => (dispatch) => {
  axios.delete(`/api/leads/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) => console.log(err))
};

