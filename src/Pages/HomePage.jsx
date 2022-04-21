import React from "react";
import { useState, useEffect, useReducer } from "react";
import MovieCard from "../Components/MovieCard";
import Banner from "../Components/Banner";
import "./styles.css";
import MovieReducer from "../Reducer/MovieReducer";

const HomePage = () => {
  const [movieData, setMovieData] = useState([]);
  const [isAscending, setAscending] = useState(true);
  const [filterMovieData, setFilterMovie] = useState([]);
  const [bannerMovieData, setBannerMovie] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [state, dispatch] = useReducer(MovieReducer, movieData);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let response = await fetch("https://api.tvmaze.com/shows");
        let data = await response.json();
        setMovieData(data);
        setFilterMovie(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMyAPI();
  }, []);

  useEffect(() => {
    function filter() {
      console.log(
        dispatch({
          type: "filter",
          payload: { movieData, searchTerm },
        })
      );
      // dispatch({ type: "ascending", payload: state });
      // if (!isAscending) {
      //   dispatch({ type: "decending", payload: state });
      // }
      setFilterMovie(state);
    }

    filter();
  }, [searchTerm, isAscending, movieData]);

  return (
    <>
      <div className='nav-bar'>
        <header className='App-header'>
          <h1>Movie Cards</h1>
        </header>
        <div className='search-box'>
          <input
            className='input-search'
            id='search'
            placeholder='Type to Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className='button-group'>
          <button
            className='button'
            onClick={() => {
              setAscending(true);
            }}
          >
            A - Z
          </button>
          <button
            className='button'
            onClick={() => {
              setAscending(false);
            }}
          >
            Z - A
          </button>
        </div>
      </div>
      <div>
        {filterMovieData.length ? (
          <div className='movie-list'>
            {filterMovieData.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        ) : (
          <div className='no-result'>
            <p>No Results Found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
