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


const reduxStore = createStore(
    combineReducers({
      
    }),
    applyMiddleware(logger)
  );
  

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
