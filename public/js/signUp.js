const loginFormHandler = async (event) => {
  
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const lastName = document.querySelector('#lastName-signup').value.trim();
  const email = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (name && lastName && email && password) {
    const response = await fetch('/api/users/signUp', {
      method: 'POST',
      body: JSON.stringify({ name, lastName, email, password }),
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
  .querySelector('.signUp-form')
  .addEventListener('submit', loginFormHandler);