let signinTab = document.getElementById('signin');
let signupTab = document.getElementById('signup');
let button_signin = document.getElementById('signin_tab');
let button_signup = document.getElementById('signup_tab');

document.getElementById('signin_tab').addEventListener('click', function () {
   signinTab.style.display = "initial";
   signupTab.style.display = "none";
   signinTab.removeAttribute('style');
   button_signin.setAttribute('class', 'button active');
   button_signup.setAttribute('class', 'button');
});

document.getElementById('signup_tab').addEventListener('click', function () {
   signinTab.style.display = "none";
   signupTab.style.display = "block";
   button_signup.setAttribute('class', 'button active');
   button_signin.setAttribute('class', 'button');
});