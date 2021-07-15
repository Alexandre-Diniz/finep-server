const { DataTypes, Model } = require('sequelize')
const sequelize = require('../services/sequelize')

class Profile extends Model{}

Profile.init({
  id_str:{
    type:DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  name:{
    type:DataTypes.STRING,
  },
  screen_name:{
    type: DataTypes.STRING
  },
  description:{
    type:DataTypes.STRING,
  },
  followers_count:{
    type:DataTypes.INTEGER,
  },
  profile_image_url_https:{
    type:DataTypes.STRING,
  },
  verified:{
    type:DataTypes.BOOLEAN,
  },
},{
  sequelize,
  modelName:'Profile',
  timestamps: false
})

module.exports = Profile