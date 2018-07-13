const router = require('express').Router();
const { Recipe } = require('../../db/models')
const { scrapeBBC } = require('./functions')
const puppeteer = require('puppeteer')


module.exports = router

router.get('/', async (req, res, next) => {
  try {

    const recipes = await Recipe.findAll()
    res.json(recipes)

  } catch(error) {next(error)}
})

router.post('/external', async (req, res, next) => {
  try {

    let scrapedRecipe;
    if (req.body.recipe.includes('bbc')) {
      scrapedRecipe = await scrapeBBC(req.body.recipe)
    }


    console.log(scrapedRecipe)

    // const recipe = await Recipe.create({...scrapedRecipe, url: req.body})
    // res.json(recipe)

  } catch(error) {next(error)}
})
