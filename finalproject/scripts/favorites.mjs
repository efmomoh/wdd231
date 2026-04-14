let favorites = JSON.parse(localStorage.getItem("fav")) || [];

export function toggleFavorite(movie) {

    const exists = favorites.find(m => m.id === movie.id);

    if (exists) {
        favorites = favorites.filter(m => m.id !== movie.id);
    } else {
        favorites.push(movie);
    }

    localStorage.setItem("fav", JSON.stringify(favorites));
}