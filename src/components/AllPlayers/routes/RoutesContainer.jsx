import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "../../Pages/Home/Home.jsx";
import ZipSearch from "../../ZipSearch/ZipSearch.jsx";

class RoutesContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path= "/">
          <Home />
          <ZipSearch />
        </Route>
      </Switch>
    );
    
  }
}

export default RoutesContainer;
