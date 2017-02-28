import { combineReducers } from 'redux'
import movies from './movies'
import search from './search'

const moviesApp = combineReducers({
  movies,
  search
})

export default moviesApp