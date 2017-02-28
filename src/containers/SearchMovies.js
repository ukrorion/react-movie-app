import { connect } from 'react-redux'
import { search } from '../actions/index'
import Search from '../components/search'

const searchMovies = (movies, query) => {

}

const mapStateToProps = (state) => {
  return {
    todos: searchMovies(state.movies, state.query)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchClick: (query) => {
      dispatch(search(query))
    }
  }
}