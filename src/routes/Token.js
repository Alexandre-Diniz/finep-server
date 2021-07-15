const express = require('express')
const Token = require('../Models/Token')

const Router = express.Router()

Router.route('/')
  .get(async (req,res,next)=>{
    const { token, email } = req.query
    try {
      const tokenExists = await Token.findOne({
        attributes:['id'],
        where:{
          email,
          token
        }
      })
      res.status(200).json(tokenExists)
    } catch (error) {
      res.json(error)
    }
  })

  .delete(async (req,res,next)=>{
    const { token } = req.query
    try {
      const tokenIsDeleted = await Token.destroy({
        where:{
          token
        }
      })
      res.status(200).json(tokenIsDeleted)
    } catch (error) {
      res.status(404).json(error)
    }
  })

module.exports = Router