// FOOTER JS
const year = document.querySelector('#year');
const dateModified = document.querySelector('#modifiedDate');

const currentYear = new Date().getFullYear();
year.innerHTML = `<strong>@${currentYear}</strong> | TaurusProMax Movies Hub`;

const currentDate = document.lastModified;
dateModified.innerHTML = `<strong>Last Modification:</strong> ${new Date().toLocaleString()}`;