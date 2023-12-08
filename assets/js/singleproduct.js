const singleProductShow = new URLSearchParams(window.location.search);
const productId = singleProductShow.get("id");
const singleProductDetails = document.getElementById("productDetails");

fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(productDetails => {
      
        singleProductDetails.innerHTML = `
            <div class="col-sm-4 offset-2">
                <img src="${productDetails.image}" alt="${productDetails.title}" class="img-fluid singleimage">
            </div>
            <div class="col-sm-4">
                <h4 class="mt-4">${productDetails.title}</h4>
                <p>${productDetails.description}</p>
                <h4>Price: $${productDetails.price}</h4>
                <button type="button" class="btn btn-primary mt-5" id="addToCart">Add To Cart <i class="fa-solid fa-cart-shopping"></i></button>
            </div>`;
       
        const addToCartButton = document.getElementById("addToCart");
        addToCartButton.addEventListener("click", () => {
            const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            cartItems.push({
                id: productDetails.id,
                title: productDetails.title,
                price: productDetails.price,
                image: productDetails.image,
                quantity: 1,
            });
            localStorage.setItem("cart", JSON.stringify(cartItems));
            alert(`Added ${productDetails.title} to cart!`);
        });
    })

    function logout() {
        localStorage.setItem('isLoggedIn', false);
        window.loggedInUser = null; 
        window.location.href = '../index.html';
      }