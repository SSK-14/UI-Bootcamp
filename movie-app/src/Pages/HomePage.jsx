import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";

const HomePage = () => {
  const [movieData, setMovieData] = useState([]);
  const [isAscending, setAscending] = useState(false);
  const [filterMovieData, setFilterMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    const sortAccending = () => {
      console.log("hello");
      let sortedData = filterMovieData.sort((a, b) => {
        return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
      });
      console.log(sortedData);
      setFilterMovie(sortedData);
    };

    function filter() {
      setFilterMovie(
        movieData.filter((movie) =>
          movie.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

      if (isAscending) {
        sortAccending();
      }
    }

    filter();
  }, [searchTerm, isAscending]);

  return (
    <>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={() => {
          setAscending(true);
        }}
      >
        Accending
      </button>
      <button>Decending</button>
      {filterMovieData.map((element) => (
        <MovieCard key={element.id} {...element} />
      ))}
    </>
  );
};

export default HomePage;
