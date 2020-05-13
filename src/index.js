//// Assign a behaviour to an Algolia Search form
const placeInput = document.querySelector("#place");

// Add a listener (behaviour) to the algolia input
placeInput.addEventListener("keyup", (event) => {
  const userInput = event.currentTarget.value;

  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: userInput })
  }).then(response => response.json())
    .then((data) => {
      console.log(data)
    })
})

//// Assing a movie search behaviour to the Find movies form
const results = document.querySelector("#results");
const search = document.querySelector("#search-movies");

const keyword_input = document.querySelector("#keyword");

const fetchAndDisplayMovies = (user_input) => {
  // Cleanup results
  results.innerHTML = "";

  fetch(`http://www.omdbapi.com/?s=${user_input}&apikey=adf1f2d7`)
    .then((response => response.json())) // <--- parsing response
    .then((data) => {
      // data => { Search: [] }
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
      })
    });
}


// search #=> form
search.addEventListener("submit", (event) => {
  event.preventDefault();
  const user_input = keyword_input.value;
  fetchAndDisplayMovies(user_input); // <-----
});

fetchAndDisplayMovies("harry potter");
