// JSON OBJECT

async function getProphetData() {
    const response = await fetch("https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json");
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);

}
getProphetData();

const cardContainer = document.querySelector("#cards");
const displayProphets = (prophets) => {
    cardContainer.innerHTML = prophets.map(prophet =>
        `<section class="card">
            <div>
                <h2>${prophet.name} ${prophet.lastname}</h2>
                <p>Date of Birth: ${prophet.birthdate}</p>
                <p>Place of Birth: ${prophet.birthplace}</p>
            </div>
            <img src="${prophet.imageurl}" alt="${prophet.name} ${prophet.lastname}" loading="lazy" width="200"
            height="250">
        </section>`
    ).join("");
}