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
            <img src="${prophet.imageurl}" Prophet alt="${prophet.name} ${prophet.lastname}" loading="lazy" width="200"
            height="250">
        </section>`
    ).join("");
}

// const displayProphets = (prophets) => {
//     prophets.forEach((prophet) => {
//         // Create elements to add to the div.cards element
//         let card = document.createElement('section');
//         let fullName = document.createElement('h2'); // fill in the blank
//         let portrait = document.createElement('img');

//         // Build the h2 content out to show the prophet's full name
//         fullName.textContent = `${prophet.name}${prophet.lastname}`; // fill in the blank
//         // Build the image portrait by setting all the relevant attributes
//         portrait.setAttribute('src', prophet.imageurl);
//         portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
//         portrait.setAttribute('loading', 'lazy');
//         portrait.setAttribute('width', '340');
//         portrait.setAttribute('height', '440');

//         // Append the section(card) with the created elements
//         card.appendChild(fullName); //fill in the blank
//         card.appendChild(portrait);

//         cards.appendChild(card);
//     }); // end of arrow function and forEach loop
//   }