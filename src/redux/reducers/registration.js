import { SET_REGISTRATION_NAME, SET_REGISTRATION_PASSWORD } from '../actions/registration';

const initialState = {
  name: 'sign up',
  password: 'sign up password',
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTRATION_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case SET_REGISTRATION_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    default:
      return state;
  }
};

export default registrationReducer;
