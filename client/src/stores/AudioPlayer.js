var Reflux = require('reflux');  
var AudioPlayerActions = require('./../actions/AudioPlayer');

var AudioPlayerStore = Reflux.createStore({  
 // Shorthand for listening to all ContentReviewerActions
 listenables: AudioPlayerActions,
 data: {},
 // Load a review when the store is initialized
 init: function() {
   AudioPlayerActions.loadReview();
 },

 // Clear out the current review and any errors while we load the next review
 onLoadReview: function() {
   this.data.review = null;
   this.data.loadError = null;

   this.trigger(this.data);
 },

 // Called from ContentReviewerActions.loadReview.listenAndPromise
 onLoadReviewCompleted: function(res) {
   this.data.review = res.review;
   this.data.loadError = res.error;

   this.trigger(this.data);
 },

 // Called from ContentReviewerActions.loadReview.listenAndPromise
 onLoadReviewFailed: function() {
   this.data.loadError = "Could not load review.";

   this.trigger(this.data);
 },

 // Update status, pass updated state back to component(s)
 onUpdateStatus: function(status) {
   this.data.review.status = status;

   this.trigger(this.data);
 },

 // Submit current review while we load the next one
 onSubmitReview: function() {
   this.submitReview();
   AudioPlayerActions.loadReview();
 },

 // When we need to reference store data in our server requests, it's easier
 // to handle the communication in the store instead of the actions.
 submitReview: function() {

 }
});

module.exports = AudioPlayerStore;