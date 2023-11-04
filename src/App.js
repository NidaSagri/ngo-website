import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutUs from './components/About Us/AboutUs';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Router>
      
      <Navbar/>
      <Routes>

          <Route exact path="/" element=<Home/> > </Route>
          <Route exact path="/aboutus" element=<AboutUs/>> </Route>
         
        
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
