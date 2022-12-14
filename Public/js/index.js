const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menu = document.getElementsByClassName('menu')[0]

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active')
});

import { login } from './login';
import { signup } from './signup'

const loginForm = document.querySelector('.form--login');
const signupForm = document.querySelector('.form--signup');

window.onload = function() {
    // if (window.location.href != "index.html") {
    //   window.location = "index.html";
    // }
}


  