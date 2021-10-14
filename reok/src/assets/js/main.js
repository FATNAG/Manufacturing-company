/**
 * Color change for the navbar
 * 
 * Change the color of the navbar whe you scroll down
 */
window.addEventListener("scroll", function(){
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

/**
 * Popup 
 * 
 * A popup for the signup and forgot password section
 */

let login = document.getElementById('login-container');
let signup = document.getElementById('signup-container');
let forgot = document.getElementById('forgot-container');

function toggleLoginSignup(){
    login.classList.toggle("active");
    signup.classList.toggle("active");
}

function toggleLoginForgot(){
    login.classList.toggle("active");
    forgot.classList.toggle("active");
}

function toggleSignupForgot(){
    signup.classList.toggle("active");
    forgot.classList.toggle("active");
}