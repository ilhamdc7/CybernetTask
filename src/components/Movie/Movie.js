import React from 'react'

const Movie = ({movie, EditFunction}) => {
  return (
    <>
        <div className="all">
        <div>
          <img src={movie.image} height="100px" alt={`${movie.title}`}/>
        </div>
        <span>
          <button className="movie-watched" onClick={() => EditFunction(movie)}>
            {movie.title}
          </button>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    </>
  )
}

export default Movie