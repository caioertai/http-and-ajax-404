// // Assign a behaviour to an Algolia Search form
const placeInput = document.querySelector("#place");

// Add a listener (behaviour) to the algolia input
placeInput.addEventListener("keyup", (event) => {
  const userInput = event.currentTarget.value;

  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: userInput })
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
    });
});

// // Assing a movie search behaviour to the Find movies form
const results = document.querySelector("#results");
const search = document.querySelector("#search-movies");

const keywordInput = document.querySelector("#keyword");

const fetchAndDisplayMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      const movies = data.Search; // => []

      movies.forEach((movie) => {
        const movieTag = `
          <li class="list-inline-item">
            <img src="${movie.Poster}"/>
            <p>${movie.Title}</p>
          </li>
        `;

        // Adding movie
        results.insertAdjacentHTML("beforeEnd", movieTag);
      });
    });
};


// search #=> form
search.addEventListener("submit", (event) => {
  event.preventDefault();
  results.innerHTML = "";
  const userInput = keywordInput.value;
  fetchAndDisplayMovies(userInput);
});

fetchAndDisplayMovies("harry potter");
