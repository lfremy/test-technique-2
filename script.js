// Variables
let inputs = document.querySelector('.pictures-container input');
let text = document.querySelector('.pictures-container p');

inputs.addEventListener('click', ()=>{
    text.style.backgroundColor = '#5c87af';
    text.style.color = 'white';
})

// let checkboxes = document.querySelectorAll('input[type="checkbox"]');
// console.log(checkboxes);

// checkboxes.forEach(checkbox => checkbox.addEventListener('click', changeColor));
    
// function changeColor(e){
//     let text = document.querySelector('.pictures-container p');
//     text.style.backgroundColor = '#5c87af';
//     text.style.color = 'white';

// }