const { DataTypes, Model } = require('sequelize')
const sequelize = require('../services/sequelize')

class Follower extends Model{}

Follower.init({
  followers_count:{
    type:DataTypes.INTEGER,
  },
  id_str: {
    type: DataTypes.STRING
  }
},{
  sequelize,
  modelName:'Follower',
  timestamps: false
})

module.exports = Follower