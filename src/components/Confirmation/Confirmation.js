import React, { Component } from 'react'
import navaigation from '../../feedbackLibrary/pushToNextRoute'
import {connect} from 'react-redux'

class Confirmation extends Component{


    handleSurveyRestart = () => {
        this.clearSuveyData();
        navaigation.pushToNextRoute('/', this)
    }
    clearSuveyData = () => {
        this.props.dispatch({
            type: "CLEAR_DATA"
        })
    }

    render(){

        return(
            <div>
                <p>Survey Completed!</p>
                <button onClick={this.handleSurveyRestart} >Take another Survey</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({reduxStore})

export default connect(putReduxStateOnProps)(Confirmation);