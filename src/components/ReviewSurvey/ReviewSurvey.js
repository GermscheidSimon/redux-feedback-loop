import React,{Component} from 'react'
import {connect} from 'react-redux'
import {pushToNextRoute} from '../../feedbackLibrary/pushToNextRoute'
import axios from 'axios'

class ReviewSurvey extends Component{

    postResult = (surveyResultObj) => {
        console.log('from POST axios');
        console.log(surveyResultObj)
        axios({
            method: 'POST',
            url: '/survey',
            data: surveyResultObj
        }).then( (response) => {
            console.log(response);
            pushToNextRoute("/confirmation", this);
        }).catch( (error) => {
            console.log(error);
            alert('Submission failed. Please try again')
        });
    }

    submitform = () => {
        console.log(this.props.reduxStore.surveyDataReduce);
        this.postResult(this.props.reduxStore.surveyDataReduce)
    }

    render(){
        const surveyResults = this.props.reduxStore.surveyDataReduce
        return(
            <div>
                <p>Feeling Today:{surveyResults.feeling}</p>
                <p>Understanding of Content: {surveyResults.understanding}</p>
                <p>Support: {surveyResults.support}</p>
                <p>Comments: {surveyResults.comments}</p>
                <button onClick={this.submitform} >Submit Survey</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({reduxStore})
  export default connect(putReduxStateOnProps)(ReviewSurvey);