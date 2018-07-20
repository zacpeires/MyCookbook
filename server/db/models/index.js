const User = require('./user')
const Recipe = require('./recipe')
const Cuisine = require('./cuisine')
const Home = require('./home')

User.belongsToMany(Recipe, {through: 'userRecipes'})
Recipe.belongsToMany(User, {through: 'userRecipes'})
Cuisine.hasMany(Recipe)
Recipe.belongsTo(Cuisine)
Home.hasMany(User)
User.belongsTo(Home)


module.exports = { User, Recipe, Home }
