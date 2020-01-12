/*
 * @format
 * @flow
 */

import { createStore } from 'redux';

import rootReducer from './reducers'; // the value from combineReducers


const store = createStore(rootReducer);


export default store;
