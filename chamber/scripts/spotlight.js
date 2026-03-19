/* SPOTLIGHT SYSTEM */
const memberURL = "data/members.json";

async function loadSpotlights() {
    const response = await fetch(memberURL);
    const data = await response.json();

    /* GOLD & SILVER */
    let qualifiedMembers = data.members.filter(member => member.level > 1);

    /* RANDOM ORDER */
        qualifiedMembers.sort(() => Math.random() - 0.5);

    /* SELECT 2 */
    let spotlightMembers = qualifiedMembers.slice(0, 3);

    const spotlightContainer = document.getElementById("spotlight-container");
        spotlightContainer.innerHTML = "";

    /* CREATE CARDS */
    spotlightMembers.forEach(member => {
        let card = document.createElement("section");
        card.classList.add("spotlight-card");
        card.innerHTML = `
        <div class="wider-view">
            <div class="title-details">
                <h2>${member.name}</h2>
                <h3>${member.name}</h3>
                <h4>${member.phone}</h4>
            </div>
            <div class="card-details">
                <img src="images/${member.image}" width="200px" height="200px" alt="${member.name}" loading="lazy">
                <div> 
                    <p><strong>Email:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>URL:</strong> <a href="${member.website}" target="_blank">Visit Website</a></P/
                </div>
            </div>
        </div>`;
        
        spotlightContainer.appendChild(card);
    });

}

loadSpotlights();
