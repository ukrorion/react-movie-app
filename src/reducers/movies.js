const movies = (state = {movies: []}, action) => {
  debugger;
  switch(action.type){
    case 'RECEIVE_MOVIES':
      debugger;
      return {movies: action.movies}
    default:
      return state;
  }
}

export default movies;