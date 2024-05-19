import "./featuretest.css" ; 
import { useSelector, useDispatch } from 'react-redux';

import { increment } from "../counter/counterSlice" ; 
import { selectCount , getUsername } from "../../app/selectors" ; 
import { setUsername } from "./featuretestSlice" ; 

/* const dataInput = { email: "tony@stark.com" , password: "password123" } ;
const dataIn = JSON.stringify(dataInput); 

const fetchToken = async (bodyRequest) => {
    
  const serverCall = await fetch (
    `${process.env.REACT_APP_BACKEND_URL}api/v1`,
    {   
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' } ,
      body: bodyRequest
    }
  ) ;
  return serverCall ; 
} 

const token = await fetchToken(dataIn) ; 
console.log ("servercall ? : " , token) ; 

const data = require("../../db_simu.json") ; 
console.log (data) ;  */


function FeatureTest() { 
  const userName = useSelector (getUsername) ; 
  const count = useSelector (selectCount) ; 

  const dispatch = useDispatch() ; 

  console.log ("user.username ? : " , userName) ; 

  return (
    <div className="featureTest-content">
      <div className="separate"></div>


      <div className="textBox">{userName}</div>
      <button onClick={ () => dispatch( setUsername() ) }>BOUTON TEST</button>

      <div className="textBox">{count}</div>
      <button onClick={ () => dispatch( increment() ) }>BOUTON TEST</button>


      <div className="separate"></div>
    </div>
  );
};

export default FeatureTest;
