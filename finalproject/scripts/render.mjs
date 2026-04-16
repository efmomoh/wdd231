import { openModal } from "./modal.mjs";
import { toggleFavorite } from "./favorites.mjs";
import { getStats } from "./stats.mjs";

const container = document.querySelector("#movies");

function truncateText(text, max = 100) {
    return text?.length > max ? text.slice(0, max) + "..." : text;
}

export function renderMovies(movies) {

    if (!container) return;

    container.innerHTML = "";

    movies.forEach(movie => {

        const stats = getStats(movie.id);

        const card = document.createElement("div");
        card.className = "movie-card";
        card.dataset.id = movie.id;

        card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w185${movie.poster_path}"
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

        <p class="title"><strong>Title:</strong> ${movie.title}</p>
        <div class="details">
            <p class="overview"><strong>Description:</strong> ${truncateText(movie.overview)}</p>
            <p class="popularity"><strong> Popularity:</strong> ${movie.popularity}</p>
            <p class="release_date"><strong> Release Date:</strong> ${movie.release_date}</p>
            <p class="vote"><strong> Vote Average:</strong> ⭐ ${movie.vote_average}</p>
            <p class="count"><strong> Vote Count:</strong> ${movie.vote_count}</p>
        </div>

        <div class="actions">
            👁️ Views: <span class="views">${stats.views}</span>
            👍 Likes: <span class="likes">${stats.likes}</span>
            👎 Dislikes: <span class="dislikes">${stats.dislikes}</span>
            💬 Comments: <span class="comments">${stats.comments.length}</span>
            <span class="fav-btn">❤️ Favorite</span>
        </div>
        `;

        // OPEN MODAL
        card.querySelector("img").addEventListener('click', () => {
            openModal(movie);
        });

        // FAVORITES
        card.querySelector(".fav-btn").addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(movie);
        });

        container.appendChild(card);
    });
}

/* LIVE UPDATE FUNCTION */
export function updateCardStats(movieId) {

    const stats = getStats(movieId);
    const card = document.querySelector(`[data-id="${movieId}"]`);

    if (!card) return;

    card.querySelector(".views").textContent = stats.views;
    card.querySelector(".likes").textContent = stats.likes;
    card.querySelector(".dislikes").textContent = stats.dislikes;
    card.querySelector(".comments").textContent = stats.comments.length;
}