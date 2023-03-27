import axios from 'axios';


export const getFiches = () => async dispatch => {
 
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  
    dispatch({
            type: 'GET_FICHES',
            payload: res.data
          });
  };
  