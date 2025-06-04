import React from 'react'

const Search = ({searchTerm,setSearchTerm}) => {
  return (
    <div className='search border hover:border-violet-700'>
      <div>
        <img src="search.svg" alt="search" />
        <input type="text" className='font-[montserrat]' placeholder='Search through thousands of movies'
        value={searchTerm} 
        onChange={(e)=> setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Search
