import React, { Component } from 'react'

class Movie extends Component {
  render(){
    return (
      <article className="movie">
        <header className="title">
          <h2>{this.props.title}</h2>
        </header>
      </article>
    );
  }
}

export default Movie;