const User = require('./user')
const Recipe = require('./recipe')
const Cuisine = require('./cuisine')
const Home = require('./home')

User.belongsToMany(Recipe, {through: 'user-recipes'})
Recipe.belongsToMany(User, {through: 'user-recipes'})
Recipe.belongsToMany(Home, {through: 'home-recipes'})
Home.belongsToMany(Recipe, {through: 'home-recipes'})
Cuisine.belongsToMany(Recipe, {through: 'food-types'})
Recipe.belongsToMany(Cuisine, {through: 'food-types'})
User.belongsTo(Home)
Home.hasMany(User)

// recipe has many picture
// home has many picture
// user has many home

module.exports = { User, Recipe, Home, Cuisine }
