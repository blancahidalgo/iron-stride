const loginFormHandler = async (event) => {
  
  event.preventDefault();

  const firstName = document.querySelector('#firstname').value.trim();
  const lastName = document.querySelector('#lastname').value.trim();
  const email = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (firstName && lastName && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to sign up...');
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);