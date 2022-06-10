
let inputs = document.querySelectorAll('#sign-up input');
inputs.forEach(element => element.addEventListener("blur",addClassesOnExit));

function addClassesOnExit(event){
    console.log(event.target);
    if(event.target.checkValidity()){
        event.target.classList.remove('wrong');
    } else {
        event.target.classList.add('wrong');
    }
    event.target.classList.add('visited');
}

passwords = [...document.querySelectorAll("#sign-up input[type='password']")];

passwords.forEach(password => password.addEventListener('blur',() => {
    if(passwords[0].value != passwords[1].value){
        passwords.forEach(password => password.setCustomValidity("Passwords do not match"));
    } else {
        passwords.forEach(password => password.setCustomValidity(""));
    }
}));

/* Ciekawa zabawka ale nie ma sensu
passwords.forEach(password => password.addEventListener('blur',event => {
    let otherPassword = passwords.find(pass => pass != event.target);
    if(otherPassword.value != event.target.value){
        event.target.setCustomValidity("Passwords must be equal");
    } else {
        event.target.setCustomValidity("");
    }
}));
*/