// timestamp 
document.getElementById("timestamp").value = new Date().toLocaleString();

// import the json data and store it in a url variable 
const url = 'data/members.json';

let allMembers = [];

// convert json to js object 
async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    allMembers = data.members;
    displayBusinessCard(data.members);
}
getMembersData();

// card container 
const companyCard = document.querySelector('#company-card');

// modal dialog 
const modalBox = document.querySelector('#modalBox');
const modalDetails = document.querySelector("#modalBox div");
const closeModal = document.querySelector('#closeModal');

// membership level 
const levelOne = document.querySelector("#membership-level1");
const levelTwo = document.querySelector("#membership-level2");
const levelThree = document.querySelector("#membership-level3");
const levelFour = document.querySelector("#membership-level4");

// business card function 
function displayBusinessCard(members) {
    companyCard.innerHTML = "";
    members.forEach(member => {
        const card = document.createElement('section');
        card.innerHTML = `
        <div">
            <h2>${member.name}</h2>
            <p>${member.description}</p>
            <button type="submit" class="openModal right">Follow Us</button>
         </div>
        `;
        card.querySelector('.openModal').addEventListener('click', () => showDetails(member));
        companyCard.append(card);
    });
}

// close modal box 
closeModal.addEventListener('click', () => modalBox.close());

// modal or pop up details
function showDetails(member) {
    modalDetails.innerHTML = `
    <h2>${member.name}, ${member.industry} Industry</h2>
    <p>${member.description}</p>
    `;
    modalBox.append(modalDetails);

    modalBox.showModal();
}

//modal or pop-up membership info
levelOne.addEventListener('click', () => showMembershipLevel(0));
levelTwo.addEventListener('click', () => showMembershipLevel(1));
levelThree.addEventListener('click', () => showMembershipLevel(2));
levelFour.addEventListener('click', () => showMembershipLevel(3));

function showMembershipLevel(level) {
    const member = allMembers.find(m => m.level === level);

    // convert membershipBenefit array to a list
    const benefitsList = member.membershipBenefit.map(benefit => `<li>${benefit}</li>`).join("");

    modalDetails.innerHTML = `
        <h2>${member.membership} Membership Level</h2>
        <h3>Benefits:</h3>
        <ul>
            ${benefitsList}
        </ul>
        <p><a href="${member.website}" target="_blank">Learn more...</a></p>
    `;

    modalBox.showModal();
}




