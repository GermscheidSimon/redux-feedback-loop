import React, { Component } from 'react';
import {connect} from 'react-redux'
import navigation from '../../../feedbackLibrary/pushToNextRoute'


class Feeling extends Component {

  state = {
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
        question: 'feeling'
      }
      this.props.dispatch({
        type: "SET_SURVEY_ANSWER",
        payload: payloadData
      })
      navigation.pushToNextRoute('/understanding', this)
    } else {
      alert('Please enter a rating between 0 and 5')
    }
  }

  render() {
    return (
        <div className="questionWrap">
          <p className="surveyQuestion">How are you feeling today?</p>
          <label htmlFor="inputField">Rating 0 to 5:   </label>
          <input type="number"  className="inputField" onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Next</button>
        </div>
    );
  }
}
const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})
export default connect(putReduxStateOnProps)(Feeling);
