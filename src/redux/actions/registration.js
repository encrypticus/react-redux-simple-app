export const SET_REGISTRATION_NAME = 'SET_REGISTRATION_NAME';
export const SET_REGISTRATION_PASSWORD = 'SET_REGISTRATION_PASSWORD';

export const setRegistrationName = (name) => ({
  type: SET_REGISTRATION_NAME,
  payload: name,
});

export const setRegistrationPassword = (password) => ({
  type: SET_REGISTRATION_PASSWORD,
  payload: password,
});
