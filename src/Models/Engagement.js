const { DataTypes, Model } = require('sequelize')
const sequelize = require('../services/sequelize')

class Engagement extends Model{}

Engagement.init({
  retweet_count: DataTypes.INTEGER,
  favorite_count: DataTypes.INTEGER,
  createdAt: DataTypes.DATE,
  consulted_in: DataTypes.DATE,
  id_str: DataTypes.STRING,
  last_id_str: DataTypes.STRING
},{
  sequelize,
  modelName:'Engagement',
  timestamps: false
})

module.exports = Engagement