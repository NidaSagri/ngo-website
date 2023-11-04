import React from 'react'
import "./Navbar.css"
import logo from "../images/logo.jpg"

import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar=()=> {

  const { loginWithRedirect, logout ,isAuthenticated} = useAuth0();
  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg">
   <div className="container-fluid">
    <Link className="navbar-brand logo" to="/"><img  src={logo} alt="NayePankh" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">   
    <i class="fas fa-bars" style={{color:"#fff"}}></i>
</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/aboutus">About Us</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/ourCertificates">Our Certificates</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/newspaperRecog">News Paper Recognition</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/donate">Donate</Link></li>

        {isAuthenticated?  <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out</button></li> : <li><button onClick={() => loginWithRedirect()}>Log In</button></li>}
               
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  
}

export default Navbar
