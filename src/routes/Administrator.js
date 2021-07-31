const express = require('express')
const { Administrator } = require('../Models/Administrator')

const Router = express.Router()

Router.route('/adm')
  .get(async(req,res,next)=>{
    try {
      const uid = await Administrator.findOne({
        where:{
          uid: req.query.uid
        }
      })
      if(uid){
        res.status(200).json({isAdm: true})
      } else {
        res.status(401).json({isAdm: false})
      }
    } catch (error) {
      
    }
  })

module.exports = Router