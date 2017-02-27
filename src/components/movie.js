import React, { Component } from 'react'

class Movie extends Component {
  render() {
    if(!this.props.data)
      return null;
    
    let movieDetail = this.props.data;
    return (
      <article className="movie">
        <header className="title">
          <h2>{movieDetail.title}</h2>
        </header>
        <div>
          <section className="image">
            <img src={movieDetail.image} role="presentation" />
          </section>
          <section className="storyline">
            <h4>Description</h4>
            <p>{movieDetail.description}</p>
          </section>
        </div>
        <section className="details">
          <h2>Details</h2>
          <p><strong>Cast:</strong>{movieDetail.cast.join(', ')}</p>
          <p><strong>Geners:</strong>{movieDetail.genres.join(', ')}</p>
          <p><strong>Release Date:</strong>{movieDetail.released}</p>
          <p><strong>Duration:</strong>{movieDetail.duration}</p>
        </section>
      </article>
    );
  }
}

export default Movie;