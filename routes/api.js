var express = require('express');
var router = express.Router();
var service = require('./../service/api')

/* GET home page. */
router.post('/subscribe', function(req, res, next) {
  let email = req.body.email
  var mcReq = {
      id: '142f5902bb',
      email: { email: email },
      merge_vars: {
          EMAIL: email,
          FNAME: 'D',
          LNAME: 'B'
      }
  };
  service.subscribe(mcReq, function (response) {
    res.json(response)
  })
});

module.exports = router;
