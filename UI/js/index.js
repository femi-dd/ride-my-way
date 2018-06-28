let signinTab = document.getElementById('signin');
let signupTab = document.getElementById('signup');
let button_signin = document.getElementById('button_signin');
let button_signup = document.getElementById('button_signup');
let plates = document.getElementById('plates');
let model = document.getElementById('model');

document.getElementById('button_signin').addEventListener('click', function () {
   signinTab.style.display = "initial";
   signupTab.style.display = "none";
   button_signin.setAttribute('class', 'button active');
   button_signup.setAttribute('class', 'button');
});

document.getElementById('button_signup').addEventListener('click', function () {
   signinTab.style.display = "none";
   signupTab.style.display = "initial";
   button_signup.setAttribute('class', 'button active');
   button_signin.setAttribute('class', 'button');
});

function checkAccount(type) {
   switch (type) {
      case 'driver':
         plates.style.display = 'initial';
         model.style.display = 'initial';
         break;
      case 'passenger':
         plates.style.display = 'none';
         model.style.display = 'none';
         break;
   }

}