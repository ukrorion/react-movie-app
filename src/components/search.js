import React, { Component } from 'react'

class Search extends Component {
  constructor(){
    super();
    this.state = {
      search_phrase: ""
    }
  }
  search(){

  }
  render(){
    return (
      <section className="search">
        <input idName="search_input" />
        <button type="submit">Search</button>
      </section>
    );
  }
}

export default Search;