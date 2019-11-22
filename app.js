const close = document.getElementById('close');
const modal = document.getElementById('modal');
const flex = document.getElementById('flex');
const btnModal = document.getElementById('btnModal');
const closeModal = () => {
    modal.style.display = 'none';
};
const showModal = () => {
    modal.style.display = 'flex';
};

close.addEventListener('click', closeModal);
btnModal.addEventListener('click', showModal);