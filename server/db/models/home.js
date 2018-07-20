const Sequelize = require('Sequelize')
const db = require('../db')

const home = db.define('home', {
  postCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = home
