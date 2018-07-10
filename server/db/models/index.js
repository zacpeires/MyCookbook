const User = require('./User')
const Recipe = require('./recipe')
const Cuisine = require('./cuisine')

User.belongsToMany(Recipe, {through: 'favourites'})
Recipe.belongsToMany(User, {through: 'favourites'}) //could make a custom join table for favourites that increments
Cuisine.hasMany(Recipe)
Recipe.belongsTo(Cuisine)


module.exports = { User, Recipe }
