// dependecies 
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
//Component
import App from './components/App/App';
//Misc
import './index.css';

const surveyDataReduce = (state={
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
}, action) => {
   if(action.type === "SET_SURVEY_ANSWER"){
       console.log(state);
       return {...state, [action.payload.question]: action.payload.answer}
   } 
    return state;
}

const reduxStore = createStore(
    combineReducers({
        surveyDataReduce,
    }),
    applyMiddleware(logger)
  );
  

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
