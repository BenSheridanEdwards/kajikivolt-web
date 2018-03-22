
const returnFromArrayByIndex = (index ,array) => {
  return (index >= 0 && index < array.length) ? array[index] : false
}

const returnFormattedTime = (time) => {
  if (isNaN(time)) return '00:00'
  let seconds = Math.floor( time % 60 )
  let minutes = Math.floor( time / 60 ) % 60
  seconds = seconds < 10 ? '0' + seconds : seconds
  minutes = minutes < 10 ? '0' + minutes : minutes
  return '-' + minutes + ':' + seconds
}

module.exports = {
    returnFromArrayByIndex, 
    returnFormattedTime
};