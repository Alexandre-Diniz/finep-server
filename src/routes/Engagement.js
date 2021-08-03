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
      engagementFiltered = engagement.filter((item,index)=>{
        if(index<engagement.length-1){
            if(item.updated_at===engagement[index+1].updated_at) return false
            else return true
        } else return true
    }).reverse()
      res.status(200).json({ engagement:engagementFiltered
       })
    } catch (error) {
      res.status(401).json({ message:error.message })
    }
  })

module.exports = Router