var config = require('./../config/env.json')[process.env.NODE_ENV || 'development'];
var MCapi = require('mailchimp-api');
var MC = new MCapi.Mailchimp(config.MAILCHIMP_APIKEY);

let subscribe = function(mcReq, callback) {
  MC.lists.subscribe(mcReq, function(data) {
      callback(data)
  }, function(error) {
      callback(error)
  });
};

module.exports = {
    subscribe: subscribe
}
