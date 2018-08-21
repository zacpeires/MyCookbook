const Sequelize = require('Sequelize')
const db = require('../db')

const shoppingListItem = db.define('shoppingListItem', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  personal: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = shoppingListItem
