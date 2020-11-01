// dependecies
import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
//Components
import Header from '../Header/Header'
import Feeling from '../SurveyPages/Feeling/Feeling';
import Understanding from '../SurveyPages/Understanding/Understanding'
import Support from '../SurveyPages/Support/Support'
import Comments from '../SurveyPages/Comments/Comments';
//Misc
import './App.css';


class App extends Component {

  render() {
    return ( 
      <Router>
        <Header/>

        <Route exact path="/" component={Feeling}/>
        <Route path="/understanding" component={Understanding}/>
        <Route path="/support" component={Support}/>
        <Route path="/comments" component={Comments}/>
      </Router>
    );
  }
}

export default App;
