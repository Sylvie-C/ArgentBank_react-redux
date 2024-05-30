

// Function to fetch Token from requested object { email : "" , password: "" } as parameter
export const fetchToken = async (bodyRequest) => {
  try {
		const response = await fetch (
			`${process.env.REACT_APP_BACKEND_URL}api/v1/user/login`
			,
			{ 	
        method: 'POST', 
        headers: { 'Content-Type' : 'application/json' } ,
				body: bodyRequest , 
      }
		) ;

		if (response.status !== 200) {
      alert("Wrong email or password. Please try again") ; 
			throw new Error (`fetch POST credentials failed`) ; 
		}else{ 
			const responseObj = response.json() ; 
			return responseObj ;
		}
	}
	catch (error) { 
    console.error (error) ; 
  } 
} 

// Function to fetch user data from token as parameter
export const fetchUser = async (token) => {
	try {
		const response = await fetch (
			`${process.env.REACT_APP_BACKEND_URL}api/v1/user/profile` 
			, 
			{ 	
        method: "POST" , 
        headers: { Authorization: `Bearer ${token}`, } , 
      }
		); 
		if (response.status !== 200){
			throw new Error (`fetch POST token failed`) ; 
		}else{ 
			const userData = response.json() ; 
			return userData ;
		}
	}catch (error) { console.error (error) ; } 
} 


