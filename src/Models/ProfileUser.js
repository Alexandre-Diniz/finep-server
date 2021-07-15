const { DataTypes, Model } = require('sequelize')
const sequelize = require('../services/sequelize')

class ProfileUser extends Model{}

ProfileUser.init({
  profileID:{
    type:DataTypes.STRING,
  },
  userID:{
    type:DataTypes.STRING,
  }
},{
  sequelize,
  modelName:'ProfileUSer',
  timestamps: false
})

module.exports = ProfileUser