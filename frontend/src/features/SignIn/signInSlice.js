import { createSlice , createAsyncThunk } from "@reduxjs/toolkit" ; 
import { fetchToken , fetchUser } from "./SignInAPI" ; 

// async thunk to fetch user and token from DB
export const fetchUserAndToken = createAsyncThunk (
  "signin/fetchUserAndToken" , 
  async (dataIn) => {
    const tokenResponse = await fetchToken(dataIn)
    const token = tokenResponse.body.token ; 

    const userResponse = await fetchUser(token) ; 
    const userData = userResponse.body ;

    return { token , userData } ; 
  }
) ; 

// Reducers
const initialState = { token: "" , username: "" };

export const signinSlice = createSlice ({
  name: "signin" , 
  initialState, 
  reducers : {  // basic reducers here
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

export default signinSlice.reducer ; 


