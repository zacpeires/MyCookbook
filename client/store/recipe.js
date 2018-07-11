import axios from "axios";
import history from "../history";

const GET_RECIPE = "GET_RECIPE";
const SCRAPE_RECIPE = "SCRAPE_RECIPE";

const scrapeRecipe = recipe => ({
  type: SCRAPE_RECIPE,
  recipe
});

const initialRecipes = {
  allRecipes: [],
  scrapedRecipe: {}
};

export const scrapedRecipe = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/recipe/external');
    dispatch(scrapeRecipe(data));
  };
};

export default (state = initialRecipes, action) => {
  switch (action.type) {
    case SCRAPE_RECIPE:
      return { ...state, scrapedRecipe: action.recipe };
    default:
      return initialRecipes;
  }
};
