const { Model, DataTypes } = require('sequelize')
const sequelize = require('../services/sequelize')

class Tweet extends Model {}

Tweet.init({
  text:{
    type: DataTypes.STRING
  },
  id_str:{
    type: DataTypes.STRING
  },
  tweet_id:{
    type: DataTypes.STRING
  },
  createdAt:{
    type: DataTypes.DATE
  }
},{
  sequelize,
  timestamps: false,
  modelName: 'Tweet'
})

module.exports = Tweet