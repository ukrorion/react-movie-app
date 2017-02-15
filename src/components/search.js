import React, { Component } from 'react'

class Search extends Component {
  search(){
    this.props.update(this.refs.search.value);
  }
  render(){
    return (
      <section className="search">
        <input ref="search" />
        <button type="button" onClick={this.search.bind(this)}>Search</button>
      </section>
    );
  }
}

export default Search;