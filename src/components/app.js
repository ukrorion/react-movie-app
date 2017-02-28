import React from 'react';
import Header from './header';
import Search from './search';
import MoviesList from './movie_list';




let App = () => {
  return (
    <div className="app">
      <Header />
      <Search />
      <MoviesList />
    </div>
  );
}

export default App;
