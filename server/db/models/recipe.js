const Sequelize = require('Sequelize')
const db = require('../db')

const recipe = db.define('recipe', {
  name: {
    type: Sequelize.STRING(1234),
    allowNull: false
  },
  details: {
    type: Sequelize.STRING(1234),
    allowNull: true
  },
  description: {
    type: Sequelize.STRING(1234),
    allowNull: true
  },
  nutrition: {
    type: Sequelize.STRING(1234),
    allowNull: false
  },
  method: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  ingredients: {
    type: Sequelize.STRING(1234),
    allowNull: false
  },
  url: {
    type: Sequelize.STRING(1234),
    allowNull: false
  }
})

module.exports = recipe
