//ürün id'si 

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

//Ürün detayları

fetch(`https://fakestoreapi.com/products/${productId}`)
.then(response => response.json())
.then(data => {

const productImageContainer = document.getElementById(`product-image`);
const productInfoContainer = document.getElementById(`product-info`);

//Ürün Resmi

const productImage = document.createElement('img');
productImage.src = data.image;
productImage.alt = data.title;
productImageContainer.appendChild(productImage);

//Ürün Bilgileri

const productName = document.createElement('h2');
productName.textContent = data.title;

const productDescription = document.createElement('p');
productName.textContent = data.description;

const productPrice = document.createElement('p');
productName.textContent = `Price ${data.price}`;

const productRating = document.createElement('p');
productName.textContent = `Rating ${data.rating.rate}`;

productInfoContainer.appendChild(productName);
productInfoContainer.appendChild(productDescription);
productInfoContainer.appendChild(productPrice);
productInfoContainer.appendChild(productRating);

})

.catch(error => console.error('Error fetching product details:', error));