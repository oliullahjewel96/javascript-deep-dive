'use strict';

const bookings = [];

const createBooking = (flightNum, numPassengers = 1, price = 200) => {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
