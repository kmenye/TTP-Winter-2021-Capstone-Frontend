import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'

const Navbarr = () => {
  return (

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Garbo</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/">Home </Link>
          </li>
          <li class="nav-item">
            <Link to="/electronics">Electronics</Link>
          </li>
          <li class="nav-item"> 
            <Link to="/textiles">Clothing</Link>          
          </li>
          <li class="nav-item"> 
            <Link to="/pharma">Pharma</Link>          
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbarr;