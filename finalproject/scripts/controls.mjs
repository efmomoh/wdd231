let fullData = [];
let expanded = false;

export function initControls(data, render) {
    fullData = data;

    const btn = document.getElementById("toggleBtn");

    if (!btn) return;

    // restore saved state
    expanded = JSON.parse(localStorage.getItem("expanded")) || false;

    // initial render
    render(expanded ? fullData : fullData.slice(0, 2));
    btn.textContent = expanded ? "Show Less" : "Show More";

    btn.addEventListener("click", () => {
        expanded = !expanded;

        render(expanded ? fullData : fullData.slice(0, 2));

        btn.textContent = expanded ? "Show Less" : "Show More";

        localStorage.setItem("expanded", JSON.stringify(expanded));
    });
}