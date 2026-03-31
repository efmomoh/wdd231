// Modal JS 

const modal = document.querySelector("#signUp");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector("#closeModal");

openModal.addEventListener('click', () => {
    modal.showModal();

    closeModal.addEventListener('click', () => {
        modal.close();
    })
})