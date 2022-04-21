import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import "./styles.css";

const HomePage = () => {
  const [movieData, setMovieData] = useState([]);
  const [isAscending, setAscending] = useState(true);
  const [filterMovieData, setFilterMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const sortAccending = (movieData) => {
    return movieData.sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
  };

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let response = await fetch("https://api.tvmaze.com/shows");
        let data = await response.json();
        setMovieData(data);
        setFilterMovie(sortAccending(data));
      } catch (err) {
        console.log(err);
      }
    }

    fetchMyAPI();
  }, []);

  useEffect(() => {
    function filter() {
      let filterData = movieData.filter((movie) =>
        movie.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      let sortedData = sortAccending(filterData);
      if (!isAscending) {
        sortedData = sortAccending(filterData).reverse();
      }
      setFilterMovie(sortedData);
    }

    filter();
  }, [searchTerm, isAscending, movieData]);

  return (
    <>
      <div className='nav-bar'>
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
            Accending
          </button>
          <button
            className='button'
            onClick={() => {
              setAscending(false);
            }}
          >
            Decending
          </button>
        </div>
      </div>

      <div className='movie-list'>
        {filterMovieData.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
