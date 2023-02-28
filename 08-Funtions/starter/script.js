'use strict';

// const bookings = [];

// const createBooking = (flightNum, numPassengers = 1, price = 200) => {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');

// let flight = 'LH123';

// const oli = {
//   fullName: 'Oli Ullah',
//   passport: 'BF08234',
// };

// const checkIn = (flightNum, passenger) => {
//   flightNum = 'LH234';

//   passenger.fullName = 'Mr.' + passenger.fullName;

//   if (passenger.passport === 'BF08234') {
//     alert('Checked in');
//   } else {
//     console.log('Something wrong with your passport');
//   }
// };

// checkIn(flight, oli);
// console.log(flight);
// console.log(oli);

// const oneWord = function (str) {
//   return str.replace(/ /g, ' ').toLowerCase();
// };

// console.log(oneWord('I want to be a Software Engineer'));

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// console.log(upperFirstWord('everyone wants to be a Software Engineer'));

// //Higher order function

// const trasnformer = function (str, callbackfn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${callbackfn(str)}`);
//   console.log(`Transformed by:${callbackfn.name}`);
// };

// trasnformer('Javascript is an awesome language', upperFirstWord);
// trasnformer('Javascript is an awesome language', oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeter = greet('Hey');
// greeter('OLi');

// const greet = greeting => {
//   return name => console.log(`${greeting} ${name}`);
// };

// const greeter = greet('Hey');
// greeter('oli');

// const flyemirates = {
//   airline: 'Emirates',
//   iataCode: 'ER',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// flyemirates.book(239, 'Oli Ullah');
// flyemirates.book(237, 'Muniya Nusrat');
// console.log(flyemirates);

// const etihad = {
//   airline: 'Etihad',
//   iataCode: 'ET',
//   bookings: [],
// };

// const book = flyemirates.book;

//Does Not work
//book(23, 'Lorin');

// book.call(etihad, 23, 'Lorin');
// console.log(etihad);

// book.call(flyemirates, 635, 'Robin');
// console.log(flyemirates);

//Bind method

// const bookFE = book.bind(flyemirates);
// const bookER239 = book.bind(flyemirates, 239);
// bookER239('OLI ULLAH');
// bookER239('MUNIYA NUSRAT');
// bookFE(256, 'Arafat Antu');

// flyemirates.planes = 300;

// flyemirates.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', flyemirates.buyPlane.bind(flyemirates));

// const addTax = (rate, value) => {
//   const addVAT = () => {
//     return value + value * rate;
//   };
//   return addVAT();
// };

// const totalTax = addTax(0.23, 100);
// console.log(totalTax);
