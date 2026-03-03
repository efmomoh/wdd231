// JS navigation file 
const menuBtn = document.querySelector('#menu');
const navLinks = document.querySelector('#nav-bar');

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('show');
    navLinks.classList.toggle('show');
});
