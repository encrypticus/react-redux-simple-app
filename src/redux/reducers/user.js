import { SET_USER } from '../actions/user';

const initialState = {
  userId: 2,
  id: 2,
  title: 'what wrong nothing',
  completed: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...action.payload };

    default:
      return state;
  }
};

export default userReducer;
