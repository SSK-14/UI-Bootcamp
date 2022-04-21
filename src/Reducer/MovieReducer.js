import React from "react";

const sortAscending = (movieData) => {
  return movieData.sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });
};

const filter = ({ movieData, searchTerm }) => {
  let filterData = movieData.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filterData;
};

function MovieReducer(state, action) {
  switch (action.type) {
    case "ascending":
      return sortAscending(action.payload);
    case "decending":
      return sortAscending(action.payload).reverse;
    case "filter":
      state = filter(action.payload);
      return state;
    default:
      throw new Error();
  }
}

export default MovieReducer;
