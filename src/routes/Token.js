const express = require('express')
const { v4: uuidv4 } = require('uuid')
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

  .post(async(req,res,next)=>{
    try {
      const data = req.body
      if(!data?.email){
        res.status(301).json({ message: 'Nenhum email fornecido' })
        return
      }
      const uuid = uuidv4()
      const tokenList = await Token.findAll({
        where:{
          email: data.email
        }
      })
      if(tokenList.length===0){
        await Token.create({ email:data.email, token: uuid })
        res.status(201).json({ token: uuid })
      } else {
        res.status(300).json({ message: 'Token já cadastrado para esse email' })
      }
      
    } catch (error) {
      res.status(404).json({ message: error.message })
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