import { createSlice } from "@reduxjs/toolkit" ; 

const initialState = { editmode: false , username: "" }

export const userReducer = createSlice (
  {
    name: "user" , 
    initialState, 
    reducers: {
      setEditmode: (state) => { state.editmode = true; } , 
      unsetEditmode: (state) => { state.editmode = false; } , 
      setUsername: (state , action) => { state.username = action.payload ; } , 
    }
    ,
  }
); 

export const { setEditmode , unsetEditmode , setUsername } = userReducer.actions ; 
export default userReducer.reducer; 
