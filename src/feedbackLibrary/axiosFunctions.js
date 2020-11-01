import axios from 'axios'
    const axiosFunctions = {
        postResult: (surveyResultObj) => {
            console.log('from POST axios');
            console.log(surveyResultObj)
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
    

export default axiosFunctions;