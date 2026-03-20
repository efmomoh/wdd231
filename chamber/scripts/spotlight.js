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
            <div class="title-details border">
                <h2>${member.name}</h2>
                <h3 class="business-tag">${getMembership(member.level)} Member</h3>
                <span>${member.industry}</span>
            </div>
            <div class="card-details">
                <img src="images/${member.image}" width="200px" height="200px" alt="${member.name}" loading="lazy">
                <div> 
                    <p><strong>Email:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p class="membership"><strong>Membership Level:</strong> ${member.level}</p>
                    <p><strong>URL:</strong> <a href="${member.website}" target="_blank">Visit Website</a></P/
                </div>
            </div>
        </div>`;

        spotlightContainer.appendChild(card);
    });

}

loadSpotlights();


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
