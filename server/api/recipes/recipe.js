const router = require('express').Router();
const { Recipe } = require('../../db/models')
const { scrapeBBC, scrapeFoodNewtork } = require('./functions')

module.exports = router

router.get('/', async (req, res, next) => {
  try {

    const recipes = await Recipe.findAll()

    res.json(recipes)

  } catch (error) {next(error)}
})

router.post('/external', async (req, res, next) => {
  try {

   const existingRecipe = await Recipe.findOne({
      where: {
        url: req.body.recipe
      }
    })

    if (existingRecipe) {
      res.json(existingRecipe)
    } else {

    let scrapedRecipe;
    if (req.body.recipe.includes('bbc')) {
      scrapedRecipe = await scrapeBBC(req.body.recipe)
    } else if (req.body.recipe.includes('foodnetwork'))
    {
      scrapedRecipe = await scrapeFoodNewtork(req.body.recipe)
    }

    console.log(scrapedRecipe)

    const recipe = await Recipe.create({...scrapedRecipe, url: req.body.recipe})
    res.json(recipe)

   }
  } catch (error) {next(error)}
})
