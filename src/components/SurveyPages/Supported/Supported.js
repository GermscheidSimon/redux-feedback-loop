import React, { Component } from 'react';
import NextBtn from '../../NextBtn/NextBtn'


class Supported extends Component {

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
      question: 'supported'
    }
    this.dispatch({
      type: "SET_SURVEY_ANSWER",
      payload: payloadData
    })
  }

  render() {
    return (
      <div className="supportedWrap">
      <p className="surveyQuestion">Do you feel supported?</p>
      <input onChange={this.handleChange}/>
      <NextBtn srcComponent={this} destination="/comments" onClick={this.handleSubmit}/>
      </div>
    );
  }
}

export default Supported;
