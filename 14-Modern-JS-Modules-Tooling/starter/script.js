//Importing modules
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// addToCart('bread', 5);

// console.log(totalPrice, totalQuantity);
console.log('Importing Modules');
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

import add from './shoppingCart.js';

add('pizza', 2);

const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

const data = await res.json();
console.log(data);
