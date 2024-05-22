import { combineReducers , configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import signinReducer from "../features/SignIn/signInSlice"; 

let state = { } ; 

export const store = configureStore(
  {
    preloadedState: state , 
    reducer: combineReducers ({
      // counter template reducers
      counter: counterReducer,

      // API reducers
      signin : signinReducer, 
    }), 
});
