const param = new URLSearchParams(window.location.search);
document.querySelector('#first-name').textContent = param.get('first-name');
document.querySelector('#family-name').textContent = param.get('last-name');
document.querySelector('#usermail').textContent = param.get('email');
document.querySelector('#message').textContent = param.get('message') || "No message provided";
document.querySelector('#timestamp').textContent = param.get('time');