
function checkStatus (response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

function parseJSON (response) {
    return response.json()
  }

var FetchData = function (url) {
    return fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .then(function(data) {
      return data
      //console.log('request succeeded with JSON response', data)
    }).catch(function(error) {
      return error
      //console.log('request failed', error)
    })
  }

export default FetchData;



