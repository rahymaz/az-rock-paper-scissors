let button = document.getElementById('rules');



function popup(){
    button.innerHTML = 'A button has been clicked';
}

button.addEventListener('click', popup);