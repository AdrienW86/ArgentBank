import {createStore, combineReducers, applyMiddleware } from 'redux'
import CounterReducer from './Reducers/CounterReducer';
import AddCartReducer from './Reducers/AddCartReducer';
import dataImgReducer from './Reducers/DataImgReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  CounterReducer,
  AddCartReducer,
  dataImgReducer
})



const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;