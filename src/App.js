import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import AllStudents from "./components/AllStudents";
import NewStudent from "./components/NewStudent";
import NewCampus from "./components/NewCampus";
import About from "./components/About/About";

import NewUser from "./components/NewUser";
import NewItem from "./components/NewItem";

import AllUsers from "./components/AllUsers";
import AllItems from "./components/AllItems";

import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/allStudents" component={AllStudents} />
            <Route path="/newStudent" component={NewStudent} />
            <Route path="/newCampus" component={NewCampus} />
            <Route path="/about" component={About} />
            <Route path="/newUser" component={NewUser} />
            <Route path="/newItem" component={NewItem} />
            <Route path="/allUsers" component={AllUsers} />
            <Route path="/allItems" component={AllItems} />
          </Switch>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/newCampus">Create New Campus</Link>
              </li>
              <li>
                <Link to="/newStudent">Create New Student</Link>
              </li>
              <li>
                <Link to="/allStudents">All Students</Link>
              </li>
              <li>
                <Link to="/newUser">Create New User</Link>
              </li>
              <li>
                <Link to="/newItem">Create New Item</Link>
              </li>
              <li>
                <Link to="/allUsers">All Users</Link>
              </li>
              <li>
                <Link to="/allItems">All Items</Link>
              </li>
            </ul>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

{
  // all campuses
  // other routes
  // about page
  // folders for files?
  // move links to another file?
  // home page?
}
