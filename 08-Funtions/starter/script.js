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

const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
};

console.log(oneWord('I want to be a Software Engineer'));

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

console.log(upperFirstWord('everyone wants to be a Software Engineer'));

//Higher order function

const trasnformer = function (str, callbackfn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${callbackfn(str)}`);
  console.log(`Transformed by:${callbackfn.name}`);
};

trasnformer('Javascript is an awesome language', upperFirstWord);
trasnformer('Javascript is an awesome language', oneWord);
