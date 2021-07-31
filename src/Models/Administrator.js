const { Model, DataTypes } = require('sequelize')
const sequelize = require('../services/sequelize')

class Administrator extends Model {}

Administrator.init({
  uid:{
    type: DataTypes.STRING
  }
},{
  sequelize,
  modelName: 'Administrator',
  timestamps: false
})

module.exports = { Administrator }