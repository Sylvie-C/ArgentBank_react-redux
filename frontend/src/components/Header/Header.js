import { NavLink } from "react-router-dom" ; 
import { useSelector, useDispatch } from "react-redux" ;

import "./Header.css" ;  
import { getToken , getEditmode } from "../../app/selectors" ; 
import { resetToken } from "../../features/SignIn/signInSlice" ; 

import { setEditmode , unsetEditmode } from "../../userconnected/User/userSlice";  


function Header () {
  const username = window.localStorage.getItem("username") ; 
  const token = useSelector(getToken) ;
  const editMode = useSelector(getEditmode) ; 

  const dispatch = useDispatch() ; 

  // -------  EDIT MODE NAVBAR FUNCTIONS  ------

  // onclick, display user settings component
  const userSettings = () => {
    dispatch (setEditmode()) ; 
  }

  // if global state has token or editmode===true, reset all.
  const signOut = () => { 
    if (token) {
      dispatch( resetToken() ) ; 
    }
    if (editMode) {
      dispatch( unsetEditmode() ) ; 
    }
  }


  return (
    editMode ? 
    <nav className="editmode-nav">
      <NavLink to="/" className="editmode-nav-logo" onClick={ () => signOut() } >
        <img src={require("../../userconnected/img/connected_mode_01.png")} alt="" />
        <h1>Argent Bank</h1>
      </NavLink>
      <div className="editmode-nav-usertools">
        <p>{username}</p>
        <img onClick={ () => userSettings() } className="editmode-link" src={require("../../userconnected/img/user_01.png")} alt="user settings" />
        <img /* onClick={ () => accountSettings() } */ className="editmode-link" src={require("../../userconnected/img/settings_01.png")} alt="account settings" />
        <img onClick={ () => signOut() } className="editmode-link" src={require("../../userconnected/img/logout_01.png")} alt="logout" />
      </div>
    </nav>
    : 
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src= {require("../../img/optimized/argentBankLogo.webp")}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <NavLink to={token ? "/" : "/signin"} className="main-nav-item" onClick={ signOut }>
        <i className="fa fa-user-circle"></i>
        {token ? "Sign out" : "Sign in"}
      </NavLink>
    </nav>
  )
}
export default Header; 