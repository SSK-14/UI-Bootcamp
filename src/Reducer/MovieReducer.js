const sortAscending = (movieData) => {
  return movieData.sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });
};

const filter = ({ movieData, searchTerm, isAscending }) => {
  let sort;
  let filterData = movieData.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  sort = sortAscending(filterData);
  if (!isAscending) {
    sort = sortAscending(filterData).reverse();
  }
  return sort;
};

function MovieReducer(state, action) {
  switch (action.type) {
    case "filter":
      state = filter(action.payload);
      return state;
    default:
      throw new Error();
  }
}

export default MovieReducer;
