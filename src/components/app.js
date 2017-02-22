import React, { Component } from 'react';
import jQuery from 'jquery';
import Header from './header';
import Search from './search';
import MovieList from './movies_list';

let getShortInfo = (search) => {
    return jQuery.ajax({
      url: 'http://imdb.wemakesites.net/api/search',
      dataType: 'jsonp',
      crossDomain: true,
      data: {
        api_key: 'dc8b3c1c-2a30-4639-be6c-9b3c183f6485',
        q: search
      }
    })
  }


class App extends Component {
  constructor(){
    super();
    this.state = { movies: [] }
  }
  update(query){
    getShortInfo(query)
    .then(response => response.data.results)
    .then(function(result) { this.setState({movies: result.titles}) }.bind(this))
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Search update={this.update.bind(this)} />
        <div className="movie-box">
          <MovieList movies={this.state.movies} />
          <section className="details">
            Test
          </section>
        </div>
      </div>
    );
  }
}


export default App;
