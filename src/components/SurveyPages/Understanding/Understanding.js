import React, { Component } from 'react';
import {connect} from 'react-redux'
import navigation from '../../../feedbackLibrary/pushToNextRoute'



class Understanding extends Component {

  state ={
    input: -1
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit = () => {
    let inputIsValid = this.state.input >= 0 && this.state.input <= 5

    if (inputIsValid) {
      let payloadData = {
        answer: this.state.input,
        question: 'understanding'
      }
      this.props.dispatch({
        type: "SET_SURVEY_ANSWER",
        payload: payloadData
      })
      navigation.pushToNextRoute('/support', this)
    } else {
      alert('Please enter a rating between 0 and 5')
    }
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
