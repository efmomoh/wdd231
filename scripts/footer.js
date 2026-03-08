const year = document.querySelector("#currentyear");
const modified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
modified.textContent = `Last Updated: ${document.lastModified}`;