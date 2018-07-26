import axios from "axios";
import history from "../history";

const ADD_CUISINE = "ADD_CUISINE";

const addCuisine = cuisine => ({
  type: ADD_CUISINE,
  cuisine
})

export const addedCuisineToRecipe = cuisine => {
  return dispatch => {
    const { data } = axios.put('/api/cuisines/add', cuisine)
    dispatch(addCuisine(data))
  }
}

const initialCuisines = {
  allCuisines: [],
  singleCuisine: {}
};


export default (state = initialCuisines, action) => {
  switch (action.type) {
    case ADD_CUISINE:
      return {...state, singleCuisine: action.cuisine}
    default:
      return initialCuisines;
  }
};


