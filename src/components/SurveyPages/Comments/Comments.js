import React, { Component } from 'react';
import navigation from '../../../feedbackLibrary/axiosFunctions'
import {connect} from 'react-redux'

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
    this.dispatch({
      type: "SET_SURVEY_ANSWER",
      payload: payloadData
    })
  }

  render() {
    return (
      <div className="commentsWrap">
      <p className="surveyQuestion">Any comments you want to leave?</p>
      <input onChange={this.handleChange}/>
      <button onClick={navigation.postResult(this.props.reduxStore.surveyDataReduce)} onClick={this.handleSubmit} >Submit Feedback</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})
export default connect(putReduxStateOnProps)(Comments);
