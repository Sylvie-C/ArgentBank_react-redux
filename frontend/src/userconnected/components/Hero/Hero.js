
import { useDispatch , useSelector } from "react-redux"; 

import "./Hero.css" ; 
import { setEditmode , unsetEditmode , setUsername } from "../../User/userSlice";
import { getToken , getEditmode , getUser , getRememberme } from "../../../app/selectors";
import { usernameDbUpdate } from "../../User/userAPI" ; 


function Hero () {
  const token = useSelector(getToken) ; 
  const editMode = useSelector(getEditmode) ; 
  const userFirstname = useSelector(getUser).firstName ; 
  const userLastname = useSelector(getUser).lastName ; 
  const usernameStored = useSelector(getUser).userName ; 

  const rememberMe = useSelector(getRememberme) ; // current session "remember me" checkbox

  let username ; 
  // Current Session : if user checks "remember me", use username in Redux Store
  if ( !window.localStorage.getItem("username") ) {
    if (rememberMe) {
      username = usernameStored; 
    }else{
      username = "" ; 
    }
  }else {
    // Previous Session : if user has checked "remember me", use username in localStorage
    username = window.localStorage.getItem("username") ; 
  }

  const dispatch = useDispatch() ; 

  // onClick on "Edit name" button, display Edit user info form
  const editNameFn = () => { dispatch(setEditmode()) ; }

  // onClick "Cancel" button, out of edit mode (back to USER home page, connected mode)
  const cancelFn = () => { dispatch(unsetEditmode()) ; }

  // onSubmit username update form, update username in database + return to USER home page
  const formSubmit = async (event) => {
    event.preventDefault() ; 
    const newUsername = event.target.user_name.value ; 

    if (newUsername !== "") {
      const serverReply = await usernameDbUpdate( token , newUsername) ; 
      
      if (serverReply.status === 200) { 
        dispatch(setUsername(newUsername)) ; // update username in Redux Store

        // if "remember me" has been checked (= if username already in localStorage), update localStorage
        if (username !== "") { window.localStorage.setItem("username" , newUsername) ; }

        alert(`Your username has been updated successfully with "${newUsername}"`) ; 
        dispatch(unsetEditmode()) ; 
      }
    }
  }

  return (
    <div className="hero-container">
      {
        editMode 
        ? 
        <>
          <h1>Edit User Info</h1>
          <form onSubmit={ (e) => formSubmit(e) } >
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="user_name"/>
            </div>
            <div className="input-wrapper">
              <label htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" name="firstname" disabled placeholder={ userFirstname } />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastname">Lastname</label>
              <input type="text" id="lastname" name="lastname" disabled placeholder={ userLastname } />
            </div>
            <button type="submit" className="save-button">Save</button>
            <button type="button" className="cancel-button" onClick={ cancelFn } >Cancel</button>
          </form>
        </>
        : 
        <>
          <h1>Welcome back<br />{username}</h1>
          <button className="edit-button" onClick={ editNameFn } >Edit Name</button>
        </>
      }
    </div>
  )
}

export default Hero; 