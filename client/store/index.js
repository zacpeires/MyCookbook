import {createStore, combineReducers, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadState, saveState } from './localStorage'
import user from './user'
import recipe from './recipe'
import cuisine from './cuisine'
import favourites from './favourites'
import shoppingList from './shoppingList'
// import home from './home'


const reducer = combineReducers({user, recipe, cuisine, favourites, shoppingList})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

/* saveState is not working properly - try using combined reducer. If combining reducers is effective, delete LocalStorage.js */

const persistedState = loadState();
const store = createStore(reducer, persistedState, middleware)

store.subscribe(() => {
  saveState(store.getState());
});

export default store
export * from './user'
export * from './recipe'
export * from './cuisine'
export * from './favourites'
export * from './shoppingList'
