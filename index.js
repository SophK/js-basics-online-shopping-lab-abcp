var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

var itemPrice = Math.floor((Math.random() * 100) + 1);
var itemName = {[item]: itemPrice};

cart.push(itemName);

console.log(itemName + " has been added to your cart."); 

return cart;
  
}

function viewCart() {
  var message = "In your cart, you have ";
 
  if (cart.length === 0) {
   
                return "Your shopping cart is empty.";
   
      }  else {  
  
          for ( var num = 1; num <= cart.length; num+= 1 ) {
     
              message += cart[num] + ', '
     
                           }
           return message
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
