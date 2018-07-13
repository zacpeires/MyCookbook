const Sequelize = require('Sequelize')
const db = require('../db')

const home = db.define('home', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = home
