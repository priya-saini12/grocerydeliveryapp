function address() {
    var name = document.getElementById('name').value;
    var address = document.getElementById('adress').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;
    var pin = document.getElementById('pin').value;
  
   
    if (name === '') {
      document.getElementById('er1').innerText = 'Name is required';
      return;
    }
  
    
    if (address === '') {
      document.getElementById('er2').innerText = 'Address is required';
      return;
    }
  
    if (state === 'state') {
      document.getElementById('er3').innerText = 'Please select a State';
      return;
    }
  
 
    if (city === 'city') {
      document.getElementById('er4').innerText = 'Please select a City';
      return;
    }
  
    
    if (pin === '' || pin.length !== 6) {
      document.getElementById('er5').innerText = 'PIN must be a 6-digit number';
      return;
    }
  

    var addressData = {
      name: name,
      address: address,
      state: state,
      city: city,
      pin: pin
    };
  
   
    localStorage.setItem("address", JSON.stringify(addressData));
  
    alert('Address added successfully!');
     
    window.location.href = "../invoice.html";
  }
  function logout() {
    localStorage.setItem('isLoggedIn', false);
    window.loggedInUser = null; 
    window.location.href = '../index.html';
  }