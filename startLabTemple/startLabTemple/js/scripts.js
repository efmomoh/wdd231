import { temples } from "../data/temples.js";
import { url } from "../data/temples.js";

const openButton = document.querySelector('#showHere');
const dialogBox = document.querySelector('#mydialog');
const h2Title = document.querySelector('#mydialog h2');
const para = document.querySelector('#mydialog p');
const closeButton = document.querySelector('#mydialog button');

closeButton.addEventListener('click', () => {
    dialogBox.close();
})


function displayTemple(data) {
    data.forEach(temp => {
        const image = document.createElement('img');
        image.src = `${url}${temp.path}`;
        image.alt = temp.name

        image.addEventListener('click', () => showItems(temp));
        openButton.appendChild(image);
    });
}
displayTemple(temples);

function showItems(temp) {
    h2Title.innerHTML = temp.name;
    para.innerHTML = `
        <strong>Dedicated</strong> in ${temp.dedicated} by ${temp.person}, <strong>Temple Number:</strong> ${temp.number}
    `;
    
    

    dialogBox.showModal();
}