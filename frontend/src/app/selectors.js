
export const getToken = (state) => state.signin.token ; 
export const getUsername = (state) => state.signin.username ; 

// temporary selectors for tests
export const selectCount = (state) => state.counter.value;