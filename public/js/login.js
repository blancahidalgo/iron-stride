console.log('inside login.js');

const loginFormHandler = async (event) => {
  
  event.preventDefault();

  const email = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();
  console.log('email');
  console.log(email);
  console.log('password');
  console.log(password);

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log("response from /api/users/login:")
    console.log(response);

    if (response.ok) {
      
      req.session.loggedIn = true;
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};


document.querySelector('#login-form').addEventListener('submit', loginFormHandler);