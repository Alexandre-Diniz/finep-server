const Profile = require('../Models/Profile')
const ProfileUser = require('../Models/ProfileUser')
const Follower = require('../Models/Follower')
const { fn, col, Op, literal } = require('sequelize')

const daysBefore = 7 * 24 * 60 * 60 * 1000

const SEARCHING_TIME = 10 * 60 * 1000

async function getFollowerCountList(profileID) {
  try {
    const today = new Date().getTime()
    const preview = new Date(today - daysBefore).toJSON()
    const followers = await Follower.findAll({
      attributes:['created_at','followers_count', 'id_str'],
      where: {
        created_at: {
          [Op.gte]: preview,
        },
        id_str: profileID,
      },
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
        followerList[length - 1].followers_count-followerList[length - 2].followers_count,
        followerList[length - 1].followers_count-followerList[0].followers_count
      ]
    }
    return { followerList, variation }
  } catch (error) {}
}

async function onFollowers(socket, profileID) {
  if (profileID) {
    const followerCountList = await getFollowerCountList(profileID)
    console.log('followerCountList: ', followerCountList)
    socket.emit('onFollower', followerCountList)
    // setInterval(async () => {
    //   const followerCountList = await getFollowerCountList(profileID)
    //   socket.emit('onFollower', followerCountList)
    // }, SEARCHING_TIME)
  }
}

module.exports = onFollowers
