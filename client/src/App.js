import React from 'react';
import {BrowserRouter as Router,Route, Swith, Link, BrowserRouter, Routes} from "react-router-dom";
import Home from './pages/home';
import Landing from './pages/landing_page';
import {Navbar, Header} from './containers';


import './App.css';

const App = () => (

  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {Landing}/>
  </Routes>

  {/* <Landing/> */}
  <Home/>
   {/* <Navbar/>
  <Header/> */}
  </BrowserRouter>
);

export default App;