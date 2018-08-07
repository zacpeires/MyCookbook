const router = require("express").Router();
const { Recipe, Cuisine, User, Home } = require("../../db/models");
const {
  scrapeBBC,
  scrapeFoodNewtork,
  scrapeAllRecipes
} = require("./functions");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({
      include: [{ model: Cuisine }]
    });

    console.log("calling");

    res.json(recipes);
  } catch (error) {
    next(error);
  }
});

router.get("/:recipeId", async (req, res, next) => {
  try {
    const recipe = await Recipe.findOne({
      where: {
        id: req.params.recipeId
      },
      include: [{ model: Cuisine }]
    });

    res.json(recipe);
  } catch (error) {
    next(error);
  }
});

router.post("/external", async (req, res, next) => {
  try {
    const existingRecipe = await Recipe.findOne({
      where: {
        url: req.body.recipe
      }
    });

    if (existingRecipe) {
      res.json(existingRecipe);
    } else {
      let scrapedRecipe;
      if (req.body.recipe.includes("bbc")) {
        scrapedRecipe = await scrapeBBC(req.body.recipe);
      } else if (req.body.recipe.includes("foodnetwork")) {
        scrapedRecipe = await scrapeFoodNewtork(req.body.recipe);
      } else if (req.body.recipe.includes("allrecipes")) {
        scrapedRecipe = await scrapeAllRecipes(req.body.recipe);
      }

      console.log(scrapedRecipe)

      const recipe = await Recipe.create({
        ...scrapedRecipe,
        url: req.body.recipe
      });
      res.json(recipe);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/add-to-user", async (req, res, next) => {
  try {
    const userId = req.body.user
    const recipeName = req.body.recipe

    const recipe = await Recipe.findOne({
      where: {
        name: recipeName
      }
    })

    const user = await User.findOne({
      where: {
        id: userId
      }
    })

    await user.addRecipe(recipe)

    res.json(recipe)


  } catch(error) {next(error)}

});


router.put("/add-to-home", async (req, res, next) => {
  try {
    console.log('home')

    const homeId = req.body.home
    const recipeName = req.body.recipe

    const recipe = await Recipe.findOne({
      where: {
        name: recipeName
      }
    })

    const home = await Home.findOne({
      where: {
        id: homeId
      }
    })

    await home.addRecipe(recipe)

    res.json(recipe)


  } catch(error) {next(error)}

});
