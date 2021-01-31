import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'

const Navbarr = () => {
  return (

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand"><img src = "http://www.clipartbest.com/cliparts/niE/Eoe/niEEoe86T.png" width="40px" height="40px"></img></a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/" style = {{color:'black'}}>Home </Link>
          </li>
          <li class="nav-item">
            <Link to="/electronics" style = {{color:'black'}}>Electronics</Link>
          </li>
          <li class="nav-item">
            <Link to="/compost" style = {{color:'black'}}>Compost</Link>
          </li>
          <li class="nav-item"> 
            <Link to="/textiles" style = {{color:'black'}}>Clothing</Link>          
          </li>
          <li class="nav-item"> 
            <Link to="/pharma" style = {{color:'black'}}>Pharma</Link>          
          </li>
          <li class="nav-item"> 
            <Link to="/signup" style = {{color:'black'}}>Login</Link>          
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbarr;