function registration() {
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    let error = false;
  
   
    if (name === "") {
      document.getElementById("error1").innerHTML = "Please enter your name";
      error = true;
    } else {
      document.getElementById("error1").innerHTML = "";
    }
  
    
    if (number === "") {
      document.getElementById("error2").innerHTML = "Please enter your phone number";
      error = true;
    } else {
      const contactLength = number.length;
      if (contactLength < 10 || contactLength > 10) {
        document.getElementById("error2").innerHTML = "Contact number must be 10 digits long";
        error = true;
      } else {
        document.getElementById("error2").innerHTML = "";
      }
    }
  
   
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(email) || email === "") {
      document.getElementById("error3").innerHTML = "Please enter a valid email address";
      error = true;
    } else {
      document.getElementById("error3").innerHTML = "";
    }
  
   const passwordPattern =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/;
    if (!passwordPattern.test(password) || password === "") {
      document.getElementById("error4").innerHTML = "at least one letter, one number and one special character";
      error = true;
    } 
    else {
      const passwordLength = password.length;
      if (passwordLength < 8) {
        document.getElementById("error4").innerHTML = "Password must be at least 8 characters long";
        error = true;
      }
       else {
        document.getElementById("error4").innerHTML = "";
      }
    }
  
   
    if (error) {
      return false;
    } else {
      
      const userData = {
        name: name,
        number: number,
        email: email,
        password: password,
        
      };
  
      localStorage.setItem(email, JSON.stringify(userData));
   
  
      window.location.href = "../home.html";
      return true;
    }
  }
  