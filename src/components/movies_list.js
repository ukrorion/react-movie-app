import React, { Component } from 'react'
import { getMovieDetails } from '../services/movie_loader';


class MoviesList extends Component {
  loadMovie(e){
    let id = e.currentTarget.getAttribute('id');

    getMovieDetails(id)
      .then(response => response.data.results)
      .then(function(result) { this.props.loadMovie(result) }.bind(this))
  }
  render() {
    let movies = this.props.movies;
    return (
      <section className="movies-list">
          {movies.map( (movie) => {
          return (
            <article className="movie" id={movie.id} key={movie.id} onClick={this.loadMovie.bind(this)}>
              <header className="title">
                <h2>{movie.title}</h2>
              </header>
              <section className="image">
                <img src={movie.thumbnail} role="presentation" />
              </section>
            </article>
          )
          })}
      </section>
    );
  }
}

export default MoviesList;