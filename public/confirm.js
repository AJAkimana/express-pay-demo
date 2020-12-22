function finishShopping() {
	fetch('/api/products/finish')
		.then((response) => response.json())
		.then(({ data }) => {
			console.log(data);
			document.getElementById('thank-you-message').innerHTML = data.message;
			document.getElementById('payment-details').innerHTML = data.detail;
		})
		.catch((error) => {
			console.log(error);
		});
}
finishShopping();
