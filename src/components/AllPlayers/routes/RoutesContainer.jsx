import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "../../Pages/Home/Home.jsx";
import ZipSearch from "../../ZipSearch/ZipSearch.jsx";
import Navbarr from "../../Navbar/Navbar.jsx";
import Electronics from "../../Pages/Electronics/Electronics.jsx";
import Textiles from "../../Pages/Textiles/Textiles.jsx";
import Pharma from "../../Pages/Pharma/Pharma.jsx";

class RoutesContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path= "/">
          <Navbarr />
          <Home />
          <ZipSearch />
      
        </Route>

        <Route exact path = "/electronics">   <Navbarr />  <Electronics /> </Route>
        <Route exact path = "/textiles">  <Navbarr />   <Textiles /> </Route>
        <Route exact path = "/pharma">   <Navbarr />  <Pharma /> </Route>
        <Route exact path = "/userlogin">   <Navbarr />   </Route>
        <Route exact path = "/userpage">   <Navbarr />  </Route>

      </Switch>
    );
    
  }
}

export default RoutesContainer;
