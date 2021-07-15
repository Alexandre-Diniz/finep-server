const express = require('express')
const { Op } = require('sequelize')
const Profile = require('../Models/Profile')
const ProfileUser = require('../Models/ProfileUser')
const Follower = require('../Models/Follower')

const Router = express.Router()

// profiles

Router.route('/')
  .get(async (req, res, next) => {
    const { userID } = req.query
    try {
      const response = await ProfileUser.findAll({ where: { userID } })
      const profileIDList = response.map((profile) => profile.profileID)
      console.log(profileIDList)
      if (profileIDList.length !== 0) {
        const profileList = await Profile.findAll({
          where: { id: { [Op.or]: profileIDList } },
        })
        res.status(200).json(profileList)
      } else {
        res.status(200).json([])
      }
    } catch (error) {
      res.status(404).json(error)
      console.log(error.message)
    }
  })
  .delete(async (req, res, next) => {
    const { userID, profileID } = req.query
    console.log(userID, profileID)
    try {
      const profile = await Profile.findOne({
        where:{
          id_str:profileID
        }
      })
      const id = profile.id
      console.log(id)
      const deleted = await ProfileUser.destroy({
        where: { userID, profileID:id },
      })
      res.status(200).json(deleted)
    } catch (error) {
      res.status(404).json(error)
    }
  })

Router.route('/:userID').post(async (req, res, next) => {
  const { userID } = req.params
  console.log(userID)
  const {
    id,
    id_str,
    name,
    screen_name,
    description,
    followers_count,
    profile_image_url_https,
    verified,
  } = req.body
  console.log(req.body)

  try {
    const profileExists = await Profile.findOne({
      where: { id_str: String(id) },
    })
    console.log('profileExists: ',profileExists, !profileExists)
    if (!profileExists) {
      const profileCreated = await Profile.create({
        id_str,
        name,
        screen_name,
        description,
        followers_count,
        profile_image_url_https,
        verified,
      })
      console.log('profileCreated',profileCreated)
      const profileUserCreated = await ProfileUser.create({
        userID: userID,
        profileID: profileCreated.id,
      })
      const addedToFoller = await Follower.create({ id_str:profileCreated.id_str, followers_count:followers_count })
      res.status(200).json(addedToFoller)
    } else {
      const profileUserCreated = await ProfileUser.create({
        userID: userID,
        profileID: profileExists.id,
      })
      const addedToFoller = await Follower.create({ id_str:profileExists.id_str, followers_count:followers_count })
      res.status(200).json(addedToFoller)
    }
  } catch (error) {
    console.log(error.message)
    res.status(404).json(error)
  }
})

module.exports = Router
