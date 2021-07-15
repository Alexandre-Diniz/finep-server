const { DataTypes, Model } = require('sequelize')
const sequelize = require('../services/sequelize')

class Mention extends Model{}

Mention.init({
  count: DataTypes.INTEGER,
  max_id_str: DataTypes.TEXT,
  id_str: DataTypes.TEXT
},{
  sequelize,
  modelName:'Mention',
  timestamps: false
})

module.exports = Mention