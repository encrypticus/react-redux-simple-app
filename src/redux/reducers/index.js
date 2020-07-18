import { combineReducers } from 'redux';
import authReducer from './auth';
import registrationReducer from './registration';
import userReducer from './user';

export default combineReducers({
  authReducer,
  registrationReducer,
  userReducer,
});
