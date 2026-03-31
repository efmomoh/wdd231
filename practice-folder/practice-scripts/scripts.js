// PRACTICE

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".openModal");
const closeModal = document.querySelector("#closeModal");

openModal.addEventListener('click', () => {
    modal.showModal();

    closeModal.addEventListener('click', () => {
        modal.close();
    })
})