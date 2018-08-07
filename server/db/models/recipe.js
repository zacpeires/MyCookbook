const Sequelize = require('Sequelize')
const db = require('../db')

const Recipe = db.define('recipe', {
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
    allowNull: true
  },
  method: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  ingredients: {
    type: Sequelize.STRING(1234),
    allowNull: true
  },
  image: {
    type: Sequelize.STRING(1234),
    allowNull: true
  },
  url: {
    type: Sequelize.STRING(1234),
    allowNull: true
  }
})

module.exports = Recipe
