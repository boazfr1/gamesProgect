let local = document.getElementById("input1")
let form = document.getElementById("local")

form.addEventListener("input1", (e) => {
    e.preventDefault();
});

local.addEventListener('click', (e) => {
    
    let name = document.getElementById('first-name');
    let lastname = document.getElementById('last-name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

name = name.value;
localStorage.setItem('first-name', JSON.stringify(name))
lastname = lastname.value;
localStorage.setItem('last-name', JSON.stringify(lastname))
email = email.value;
localStorage.setItem('email', JSON.stringify(email))
password = password.value;
localStorage.setItem('password', JSON.stringify(password))
    
});

let all = JSON.parse(localStorage.getItem('first-name'))
let all2 = JSON.parse(localStorage.getItem('last-name'))
let all3 = JSON.parse(localStorage.getItem('password'))

console.log(all, all2, all3)

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let pwd = document.getElementById("pwd");


local.addEventListener('click', (e) => {
fname = fname.value
localStorage.setItem('fname', JSON.stringify(fname))
lname = lname.value
localStorage.setItem('lname', JSON.stringify(lname))
pwd = pwd.value
localStorage.setItem('pwd', JSON.stringify(pwd))

if(fname !== all && lname !== all2){
    Error.obj
}
})








