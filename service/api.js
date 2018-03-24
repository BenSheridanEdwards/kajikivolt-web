
var MCapi = require('mailchimp-api');
var MAILCHIMP_APIKEY = process.env.MAILCHIMP_APIKEY
var MC = new MCapi.Mailchimp(MAILCHIMP_APIKEY);

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
