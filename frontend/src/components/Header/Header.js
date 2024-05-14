import "./Header.css" ; 
import { NavLink } from "react-router-dom" ; 

function Header () {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src= {require("../../img/argentBankLogo.png")}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <NavLink to="/signin" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </NavLink>
    </nav>
  )
}
export default Header; 