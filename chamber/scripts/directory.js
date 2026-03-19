const url = "data/members.json";

const cards = document.querySelector("#members");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

getMembers();

function displayMembers(members) {
    cards.innerHTML = "";

    members.forEach(member => {
    let card = document.createElement("section");
        card.innerHTML = `
        <div class="title-details">
            <h2>${member.name}</h2>
            <h3>${member.name}</h3>
        </div>
        <div class="card-details">
            <img src="images/${member.image}" width="200px" height="200px" alt="${member.name}" loading="lazy">
            <div> 
                <p><strong>Email:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>URL:</strong> <a href="${member.website}">Visit Website</a></P/
            </div>
        </div>`;
        cards.appendChild(card);
    });
}

const grid = document.querySelector("#grid");
const list = document.querySelector("#list"); 

grid.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

list.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});