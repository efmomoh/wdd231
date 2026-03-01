// navBar 
const menuButton = document.querySelector("#menu");
const navBar = document.querySelector('#nav-bar');

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle('show');
    navBar.classList.toggle('show');
});
