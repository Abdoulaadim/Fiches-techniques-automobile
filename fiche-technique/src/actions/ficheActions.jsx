import axios from 'axios';
import { GET_FICHES } from './types';


export const getFiches = () => async dispatch => {
 
    const res = await axios.get('http://localhost:3000/');
  
    dispatch({
            type: GET_FICHES,
            payload: res.data
          });
  };
  