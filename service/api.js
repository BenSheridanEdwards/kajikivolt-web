var config;
if (process.env.NODE_ENV !== 'production') {
  config = require('./../config/env.json')[process.env.NODE_ENV || 'development'].MAILCHIMP_APIKEY;
} else {
  config = process.env.MAILCHIMP_APIKEY
}
var MCapi = require('mailchimp-api');
var MC = new MCapi.Mailchimp(config);

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
