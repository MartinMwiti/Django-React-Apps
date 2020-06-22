import axios from 'axios'

import { GET_LEADS } from './types'


// GET LEADS
export const getLeads = () => dispatch =>{
    axios.get('api/leads/') // since i'm in the same server. no need to add the prefix 'localhost:8000/'
}