import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import Navbarr from "../Navbar/Navbar.jsx";
import Electronics from "../Pages/Electronics/Electronics.jsx";
import Textiles from "../Pages/Textiles/Textiles.jsx";
import Pharma from "../Pages/Pharma/Pharma.jsx";
import Compost from "../Pages/Compost/Compost.jsx";
import SignUp from "../Pages/Signup/LoginPage.jsx";

class RoutesContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path= "/">
          <Navbarr />
          <Home />
        </Route>

        <Route exact path = "/electronics">   <Navbarr />  <Electronics /> </Route>
        <Route exact path = "/compost">   <Navbarr />  <Compost /> </Route>
        <Route exact path = "/textiles">  <Navbarr />   <Textiles /> </Route>
        <Route exact path = "/pharma">   <Navbarr />  <Pharma /> </Route>
        <Route exact path = "/userlogin">   <Navbarr />   </Route>
        <Route exact path = "/userpage">   <Navbarr />  </Route>
        <Route exact path = "/signup"> <Navbarr /> <SignUp /> </Route>

      </Switch>
    );
    
  }
}

export default RoutesContainer;
