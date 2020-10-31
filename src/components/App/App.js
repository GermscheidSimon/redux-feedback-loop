import React, { Component } from 'react';
import axios from 'axios';
import {HashRouter as Router, Route, Link} from 'react-router-dom'


import './App.css';
import Header from '../Header/Header'

class App extends Component {
  render() {
    return ( 
      <Router>
        <Header/>
          
        <Route exact path="/" />
      </Router>
    );
  }
}

export default App;
