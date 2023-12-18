const singleProductShow = new URLSearchParams(window.location.search);
const productId = singleProductShow.get("id");
const singleProductDetails = document.getElementById("productDetails");

fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(productDetails => {
      
        singleProductDetails.innerHTML = `
            <div class="col-sm-6 m-auto d-flex justify-content-center">
                <img src="${productDetails.image}" alt="${productDetails.title}" class="img-fluid singleimage">
            </div>
            <div class="col-sm-6 px-5 border-start">
                <h4 class="mt-4">${productDetails.title}</h4>
                <p>${productDetails.description}</p>
                <h4>Price: $${productDetails.price}</h4>
                <button type="button" class="btn mt-4 card-button" id="addToCart">Add To Cart <i class="fa-solid fa-cart-shopping"></i></button>
            </div>`;
    
        const addToCartButton = document.getElementById("addToCart");
addToCartButton.addEventListener("click", () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cartItems.findIndex(item => item.id === productDetails.id);

    if (existingItem !== -1) {
        if (cartItems[existingItem].quantity + 1 > 10) {
            alert("Cannot add more than 10 items to the cart!");
            return;
        }
        cartItems[existingItem].quantity += 1;
    } else {
        if (cartItems.length + 1 > 10) {
            alert("Cannot add more than 10 items to the cart!");
            return;
        }
        cartItems.push({
            id: productDetails.id,
            title: productDetails.title,
            price: productDetails.price,
            image: productDetails.image,
            quantity: 3,
        });
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert(`Added ${productDetails.title} to cart!`);
});



});
    function logout() {
        localStorage.setItem('isLoggedIn', false);
        window.loggedInUser = null; 
        window.location.href = '../index.html';
      }