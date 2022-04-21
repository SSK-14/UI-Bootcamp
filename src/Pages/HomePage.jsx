import React, { useContext } from "react";
import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import "./styles.css";
import AddForm from "./AddForm";
import { MovieContext } from "../Reducer/MovieContext";

const HomePage = () => {
  const [isAscending, setAscending] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { dispatch, movies, initialMovies } = useContext(MovieContext);
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let response = await fetch("https://api.tvmaze.com/shows");
        let data = await response.json();
        dispatch({
          type: "FETCH",
          payload: { data },
        });
      } catch (err) {
        console.log(err);
      }
    }

    fetchMyAPI();
  }, []);

  useEffect(() => {
    function filter() {
      dispatch({
        type: "FILTER",
        payload: { initialMovies, searchTerm, isAscending },
      });
    }

    filter();
  }, [searchTerm, isAscending, initialMovies]);

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
        <div>
          <AddForm />
        </div>
        {movies.length ? (
          <div className='movie-list'>
            {movies.map((movie) => (
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
