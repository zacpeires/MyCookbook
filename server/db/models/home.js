const Sequelize = require('Sequelize')
const db = require('../db')

const Home = db.define('home', {
  postCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  // numberOfPeople: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false
  // },
  // turnToCook: {
  //   type: Sequelize.BOOLEAN,
  //   allowNull: true
  // }
})

module.exports = Home
