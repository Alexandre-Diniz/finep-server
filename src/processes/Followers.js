const Profile = require('../Models/Profile')
const Follower = require('../Models/Follower')
const twitter = require('../services/twitter')
const delay = require('../utils/delay')
const { Op } = require('sequelize')

const DELAY_TIME = 1000 // 1s
const ONE_HOUR = 1000*60*60
const WAITING_TIME = ONE_HOUR*13

// consulta quem sao os usuários e retorna os IDs
async function getAllProfiles() {
  try {
    const response = await Profile.findAll()
    const profileList = response.map((profile) => profile.toJSON().id_str)
    return profileList
  } catch (error) {
    return []
  }
}
// consulta os dados da api
async function getProfileInfo(id) {
  try {
    const profile = await twitter.get(
      'https://api.twitter.com/1.1/users/show.json',
      { user_id: id },
    )
    return profile
  } catch (error) {
    return null
  }
}
// atualiza os valores no banco
async function retriveNewProfileInfo(profile) {
  const {
    name,
    screen_name,
    description,
    followers_count,
    profile_image_url_https,
    verified,
  } = profile
  try {
    await Profile.update(
      {
        name,
        screen_name,
        description,
        followers_count,
        profile_image_url_https,
        verified,
      },
      { where: { id_str: profile.id_str } },
    )
  } catch (error) {}
}

async function retriveFollowerCounter(profileID, followers_count) {
  try {
    const today = new Date().setHours(0)
    const follower = await Follower.findOne({
      where:{
        created_at:{
          [Op.gte]: new Date(today).toJSON()
        },
        id_str:profileID
      }
    })
    if(follower){
      console.log(follower.toJSON())
      await Follower.update({
        followers_count
      }, {
        where:{
          id: follower.toJSON().id
        }
      })
    } else {
      console.log('not found')
      await Follower.create({
        id_str:profileID,
        followers_count
      })
    }
  } catch (error) {
    console.error(error)
  }
}


async function run() {
  try {
    const IDList = await getAllProfiles()
    IDList.map((id, index) => {
      setTimeout(async()=>{
        console.log(`${index+1}/${IDList.length}-->${id}`)

        const profile = await getProfileInfo(id)
  
        await retriveNewProfileInfo(profile)
        await retriveFollowerCounter(
          profile.id_str,
          profile.followers_count,
        )

        if(index===IDList.length-1){
          setTimeout(()=>{
            run()
          },WAITING_TIME)
        }

      },DELAY_TIME*index)
    })
  } catch (error) {}
}

(async()=>{
  try {
    await run()
  } catch (error) {
    console.error(error)
  }
})()