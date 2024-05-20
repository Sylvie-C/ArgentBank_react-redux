import { combineReducers , configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import signinReducer from "../features/SignIn/signInSlice"; 

let state = {  } ; 

export const store = configureStore(
  {
    preloadedState: state , 
    reducer: combineReducers ({
      // temporary tests reducers
      counter: counterReducer,

      // API final reducers
      signin : signinReducer, 
    }), 
});
