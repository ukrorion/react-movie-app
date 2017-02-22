import React, { Component } from 'react'

class MoviesList extends Component {
  render() {
    let movies = this.props.movies;
    return (
      <div className="movies-list">
          {movies.map( (movie) => {
          return (
            <article className="movie" id={movie.id} key={movie.id}>
              <header className="title">
                <h2>{movie.title}</h2>
              </header>
              <div>
                <section className="image">
                  <img src={movie.thumbnail} role="presentation" />
                </section>
              </div>
            </article>
          )
          })}
      </div>
    );
  }
}

export default MoviesList;