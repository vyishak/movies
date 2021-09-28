import React, {useState, useEffect} from "react"
import axios from "axios"
import logo from './logo.svg';
import './App.css';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    try {
      const movies = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=40315881b5af1985a7ceba1f41b45973&language=en-US ")

      setMovies(movies.data.results)
    } catch(err) {
      console.log("err", err)
    }
  }

  function moviesDisplay() {
    return movies.map((movie, i) => 
    <>
        <div className="movies" key={i}>
            <div className="box-1">
                <img className="imgs" id={movie.adult ? 'adult' : ''} src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movie.poster_path} />
            </div>
            <div className="box-2">
                <h3>{movie.title}</h3>
                <p><strong>Language: </strong>{movie.original_language}</p>
                <p><strong>Description: </strong> {movie.overview.substring(1, 150)}...</p>
            </div>
        </div>
        </>
        )
  }

  return moviesDisplay()
}

export default Movies;
