
export const usernameDbUpdate = async (token , username) => {
  try {
		const response = await fetch (
			`${process.env.REACT_APP_BACKEND_URL}api/v1/user/profile`
			,
			{ 	
        method: 'PUT', 
        headers: { 
          "Content-Type" : "application/json" , 
          Authorization: `Bearer ${token}` , 
        } , 
        body: JSON.stringify( { userName: username } )
      }
		) ;

		if (response.status !== 200) {
			throw new Error (`fetch PUT new username failed`) ; 
		}else{ 
			const responseObj = await response.json() ; 
			return responseObj ;
		}
	}
	catch (error) { 
    console.error (error) ; 
  } 
} 

