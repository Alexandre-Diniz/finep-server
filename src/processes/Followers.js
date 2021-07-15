const Profile = require('../Models/Profile')
const Follower = require('../Models/Follower')
const twitter = require('../services/twitter')
const delay = require('../utils/delay')

const DELAY_TIME = 1000 // 1s

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
    const response = await Follower.create({
      id_str: profileID,
      followers_count: followers_count,
    })
    return response
  } catch (error) {
    return null
  }
}

async function run() {
  try {
    const IDList = await getAllProfiles()
    IDList.map((id, index) => {
      setTimeout(async()=>{
        const profile = await getProfileInfo(id)
        // const { name, screen_name, description, followers_count, profile_image_url_https, verified } = profile
        // console.log({ name, screen_name, description, followers_count, profile_image_url_https, verified })
        const response = await retriveNewProfileInfo(profile)
        const followerCount = await retriveFollowerCounter(
          profile.id_str,
          profile.followers_count,
        )
      },DELAY_TIME*index)
    })
  } catch (error) {}
}

run()

// run().then(async () => {
//   while (true) {
//     await run()
//     await delay(1 * 60 * 1000)
//   }
// })

// const deltaInterval = 1 * 60 * 1000
// setInterval(() => {
//   run()
// }, deltaInterval)

// pegar todos os perfis do banco getAllProfiles() retorna uma lista de IDs
// chamar a api para cada um dos perfis getProfileInfo(id) retorna os dados do usuario
// armazenar os valores independente da verificacao retriveNewProfileInfo(profile)

// retrieveProfiles()
// getProfileInfo('25577585').then(response=>console.log(response.followers_count))
// retrieveProfileById('25577585').then(response=>console.log(response.followers_count))
