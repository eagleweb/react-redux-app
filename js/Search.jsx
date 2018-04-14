import React from 'react'
import ShowCard from './ShowCard'
import preload from '../data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
          {preload.shows.map((show) => <ShowCard {...show} key={show.imdbID}/>)}
      </div>
    )
  }
});

export default Search;
