
let inputs = document.querySelectorAll('#sign-up input');
inputs.forEach(element => element.addEventListener("blur",addClassesOnExit));

let element = document.querySelector('#sign-up input');

function addClassesOnExit(event){
    console.log(event.target);
    event.target.classList.add('visited');
}