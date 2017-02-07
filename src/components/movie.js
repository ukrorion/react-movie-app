import React, { Component } from 'react'
import styles from './../css/movie.css'

class Movie extends Component {
  constructor(){
    super();
    this.state = {
      title: "The LEGO Batman Movie",
      storyline: "There are big changes brewing in Gotham City, and if he wants to save the city from The Joker's hostile takeover, Batman may have to drop the lone vigilante thing, try to work with others and maybe, just maybe, learn to lighten up.",
      details: {
        link: "http://www.legobatman.com/",
        country: "Denmark | USA",
        lenguage: "English",
        release: "10 February 2017 (USA)"
      }
    }
  }
  render() {
    let details = this.state.details;
    return (
      <article className="movie">
        <header className="title">
          <h2>{this.state.title}</h2>
        </header>
        <div>
          <section className="image">
            <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_UX182_CR0,0,182,268_AL_.jpg" />
          </section>
          <section className="storyline">
            <h4>Storyline</h4>
            <p>{this.state.storyline}</p>
          </section>
        </div>
        <section className="details">
          <h2>Details</h2>
          <p><span>Official Sites:</span><a href={details.link} target="_blank">Official site</a></p>
          <p><span>Country:</span>{details.country}</p>
          <p><span>Language:</span>{details.lenguage}</p>
          <p><span>Release Date:</span>{details.release}</p>
        </section>
      </article>
    );
  }
}

export default Movie;