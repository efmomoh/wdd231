import { fetchMovies } from "./api.mjs";
import { initHeroSlider } from "./heroSlider.mjs";
import { setupModalClose } from "./modal.mjs";
import { setupSearch } from "./search.mjs";
import { initControls } from "./controls.mjs";
import { renderMovies } from "./render.mjs";

const container = document.querySelector("#movies");


if (container) {
    const movies = await fetchMovies();
    initHeroSlider(movies);
    initControls(movies, renderMovies);
}

setupModalClose();
setupSearch();

// Sets timestamp only when submitting
const form = document.querySelector('form');

if (form) {
    form.addEventListener("submit", () => {
        const timestampInput = document.querySelector('#timestamp');

        if (timestampInput) {
            timestampInput.value = new Date().toLocaleString();
        }
    });
}
