const searchInput = document.querySelector("#search");
const moviesContainer = document.querySelector("#movies");

const apiKey = "c71024fed2714ead52f86269295b509a";
const baseUrl = "https://api.themoviedb.org/3";

// ------------------------------
// SEARCH MOVIES
// ------------------------------
async function searchMovies(query) {
    try {
        const response = await fetch(
            `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`
        );

        const data = await response.json();
        displayMovies(data.results);

    } catch (error) {
        console.error(error);
    }
}

// ------------------------------
// DISPLAY
// ------------------------------
function displayMovies(movies) {
    moviesContainer.innerHTML = "";

    movies.forEach(movie => {
        moviesContainer.innerHTML += `
            <div class="movie-card">
                <img loading="lazy"
                    src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
                    alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.release_date}</p>
                <p>⭐ ${movie.vote_average}</p>
            </div>
        `;
    });
}

searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();

    if (query.length > 2) {
        searchMovies(query);
    }
});