import axios from 'axios'

const util = {
    postReult: (surveyResultObj) => {
        axios({
            method: 'POST',
            url: '/survey',
            data: surveyResultObj
        }).then( (response) => {
            console.log(response);
        }).catch( (error) => {
            console.log(error);
        });
    }
}

module.exports = util;