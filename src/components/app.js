import React, { Component } from 'react';
import Header from './header';
import Search from './search';
import Movie from './movie';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <section className="content">
          <Search url="http://imdb.wemakesites.net/api/search" />
          <Movie />
        </section>
      </div>
    );
  }
}


export default App;
