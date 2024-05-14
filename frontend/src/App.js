import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header" ; 
import Home from "./components/Home/Home" ; 
import SignIn from './components/SignIn/SignIn';
import User from "./components/User/User" ; 
import Footer from "./components/Footer/Footer" ; 
import NotFound from './components/NotFound/NotFound';

// import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">


      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/signin" element= { <SignIn/> } />
          <Route path="/user" element={ <User/> } />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router>


{/*       <header className="App-header">
        <Counter />
      </header> */}


    </div>
  );
}

export default App;
