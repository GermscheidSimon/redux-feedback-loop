import React, { Component } from 'react';
import {connect} from 'react-redux'
import navigation from '../../../feedbackLibrary/pushToNextRoute'



class Understanding extends Component {

  state ={
    input: ''
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit = () => {
    console.log('test');
    
    let payloadData = {
      answer: this.state.input,
      question: 'understanding'
    }
    this.props.dispatch({
      type: "SET_SURVEY_ANSWER",
      payload: payloadData
    })
    navigation.pushToNextRoute('/support', this)
  }

  render() {
    return (
      <div className="understandContent">
      <p className="surveyQuestion">How well do you undertand the content?</p>
      <input onChange={this.handleChange}/>
      <button onClick={this.handleSubmit}>Next</button>
    </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})
export default connect(putReduxStateOnProps)(Understanding);
