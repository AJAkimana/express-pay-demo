let totalPay = 0;
const token = localStorage.getItem('user-token');
const headers = {
	'Content-Type': 'application/json',
	Authorization: token || ''
};
// Example POST method implementation:
async function postData(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
			Authorization:
				token ||
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA4NjY1OTMyLCJleHAiOjE2MDkyNzA3MzJ9.dB-PNJ6x8GT1U-fVL6u_cKXVa2WXaUbOffFhc4wfvKM'
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.stringify(data)
	});
	return response.json();
}
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
              <button type="button" class="btn btn-primary" onclick="addTocart(${product.id},${product.price})">Add to card</button>
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

function addTocart(productId) {
	postData('/api/products/addToCard', { productId })
		.then(({ data }) => {
			totalPay = data;
			document.getElementById('checkout-price').innerHTML = totalPay;
		})
		.catch((error) => {
			console.log(error);
		});
}
fetchProducts();
