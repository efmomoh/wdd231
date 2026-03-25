const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#primary-nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.classList.toggle("open");
});

// Close menu when a navigation link is clicked
const navLinks = nav.querySelectorAll("a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        hamburger.classList.remove("open");
    });
});
