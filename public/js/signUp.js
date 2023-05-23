const loginFormHandler = async (event) => {
  
  event.preventDefault();

  const email = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/signUp', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
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