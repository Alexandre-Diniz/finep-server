const { Model, DataTypes } = require('sequelize')
const sequelize = require('../services/sequelize')

class UpdateProfile extends Model {}

UpdateProfile.init({
  screen_name: {
    type: DataTypes.STRING,
  },
  error:{
    type: DataTypes.BOOLEAN
  },
  error_message:{
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'UpdateProfile',
  timestamps: false
})

module.exports = {UpdateProfile}