import React, { Component } from 'react'
import './../css/movie.css'

class Movie extends Component {
  constructor(){
    super();
    this.state = {}
  }
  componentWillMount() {
    if(this.props.movie)
      this.setState(this.props.movie);
  }
  render() {
    return (
      <article className="movie">
        <header className="title">
          <h2>{this.state.title}</h2>
        </header>
        <div>
          <section className="image">
            <img src={this.state.thumbnail} role="presentation" />
          </section>
          {/*<section className="storyline">
            <h4>Storyline</h4>
            <p>{this.state.storyline}</p>
          </section>*/}
        </div>
        {/*<section className="details">
          <h2>Details</h2>
          <p><span>Official Sites:</span><a href={this.state.url} target="_blank">Official site</a></p>
          <p><span>Country:</span>{this.movie.country}</p>
          <p><span>Language:</span>{this.movie.lenguage}</p>
          <p><span>Release Date:</span>{this.movie.release}</p>
        </section>*/}
      </article>
    );
  }
}

export default Movie;