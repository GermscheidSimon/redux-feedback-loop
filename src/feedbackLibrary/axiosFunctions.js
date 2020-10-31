import axios from 'axios'
    const axiosFunctions = {
        postResult: (surveyResultObj) => {
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