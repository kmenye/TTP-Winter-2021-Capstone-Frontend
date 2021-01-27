import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "../../Pages/Home/Home.jsx";
import ZipSearch from "../../ZipSearch/ZipSearch.jsx";
import NewItem from "../../databsecomponents/NewUser.js";
import NewUser from "../../databsecomponents/NewItem.js";


class RoutesContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path= "/">
          <Home />
          <ZipSearch />
          <NewItem />
          <NewUser />
        </Route>
      </Switch>
    );
    
  }
}

export default RoutesContainer;
