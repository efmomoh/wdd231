// JS navigation file 
const menuBtn = document.querySelector("#menu");
const nav = document.querySelector("#nav-bar");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuBtn.classList.toggle("show");
});
