import { NavLink } from "react-router-dom" ; 
import { useSelector, useDispatch } from "react-redux" ;

import "./Header.css" ;  
import { getToken , getEditmode , getUser } from "../../app/selectors" ; 
import { resetToken } from "../../features/SignIn/signInSlice" ; 

import { unsetEditmode } from "../../userconnected/User/userSlice";  


function Header () {
  const username = window.localStorage.getItem("username") ; 
  const token = useSelector(getToken) ;
  const editMode = useSelector(getEditmode) ; 
  const userData = useSelector(getUser) ; 

  const dispatch = useDispatch() ; 

  // -------  EDIT MODE NAVBAR FUNCTIONS  ------

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
      <NavLink to="/" className="editmode-nav-logo" >
        <img src={require("../../userconnected/img/connected_mode.webp")} alt="" />
        <h1>Argent Bank</h1>
      </NavLink>
      <div className="editmode-nav-usertools">
        <p>{username}</p>

        <NavLink to="/user">
          <img className="editmode-link" src={require("../../userconnected/img/user.webp")} alt="user settings" />
        </NavLink>

        <img className="editmode-link" src={require("../../userconnected/img/settings.webp")} alt="account settings" />
        <img onClick={ () => signOut() } className="editmode-link" src={require("../../userconnected/img/logout.webp")} alt="logout" />
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

     <div>
        <i className="fa fa-user-circle"></i>
  
        { token && 
          <NavLink to="/user" className="main-nav-item" title="user space">
            { userData.firstName } { userData.lastName }
          </NavLink>
        }
  
        <NavLink to={ token ? "/" : "/signin" } onClick={ signOut } className="main-nav-item">
          {token ? "Sign out" : "Sign in"}
        </NavLink>
     </div>
    </nav>
  )
}
export default Header; 