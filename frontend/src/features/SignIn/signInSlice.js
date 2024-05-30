import { createSlice , createAsyncThunk } from "@reduxjs/toolkit" ; 
import { fetchToken , fetchUser } from "./signInAPI" ; 

const initialState = { token: "" , user: {} , username: "" , rememberme: false } ;

export const signinSlice = createSlice ({
  name: "signin" , 
  initialState, 
  reducers : {   
    resetToken: (state) => { state.token = null } , 
    setRememberme: (state) => { state.rememberme = true } , 
    unsetRememberme: (state) => { state.rememberme = false } , 
  }
  ,
  extraReducers: (builder) => {
    builder
    .addCase (
      fetchUserAndToken.fulfilled, 
      (state , action) => {
        state.token = action.payload.token; 
        state.user = action.payload.userData ; 
        state.username = action.payload.userData.userName; 
      }
    )
  }
}) ;

// async thunk to fetch user and token from DB
export const fetchUserAndToken = createAsyncThunk (
  "signin/fetchUserAndToken" , 
  async (dataIn) => {
    const response = await fetchToken(dataIn) ;
    const token = response.body.token ; 

    const userResponse = await fetchUser(token) ; 
    const userData = userResponse.body ;

    return { token , userData } ; 
  }
) ; 

export const { resetToken , setRememberme , unsetRememberme } = signinSlice.actions ; 

export default signinSlice.reducer ; 
