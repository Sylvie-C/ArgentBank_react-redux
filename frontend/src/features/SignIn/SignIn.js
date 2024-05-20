
import { useState , useEffect } from "react"; 
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"; 
import "./SignIn.css" ; 
import { fetchUserAndToken } from './signInSlice';

// Temporary, for tests
import { useSelector } from "react-redux" ; 
import { getToken , getUsername } from "../../app/selectors" ; 


function SignIn () {

  // on submit, set local State to "true" and Store token + user data returned from DataBase (redux global API store). 
  const [ submit , setSubmit ] = useState (false); 
  const dispatch = useDispatch() ; 

  const formSubmit = async (event) => {

    event.preventDefault() ; 
    const email = event.target.email.value;
    const pwd = event.target.password.value;

    const dataInput = { email: email , password: pwd }; 
    const dataIn = JSON.stringify(dataInput) ; 

    dispatch ( fetchUserAndToken(dataIn) ) ; 
    setSubmit (true) ; 
  }

  // temporary code : check Storage
  const usernameStored = useSelector(getUsername) ; 
  console.log ("username from Store ? : " , usernameStored) ; 

  // on submit, if a token is stored (meaning authentication ok), navigate to "/user" page, otherwise to "/notfound"
  const tokenStored = useSelector (getToken) ; 
  const navigate = useNavigate() ; 

  useEffect(() => {
    if (tokenStored) {
      navigate('/user');
    } else {
      if (submit) {
        navigate("/notfound") ; 
      }
    }
  }, [tokenStored]);
  

  return (
    <main className="sign-in-container">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={ (e) => formSubmit(e) }>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email"/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  )
}

export default SignIn ; 