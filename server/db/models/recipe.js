const Sequelize = require('Sequelize')
const db = require('../db')

const recipe = db.define('recipe', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ingredients: {
    type: Sequelize.STRING,
    allowNull: false
  },
  instructions: {
    type: Sequelize.STRING,
    allowNull: false
  }

})

module.exports = recipe
