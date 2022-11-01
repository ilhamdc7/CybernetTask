import React, {useState} from 'react'
import './movieInput.css'

const MovieInput = ({getUpdates}) => {


    const [movie, setMovie] = useState(emptyMovie())

    const addMovie = () => {  
        getUpdates(movie)
    }


    function emptyMovie(){
        return{
            title: '',
            description: '',
            image: ''
        }
    }


  return (
    
    <div className="App">
      <h1>Reactive Movies!</h1>
      <h1>Add movie!</h1>
      <b>TITLE:<br /><input type="text" onChange={(e) => setMovie({...movie, title: e.target.value})} /></b><br />
      <b>IMAGE URL:<br /><input type="text" onChange={(e) => setMovie({...movie, image: e.target.value})} /></b><br />
      <b>COMMENT:<br /><input type="text" onChange={(e) => setMovie({...movie, description: e.target.value})} /></b><br />
      <input type="button" onClick={() => addMovie()} value="ADD MOVIE" />
    </div>
    
  )
}

export default MovieInput