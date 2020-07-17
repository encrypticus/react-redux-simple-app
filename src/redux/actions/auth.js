export const SET_AUTH_NAME = 'SET_AUTH_NAME';
export const SET_AUTH_PASSWORD = 'SET_AUTH_PASSWORD';

export const setAuthName = (name) => ({
  type: SET_AUTH_NAME,
  payload: name,
});

export const setAuthPassword = (password) => ({
  type: SET_AUTH_PASSWORD,
  payload: password,
});
