let button = document.getElementById('rules');
let modalDiv = document.getElementById('modalDiv');
let closeModal = document.getElementById('close-modal-icon')



function popup(){
    modalDiv.style.visibility = 'visible';
}

function close(){
    modalDiv.style.visibility = 'hidden';
}

button.addEventListener('click', popup);
closeModal.addEventListener('click', close);


