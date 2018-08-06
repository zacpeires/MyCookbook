const router = require('express').Router();
const { Recipe, Cuisine } = require('../../db/models')
const { scrapeBBC, scrapeFoodNewtork, scrapeAllRecipes } = require('./functions')
module.exports = router

router.get('/', async (req, res, next) => {
  try {

    const recipes = await Recipe.findAll({
      include: [{model: Cuisine}]
    })

    console.log('calling')

    res.json(recipes)

  } catch (error) {next(error)}
})

router.get('/:recipeId', async (req, res, next) => {
  try {

    const recipe = await Recipe.findOne({
      where: {
        id: req.params.recipeId
      },
      include: [{model: Cuisine}]
    })

    res.json(recipe)
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

    } else if (req.body.recipe.includes('allrecipes')) {
      scrapedRecipe = await scrapeAllRecipes(req.body.recipe)
    }


    console.log(scrapedRecipe)

    const recipe = await Recipe.create({...scrapedRecipe, url: req.body.recipe})
    res.json(recipe)

   }
  } catch (error) {next(error)}
})
