import React, { Component } from 'react';
import {connect} from 'react-redux'
import navigation from '../../../feedbackLibrary/pushToNextRoute'
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
    navigation.pushToNextRoute('/review', this)
  }

  render() {
    return (
      <div className="questionWrap">
      <p className="surveyQuestion">Any comments you want to leave?</p>
      <textarea onChange={this.handleChange}/>
      <button onClick={this.handleSubmit} >Review Survey</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})
export default connect(putReduxStateOnProps)(Comments);
