'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// restaurant.orderDelivery({
//   time: '10:30PM',
//   address: 'Bashundhara R/A',
//   starterIndex: 2,
//   mainIndex: 2,
// });
// //Destructuring objects

// const { name, openingHours, categories } = restaurant;

// console.log(name);
// console.log(openingHours);
// console.log(categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// //Mutating variables

// let a = 111;
// let b = 222;

// const obj = { a: 23, b: 7, c: 14 };
// //mutating

// ({ a, b } = obj);

// console.log(a, b);

// //nested object destructuring

// const {
//   fri: { open, close },
// } = openingHours;

// console.log(open, close);
//Array destructuring

// const array = [2, 3, 4];
// const [x, y, z] = array;
// console.log(x, y, z);

// const [first, , second] = restaurant.categories;

// console.log(first, second);

// const [starter, main] = restaurant.order(1, 0);

// console.log(starter, main);

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;

// console.log(i, j, k);

// //default values in array destructuring

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//spread opeartor

// const arr = [3, 4, 5];

// const newArr = [1, 2, ...arr];

// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Burger'];

// console.log(newMenu);

//shallow copy of array

const mainMenuCopy = [...restaurant.mainMenu];

console.log(mainMenuCopy);

//merging two array

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(menu);
