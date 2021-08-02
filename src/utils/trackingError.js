const trackingError = (statement, message) => {
  if(statement){
    throw new Error(message)
  }
}

module.exports = { trackingError }