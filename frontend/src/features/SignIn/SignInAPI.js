
// Function to fetch Token from requested object { email : "" , password: "" } as parameter
export const fetchToken = async (bodyRequest) => {
  try {
    const serverCall = await fetch (
      `${process.env.REACT_APP_BACKEND_URL}api/v1/user/login`,
      {   
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' } ,
        body: bodyRequest ,
      }
    ) ;

    if (!serverCall.ok) {
      throw new Error ("Error : Server connection failed. ") ; 
    }else{
      const token = serverCall.json() ; 
      return token ;
    }
  }
  catch (error) {
    console.error ("Error : Not found.") ; 
  } 
} 

// Function to fetch user data from token as parameter
export const fetchUser = async (token) => {

  try {
    const serverCall = await fetch (
      `${process.env.REACT_APP_BACKEND_URL}api/v1/user/profile` , 
      {
        method: "POST" , 
        headers: { Authorization: `Bearer ${token}`, } ,
      }
    ); 

    if (!serverCall.ok) {
      throw new Error ("Error : Could not fetch token to server.") ; 
    }else{
      const userData = serverCall.json() ; 
      return userData ;
    }
  }
  catch (error) {
    console.error ("Error : No server connection.") ; 
  } 
} 
