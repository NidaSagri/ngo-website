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
import FeedbackForm from './components/Feedback/FeedbackForm';
import Reviews from './components/Reviews/Reviews';

const App = () => {
  return (
    <>
      <Router>
      
      <Navbar/>
      <Routes>

          <Route exact path="/" element=<Home/> > </Route>
          <Route exact path="/aboutus" element=<AboutUs/>> </Route>
          <Route exact path="/feedback" element=<FeedbackForm/>> </Route>
          <Route exact path="/api/reviews" element=<Reviews/>> </Route>
         
        
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
