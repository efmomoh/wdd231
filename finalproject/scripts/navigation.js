// navigation js 
const menuBtn = document.querySelector("#menu");
const navBar = document.querySelector("#nav-bar");


menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
    menuBtn.classList.toggle('active');
});
