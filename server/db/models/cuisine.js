const Sequelize = require('Sequelize')
const db = require('../db')

const cuisine = db.define('cusine', {
  type: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = cuisine
