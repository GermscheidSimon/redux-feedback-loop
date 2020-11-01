#  Redux Feedback Loop

# Description
 
Duration: Weekend Project

This project focusses on react-router and redux to build a survey form. As you advance through the survey pages, data is added to redux until finally submited to SQL at the end of the survey.

# Prerequisites 
    node.js
    postgresql

# installation 
    1. create a database named `prime_feedback`
    2. reference the data.sql file the table conifuration and some refernce data. 
    3. open the the repo in a IDE of your choice. 
    4. run `npm install` to install dependecies
    5. run `npm run server` and `npm run client` to open the app in a dev instance. 

# Usage
     - the survey will ask you questions and allow you to advance to new components after answering each question. 
     - You can review the survey at the end before submitting. 
     - once submitted the data will be inserted into the sql database.

# Built With
    - React
        > redux
            >redux logger
        > react redux
        > react router dom
        > axios
    - express
        > PG
    
# Acknowledgement
    Thanks to Prime Digital Academey who set me up with the tools necessary to build this app, and to my classmates for support.

