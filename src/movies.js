// movies.js
const results = document.querySelector("#results");
const keywordInput = document.querySelector("#keyword");

const insertMovie = (movie) => {
  const movieTag = `
    <li class="list-inline-item">
      <img src="${movie.Poster}"/>
      <p>${movie.Title}</p>
    </li>
  `;
  results.insertAdjacentHTML("beforeEnd", movieTag);
}

const fetchAndDisplayMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    // TODO: Abstract this
    .then((data) => {
      const movies = data.Search; // => []
      movies.forEach(insertMovie);
    });
};

const handleMoviesSearch = (event) => {
  event.preventDefault();
  results.innerHTML = "";
  const userInput = keywordInput.value;
  fetchAndDisplayMovies(userInput);
}

export { fetchAndDisplayMovies, handleMoviesSearch };
