import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_DATA, setUser } from './actions/user';

function fetchData() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json());
}

function* workerLoadData() {
  const data = yield call(fetchData);

  yield put(setUser(data));
}

export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, workerLoadData);
}
