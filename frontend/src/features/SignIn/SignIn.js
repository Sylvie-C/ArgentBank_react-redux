
import { useDispatch , useSelector } from 'react-redux';
import { Navigate } from "react-router-dom"; 

import "./SignIn.css" ; 
import { fetchUserAndToken } from './signInSlice';
import { getToken } from "../../app/selectors" ; 


function SignIn () {
  const dispatch = useDispatch() ; 
  const tokenStored = useSelector (getToken) ; 

  // Form submit handling function
  const formSubmit = async (event) => {
    event.preventDefault() ; 
    const email = event.target.email.value;
    const pwd = event.target.password.value;
    const dataInput = { email: email , password: pwd }; 

    if (email==="" || pwd ==="" ) {
      alert ("Enter your email and password to connect to your account."); 
    }else{
      const dataIn = JSON.stringify(dataInput) ;
      dispatch ( fetchUserAndToken(dataIn) )      // user data and token in API Redux Store
    }
  }

  // if connected, redirect to user page
  if (tokenStored) { 
    return <Navigate to="/user"/> 
  } 

  return (
    <main className="sign-in-container">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={ (e) => formSubmit(e) }>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"/>
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