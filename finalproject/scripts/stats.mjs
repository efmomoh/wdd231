let stats = JSON.parse(localStorage.getItem("stats")) || {};

function ensure(id) {
    if (!stats[id]) {
        stats[id] = {
            views: 0,
            likes: 0,
            dislikes: 0,
            comments: []
        };
    }
}

function save() {
    localStorage.setItem("stats", JSON.stringify(stats));
}

export function getStats(id) {
    ensure(id);
    return stats[id];
}

// views
export function addView(id) {
    ensure(id);
    stats[id].views++;
    save();
}

// likes
export function addLike(id) {
    ensure(id);
    stats[id].likes++;
    save();
}

// dislikes
export function addDislike(id) {
    ensure(id);
    stats[id].dislikes++;
    save();
}

// comments
export function addComment(id, text) {
    ensure(id);
    stats[id].comments.push(text);
    save();
}