import React,{Component} from 'react'
import {connect} from 'react-redux'
import axiosFunctions from '../feedbackLibrary/axiosFunctions'

class ReviewSurvey extends Component{

    submitform = () => {
        console.log(this.props.reduxStore.surveyDataReduce);
        axiosFunctions.postResult(this.props.reduxStore.surveyDataReduce)
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