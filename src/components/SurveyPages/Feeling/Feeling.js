import React, { Component } from 'react';
import {connect} from 'react-redux'
import navigation from '../../../feedbackLibrary/pushToNextRoute'


class Feeling extends Component {

  state = {
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
      question: 'feelingToday'
    }
    this.props.dispatch({
      type: "SET_SURVEY_ANSWER",
      payload: payloadData
    })
    navigation.pushToNextRoute('/understanding', this)
  }

  render() {
    return (
        <div className="feelingTodayWrap">
          <p className="surveyQuestion">How are you feeling today?</p>
          <input onChange={this.handleChange}/>
          <button></button>
          <button onClick={this.handleSubmit}>Next</button>
        </div>
    );
  }
}
const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})
export default connect(putReduxStateOnProps)(Feeling);
