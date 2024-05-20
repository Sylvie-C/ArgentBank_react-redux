import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "../components/Header/Header" ; 
import Home from "../components/Home/Home" ; 
import SignIn from '../features/SignIn/SignIn';
import User from "../features/User/User" ; 
import Footer from "../components/Footer/Footer" ; 
import NotFound from '../components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/signin" element= { <SignIn/> } />
          <Route path="/user" element={ <User/> } />
          <Route path="/notfound" element={ <NotFound/> } />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
