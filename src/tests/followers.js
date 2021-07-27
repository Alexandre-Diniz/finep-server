const { Model, DataTypes, Op } = require('sequelize')
const sequelize = require('../services/sequelize')
const Follower = require('../Models/Follower')
const twitter = require('../services/twitter')

class F extends Model {}
F.init(
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'F',
  },
)

// F.create({
//   name:'Alexandre'
// }).then(response=>console.log(response)).catch(error=>console.log(error))

// const today = new Date().setHours(0)

// F.findOrCreate({
//   where: {
//     created_at:{
//       [Op.gte]:today
//     }
//   },
//   defaults:{
//     name: 'alexandre diniz'
//   }
// }).then(response=>console.log(response)).catch(error=>console.log(error))

// async function run(){
//   try {
//     const f = await F.findOne({
//       where:{
//         created_at:{
//           [Op.gte]:today
//         }
//       }
//     })
//     if(f){
//       const fCreated = await F.update({
//         name: 'Alejjjjjo'
//       },{
//         where:{
//           id:f.id
//         }
//       })
//       console.log(fCreated)
//     } else {
//       console.log('nenhum usuario encontrado')
//       await F.create({
//         name: 'alexandre diniz'
//       })
//     }
//   } catch (error) {

//   }
// }
// run()

async function retriveFollowerCounter(profileID, followers_count) {
  try {
    const today = new Date().setHours(0)
    const follower = await Follower.findOne({
      where: {
        created_at: {
          [Op.gte]: new Date(today).toJSON(),
        },
        id_str: profileID,
      },
    })
    if (follower) {
      console.log(follower.toJSON())
      await Follower.update(
        {
          followers_count,
        },
        {
          where: {
            id: follower.toJSON().id,
          },
        },
      )
    } else {
      console.log('not found')
      await Follower.create({
        id_str: profileID,
        followers_count,
      })
    }
  } catch (error) {
    console.error(error)
  }
}

// const today = new Date().setHours(0)
// const id_str = '2670726740'
// twitter.get(
//   'https://api.twitter.com/1.1/users/show.json',
//   { user_id:  id_str},
// ).then(profile=>{
//   console.log(profile.followers_count)
//   Follower.findOne({
//     where:{
//       created_at:{
//         [Op.gte]: new Date(today).toJSON()
//       },
//       id_str:id_str
//     }
//   }).then(response=>{
//     if(response){
//       console.log(response.toJSON())
//       Follower.update({
//         followers_count: profile.followers_count
//       }, {
//         where:{
//           id:response.toJSON().id
//         }
//       }).then(_=>{}).catch(error=>console.error(error))
//     } else {
//       Follower.create({
//         followers_count: profile.followers_count,
//         id_str: id_str
//       })
//     }
//   }).catch(error=>console.log(error))
// })

// retriveFollowerCounter('2670726740',3).then()

const daysBefore = 7 * 24 * 60 * 60 * 1000
const thirtyDaysbefore = 30 * 24 * 60 * 60 * 1000

const SEARCHING_TIME = 10 * 60 * 1000

async function getFollowerCountList(profileID) {
  try {
    const today = new Date().getTime()
    const preview = new Date(today - thirtyDaysbefore).toJSON()
    const followers = await Follower.findAll({
      where: {
        created_at: {
          [Op.gte]: preview,
        },
        id_str: profileID,
      },
      order: [['created_at', 'DESC']],
      limit: 30,
    })
    const followerList = followers.map((follower) => follower.toJSON())
    console.log(followerList)
    let variation = []
    const length = followerList.length
    if (length === 0) {
      variation = [0, 0]
    } else if (length === 1) {
      variation = [0, 0]
    } else {
      variation = [
        followerList[length - 2].followers_count-followerList[length - 1].followers_count,
        followerList[0].followers_count- followerList[length - 1].followers_count
      ]
    }
    return { followerList, variation }
  } catch (error) {}
}

getFollowerCountList('2670726740').then(_=>console.log(_)).catch()
