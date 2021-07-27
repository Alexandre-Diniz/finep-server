const Profile = require('../../Models/Profile')
const profiles = require('./csvjson.json')
const twitter = require('../../services/twitter')
const fs = require('fs')

const SEARCHING_TIME = 200
let errorList = []
profiles.map((profile, index) => {
  setTimeout(async()=>{
    try {
      const screen_name = profile.Twitter
      const response = await twitter.get('https://api.twitter.com/1.1/users/show.json',
      {
        screen_name
      })
      // await Profile.create({
      //   id_str: response.id_str,
      //       name: response.name,
      //       screen_name: response.screen_name,
      //       description: response.description,
      //       followers_count: response.followers_count,
      //       profile_image_url_https: response.profile_image_url_https,
      //       verified: response.verified,
      // })
      // console.log(`criado ${index}: `, profile.Nome)
      if(index===profiles.length-1){
        fs.writeFileSync('error.json', JSON.stringify(errorList))
      }
    } catch (error) {
      console.log(profile)
      console.log(error)
      errorList = [...errorList, profile]
    }
  }, SEARCHING_TIME*index)
})

// async function run() {
//   try {
//     const response = await twitter.get(
//       'https://api.twitter.com/1.1/users/show.json',
//       {
//         screen_name: 'alan_rick',
//       },
//     )
//     console.log(response)
//   } catch (error) {
//     console.error(error)
//   }
// }
// run().then(_=>{})
