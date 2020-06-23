import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "../actions/types";

const initialState = {
    leads: []
}

export default function(state=initialState, action){
    switch (action.type) {
      case ADD_LEAD:
        return {
          ...state,
          leads: [...state.leads, action.payload], // take all leads already existing in the initialState and add the dispatched payload.
        };

      case GET_LEADS:
        return {
          ...state,
          leads: action.payload,
        };

      case DELETE_LEAD:
        return {
          ...state,
          leads: state.leads.filter((lead) => lead.id !== action.payload),
        };

      default:
        return state;
    }
}