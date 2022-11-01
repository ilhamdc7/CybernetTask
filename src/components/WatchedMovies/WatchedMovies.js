import React from 'react'
import Movie from '../Movie/Movie'

const WatchedMovies = ({movies,deleteWatchedMovies}) => {
  return (
    <>
    {movies?.length >= 1 &&
        <h1 style={{marginLeft: 'auto', marginRight: 'auto'}}>Baxilan filmler</h1>
        // SEO ucun menfi oldugunu bilirem, zamandan dolayi burda yazmisam inline olaraq.
    }
    {movies?.map((movie) => (
        <Movie movie={movie} EditFunction={deleteWatchedMovies}/>
    ))}
     
 
    </>
  )
}

export default WatchedMovies