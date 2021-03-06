const express = require("express");
const router = express.Router();
const db = require("../database/database");
const queries = require("../database/queries");

// This method returns all the list of stores as json
router.get("/", function(req, res, next) {
  let query;
  async function queryCall() {
    query = await db.runQuery(queries.storeQuery);
    return query;
  }
  queryCall().then(answer => {
    res.send(answer);
  });
});

module.exports = router;
