const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const signinForm = document.getElementById('signinForm');
const signupForm = document.getElementById('signupForm');

loginTab.onclick = () => switchForm(true);
registerTab.onclick = () => switchForm(false);

function switchForm(login) {
    loginTab.classList.toggle('active', login);
    registerTab.classList.toggle('active', !login);
    signinForm.classList.toggle('active', login);
    signupForm.classList.toggle('active', !login);
}

function togglePassword(id) {
    const f = document.getElementById(id);
    f.type = f.type === 'password' ? 'text' : 'password';
}

signupForm.addEventListener('submit', e => {
    e.preventDefault();
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    alert('Registration successful! Please sign in.');
    switchForm(true);
});

signinForm.addEventListener('submit', e => {
    e.preventDefault();
    if (signinEmail.value === localStorage.getItem('email') && signinPassword.value === localStorage.getItem('password')) {
        window.location.href="Responsive_Travel_Web_App_Landing_Page/tourist.html";
    } else {
        alert('Sorry! Invalid credentials');
    }
});