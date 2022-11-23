let local = document.getElementById("input")
let form = document.getElementById("local")

form.addEventListener('input', (e) => {
    e.preventDefault();
});

local.addEventListener('click', (e) => {
    
    let name = document.getElementById('first-name');
    let lastname = document.getElementById('last-name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

name = name.value;
localStorage.setItem('first-name', name)
lastname = lastname.value;
localStorage.setItem('last-name', lastname)
email = email.value;
localStorage.setItem('email', email)
password = password.value;
localStorage.setItem('password', password)
return; 
});

console.log(localStorage.getItem('email'))
console.log(localStorage.getItem('password'))
