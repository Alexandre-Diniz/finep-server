const { Op } = require('sequelize')
const twitter = require('../services/twitter')
const Profile = require('../Models/Profile')
const Tweet = require('../Models/Tweet')

// retorna lista de [id_str]

const SEARCH_TIME = 1000
const WAITING_TIME = 13*60*60*1000


async function getAllProfiles(){
  try {
    const query = await Profile.findAll({ attributes:['id_str'] })
    return query.map(id_str=>id_str.toJSON().id_str)
  } catch (error) {
    console.error('getAllProfiles', error)
    return []
  }
} 

// retorna o ultimo registro
async function getLastRecordInTweets(user_id){
  try {
    const tweet = await Tweet.findAll({
      attributes:['tweet_id'],
      where:{
        id_str: user_id,
      },
      order: [['created_at','DESC']],
      limit: 1
    })
    return tweet.map(tweet=>tweet.toJSON())
  } catch (error) {
    console.error('getLastRecordInTweets', error)
    return []
  }
}

// retorna uma lista contendo [{ id_str, text, tweet_id, craetedAt }]
async function getTweets(user_id, count, since_id){
  try {
    const params = {
      user_id, count, since_id
    }
    const response = await twitter.get('statuses/user_timeline.json', params)
    return response.map(tweet=>{
      return {text:tweet.text, createdAt: tweet.created_at, tweet_id: tweet.id_str, id_str: user_id }
    })
  } catch (error) {
    console.error('getTweets', error)
    return []
  }
}

async function retriveMultipleTweets(tweetList){
  try {
    await Tweet.bulkCreate(tweetList)
  } catch (error) {
    
  }
}

async function run(){
  try {
    const profileList = await getAllProfiles()
    console.log(profileList)
    profileList.map((id_str, index)=>{
      setTimeout(async ()=>{
        try {
          const lastIDList = await getLastRecordInTweets(id_str)
          if(lastIDList.length===0){
            const tweetList = await getTweets(id_str, 1)
            console.log(tweetList)
            retriveMultipleTweets(tweetList)
          } else {
            const tweetList = await getTweets(id_str, 200,lastIDList[0].tweet_id)
            console.log(tweetList)
            retriveMultipleTweets(tweetList)
          }
        } catch (error) {
          
        }
      },index*SEARCH_TIME)
    })
  } catch (error) {
    
  }
}

//------------------tests-------------------
// getAllProfiles().then(response=>console.log(response)).catch(error=>console.log(error)) // ok
// getLastRecordInTweets('1226849278087352320').then(response=>console.log(response)).catch(error=>console.error(error))

(async()=>{
  try {
    await run()
  } catch (error) {
    
  }
})()