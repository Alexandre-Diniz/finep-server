const Profile = require('../Models/Profile')
const twitter = require('../services/twitter')
const Mention = require('../Models/Mention')
const { Op } = require('sequelize')
const delay = require('../utils/delay')

const SEARCH_TIME = 6000

class Mentions {
  constructor(){
    this.profileList = []
    this.mentionList = []
  }

  async searchByMentions(screen_name, count=1, since_id){
    try {
      const now = new Date()
      const params = {
        q: `@${screen_name}`,
        result_type: 'recent',
        count: count,
        since_id: since_id
      }
      const response = await twitter.get('https://api.twitter.com/1.1/search/tweets.json', params)
      const mentions = {
        count: response.statuses.length,
        max_id_str: response.statuses.length ? response.statuses[0].id_str : since_id
      }
      return mentions
    } catch (error) {
      console.log(error)
      return null
    }
  }

  async findAllMentionFromDB(){
    try {
      const mentions = await Mention.findAll()
      mentionsFormated = mentions.map(mention=>mention.toJSON())
      this.mentionList = mentionsFormated
    } catch (error) {
      this.mentionList = []
    }
  }

  async findAllProfilesFromDB(){
    try {
      const profiles = await Profile.findAll()
      const profileInfo = profiles.map(profile=>{
        const { id_str, screen_name, name } = profile.toJSON()
        return { id_str, screen_name, name }
      })
      this.profileList = profileInfo//[{ id_str:'25577585', screen_name:'FlavioDino', name:'Flávio Dino 🇧🇷' }]//
    } catch (error) {
      this.profileList = []
    }
  }

  async updateMentions(count=1){
    try {
      this.profileList.map((profile, index)=>{
        setTimeout(async ()=>{
          console.log(profile.name)

          const midNight = new Date().setHours(0,0,0,0)
          const midNightFormated = new Date(midNight)

          const mentions = await Mention.findAll({
            where:{
              id_str: profile.id_str,
              updated_at:{
                [Op.gte]: midNightFormated
              }
            }
          })

          if(mentions.length===0){
            const mentionsFound = await this.searchByMentions(profile.screen_name, profile.name)
            if(mentionsFound){
              await Mention.create({
                max_id_str: mentionsFound.max_id_str,
                id_str: profile.id_str,
                count: mentionsFound.count
              })
            }
          } else {
            const mentionsFound = await this.searchByMentions(profile.screen_name, count, mentions[0].toJSON().max_id_str)
            if(mentionsFound){
              await Mention.create({
                max_id_str: mentionsFound.max_id_str,
                id_str: profile.id_str,
                count: mentionsFound.count
              })
            }
          }
        },index*SEARCH_TIME)

      })
    } catch (error) {
      console.log(profile.name, error)
    }
  }

  async run_first_time(){
    try {
      await this.findAllProfilesFromDB()
      await this.updateMentions(1)
    } catch (error) {
      console.log(error)
    }
  }

  async run(){
    try {
      await this.findAllProfilesFromDB()
      await this.updateMentions(100)
    } catch (error) {
      console.log(error)
    }
  }
}

const mentions = new Mentions()
// mentions.run().then(_=>{}).catch(error=>console.error(error))
mentions.run_first_time().then(_=>{}).catch(error=>console.error(error))


// const screen_name = 'Lula'
// const since_id = '1415122356369035267'
// const count = 1
// const params = {
//   q: `@${screen_name}`,
//   result_type: 'recent',
//   count: count,
//   since_id: since_id
// }
// twitter.get('https://api.twitter.com/1.1/search/tweets.json', params).then(response=>console.log(response))