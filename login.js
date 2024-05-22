const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;


  const users = [
    { email: 'tharun1@gmail.com', password: 'tharun' }
  ];

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {

    window.location.href = 'index.html';
  } else {

    alert('Invalid email or password');
  }
});