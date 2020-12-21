let totalPay = 0;

function fetchProducts() {
  fetch('/api/products')
    .then((response) => response.json())
    .then(({ data }) => {
      let productHtml = '';
      data.forEach((product) => {
        productHtml += `
        <div class="col-md-3">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${product.price} USD</h6>
              <p class="card-text">${product.description}</p>
              <button type="button" class="btn btn-primary" onclick="addTocart()">Add to card</button>
            </div>
          </div>
        </div>
        `;
      });
      document.getElementById('product-view').innerHTML =
        '<div class"row">' + productHtml + '</div>';
    })
    .catch((error) => {
      console.log(error);
    });
}

function addTocart(product) {
  console.log(product.name);
}
fetchProducts();