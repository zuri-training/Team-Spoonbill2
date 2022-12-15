const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menu = document.getElementsByClassName('menu')[0]

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active')
});

import { login } from './login';
import { signup } from './signup';

// const loginForm = document.querySelector('.form-login');
const signupForm = document.querySelector('.form-signup');

// window.onload = function() {
//     // if (window.location.href != "") {
//     //   window.location = "index.html";
//     // }
//     console.log('hello')
// }


if (loginForm)
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        // VALUES
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log(email, password)
        login(email, password)
    })

if (signupForm)
    signupForm.addEventListener('submit', e => {
        e.preventDefault();
        // VALUES
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('passwordConfirm').value;
        console.log(name, email, password, passwordConfirm)
        signup(name, email, password, passwordConfirm)

    });


  