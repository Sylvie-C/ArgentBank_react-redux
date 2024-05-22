import "./Header.css" ; 

import { NavLink } from "react-router-dom" ; 
import { useSelector, useDispatch } from "react-redux" ; 
import { getToken } from "../../app/selectors" ; 
import { resetToken } from "../../features/SignIn/signInSlice" ; 

function Header () {
  const dispatch = useDispatch() ; 

  const token = useSelector (getToken) ;

  const handleClick = () => {  
    dispatch (resetToken()) ; 
  }

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src= {require("../../img/optimized/argentBankLogo.webp")}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <NavLink to={token ? "/" : "/signin"} className="main-nav-item" onClick={ handleClick }>
        <i className="fa fa-user-circle"></i>
        {token ? "Sign out" : "Sign in"}
      </NavLink>
    </nav>
  )
}
export default Header; 