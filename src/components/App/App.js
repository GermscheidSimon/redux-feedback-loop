// dependecies
import React, { Component } from 'react';
import axios from 'axios';
import {HashRouter as Router, Route, Link, withRouter} from 'react-router-dom'
//Components
import Header from '../Header/Header'
import FeelingToday from '../SurveyPages/FeelingToday/FeelingToday';
import UnderstandContent from '../SurveyPages/UnderstandContent/UnderstandContent'
import Supported from '../SurveyPages/Supported/Supported'
import Comments from '../SurveyPages/Comments/Comments';
//Misc
import './App.css';


class App extends Component {

  render() {
    return ( 
      <Router>
        <Header/>

        <Route exact path="/" component={FeelingToday}/>
        <Route path="/understand" component={UnderstandContent}/>
        <Route path="/supported" component={Supported}/>
        <Route path="/comments" component={Comments}/>
      </Router>
    );
  }
}

export default App;
