import { addView, addLike, addDislike, addComment, getStats } from "./stats.mjs";
import { updateCardStats } from "./render.mjs";

const modal = document.querySelector("#modal");
const body = document.querySelector("#modal-body");

const apiKey = "c71024fed2714ead52f86269295b509a";
const baseUrl = "https://api.themoviedb.org/3";

export async function openModal(movie) {
  modal.classList.remove("hidden");

  // add view only once per open
  addView(movie.id);
  updateCardStats(movie.id);

  renderModal(movie);
}

async function renderModal(movie) {
  const stats = getStats(movie.id);

  let trailer = "";

  try {
    const res = await fetch(`${baseUrl}/movie/${movie.id}/videos?api_key=${apiKey}`);
    const data = await res.json();

    const vid = data.results.find(
      v => v.type === "Trailer" && v.site === "YouTube"
    );

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
    <p>👁️ Views: <span id="views">${stats.views}</span></p>
    <p>👍 Likes: <span id="likes">${stats.likes}</span></p>
    <p>👎 Dislikes: <span id="dislikes">${stats.dislikes}</span></p>
    <button id="likeBtn">👍 Like</button>
    <button id="dislikeBtn">👎 Dislike</button>
    <hr>
    <input id="commentInput" placeholder="Write comment..." />
    <button id="commentBtn">Post</button>
    <p>💬 Comments: <span id="comments">${stats.comments.length}</span></p>
  `;

  // EVENTS (no re-opening modal anymore)
  document.querySelector("#likeBtn").onclick = () => {
    addLike(movie.id);
    updateStatsUI(movie.id);
  };

  document.querySelector("#dislikeBtn").onclick = () => {
    addDislike(movie.id);
    updateStatsUI(movie.id);
  };

  document.querySelector("#commentBtn").onclick = () => {
    const input = document.querySelector("#commentInput");

    if (input.value.trim()) {
      addComment(movie.id, input.value);
      input.value = "";
      updateStatsUI(movie.id);
    }
  };
}

// 🔥 only updates numbers (no re-render / no re-fetch)
function updateStatsUI(movieId) {
  const stats = getStats(movieId);

  document.querySelector("#views").textContent = stats.views;
  document.querySelector("#likes").textContent = stats.likes;
  document.querySelector("#dislikes").textContent = stats.dislikes;
  document.querySelector("#comments").textContent = stats.comments.length;

  updateCardStats(movieId);
}

export function setupModalClose() {
  document.querySelector("#closeModal").addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
}