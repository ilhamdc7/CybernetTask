import React, {useState} from 'react';
import './App.css';
import MovieInput from './components/MovieInput/MovieInput'
import ShowMovie from './components/ShowMovie/ShowMovie';
import WatchedMovies from './components/WatchedMovies/WatchedMovies';


function App() {


// Umumi olaraq, bu kimi datalar ucun butun komponentlerde el catan olmasi ucun Redux istifade olunmasi daha meqsede uygundur. 
// Development test oldugu ucun sadece parent-children elaqelerinden istifade ederek clean code anlayisindan istifade etmeye calisdim.
// Inputlarda Custom Hooks istifade etmek mumkun idi inputlarda.


const [movies, setMovies] = useState([])
const [watchedMovies, setWatchedMovies] = useState([])



const getUpdates = (data) => {
    setMovies([...movies, data])
}

const addWatchedMovies = (data) => {
  setWatchedMovies([...watchedMovies, data])
}

const deleteWatchedMovies = (data) => {
    const results = watchedMovies?.filter(data2 => data2?.title !== data.title)
    setWatchedMovies(results)
}


  return (
    <>
    <MovieInput getUpdates={getUpdates} />
    <ShowMovie movies={movies} addWatchedMovies={addWatchedMovies}/>
    <WatchedMovies movies={watchedMovies} deleteWatchedMovies={deleteWatchedMovies}/>
    </>

  );
}

export default App;
