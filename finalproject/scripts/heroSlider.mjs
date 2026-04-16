import { openModal } from "./modal.mjs";

let currentIndex = 0;
let movieList = [];
let intervalId = null;

export function initHeroSlider(movies) {
    if (!movies || movies.length === 0) return;

    movieList = movies.slice(0, 5);

    const track = document.querySelector(".hero-track");
    const dotsContainer = document.querySelector(".hero-dots");

    if (!track || !dotsContainer) return;

    // build slides
    track.innerHTML = movieList.map((movie, index) => `
    <div class="hero-slide" data-index="${index}">
      
      <img 
        src="https://image.tmdb.org/t/p/w185${movie.backdrop_path}"
        srcset="
          https://image.tmdb.org/t/p/w185${movie.backdrop_path} 185w,
          https://image.tmdb.org/t/p/w342${movie.backdrop_path} 342w,
          https://image.tmdb.org/t/p/w500${movie.backdrop_path} 500w
        "
        sizes="(max-width: 600px) 150px, (max-width: 1024px) 200px, 300px"
        width="185"
        height="278"
        loading="lazy"
        alt="${movie.title}"
      >

      <div class="hero-content">
        <h2>${movie.title}</h2>
        <p>${truncateText(movie.overview, 120)}</p>
      </div>

    </div>
  `).join("");

    // make slides clickable
    const slides = track.querySelectorAll(".hero-slide");

    slides.forEach((slide) => {
        slide.addEventListener("click", () => {
            const index = Number(slide.dataset.index);
            openModal(movieList[index]);
        });
    });

    // build dots
    dotsContainer.innerHTML = movieList.map((_, i) => `
    <span class="dot ${i === 0 ? "active" : ""}" data-index="${i}"></span>
  `).join("");

    setupDots(track, dotsContainer);
    startSlider(track, dotsContainer);
    setupPause(track);
}

function startSlider(track, dotsContainer) {
    stopSlider();

    intervalId = setInterval(() => {
        goToSlide(currentIndex + 1, track, dotsContainer);
    }, 5000);
}

function goToSlide(index, track, dotsContainer) {
    currentIndex = (index + movieList.length) % movieList.length;

    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    updateDots(dotsContainer);
}

function updateDots(dotsContainer) {
    const dots = dotsContainer.querySelectorAll(".dot");

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
}

function setupDots(track, dotsContainer) {
    const dots = dotsContainer.querySelectorAll(".dot");

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            currentIndex = Number(dot.dataset.index);
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            updateDots(dotsContainer);
        });
    });
}

function setupPause(track) {
    const hero = document.querySelector("#hero");

    hero.addEventListener("mouseenter", stopSlider);
    hero.addEventListener("mouseleave", () =>
        startSlider(track, document.querySelector(".hero-dots"))
    );
}

function stopSlider() {
    if (intervalId) clearInterval(intervalId);
}

function truncateText(text, maxLength = 120) {
    if (!text) return "";
    return text.length > maxLength
        ? text.slice(0, maxLength) + "..."
        : text;
}