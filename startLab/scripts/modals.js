// EXERCISE
const openButton1 = document.querySelector('#openButton1');
const openButton2 = document.querySelector('#openButton2');
const openButton3 = document.querySelector('#openButton3');

const dialogBox = document.querySelector('#dialogBox');
const dialogBoxText = document.querySelector('#dialogBox div');

const closeButton = document.querySelector('#closeButton');

openButton1.addEventListener('click', () => {
    dialogBoxText.innerHTML = `This is Apple Dialog Box`;
    dialogBox.showModal();
})
openButton2.addEventListener('click', () => {
    dialogBoxText.innerHTML = `This is Orange Dialog Box`;

    dialogBox.showModal();
})
openButton3.addEventListener('click', () => {
    dialogBoxText.innerHTML = `This is Banana Dialog Box`;

    dialogBox.showModal();
})

closeButton.addEventListener('click', () => {
    dialogBox.close();
})

