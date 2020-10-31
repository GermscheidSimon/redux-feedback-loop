import React from 'react'
import {pushToNextRoute} from '../../feedbackLibrary/pushToNextRoute'

function NextBtn(props){
    return <button onClick={() => pushToNextRoute(props.destination, props.srcComponent)}>Next</button>
}

export default NextBtn;