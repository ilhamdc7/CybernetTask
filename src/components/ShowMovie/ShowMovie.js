import React from 'react'
import Movie from '../Movie/Movie'

const ShowMovie = ({movies, addWatchedMovies}) => {
  return (
    <>
    {movies?.map((movie) => (
        <Movie movie={movie} EditFunction={addWatchedMovies}/>
    ))}
      
 
    </>
  )
}

export default ShowMovie