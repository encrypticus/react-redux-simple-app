import { combineReducers } from 'redux';
import authReducer from './auth';
import registrationReducer from './registration';

export default combineReducers({
  authReducer,
  registrationReducer,
});
