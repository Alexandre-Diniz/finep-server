const { response } = require('express')
const Profile = require('../Models/Profile')
const twitter = require('../services/twitter')
const Engagement = require('../Models/Engagement')

const SEARCH_TIME = 1500

class Engagements {
  constructor(user_id, count = 1, since_id) {
    this.engagement = []
    this.user_id = user_id
    this.since_id = since_id
    this.count = count
  }

  getEngagement() {
    return this.engagement
  }

  setEngagement(engagement) {
    this.engagement = engagement
  }

  async searchTweetsTimeline() {
    try {
      const params = {
        screen_name: this.user_id,
        since_id: this.since_id,
        count: this.count,
      }
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
      this.setEngagement(engagement)
    } catch (error) {
      console.error(error.message)
    }
  }
}

class DataBase {
  constructor(model) {
    this.profileList = []
    this.model = model
    this.modelList = { Engagement: Engagement }
  }

  setProfileList(profiles) {
    this.profileList = profiles
  }

  getProfileList() {
    return this.profileList
  }

  async loadProfileList() {
    try {
      const response = await Profile.findAll({
        attributes: ['id_str', 'screen_name'],
      })
      const profiles = response.map((profile) => profile.toJSON())
      this.setProfileList(profiles)
    } catch (error) {
      this.setProfileList([])
    }
  }

  async saveOne(row) {
    try {
      const response = await this.modelList[`${this.model}`].create(row)
      return response
    } catch (error) {
      return null
    }
  }

  async saveMany(dataset) {
    try {
      dataset.map(async (row) => {
        try {
          await this.modelList[`${this.model}`].create(row)
        } catch(error){
          console.error(row, error.message)
        }
      })
    } catch (error) {
      console.error(error)
    }
  }
}

(async () => {
  try {
    const database = new DataBase('Engagement')
    await database.loadProfileList()
    database.getProfileList().map((profile, index) => {
      setTimeout(async () => {
        try {
          const last_id = await Engagement.findOne({
            attributes:['id','last_id_str'],
            where:{
              id_str: profile.id_str
            },
            order: [['updated_at','DESC']]
          })
          const engage = new Engagements(profile.screen_name,3200, last_id.toJSON()?.last_id_str)
          await engage.searchTweetsTimeline()
          const profileEngagement = engage.getEngagement().map(engage=>({
            retweet_count: engage.retweet_count,
            favorite_count: engage.favorite_count,
            createdAt: engage.consulted_in,
            consulted_in: engage.consulted_in,
            id_str: profile.id_str,
            last_id_str: engage.id_str
          }))
          await database.saveMany(profileEngagement)
        } catch (error) {
          console.error(profile.screen_name, error)
        }
      }, SEARCH_TIME * index)
    })
  } catch (error) {
    console.error(error)
  }
})()