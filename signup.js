const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;


  if (name && email && password) {
  
    window.location.href = 'login.html';
  } else {
  
    alert('Please fill in all fields');
  }
});