import potter from './data/potter.js';

const arrayMap = (data) => {
    let id = 0;
    const arrayCopy = data.map((element)=>({
        id: id += 1,
        nombre: element.name,
    }));
    return arrayCopy;
};

const close = document.getElementById('close');
const info = document.getElementById('contenido');
const modal = document.getElementById('modal');
const btnModal = document.getElementById('btnModal');
const btnCards = document.getElementById('btnCards');
const cardsSection = document.getElementById('cards');

const closeModal = () => {
    modal.style.display = 'none';
};
const showModal = (contenido) => {
    info.innerHTML= '';
    console.log(arrayMap(potter));
    info.innerHTML= contenido;
    modal.style.display = 'flex';
};
const closeGrey = () => {
    console.log(event.target);

    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

const createCards = (data) => {
    cardsSection.innerHTML='';
    data.forEach(element => {
    const div = document.createElement('div');
    div.setAttribute('id',`${element.id}`);
    div.innerHTML = 
    `<ul>
    <li class="pointer">${element.nombre}</li>
    </ul>`;
    cardsSection.appendChild(div);
    document.getElementById(element.id).addEventListener('click', () => { showModal(element.nombre)});
    });
};

close.addEventListener('click', closeModal);
btnModal.addEventListener('click',  () => { showModal('Holi :)')});
window.addEventListener('click', closeGrey);
btnCards.addEventListener('click', () => { createCards(arrayMap(potter))});
