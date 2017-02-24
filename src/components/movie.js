import React, { Component } from 'react'

class Movie extends Component {
  constructor(){
    super();
    this.state = {}
  }
  componentWillMount() {
    if(this.props.data)
      this.setState(this.props.data);
  }
  componentWillUpdate(nextProps, nextState) {
    if(nextProps.data)
      this.setState({movie: nextProps.data});
  }
  render() {
    if(!this.state.movie){
      return null;
    } 
    let movieDetail = this.state.movie;
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
          {/*<p><span>Cast:</span>{movieDetail.cast.join(', ')}</p>*/}
          {/*<p><span>Geners:</span>{movieDetail.geners.join(', ')}</p>*/}
          <p><span>Release Date:</span>{movieDetail.release}</p>
          <p><span>Duration:</span>{movieDetail.duration}</p>
        </section>
      </article>
    );
  }
}

export default Movie;