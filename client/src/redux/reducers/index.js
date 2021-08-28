import { combineReducers } from "redux"

import pokemons from './cards'
import favorites from './favorites'


const rootReducer = combineReducers({
  pokemons,
  favorites
})

export default rootReducer