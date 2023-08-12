/*
  Create an advanced online shopping cart system using JavaScript
  functions and objects.
*/

function createProduct(name, price, inventory) {
    // Your code here
}

function createShoppingCart() {
    // Your code here
}

function addProduct(cart, product, quantity) {
    // Your code here
}

function removeProduct(cart, productName, quantity) {
    // Your code here
}

function calculateTotalPrice(cart) {
    // Your code here
}

function displayCart(cart) {
    // Your code here
}

const myCart = createShoppingCart();
const product1 = createProduct("Laptop", 999.99, 10);
const product2 = createProduct("Phone", 599.99, 20);

addProduct(myCart, product1, 2);
addProduct(myCart, product2, 1);

removeProduct(myCart, "Laptop", 1);

console.log(displayCart(myCart));  // Expected output: Display the cart with products and total price
