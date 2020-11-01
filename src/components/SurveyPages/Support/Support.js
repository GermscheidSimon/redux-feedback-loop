import React, { Component } from 'react';
import { connect } from 'react-redux'
import navigation from '../../../feedbackLibrary/pushToNextRoute';


class Support extends Component {

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
      question: 'support'
    }
    this.props.dispatch({
      type: "SET_SURVEY_ANSWER",
      payload: payloadData
    })
    navigation.pushToNextRoute('/comments', this)
  }

  render() {
    return (
      <div className="supportedWrap">
      <p className="surveyQuestion">Do you feel supported?</p>
      <input onChange={this.handleChange}/>
      <button onClick={this.handleSubmit}>Next</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})
export default connect(putReduxStateOnProps)(Support);
