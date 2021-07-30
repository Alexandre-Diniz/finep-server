const twitter = require('../services/twitter')
const Tweet = require('../Models/Tweet')
const Profile = require('../Models/Profile')

const params = {
  screen_name: 'FlavioDino',
  count: 1,
}

async function getAllProfiles() {
  try {
    const query = await Profile.findAll({ attributes: ['id_str'] })
    const profileList = query.map((profile) => profile.toJSON().id_str)
    return profileList
  } catch (error) {
    console.error(error)
    return []
  }
}

async function insertFirstTweets(id_str) {
  try {
    const params = {
      user_id: id_str,
      count: 1,
    }
    const response = await twitter.get('/statuses/user_timeline.json', params)
    await Tweet.create({
      id_str: id_str,
      text: response[0].text,
      createdAt: response[0].created_at,
      tweet_id: response[0].id_str,
    })
    return response[0]
  } catch (error) {
    console.error(error)
    return null
  }
}

getAllProfiles()
  .then(async (response) => {
    response.map(async (id_str, index) => {
      setTimeout(async () => {
        try {
          await insertFirstTweets(id_str)
        } catch (error) {
          console.error(error)
        }
      }, 100 * index)
    })
  })
  .catch((error) => console.error(error))
