function delay(time){
  return new Promise(resolve=>{
    setTimeout(()=>resolve(null),time)
  })
}

module.exports = delay