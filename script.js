let password = document.querySelector('[name="password"]');
let confirmPassword = document.querySelector('[name="confirm-password"]')
let passwordMatch = document.querySelector('.pw-match')
let btn = document.querySelector('button')
console.log(password,confirmPassword,passwordMatch,btn)

function pwValidation() {
    if(password.value == confirmPassword.value) {
        password.classList.remove('error')
        confirmPassword.classList.remove('error')
        passwordMatch.textContent='';
    }
}

btn.addEventListener('click', pwValidation)