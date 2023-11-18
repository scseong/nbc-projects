import { createStore } from 'redux';
import { combineReducers } from 'redux';
import letter from './../modules/Letters';
import member from './../modules/Member';

const rootReducer = combineReducers({ letter, member });
const store = createStore(rootReducer);

export default store;
