import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';

import combineReducers from './reducer/index';

import createSagaMiddleware from "redux-saga";
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({ reducer: profileReducer , middleware : (applyMiddleware) => applyMiddleware(logger, sagaMiddleware)})
const store = createStore(combineReducers, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
