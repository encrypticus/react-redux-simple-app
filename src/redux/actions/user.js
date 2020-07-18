export const SET_USER = 'SET_USER';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const fetchUserData = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => {
      dispatch(setUser(data));
    }).catch((error) => {
      throw new Error(`Что-то пошло не так - ${error.message}`);
    });
};
