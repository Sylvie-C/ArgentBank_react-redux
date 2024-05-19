import { createSlice } from "@reduxjs/toolkit" ; 

const initialState = { username: "" , }

export const userSlice = createSlice ({
    name: "user" , 
    initialState, 
    reducers: {
      setUsername: (state) => {state.username = "Tony"} 
    }
  }
) ; 

export const { setUsername } = userSlice.actions ; 

export default userSlice.reducer ; 