import { combineReducers } from 'redux';
import countries from './countriesReducer';

const rootReducer = combineReducers({
  countries
});

export default rootReducer;
