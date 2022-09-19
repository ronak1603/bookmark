
import {createStore,applyMiddleware} from 'redux';
// import { configureStore } from '@reduxjs/toolkit'
import {logger} from 'redux-logger';

import {profileReducer} from './reducer/index';
import profileSaga from './saga';

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({ reducer: profileReducer , middleware : (applyMiddleware) => applyMiddleware(logger, sagaMiddleware)})
const store = createStore(profileReducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(profileSaga);

export default store;

