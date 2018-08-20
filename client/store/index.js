import {createStore, combineReducers, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import recipe from './recipe'
import cuisine from './cuisine'
import favourites from './favourites'
// import home from './home'


const reducer = combineReducers({user, recipe, cuisine, favourites})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './recipe'
export * from './cuisine'
export * from './favourites'
