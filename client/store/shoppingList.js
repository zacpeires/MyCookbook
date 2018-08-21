import axios from 'axios'
import history from '../history'

const GET_SHOPPING_LIST = 'GET_SHOPPING_LIST'
const ADD_ITEM = 'ADD_ITEM'

const defaultShoppingList = {
  allItems: [],
  singleItem: {}
}

const getShoppingList = list => ({
  type: GET_SHOPPING_LIST,
  list
})

const addItem = item => ({
  type: ADD_ITEM,
  item
})

export const gotShoppingList = userId => {
  return async dispatch => {
    const { data } = await axios.get(`/api/shopping-list-items/${userId}`)
   dispatch(getShoppingList(data))
  }
}

export const addedItem = (userId, item) => {
  return async dispatch => {
    const { data } = await axios.post(`/api/shopping-list-items/add/${userId}`, item)
    dispatch(addItem(data))
  }
}

export default (state = defaultShoppingList, action) => {
  switch(action.type) {
    case GET_SHOPPING_LIST:
      return {...state, allItems: action.list}
    case ADD_ITEM:
      return {...state, singleItem: action.item, allItems: [...state.allItems, action.item]}
    default:
      return defaultShoppingList
  }
}
