
export const getToken = (state) => state.signin.token ; 
export const getUsername = (state) => state.signin.username ; 

// template counter selector
export const selectCount = (state) => state.counter.value;