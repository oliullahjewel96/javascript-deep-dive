//Importing modules
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// addToCart('bread', 5);

// console.log(totalPrice, totalQuantity);
// console.log('Importing Modules');
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add from './shoppingCart.js';

// add('pizza', 2);

// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

// const data = await res.json();
// console.log(data);

// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = await getLastPost();

// console.log(lastPost);

import cloneDeep from '../../node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quaantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);
