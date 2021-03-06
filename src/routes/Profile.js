const express = require('express')
const { Op } = require('sequelize')
const Profile = require('../Models/Profile')
const ProfileUser = require('../Models/ProfileUser')
const Follower = require('../Models/Follower')
const twitter = require('../services/twitter')
const { UpdateProfile } = require('../Models/UpdateProfile')
const { MetaUpdateProfile } = require('../Models/MetaUpdateProfile')
const { trackingError } = require('../utils/trackingError')

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
        where: {
          id_str: profileID,
        },
      })
      const id = profile.id
      console.log(id)
      const deleted = await ProfileUser.destroy({
        where: { userID, profileID: id },
      })
      res.status(200).json(deleted)
    } catch (error) {
      res.status(404).json(error)
    }
  })

Router.route('/all')
  .get(async(req,res,next)=>{
    try {
      console.log(req.query.userID)
      if(!req.query.userID) res.status(401).json({ message: 'User not found' })
      const profiles = await Profile.findAll({
        attributes:['screen_name','name','followers_count','id_str','profile_image_url_https','verified'],
        order: [['name','ASC']]
      })
      const profileList = profiles.map(profile=>profile.toJSON())
      res.status(200).json(profileList)
    } catch (error) {
      console.error(error)
      res.status(404).json({ message: 'User not found' })
    }
  })

Router.route('/update').post(async (req, res, next) => {
  try {
    const profileList = req.body.profileList.trim().split(',')
    const profileListFiltered = profileList.map((profile) => {
      if (profile.split('@').length === 1) {
        return profile
      } else {
        return profile.split('@')[1]
      }
    })
    await MetaUpdateProfile.create({ size: profileListFiltered.length })
    profileListFiltered.map((screen_name, index) => {
      setTimeout(async () => {
        try {
          const params = {
            screen_name: screen_name,
          }
          console.log('params: ', params)
          const profile = await Profile.findOne({
            where: {
              screen_name: screen_name,
            },
          })
          console.log('profile: ', !!profile)
          if (!profile) {
            const response = await twitter.get(
              'https://api.twitter.com/1.1/users/show.json',
              params,
            )

            const {
              id_str,
              name,
              screen_name,
              description,
              followers_count,
              profile_image_url_https,
              verified,
            } = response

            await Profile.create({
              id_str,
              name,
              screen_name,
              description,
              followers_count,
              profile_image_url_https,
              verified,
            })
            console.log({ screen_name: screen_name, error: false })
            await UpdateProfile.create({
              screen_name: screen_name,
              error: false,
              error_message: '',
            })
          } else {
            await UpdateProfile.create({
              screen_name: screen_name,
              error: true,
              error_message: 'Perfil j?? cadastrado',
            })
          }
          if (index === profileListFiltered.length - 1) {
            setTimeout(async () => {
              try {
                await UpdateProfile.destroy({ where: {}, force: true })
                await MetaUpdateProfile.destroy({ where: {}, force: true })
                res.send('ok')
              } catch (error) {
                console.log(error)
              }
            }, 5000)
          }
        } catch (error) {
          console.error(error)
          console.log({ screen_name: screen_name, error: false })
          await UpdateProfile.create({
            screen_name: screen_name,
            error: true,
            error_message: error.message,
          })
        }
      }, 1000 * index)
    })
  } catch (error) {
    console.error(error)
  }
})

Router.route('/:userID')
  .post(async (req, res, next) => {
    const { userID } = req.params
    console.log(userID)
    const {
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
        where: { id_str: id_str },
      })
      console.log('profileExists: ', profileExists, !profileExists)
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
        console.log('profileCreated', profileCreated)
        const profileUserCreated = await ProfileUser.create({
          userID: userID,
          profileID: profileCreated.id,
        })
        const addedToFoller = await Follower.create({
          id_str: profileCreated.id_str,
          followers_count: followers_count,
        })
        res.status(200).json(addedToFoller)
      } else {
        const profileUserCreated = await ProfileUser.create({
          userID: userID,
          profileID: profileExists.id,
        })
        const addedToFoller = await Follower.create({
          id_str: profileExists.id_str,
          followers_count: followers_count,
        })
        res.status(200).json(addedToFoller)
      }
    } catch (error) {
      console.log(error.message)
      res.status(404).json(error)
    }
  })
  .get(async(req,res,next)=>{
    try {
      const data = req.params
      trackingError(!data?.userID,'Nenhum id enviado')
      const id_str = data.userID
      console.log('id_str:',req.params)
      const querying = await Profile.findOne({
        where: {
          id_str
        }
      })
      trackingError(!querying?.toJSON(), `Nenhum usu??rio encontrado com o id_str ${id_str}`)
      const profile = querying.toJSON()
      res.status(200).json({...profile})
    } catch (error) {
      res.status(401).json({ message: error.message })
    }
  })

module.exports = Router
