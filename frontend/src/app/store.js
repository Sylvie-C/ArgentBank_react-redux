import { combineReducers , configureStore } from '@reduxjs/toolkit';
import signinReducer from "../features/SignIn/signInSlice"; 
import userReducer from "../userconnected/User/userSlice"; 

let state = { } ; 

export const store = configureStore(
  {
    preloadedState: state , 
    reducer: combineReducers ({
      signin : signinReducer, 
      user: userReducer, 
      // account: accountReducer, 
    }), 
});
