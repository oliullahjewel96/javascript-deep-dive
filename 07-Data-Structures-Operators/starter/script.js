'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+'));
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.replaceAll('_', ' ')} ${
    from.slice(0, 3).toUpperCase() + ' from'
  } ${to.slice(0, 3).toUpperCase() + ' to'} ${time.replace(':', 'h')}`;
  console.log(output);
}

const openingHours = {
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
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //Enhanched object literal
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

//Property Names
// const properties = Object.keys(openingHours);

// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day},`;
// }

// console.log(openStr);
// //Property Values
// const value = Object.values(openingHours);
// // console.log(value);
// //Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we are open at ${open} and close at ${close}`);
// }
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

// const mainMenuCopy = [...restaurant.mainMenu];

// console.log(mainMenuCopy);

// //merging two array

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(menu);

//Iterables: arrays, strings, maps, sets. NOT objects

// const str = ' Oli Ullah';

// const letters = [...str];
// console.log(letters);
// console.log(str);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1!"),
//   prompt(' Ingredient 2!'),
//   prompt(' Ingredient 3!'),
// ];

// restaurant.orderPasta(...ingredients);

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

// console.log(newRestaurant);

//REST operators

// const arr = [1, 2, 3, 4, 5];

// const [a, b, ...others] = arr;

// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { fri, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(1, 2);
// add(1, 2, 3, 4, 5, 6, 7, 8);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9);

// const x = [2, 33, 45];
// add(...x);

//short circuiting

// console.log(3 || 'Oli');
// console.log('' || 'oli');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1); // can be written as below mentioned expression

// const guest2 = restaurant.numGuest || 56;
// console.log(guest2);

// //And operators
// console.log('------And Operator----');
// console.log(3 && 'Oli');
// console.log('' && 'oli');
// console.log(true && 0);
// console.log(undefined && null);
// console.log(undefined && 0 && '' && 'Hello' && 23 && null);

//Nullish coalescing operator
//Nullish: null and undefined (NOT 0 or "")
// restaurant.numGuests = 0;

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

//logical assignment operator

// const rest1 = {
//   name: 'Spicy Easy',
//   //numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'Burger King',
//   owner: 'Oli',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

//The coding challenge

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function (...playerNames) {
//     for (let i = 0; i < playerNames.length; i++) {
//       console.log(playerNames[i]);
//     }
//     console.log(`${playerNames.length} goals were scored`);
//   },
// };

// solution of question 1

// const [player1, player2] = [game.players[0], game.players[1]];
// console.log(player1, player2);
// solution of question 2
// const [gk, ...fieldPlayers] = player1;

// console.log(gk);
// console.log(fieldPlayers);

// solution of question 3
// const [...allPlayers] = [...player1, ...player2];

// console.log(allPlayers);
// solution of question 4
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

// console.log(players1Final);

// solution of question 5
// const { team1, x: draw, team2 } = game.odds;
// const { x: draw, } = game.odds;

// console.log(team1, draw, team2);

// solution of question 6
// game.printGoals('Firmino', 'Alisson', 'Van Dijk', 'Jota', 'Diaz');
// game.printGoals(...game.scored);

// solution of question 7
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 more likely to win');

//Looping arrays --- for of loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const item of menu.entries()) {
//   console.log(item);
// }
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open;
//   console.log(`On ${day}, we open at ${open}`);
// }

// const users = [{ name: 'Oli', email: 'oli@decathlon.com' }];

// console.log(users[0]?.name ?? 'User does not exists');

// Coding challenge 2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//1
// const [...scored] = game.scored;
// console.log(scored);
// for (const [number, scorer] of Object.entries(scored)) {
//   let intNumber = Number(number);
//   console.log(`Goal ${intNumber + 1}: ${scorer}`);
// }

// //2
// let average = 0;
// const gameOdds = Object.values(game.odds);
// console.log(gameOdds);
// for (const odd of gameOdds) {
//   average = average + odd / gameOdds.length;
// }
// console.log(average);
// // console.log(team1, team2);

// for (const [team, values] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd for ${teamStr} : ${values} \n`);
// }

// const scorer = Object.assign({}, scored);

// console.log(scorer);

//set datastructure

// const ordersSet = new Set(['pizza', 'cheese', 'Coke', 'pizza', 'cheese']);
// console.log(ordersSet);
// console.log(ordersSet.size);
// console.log(ordersSet.has('pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('pizza');
// console.log(ordersSet);

//Working with string

// const airline = 'Bangladesh Biman';
// const plane = 'B379';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B379'[0]);
// console.log(plane.length);

// console.log(airline.indexOf('h'));
// console.log(airline.lastIndexOf('n'));
// console.log(airline.indexOf('Biman'));
// console.log(airline.slice(11));
// console.log(airline.slice(11, 15));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = seat => {
//   //B and E ate  middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You have got the middle seat');
//   } else {
//     console.log('You are lucky');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('1C00');
// checkMiddleSeat('1CE');
// checkMiddleSeat('1CD');

// const passenger = 'oLi';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1).toLowerCase();
// console.log(passengerCorrect);

//replace() stirng method

// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);
// const announcement =
//   'All passengers come to the boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));

//split()

// console.log('a+very+beautiful+string'.split('+'));
// console.log('Oli Ullah'.split(' '));

// const [firstName, lastName] = 'Oli Ullah'.split(' ');
// console.log(firstName);
// console.log(lastName);

// const capitalizeName = name => {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('robin jobaer');
// capitalizeName('oli ullah');

// const maskingCreditCard = number => {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskingCreditCard(3486738763729835687));
// console.log(maskingCreditCard('3486738763729835687'));
