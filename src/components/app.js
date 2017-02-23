import React, { Component } from 'react';
import Header from './header';
import Search from './search';
import MovieList from './movies_list';
import { searchShortInfo } from '../services/movie_loader';




class App extends Component {
  constructor(){
    super();
    this.state = { 
      movies: [],
      movie: null
    }
  }
  loadMovie(data){
    this.setState({movie: data});
  }
  update(query){
    searchShortInfo(query)
    .then(response => response.data.results)
    .then(function(result) { this.setState({movies: result.titles}) }.bind(this))
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Search update={this.update.bind(this)} />
        <div className="movie-box">
          <MovieList movies={this.state.movies} loadMovie={this.loadMovie.bind(this)}/>
          <section className="details">
            {this.state.movie}
          </section>
        </div>
      </div>
    );
  }
}


export default App;
