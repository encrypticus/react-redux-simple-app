export const SET_USER = 'SET_USER';
export const LOAD_DATA = 'LOAD_DATA';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const fetchUserData = () => ({
  type: LOAD_DATA,
});
