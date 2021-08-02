const express = require('express')
const Engagement = require('../Models/Engagement')
const { trackingError } = require('../utils/trackingError')

const Router = express.Router()

Router.route('/:id_str')
  .get(async(req,res,next)=>{
    try {
      const data = req.params
      trackingError(!data?.id_str,'Nenhum id_str foi fornecido')
      const { id_str } = req.params
      const querying = await Engagement.findAll({
        attributes:['retweet_count','favorite_count','consulted_in'],
        where:{
          id_str
        },
        order: [['updated_at','DESC']],
        limit:30
      })
      const engagement = querying.map(engagement=>{
        return { consulted_in:new Date(engagement.toJSON().consulted_in).toLocaleDateString(), 'Retweets':engagement.toJSON().favorite_count, 'Likes':engagement.toJSON().favorite_count }
      })
      res.status(200).json({ engagement })
    } catch (error) {
      res.status(401).json({ message:error.message })
    }
  })

module.exports = Router