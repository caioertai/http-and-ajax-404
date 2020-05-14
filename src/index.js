// Importing plugins or modules
import { fetchAndDisplayMovies, handleMoviesSearch } from "./movies";
import { initSortable } from "./plugins/init_sortable";
import { initMarkdown } from "./plugins/init_markdown";
import { initSelect2 } from "./plugins/init_select2";

// Assigning behaviors
const search = document.querySelector("#search-movies");
search.addEventListener("submit", handleMoviesSearch);

// Initializing plugins
initSortable();
initMarkdown();
initSelect2();

// Ajax calls
fetchAndDisplayMovies("harry potter");
