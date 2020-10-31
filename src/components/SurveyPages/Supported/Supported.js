import React, { Component } from 'react';
import NextBtn from '../../NextBtn/NextBtn'


class Supported extends Component {
  render() {
    return (
      <div className="supportedWrap">
      <p className="surveyQuestion">Do you feel supported?</p>
      <NextBtn srcComponent={this} destination="/comments"/>
      </div>
    );
  }
}

export default Supported;
