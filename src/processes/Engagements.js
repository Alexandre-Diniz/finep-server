const { response } = require('express')
const Profile = require('../Models/Profile')
const twitter = require('../services/twitter')
const Engagement = require('../Models/Engagement')
const { Op } = require('sequelize')

const SEARCH_TIME = 1500
const ONE_HOUR = 1000 * 60 * 60
const WAITING_TIME = ONE_HOUR * 5

async function getAllProfiles() {
  try {
    const response = await Profile.findAll({
      attributes: ['screen_name', 'id_str'],
    })
    const profileList = response.map((profile) => profile.toJSON())
    return profileList
  } catch (error) {
    return []
  }
}

async function searchTweetsTimeline(params) {
  try {
    const response = await twitter.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json',
      params,
    )
    const engagement = response.map((engagement) => {
      return {
        createdAt: engagement.created_at,
        id_str: engagement.id_str,
        retweet_count: engagement.retweet_count,
        favorite_count: engagement.favorite_count,
        consulted_in: new Date(),
      }
    })
    return engagement
  } catch (error) {
    console.error(error)
    return []
  }
}

async function saveEngagement(engagement) {
  try {
    await Engagement.bulkCreate(engagement)
  } catch (error) {}
}

async function getEngagement(id_str) {
  try {
    const querying = await Engagement.findAll({
      attributes: [
        'last_id_str',
        'consulted_in',
        'retweet_count',
        'favorite_count',
        'id',
        'updated_at',
      ],
      where: {
        id_str,
      },
      order: [['updated_at', 'DESC']],
    })
    const data = querying.map((data) => data.toJSON())
    if (data.length) {
      return data[0]
    } else {
      return null
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

async function run() {
  try {
    const profiles = await getAllProfiles()
    profiles.map(async ({ screen_name, id_str }, index) => {
      if(index===profiles.length-1){
        setTimeout(()=>run(),WAITING_TIME)
      }
      setTimeout(async () => {
        try {
          const querying = await getEngagement(id_str)
          if (querying) {
            // possui ultimo registro
            // { last_id_str?, consulted_in }
            const today = new Date(new Date().setHours(0)).getTime()
            if (today <= new Date(querying.updated_at).getTime()) {
              // update
              let response = []
              if (querying?.last_id_str) {
                response = await searchTweetsTimeline({
                  screen_name,
                  since_id: querying.last_id_str,
                  count: 3200,
                })
              } else {
                response = await searchTweetsTimeline({
                  screen_name,
                  count: 1,
                })
              }
              const totalLikes = response.reduce((acm, curr) => acm.favorite_count + curr.favorite_count,0)
              const totalRetweets = response.reduce((acm, curr) => acm.retweet_count + curr.retweet_count,0)
              if(response.length){
                await Engagement.update(
                  {
                    retweet_count: querying.retweet_count + totalRetweets,
                    favorite_count: querying.favorite_count + totalLikes,
                    consulted_in: new Date(),
                    last_id_str: response[0].id_str,
                  },
                  {
                    where: {
                      id: querying.id,
                    },
                  },
                )
              } else {
                await Engagement.update(
                  {
                    retweet_count: querying.retweet_count + totalRetweets,
                    favorite_count: querying.favorite_count + totalLikes,
                    consulted_in: new Date(),
                  },
                  {
                    where: {
                      id: querying.id,
                    },
                  },
                )
              }
            } else {
              // create
              const response = await searchTweetsTimeline({
                screen_name,
                count: 1,
              })
              const totalLikes = response.reduce((acm, curr) => acm.favorite_count + curr.favorite_count,0)
              const totalRetweets = response.reduce((acm, curr) => acm.retweet_count + curr.retweet_count,0)
              
              if (response.length) {
                console.log('1')
                await saveEngagement([{
                  createdAt:response[0].createdAt,
                  id_str,
                  last_id_str: response[0].id_str,
                  retweet_count: totalRetweets.retweet_count,
                  favorite_count: totalLikes.favorite_count,
                  consulted_in: response[0].consulted_in,
                }])
              }
            }
          } else {
            // nao possui ultimo id
            const response = await searchTweetsTimeline({
              screen_name,
              count: 1,
            })
            const totalLikes = response.reduce((acm, curr) => acm + curr.favorite_count,0)
            const totalRetweets = response.reduce((acm, curr) => acm + curr.retweet_count,0)
            if (response.length) {
              console.log({
                createdAt:response[0].createdAt,
                id_str,
                last_id_str: response[0].id_str,
                retweet_count: totalRetweets,
                favorite_count: totalLikes,
                consulted_in: response[0].consulted_in,
              })
              await saveEngagement([{
                createdAt:response[0].createdAt,
                id_str,
                last_id_str: response[0].id_str,
                retweet_count: totalRetweets,
                favorite_count: totalLikes,
                consulted_in: response[0].consulted_in,
              }])
            }
          }
        } catch (error) {
          console.error(error)
        }
      }, SEARCH_TIME * index)
    })
  } catch (error) {
    console.error(error)
  }
}

run()