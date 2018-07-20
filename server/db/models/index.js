const User = require('./user')
const Recipe = require('./recipe')
const Cuisine = require('./cuisine')
const Home = require('./home')

User.belongsToMany(Recipe, {through: 'user-recipes'})
Recipe.belongsToMany(User, {through: 'user-recipes'})
Cuisine.belongsToMany(Recipe, {through: 'food-types'})
Recipe.belongsToMany(Cuisine, {through: 'food-types'})
Home.hasMany(User)
User.belongsTo(Home)


module.exports = { User, Recipe, Home, Cuisine }
