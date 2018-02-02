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

for (let x=0; x < i; x += 1) {
  let itemsAndPrice = cart[];
  let item = Object.keys(itemsAndPrice)[0];
  let price = itemsAndPrice[item];
  
  itemsAndPrices.push(`${item} at \$${price}`);
}
}
  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
      itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
      itemsAndPrices = itemsAndPrices.join(", ");
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`);



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
