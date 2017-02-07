import React, { Component } from 'react';
import Header from './header';
import Movie from './movie'


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <section className="content">
          <Movie title="The LEGO Batman Movie"/>
        </section>
      </div>
    );
  }
}


export default App;
