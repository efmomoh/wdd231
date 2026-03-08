const year = document.querySelector("#currentyear");
const modified = document.querySelector("#lastModified");

year.textContent = `© ${new Date().getFullYear()} | Taurus ProMax Global Network`;
modified.textContent = `Last Updated: ${document.lastModified}`;