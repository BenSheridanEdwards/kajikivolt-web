var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/subscribe', function(req, res, next) {
  const count = 5;
  const data = {
    "status": "OK"
  }
  res.json(data);
});

module.exports = router;
