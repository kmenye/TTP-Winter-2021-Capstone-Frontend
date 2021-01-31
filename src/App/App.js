import React, { Component } from 'react';
import './App.css';
import RoutesContainer from '../components/AllPlayers/routes/RoutesContainer';
import Home from '../components/Pages/Home/Home.jsx';
// import UserStore from './stores/UserStore';


class App extends Component {

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <RoutesContainer />
        
        </header>
      </div>
    );
  }
}

export default App;
