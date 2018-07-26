const router = require('express').Router()
const { Cuisine, Recipe } = require('../db/models')
module.exports = router


router.get('/', async (req, res, next) => {
  try {

    const cuisines = await Cuisine.findAll()
    res.json(cuisines)


  } catch(error) {next(error)}
})


router.put('/add', async (req, res, next) => {
  try {

    let cusisine = cuisine.findOne({
      where: {
        name: req.body
      }
    })

    if (!cuisine) {

    let cuisine = await Cuisine.create(req.body.cuisine)
    const recipe = await Recipe.findOne({
      where: {
        name: req.body.recipeName
      }
    })
  }

    await recipe.addCuisine(cuisine)

    res.json(newCuisine)

  } catch(error) {next(error)}
})
