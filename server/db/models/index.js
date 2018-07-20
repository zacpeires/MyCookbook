const User = require('./user')
const Recipe = require('./recipe')
const Cuisine = require('./cuisine')
const Home = require('./home')

User.belongsToMany(Recipe, {through: 'userRecipes'})
Recipe.belongsToMany(User, {through: 'userRecipes'})
Cuisine.belongsToMany(Recipe, {through: 'foodType'})
Recipe.belongsToMany(Cuisine, {through: 'foodType'})
Home.hasMany(User)
User.belongsTo(Home)


module.exports = { User, Recipe, Home, Cuisine }
