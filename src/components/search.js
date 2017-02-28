import React from 'react'
import { connect } from 'react-redux'
import { findMovies } from '../actions'

let Search = ({dispatch}) => {
  let input;
  return (
    <section className="search">
      <input ref={node => {input = node}} />
      <button type="button" onClick={()=>{
        findMovies(input.value, dispatch)
      }}>Search</button> 
    </section>
  )
}

Search = connect()(Search)

export default Search;