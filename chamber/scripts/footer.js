const siteInfo = document.querySelector(".site-info");
siteInfo.innerHTML = `
    <strong>LoneStar Chamber of e-Commerce</strong> 
    <p>10 Broad & Center Street</p>
    <p>1000 Monrovia, 10 Liberia</p>
    <p><a href="#" class="email">info@lonestarecommerce.org</a></p>
    <p>(+231) 888-236-6968</p>`;

const siteProject = document.querySelector(".site-project");
const lastMod = new Date(document.lastModified);

siteProject.innerHTML = `
    <P>WDD231 Class Project</P>
    <P>Enssah Fayia Momoh</P>
    <P><strong>© ${new Date().getFullYear()}</strong> LoneStar Chamber of e-Commerce</P>
    <p id="lastModified"><strong>Last Modification:</strong> ${lastMod.toLocaleString()}</p>
    `;