const porduct = document.querySelector(".products");
fetch('https://fakestoreapi.com/products')
.then(result => result.json())
	.then((data) => {
		data.map((product) => {
			const { id, title, price, image, description, category } = product;
			porduct.innerHTML += `
            <div class="col-4 d-flex align-items-stretch justify-content-center p-3">
        <div class="card rounded-4">
  <img src="${image}" class="card-img-top img-fluid p-4" alt="${title}">
  <div class="card-body border-top p-4">
    <h5 class="card-title">${title}</h5>
    <p class="card-text text-truncate">${description}</p>
    <h6 class="card-title">${price}</h6>
    <h6 class="card-title text-muted text-capitalize">${category}</h6>
  
   <a href="singleproduct.html?id=${id}" class="btn btn-primary card-button mt-3">View Details</a>
  
  </div>
</div>` ;
		});
	});

  function logout() {
    localStorage.setItem('isLoggedIn', false);
    window.loggedInUser = null; 
    window.location.href = '../index.html';
  }