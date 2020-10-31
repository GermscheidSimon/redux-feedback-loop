import React, { Component } from 'react';
import NextBtn from '../../NextBtn/NextBtn'
import {connect} from 'react-redux'


class FeelingToday extends Component {

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
      question: 'feelingToday'
    }
    this.dispatch({
      type: "SET_SURVEY_ANSWER",
      payload: payloadData
    })
  }

  render() {
    return (
        <div className="feelingTodayWrap">
          <p className="surveyQuestion">How are you feeling today?</p>
          <input onChange={this.handleChange}/>
          <NextBtn srcComponent={this} destination="/understand" onClick={this.handleSubmit}/>
        </div>
    );
  }
}
const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})
export default connect(putReduxStateOnProps)(FeelingToday);
