import React from 'react'
import { connect } from 'react-redux'

let MoviesList = ({movies, dispatch}) => {
  return (
    <div className="movie-list">
      {movies.map(movie => {
        return (
          <div className="movie-info" key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={movie.thumbnail} role="presentation" />
          </div>
          )
      })}
    </div>
  )
}

const mapStateToProps = ({ movies }, ownProps) => { return { movies } }

MoviesList = connect(mapStateToProps)(MoviesList);

export default MoviesList