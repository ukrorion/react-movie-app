import MovieLoader from '../services/movie_loader'
const movieLoader = new MovieLoader('http://imdb.wemakesites.net/api/search');

export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const searchMovies = (query) => {
  return {
    type: SEARCH_MOVIES,
    query
  }
}

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const receiveMovies = (query, movies) => {
  return {
    type: RECEIVE_MOVIES,
    query,
    movies
  }
}

export function findMovies(query, dispatch){
  dispatch(searchMovies(query))
  return movieLoader.getShortInfo(query)
  .then(response => response.data.results)
  .then(result => { debugger; dispatch(receiveMovies(query, result.titles))})
}