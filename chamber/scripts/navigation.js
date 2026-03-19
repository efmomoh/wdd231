const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#primary-nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.classList.toggle("open");
});
