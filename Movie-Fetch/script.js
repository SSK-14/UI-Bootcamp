let movieList = [];
let firstMovie = {};

async function fetchMovieList() {
  let response = await fetch("https://api.tvmaze.com/shows");
  movieList = await response.json();
}

async function fetchFirstMovie() {
  let response = await fetch("https://api.tvmaze.com/shows/1");
  firstMovie = await response.json();
}

let movieItemList = document.getElementById("movie-list");

const showDetails = (movie) => {
  let displayImage = document.getElementById("display-image");
  displayImage.src = movie.image.medium;

  let movieDesc = document.getElementById("movie-desc");
  movieDesc.innerHTML =
    "<strong>" +
    movie.name +
    "</strong>" +
    "</br> Language:" +
    movie.language +
    "</br> Runtime: " +
    movie.runtime;
};

async function showMoviesList() {
  await fetchMovieList();
  for (let movie of movieList) {
    let li = document.createElement("li");
    li.classList.add("flex-item");

    let figure = document.createElement("figure");
    figure.addEventListener("click", () => {
      showDetails(movie);
    });

    let img = document.createElement("img");
    img.src = movie.image.medium;
    img.style = "height: 250px; width: 250px;";

    let figCaption = document.createElement("figcaption");
    figCaption.innerHTML = movie.name;
    figCaption.style = "padding:5px; background-color: white";

    figure.style =
      "border: 1px rgb(43, 43, 43) solid; width: fit-content;";
    figure.appendChild(img);
    figure.appendChild(figCaption);

    li.appendChild(figure);
    movieItemList.appendChild(li);
  }
}

showFirstMovie = async () => {
  await fetchFirstMovie();
  showDetails(firstMovie);
};

showMoviesList();
showFirstMovie();
