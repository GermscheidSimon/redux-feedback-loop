const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.post('/',  (req, res) => {
  
  let feeling = req.body.feeling;
  let understanding = req.body.understanding;
  let support = req.body.support;
  let comments = req.body.comments;
  let surveyResult = [feeling, understanding, support, comments]
  console.log(`Adding result`, surveyResult);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                   VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, surveyResult)
    .then(result => {
      console.log(result);
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new survey results`, error);
      res.sendStatus(500);
    });
});
module.exports = router;