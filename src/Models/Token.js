const { Model, DataTypes } = require('sequelize')
const sequelize = require('../services/sequelize')

class Token extends Model{}

Token.init({
  email:{
    type: DataTypes.STRING,
    allowNull: false
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Token',
  timestamps: false
})

module.exports = Token