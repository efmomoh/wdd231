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
        <h3 class="business-tag">${getMembership(member.level)} Member</h3>
        <span>${member.industry}</span>
        

    </div>
    <div class="card-details">
        <img class="member-img" src="images/${member.image}" width="200" height="200" alt="${member.name}" loading="lazy">
            <div class="info list-view"> 
                    <p><strong>Email:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p class="membership">Membership Level: ${member.level}</p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">Visit Website</a></p>
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

// membership function 
function getMembership(level) {
    if (level === 3)
        return "Gold";
    if (level === 2)
        return "Silver";
    if (level === 1)
        return "Bronze";
    if (level === 0)
        return "Non-Profit";
}