const { UpdateProfile } = require('../Models/UpdateProfile')
const { MetaUpdateProfile } = require('../Models/MetaUpdateProfile')

const getProfiles = async () => {
  try {
    const response = await UpdateProfile.findAll({ attributes:['screen_name','error','error_message'] })
    return response.map(profile=>profile.toJSON())
  } catch (error) {
    console.error(error)
    return []
  }
}

const onUpdateProfiles = socket => {
  let interval = setInterval(async ()=>{
    try {
      const profileList = await getProfiles()
      const response = await MetaUpdateProfile.findAll({})
      let size = 0
      if(response.length)
        size = response[0].toJSON().size
      socket.emit('profiles_update', { profileList, size })
    } catch (error) {
      console.error(error)
    }
  },1000)
}

module.exports = { onUpdateProfiles }