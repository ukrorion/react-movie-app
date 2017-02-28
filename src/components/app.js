import React from 'react';
import Header from './header';
import Search from './search';
// import Movie from './movie';
import MoviesList from './movie_list';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Search />
      <MoviesList />
    </div>
  );
}


export default App;
