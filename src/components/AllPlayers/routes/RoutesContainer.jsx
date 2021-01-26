import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "../../Pages/Home/Home.jsx";

class RoutesContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path= "/">
          <Home />
        </Route>
      </Switch>
    );
    
  }
}

export default RoutesContainer;
