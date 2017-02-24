import React, { Component } from 'react';
import Header from './header';
import Search from './search';
import Movie from './movie';
import MovieList from './movies_list';
import MovieLoader from '../services/movie_loader'

const movieLoader = new MovieLoader('http://imdb.wemakesites.net/api/search');

class App extends Component {
  constructor(){
    super();
    this.state = { 
      movies: [],
      movie: null
    }
  }
  loadMovie(loader){
    loader.then(function(data) {this.setState({movie: data})}.bind(this));
  }
  update(query){
    movieLoader.getShortInfo(query)
    .then(response => response.data.results)
    .then(function(result) { this.setState({movies: result.titles}) }.bind(this))
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Search update={this.update.bind(this)} />
        <div className="movie-box">
          <MovieList movies={this.state.movies} loadData={this.loadMovie.bind(this)}/>
          <Movie data={this.state.movie} />
        </div>
      </div>
    );
  }
}


export default App;
