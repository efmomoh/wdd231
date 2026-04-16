const apiKey = "c71024fed2714ead52f86269295b509a";
const baseUrl = "https://api.themoviedb.org/3";

export async function loadGenres() {
    const genresContainer = document.querySelector("#genres");
    const moviesContainer = document.querySelector("#movies");

    if (!genresContainer || !moviesContainer) return;

    const res = await fetch(`${baseUrl}/genre/movie/list?api_key=${apiKey}`);
    const data = await res.json();

    genresContainer.innerHTML = "";

    data.genres.forEach(genre => {
        const btn = document.createElement("button");
        btn.textContent = genre.name;

        btn.addEventListener("click", async () => {
            const res = await fetch(
                `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${genre.id}`
            );

            const data = await res.json();

            moviesContainer.innerHTML = "";

            data.results.forEach(movie => {
                const div = document.createElement("div");
                div.className = "movie-card";

                div.innerHTML = `
                    <img
                    src="https://image.tmdb.org/t/p/w185${movie.poster_path}"
                    srcset="
                        https://image.tmdb.org/t/p/w185${movie.poster_path} 185w,
                        https://image.tmdb.org/t/p/w342${movie.poster_path} 342w,
                        https://image.tmdb.org/t/p/w500${movie.poster_path} 500w
                    "
                    sizes="(max-width: 600px) 150px, (max-width: 1024px) 200px, 300px"
                    width="185"
                    height="278"
                    loading="lazy"
                    alt="${movie.title}"
                    >
                    <h3>${movie.title}</h3>
                `;

                moviesContainer.appendChild(div);
            });
        });

        genresContainer.appendChild(btn);
    });
}