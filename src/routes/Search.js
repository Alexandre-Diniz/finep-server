const express = require('express')
const Twitter = require('twitter')
require('dotenv').config()

const credentials = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
}

const client = new Twitter(credentials)

const route = express.Router()

route.route('/user').get(async (req, res, next) => {
  const { name } = req.query
  const params = {
    count: 5,
    q: name,
    include_entities: false,
  }
  console.log(name)
  const response = await client.get(
    'https://api.twitter.com/1.1/users/search.json',
    params,
  )
  res.status(200).json(response)
})

route.route('/user/:id')
  .get( async (req,res,next)=>{
    const { id } = req.params
    const params = {
      user_id:id
    }
    const response = await client.get('https://api.twitter.com/1.1/users/show.json', params)

    res.status(200).json(response)
  })

module.exports = route
