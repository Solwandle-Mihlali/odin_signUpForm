let pass = document.getElementById('password');
let confirm = document.getElementById('confirm');
let btn = document.getElementById('submit');

btn.addEventListener('submit', validate());

function validate(){
if(pass.innerHTML != confirm.innerHTML){

    alert("passwords do not match");
}
}