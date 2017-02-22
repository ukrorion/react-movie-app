import React, { Component } from 'react'

class MoviesList extends Component {
  render() {
    let movies = this.props.movies;
    return (
      <section className="movies-list">
          {movies.map( (movie) => {
          return (
            <article className="movie" id={movie.id} key={movie.id}>
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