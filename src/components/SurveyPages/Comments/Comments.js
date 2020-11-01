import React, { Component } from 'react';
import {connect} from 'react-redux'
import axiosFunctions from '../../../feedbackLibrary/axiosFunctions';

class Comments extends Component {

  state = {
    input: ''
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit = () => {
    let payloadData = {
      answer: this.state.input,
      question: 'comments'
    }
    this.props.dispatch({
      type: "SET_SURVEY_ANSWER",
      payload: payloadData
    });
    axiosFunctions.postResult(this.props.reduxStore.surveyDataReduce)
  }

  render() {
    return (
      <div className="commentsWrap">
      <p className="surveyQuestion">Any comments you want to leave?</p>
      <input onChange={this.handleChange}/>
      <button onClick={this.handleSubmit} >Submit Feedback</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})
export default connect(putReduxStateOnProps)(Comments);
