function login() {
    let email = document.getElementById("email1").value;
    let password = document.getElementById("password1").value;

    let storedUserData = JSON.parse(localStorage.getItem(email));

    if (storedUserData  && storedUserData.password === password) {
      alert('Login successful!');
      
    localStorage.setItem('isLoggedIn', true);

    window.location.href = '../home.html';
    
    } else {
      document.getElementById('err1').textContent=' * Invalid email or password.';
      return false;
    }
  }
