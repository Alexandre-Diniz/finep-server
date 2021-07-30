const { Model, DataTypes } = require('sequelize')
const sequelize = require('../services/sequelize')

class MetaUpdateProfile extends Model {}

MetaUpdateProfile.init({
  size:{
    type: DataTypes.INTEGER
  }
},{
  sequelize,
  modelName: 'MetaUpdateProfile',
  timestamps: false
})

module.exports = { MetaUpdateProfile }