import axios from "axios";
import history from "../history";

const GET_USER_RECIPES = 'GET_USER_RECIPES'

const getUserRecipes = recipes => ({type: GET_USER_RECIPES, recipes})

const initialFavourites = {
  userFavourties: [],
  homeFavourites: []
}


export const gotUserRecipes = (id) => {
  return async dispatch => {
   const { data}  = await axios.get(`/api/favourites/user-recipes/${id}`)
   console.log(data)
   dispatch(getUserRecipes)
  }
}


export default (state = initialFavourites, action) => {
  switch (action.type) {
    case GET_USER_RECIPES:
      return {...state, userFavourties: action.recipes};
    default:
      return initialFavourites
  }
};
