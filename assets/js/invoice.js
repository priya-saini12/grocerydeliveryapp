function logout() {
    localStorage.setItem('isLoggedIn', false);
    window.loggedInUser = null; 
    window.location.href = '../index.html';
  }
  
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartDetails = document.getElementById("invoice");
  let totalAmount = 0;
  cartItems.forEach((item, i) => {
      const product = document.createElement("div");
      product.innerHTML = `<div class="row d-flex">
      <div class="col-4 offset-2">
      <h6>${item.title}</h6>
      </div>
      <div class="col-4 offset-1">
      <p id="itemPrice${i}"> Price: $${item.price * item.quantity}</p>
      </div>
      </div>
      <hr>`;
      cartDetails.appendChild(product);
      
      totalAmount += item.price * item.quantity;
  });
  const changedTotalAmount = document.getElementById("totalAmount");
  changedTotalAmount.textContent = `Total Amount: $${totalAmount}`;


  const today = new Date();
document.getElementById("date").innerHTML=today;

