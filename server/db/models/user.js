const Sequelize = require('sequelize')
const db = require('../db')


const user = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
  }
  },
  admin: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  }
})

module.exports = user
