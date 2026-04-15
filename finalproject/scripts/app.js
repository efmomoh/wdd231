import { fetchMovies } from "./api.mjs";
import { initHeroSlider } from "./heroSlider.mjs";
import { setupModalClose } from "./modal.mjs";
import { setupSearch } from "./search.mjs";
import { initControls } from "./controls.mjs";
import { renderMovies } from "./render.mjs";

const container = document.querySelector("#movies");
const form = document.querySelector('form');

if (container) {
    const movies = await fetchMovies();
    initHeroSlider(movies);
    initControls(movies, renderMovies);
}

setupModalClose();
setupSearch();

// time stamp 
document.querySelector('#timestamp').value = new Date().toLocaleString();
// Sets timestamp only when submitting
form.addEventListener("submit", () => {
    document.querySelector('#timestamp').value = new Date().toLocaleString();
});
