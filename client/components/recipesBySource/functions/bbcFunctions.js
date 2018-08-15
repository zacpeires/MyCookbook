
const correctlyAlignIngredients = (ingredients) => {
  const refinedIngredients = []

  ingredients.forEach(ingredient => {
    if (ingredient[0] !== ",") {
      refinedIngredients.push(ingredient)
    } else {
      refinedIngredients[refinedIngredients.length - 1] += ingredient
    }
  })

  return refinedIngredients
}


export const nameSourceOfRecipeSource = url => {
  if (url.includes('bbc')) {
  return url.slice(12, 15).toUpperCase();
  }
}


export const formatMethod = (currentRecipe) => {

  let { name, description, details, nutrition, method, ingredients, url, cuisines } = currentRecipe


  method = method.split("\n").filter(instruction => {
    if (instruction.length) {
      return instruction
    }
  })

  ingredients = ingredients.split("\n").filter(ingredient => {
    if (ingredient.length) {
      return ingredient
    }
  })

  url = nameSourceOfRecipeSource(url)


  ingredients = correctlyAlignIngredients(ingredients)

  return { name, description, details, nutrition, method, ingredients, url, cuisines }
}


