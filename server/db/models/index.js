const User = require('./user')
const Recipe = require('./recipe')
const Cuisine = require('./cuisine')
const Home = require('./home')

User.belongsToMany(Recipe, {through: 'favourites'})
Recipe.belongsToMany(User, {through: 'favourites'})
Cuisine.hasMany(Recipe)
Recipe.belongsTo(Cuisine)
Home.hasMany(User)
User.belongsTo(Home)


module.exports = { User, Recipe, Home }
