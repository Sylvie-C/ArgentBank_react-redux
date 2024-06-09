import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "../components/Header/Header" ; 
import Home from "../components/Home/Home" ; 
import SignIn from '../features/SignIn/SignIn';
import User from "../userconnected/User/User" ; 
import Transactions from "../userconnected/components/Transactions/Transactions" ; 
import Footer from "../components/Footer/Footer" ; 
import NotFound from '../components/NotFound/NotFound';

import PrivateRoute from '../components/PrivateRoute';

function App() {
/*   window.localStorage.removeItem("username") ; 
  window.localStorage.removeItem("name") ; 
  window.localStorage.removeItem("surname") ;  */

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          {/* Public */}
          <Route path="/" element={ <Home/> } />
          <Route path="/signin" element= { <SignIn/> } />
          <Route path="/notfound" element={ <NotFound/> } />
          <Route path="*" element={<NotFound/>} />

          {/* Private */}
          <Route path="/user" element={ 
            <PrivateRoute>
              <User/>
            </PrivateRoute> 
          }/>

          <Route path="/transactions/:accountId" element={ 
            <PrivateRoute>
              <Transactions/>
            </PrivateRoute> 
          }/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
