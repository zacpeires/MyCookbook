const Sequelize = require('Sequelize')
const db = require('../db')

const Cuisine = db.define('cuisine', {
  type: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Cuisine
