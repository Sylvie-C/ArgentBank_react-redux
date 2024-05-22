import { createSlice , createAsyncThunk } from "@reduxjs/toolkit" ; 
import { fetchToken , fetchUser } from "./signInAPI" ; 

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

const initialState = { token: "" , username: "" };

export const signinSlice = createSlice ({
  name: "signin" , 
  initialState, 
  reducers : {  
    resetToken: (state) => { 
      state.token = null 
    } , 
  }
  ,
  extraReducers: (builder) => {
    builder.addCase (
      fetchUserAndToken.fulfilled, 
      (state , action) => {
        state.token = action.payload.token; 
        state.username = action.payload.userData.userName; 
      }
    )
  }
}) ;

export const { resetToken } = signinSlice.actions ; 

export default signinSlice.reducer ; 


