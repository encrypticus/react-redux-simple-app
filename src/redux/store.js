import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import { watchLoadData } from './saga';

const saga = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(saga));
saga.run(watchLoadData);

export default store;
