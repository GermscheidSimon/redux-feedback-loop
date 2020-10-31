import React, { Component } from 'react';
import NextBtn from '../../NextBtn/NextBtn';
import {connect} from 'react-redux'



class UnderstandContent extends Component {

  state ={
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
      question: 'understand'
    }
    this.dispatch({
      type: "SET_SURVEY_ANSWER",
      payload: payloadData
    })
  }

  render() {
    return (
      <div className="understandContent">
      <p className="surveyQuestion">How well do you undertand the content?</p>
      <input onChange={this.handleChange}/>
      <NextBtn srcComponent={this} destination="/supported"/>
    </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})
export default connect(putReduxStateOnProps)(UnderstandContent);
