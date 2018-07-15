const router = require('express').Router();
const { Recipe } = require('../../db/models')
const { scrapeBBC } = require('./functions')

module.exports = router

router.get('/', async (req, res, next) => {
  try {

    console.log('testing')
    const recipes = await Recipe.findAll()

    res.json(recipes)

  } catch (error) {next(error)}
})

router.post('/external', async (req, res, next) => {
  try {

    let scrapedRecipe;
    if (req.body.recipe.includes('bbc')) {
      scrapedRecipe = await scrapeBBC(req.body.recipe)
    }

    const newRecipe = await Recipe.findOne({
      where: {
        url: req.body.recipe
      }
    })

    if (!newRecipe) {
    const recipe = await Recipe.create({...scrapedRecipe, url: req.body.recipe})

    res.json(recipe)
  } else {
    next();
  }


  } catch (error) {next(error)}
})
