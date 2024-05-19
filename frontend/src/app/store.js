import { combineReducers , configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from "../features/featureTest/featuretestSlice"; 

let state = {  } ; 

export const store = configureStore(
  {
    preloadedState: state , 
    reducer: combineReducers ({
      counter: counterReducer,
      user: userReducer,
    }), 
});
