var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) + 1;

  cart.push({ [item]: price });

  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  
  const i = cart.length;
  
  if ( i === 0 ) {
    return console.log("Your shopping cart is empty.");
  }
  
var itemsAndPrices = [];

for (x=0; x < i; x += 1) {
  let itemsAndPrice = cart[x];
  let item = Object.keys(itemsAndPrice)[0];
  let price = itemsAndPrice[item];
  
  itemsAndPrices.push(`${item} at \$${price}`);
}
}




function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
