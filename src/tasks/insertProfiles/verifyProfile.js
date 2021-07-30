const twitter = require('../../services/twitter')

const screen_name = 'Vereador_Pv'
twitter.get('https://api.twitter.com/1.1/users/show.json', {
  screen_name: screen_name,
}).then(response=>console.log(response)).catch(error=>console.log(error))
