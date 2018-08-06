const router = require("express").Router();
const { Cuisine, Recipe } = require("../db/models");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const cuisines = await Cuisine.findAll();
    res.json(cuisines);
  } catch (error) {
    next(error);
  }
});

router.put("/add", async (req, res, next) => {
  try {
    const existingCuisine = await Cuisine.findOne({
      where: {
        type: req.body.label
      }
    });

    const recipe = await Recipe.findOne({
      where: {
        name: req.body.recipe.name
      }
    });

    if (existingCuisine) {
      await existingCuisine.addRecipe(recipe);
      res.json(existingCuisine);
    } else {
      const cuisine = await Cuisine.create({ type: req.body.label });

      await cuisine.addRecipe(recipe);

      res.json(cuisine);
    }
  } catch (error) {
    next(error);
  }
});
