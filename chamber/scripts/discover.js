let last = localStorage.getItem("last");

let now = Date.now();

let message = document.querySelector("#visitMessage");

if (!last) {
    message.textContent = "Welcome first visit";
}

else {
    let days = Math.floor((now - last) / 86400000);
    message.textContent = `${days} days since visit"`;
}

localStorage.setItem("last", now);