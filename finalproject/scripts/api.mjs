// import { renderMovies } from "./render.mjs";

// const apiKey = "c71024fed2714ead52f86269295b509a";
// const baseUrl = "https://api.themoviedb.org/3";

// export async function fetchMovies() {
//     try {
//         const res = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`);
//         const data = await res.json();

//         renderMovies(data.results);
//     } catch (err) {
//         console.log(err);
//     }
// }


import { renderMovies } from "./render.mjs";

const apiKey = "c71024fed2714ead52f86269295b509a";
const baseUrl = "https://api.themoviedb.org/3";

export async function fetchMovies() {
    try {
        const res = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`);
        const data = await res.json();

        renderMovies(data.results);

        return data.results; // ✅ IMPORTANT FIX
    } catch (err) {
        console.error(err);
        return [];
    }
}