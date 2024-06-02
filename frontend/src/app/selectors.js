
export const getToken = (state) => state.signin.token ; 
export const getUsername = (state) => state.signin.username ; 

export const getUser = (state) => state.signin.user ; 
export const getRememberme = (state) => state.signin.rememberme ; 

export const getEditmode = (state) => state.user.editmode ; 

// template counter selector
export const selectCount = (state) => state.counter.value;