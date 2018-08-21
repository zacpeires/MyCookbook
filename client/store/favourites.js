import axios from "axios";
import history from "../history";

const GET_USER_RECIPES = 'GET_USER_RECIPES'
const GET_HOME_RECIPES = 'GET_HOME_RECIPES'

const getUserRecipes = recipes => ({type: GET_USER_RECIPES, recipes})

const getHomeRecipes = recipes => ({type: GET_HOME_RECIPES, recipes})

const initialFavourites = {
  userFavourites: [],
  homeFavourites: []
}


export const gotUserRecipes = (id) => {
  return async dispatch => {
   const { data}  = await axios.get(`/api/favourites/user-recipes/${id}`)
   dispatch(getUserRecipes(data))
  }
}


export const gotHomeRecipes = (id) => {
  return async dispatch => {
   const { data}  = await axios.get(`/api/favourites/home-recipes/${id}`)
   dispatch(getHomeRecipes(data))
  }
}



export default (state = initialFavourites, action) => {
  switch (action.type) {
    case GET_USER_RECIPES:
      return {...state, userFavourites: action.recipes};
    case GET_HOME_RECIPES:
    console.log(state)
      return {...state, homeFavourites: action.recipes};
    default:
      return initialFavourites
  }
};
