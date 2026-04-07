// import the discover js data 
import { discoverData } from "../data/discover.mjs";

const discoverContainer = document.querySelector('#discover');

function displayDiscovery(cards) {
    discoverContainer.innerHTML = ""; //clears the container
    cards.forEach(item => {
        const card = document.createElement("section");
        card.classList.add("discover-card");
        card.innerHTML = `
            <h2>${item.name}</h2>
            <figure><img src="${item.image}" alt="${item.name}" loading="lazy"></figure>
            <address><strong>Address:</strong> ${item.address}</address>
            <p><strong>Description:</strong> ${item.description}</p>
            <button class="openModal">Learn More</button>
        `;
        discoverContainer.appendChild(card);
    });
}

// call the function with the imported data directly 
displayDiscovery(discoverData);


// modal functionality
const modalBox = document.querySelector('#discoverModalBox');
const modalContent = document.querySelector('#modalContent');
const closeModal = document.querySelector('#closeModal');

function displayModal() {
    const buttons = document.querySelectorAll(".openModal");
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const item = discoverData[index];

            let servicesHTML = '';
            if (item.services && item.services.length > 0) {
                servicesHTML = `
                    <h3>Services:</h3>
                    <ul>
                        ${item.services.map(service => `<li>${service}</li>`).join('')}
                    </ul>
                `;
            }

            // fill the modal content
            modalContent.innerHTML = `
            <h2>${item.name}</h2>
            <figure><img src="${item.image}" alt="${item.name}" loading="lazy"></figure>
            <address><strong>Address:</strong> ${item.address}</address>
            <p><strong>Description:</strong> ${item.description}</p>
            ${servicesHTML}
        `;
            // show the modal
            modalBox.showModal();
        });

    });
}

// call after displayDictionary
displayModal();

// close modal 
closeModal.addEventListener('click', () => {
    modalBox.close()
});



// localStorage logic for last visit 
let last = localStorage.getItem("last");
let now = Date.now();

let message = document.querySelector("#visitMessage");

if (!last) {
    message.textContent = "Welcome! Let us know if you have any questions.";
}

else {
    let days = Math.floor((now - last) / 86400000);
    if (days === 0) {
        message.textContent = `"Back so soon! Awesome!"`;
    }
    else if (days === 1) {
        message.textContent = `"You last visited 1 day ago."`;

    }
    else {
        message.textContent = `"You last visited ${days} days ago."`;

    }
}

localStorage.setItem("last", now);