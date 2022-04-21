import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import Banner from "../Components/Banner";
import "./styles.css";

const HomePage = () => {
  const [movieData, setMovieData] = useState([]);
  const [isAscending, setAscending] = useState(true);
  const [filterMovieData, setFilterMovie] = useState([]);
  const [bannerMovieData, setBannerMovie] = useState();
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
        setBannerMovie(data[0]);
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
      setBannerMovie(sortedData[0]);
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
        {/* {typeof bannerMovieData !== "undefined" ? (
          <Banner {...bannerMovieData} />
        ) : null} */}
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
