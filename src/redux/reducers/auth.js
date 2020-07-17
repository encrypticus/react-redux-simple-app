import { SET_AUTH_NAME, SET_AUTH_PASSWORD } from '../actions/auth';

const initialState = {
  name: 'hello',
  password: 'world',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case SET_AUTH_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
