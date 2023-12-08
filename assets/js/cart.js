  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartDetails = document.getElementById("cartDetails");
    let totalAmount = 0;

    cartItems.forEach((item, i) => {
      const product = document.createElement("div");
      product.innerHTML = `<div class="orderMain d-flex">
          <div class="col-1">
            <button type="button" class="btn btn-danger" id="delete${i}"><i class="fa-solid fa-trash"></i></button>
          </div>
          <div class="col-3">
            <h6>${item.title}</h6>
          </div>
          <div class="col-1">
            <img src="${item.image}" alt="${item.title}" class="cartImage">
          </div>
          <div class="col-1">
            <p><strong>Price:</strong> $${item.price}</p>
          </div>
          <div class="col-5 buton">
            <button type="button" class="btn btn-success" id="increase${i}"><i class="fa-solid fa-plus"></i></button>
            <p><strong>Quantity:</strong> <span id="quantity${i}">${item.quantity}</span></p>
            <button type="button" class="btn btn-primary" id="decrease${i}"><i class="fa-solid fa-minus"></i></button>
            <p id="itemPrice${i}"> Price: $${item.price * item.quantity}</p>
          </div>
        </div>`;

      cartDetails.appendChild(product);

      totalAmount += item.price * item.quantity;

      const deleteItem = document.getElementById(`delete${i}`);
      const increaseItem = document.getElementById(`increase${i}`);
      const decreaseItem = document.getElementById(`decrease${i}`);

      deleteItem.addEventListener("click", () => {
        cartItems.splice(i, 1);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        product.remove();
        totalAmountt();
      });

      increaseItem.addEventListener("click", () => {
        item.quantity++;
        cartItemm(i);
        totalAmountt();
      });

      decreaseItem.addEventListener("click", () => {
        if (item.quantity > 1) {
          item.quantity--;
          cartItemm(i);
          totalAmountt();
        }
      });

      function cartItemm(i) {
        const totalQuantity = document.getElementById(`quantity${i}`);
        const totalItemPrice = document.getElementById(`itemPrice${i}`);

        totalQuantity.textContent = item.quantity;
        totalItemPrice.textContent = `Price: $${item.price * item.quantity}`;

        cartItems[i] = item;
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }

      function totalAmountt() {
        totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        changedTotalAmount.textContent = `Total Amount: $${totalAmount}`;
      }
    });

    const changedTotalAmount = document.getElementById("totalAmount");
    changedTotalAmount.textContent = `Total Amount: $${totalAmount}`;

    function logout() {
      localStorage.setItem('isLoggedIn', false);
      window.loggedInUser = null; 
      window.location.href = '../index.html';
    }