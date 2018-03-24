var Reflux = require('reflux');

var AudioPlayerActions = Reflux.createActions({  
 // Child actions 'completed' and 'failed' are called by resolution of listenAndPromise
 "loadPlaylist": { children: ['completed', 'failed'] },
 "updateProgress": {},
 "submitReview": {}
});

// Reflux actions can trigger server calls, which we use to load the content to review

module.exports = AudioPlayerActions;