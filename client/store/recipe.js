import axios from "axios";
import history from "../history";

const GET_RECIPE = "GET_RECIPE";
const SCRAPE_RECIPE = "SCRAPE_RECIPE";

const scrapeRecipe = recipe => ({
  type: SCRAPE_RECIPE,
  recipe
});

const getRecipes = recipe => ({
  type: GET_RECIPE,
  recipe
})

const initialRecipes = {
  allRecipes: [],
  scrapedRecipe: {}
};

export const gotRecipes = () => {
  return async dispatch => {
   const { data } = await axios.get('/api/recipes')
   dispatch(getRecipes(data))
  }
}

export const scrapedRecipe = (url) => {
  return async dispatch => {
    const { data } = await axios.post('/api/recipes/external', url)
    dispatch(scrapeRecipe(data))
    history.push('/user-recipe')
  };
};

export default (state = initialRecipes, action) => {
  switch (action.type) {
    case GET_RECIPE:
    console.log(state)
      return { ...state, allRecipes: action.recipe }
    case SCRAPE_RECIPE:
      return {...state, allRecipes: [...state.allRecipes, action.recipe], scrapedRecipe: action.recipe };
    default:
      return initialRecipes;
  }
};

