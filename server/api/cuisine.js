const router = require('express').Router()
const { Cuisine, Recipe } = require('../db/models')
module.exports = router


router.get('/', async (req, res, next) => {
  try {

    const cuisines = await Cuisine.findAll()
    res.json(cuisines)


  } catch(error) {next(error)}
})


router.post('/', async (req, res, next) => {
  try {

    // may have to loop through array or objects, depending on the input type

    const newCuisine = await Cuisine.create(req.body.cuisine)
    const recipe = await Recipe.findOne({
      where: {
        name: req.body.recipeName
      }
    })

    await recipe.addCuisine(newCuisine)

    res.json(newCuisine)

  } catch(error) {next(error)}
})
