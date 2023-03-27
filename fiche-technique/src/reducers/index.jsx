import { combineReducers } from 'redux';
import ficheReducer from './ficheReducer';

export default combineReducers({
    myFiche: ficheReducer
})