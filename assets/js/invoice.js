const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartDetails = document.getElementById("invoice");
let totalAmount = 0;
cartItems.forEach((item, i) => {
  const product = document.createElement("div");
  product.innerHTML = `<div class="row justify-content-around">
      <div class="col-6">
      <h6>${item.title}</h6>
      </div>
      <div class="col-4">
      <p id="itemPrice${i}"><span class="fw-bold"> Price: </span>$${item.price * item.quantity}</p>
      </div>
      </div>
      <hr>`;
  cartDetails.appendChild(product);

  totalAmount += item.price * item.quantity;
});
const changedTotalAmount = document.getElementById("totalAmount");
changedTotalAmount.textContent = `$${totalAmount}`;


const today = new Date();
document.getElementById("date").innerHTML = today;

function logout() {
  localStorage.setItem('isLoggedIn', false);
  window.loggedInUser = null; 
  window.location.href = '../index.html';
}

  
const getAddress = JSON.parse(localStorage.getItem("address"));
const address = document.getElementById("address");
  address.innerHTML = `<h6 class="fw-bold">Name: <span class="fw-normal">${getAddress.name}</span></h6>
   <h6 class="fw-bold">Address: <span class="fw-normal">${getAddress.address}</span></h6>
  <h6 class="fw-bold">State: <span class="fw-normal">${getAddress.state}</span></h6>
  <h6 class="fw-bold">City: <span class="fw-normal">${getAddress.city}</span></h6>
  <h6 class="fw-bold">Pin Code: <span class="fw-normal">${getAddress.pin}</span></h6>
  `;