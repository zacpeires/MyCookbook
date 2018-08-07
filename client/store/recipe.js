import axios from "axios";
import history from "../history";
import user from "./user";

const GET_RECIPES = "GET_RECIPES";
const GET_SINGLE_RECIPE = "GET_SINGLE_RECIPE"
const SCRAPE_RECIPE = "SCRAPE_RECIPE";
const ADD_RECIPE_TO_USER = "ADD_RECIPE_TO_USER"
const ADD_RECIPE_TO_HOME = "ADD_RECIPE_TO_HOME"

const scrapeRecipe = recipe => ({
  type: SCRAPE_RECIPE,
  recipe
});

const getRecipes = recipe => ({
  type: GET_RECIPES,
  recipe
})

const getSingleRecipe = recipe => ({
  type: GET_SINGLE_RECIPE,
  recipe
})

const addRecipeToUser = recipe => ({
  type: ADD_RECIPE_TO_USER,
  recipe
})

const addRecipeToHome = recipe => ({
  type: ADD_RECIPE_TO_HOME,
  recipe
})

const initialRecipes = {
  allRecipes: [],
  singleRecipe: {},
};

export const gotRecipes = () => {
  return async dispatch => {
   const { data } = await axios.get('/api/recipes')
   dispatch(getRecipes(data))
  }
}

export const gotSingleRecipe = (id) => {
  return async dispatch => {
    const { data } = await axios.get(`/api/recipes/${id}`)
    dispatch(getSingleRecipe(data))
  }
}

export const scrapedRecipe = (url) => {
  return async dispatch => {
    const { data } = await axios.post('/api/recipes/external', url)
    history.push(`/recipes/${data.id}`)
    dispatch(scrapeRecipe(data || initialRecipes.singleRecipe))

  };
};

export const recipeBelongsToUser = (userId, recipeName) => {
  return async dispatch => {
    const { data } = await axios.put('/api/recipes/add-to-user', {user: userId, recipe: recipeName})
    dispatch(addRecipeToUser(data))
  }
}

export const recipeBelongsToHome = (homeId, recipeName) => {
  return async dispatch => {
    const { data } = await axios.put('/api/recipes/add-to-home', {home: homeId, recipe: recipeName})
    dispatch(addRecipeToHome(data))
  }
}

export default (state = initialRecipes, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, allRecipes: action.recipe }
    case SCRAPE_RECIPE:
    const updatedRecipes = state.allRecipes.filter(recipe => {
      return recipe.name !== action.recipe.name
    })
      return {...state, allRecipes: [...updatedRecipes, action.recipe], singleRecipe: action.recipe };
    case GET_SINGLE_RECIPE:
      return {...state, singleRecipe: action.recipe}
    case ADD_RECIPE_TO_USER:
      return {...state, singleRecipe: action.recipe}
    case ADD_RECIPE_TO_HOME:
      return {...state, singleRecipe: action.recipe}
    default:
      return initialRecipes;
  }
};


/*
Sites that I can scrape from: BBCgoodFood, FoodNetwork;
Sites in progress: Allrecipes, Declicious Magazine;
Sites to do: Delicious magazine, Epicurious, Jamie Oliver,
*/
