const { query } = require('express')
const express = require('express')
const Follower = require('../Models/Follower')
const Profile = require('../Models/Profile')
const { trackingError } = require('../utils/trackingError')

const Router = express.Router()

Router.route('/:id_str')
  .get(async(req,res,next)=>{
    try {
      const data = req.params
      trackingError(!data.id_str,'Nenhum id enviado')
      const { id_str } = data

      const quering = await Follower.findAll({
        attributes:['followers_count','updated_at'],
        where:{
          id_str
        },
        order: [['updated_at','DESC']],
        limit: 30
      })

      const followerList = quering.map(query=>{
        return { updated_at:new Date(query.toJSON().updated_at).toLocaleDateString(), followers_count:query.toJSON().followers_count }
      })
      const followerListFiltered = followerList.filter((item,index)=>{
        if(index<followerList.length-1){
            if(item.updated_at===followerList[index+1].updated_at) return false
            else return true
        } else return true
    })

      res.status(200).json({followerList})
    } catch (error) {
      res.status(401).json({ message: error.message })
    }
  })

module.exports = Router