import { renderMovies } from "./render.mjs";

const apiKey = "c71024fed2714ead52f86269295b509a";
const baseUrl = "https://api.themoviedb.org/3";

export function setupSearch() {

    const input = document.querySelector("#searchInput");

    if (!input) return;

    input.addEventListener("input", async (e) => {

        const q = e.target.value;

        if (q.length < 2) return;

        const res = await fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${q}`);
        const data = await res.json();

        renderMovies(data.results);
    });
}