import { addView, addLike, addDislike, addComment, getStats } from "./stats.mjs";
import { updateCardStats } from "./render.mjs";


const modal = document.querySelector("#modal");
const body = document.querySelector("#modal-body");

const apiKey = "c71024fed2714ead52f86269295b509a";
const baseUrl = "https://api.themoviedb.org/3";

export async function openModal(movie) {

  addView(movie.id);
  updateCardStats(movie.id); // live update card

  modal.classList.remove("hidden");
  const stats = getStats(movie.id);

  let trailer = "";

  try {
    const res = await fetch(`${baseUrl}/movie/${movie.id}/videos?api_key=${apiKey}`);
    const data = await res.json();

    const vid = data.results.find(v => v.type === "Trailer" && v.site === "YouTube");

    trailer = vid
      ? `<iframe src="https://www.youtube.com/embed/${vid.key}" allowfullscreen></iframe>`
      : `<p>No trailer available</p>`;
  } catch {
    trailer = "<p>Error loading trailer</p>";
  }

  body.innerHTML = `
        <h2>${movie.title}</h2>
        ${trailer}
        <p>${movie.overview}</p>
        <hr>
        <p>👁️ Views: <span id="views-${movie.id}">${stats.views}</span></p>
        <p>👍 Likes: <span id="likes-${movie.id}">${stats.likes}</span></p>
        <p>👎 Dislikes: <span id="dislikes-${movie.id}">${stats.dislikes}</span></p>
        <button id="likeBtn">👍 Like</button>
        <button id="dislikeBtn">👎 Dislike</button>
        <hr>
        <input id="commentInput" placeholder="Write comment..." />
        <button id="commentBtn">Post</button>
        <p>💬 Comments: <span id="comments-${movie.id}">${stats.comments.length}</span></p>
    `;

  document.querySelector("#likeBtn").addEventListener('click', () => {
    addLike(movie.id);
    updateCardStats(movie.id);
    openModal(movie);
  });

  document.querySelector("#dislikeBtn").addEventListener('click', () => {
    addDislike(movie.id);
    updateCardStats(movie.id);
    openModal(movie);
  });

  document.querySelector("#commentBtn").addEventListener('click', () => {
    const input = document.querySelector("#commentInput");

    if (input.value.trim()) {
      addComment(movie.id, input.value);
      updateCardStats(movie.id);
      openModal(movie);
    }
  });
}

export function setupModalClose() {
  document.querySelector("#closeModal").addEventListener('click', () => {
    modal.classList.add("hidden");
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
}