'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   console.log(request.responseText);

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     let datas;
//     for (datas in data.languages) {
//       console.log(`${datas}: ${data.languages[datas]}`);
//     }

//     let currency;
//     for (currency in data.currencies) {
//       console.log(`${currency}: ${data.currencies[currency]}`);
//     }
//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[datas]}</p>
//         <p class="country__row"><span>💰</span>${
//           data.currencies[currency].name
//         }</p>
//     </div>
// </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('uk');
// getCountryData('usa');
// getCountryData('switzerland');
// getCountryData('bangladesh');

const renderCountry = function (data, className = '') {
  let datas;
  for (datas in data.languages) {
  }

  let currency;
  for (currency in data.currencies) {
  }
  const html = `
<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[datas]}</p>
      <p class="country__row"><span>💰</span>${
        data.currencies[currency].name
      }</p>
  </div>
</article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     //Get neighbour country
//     const [neighbour] = data.borders;
//     console.log(neighbour);
//     if (!neighbour) return;

//     //AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('argentina');
// getCountryAndNeighbour('usa');

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       response => response.json(),
//       err => alert(err)
//     )
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       console.log(neighbour);

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0], 'neighbour');
//     })
//     .catch(err => alert(err));
// };

// btn.addEventListener('click', function () {
//   getCountryData('bangladesh');
// });

//getCountryData('dfgdfgfd');

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=89982670757669176163x2976`
//   )
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${reponse.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`COuntry not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.log(`${err.message}`));
// };

// whereAmI(51.50354, -0.12768);
// whereAmI(51.50354, -0.12768);
// whereAmI(51.50354, -0.12768);

//event loop

// console.log('Test Start');

// setTimeout(() => console.log('o sec timer'), 0);

// Promise.resolve('Resolved Promise 1').then(res => console.log(res));
// console.log('Test end');

//Simple promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening now');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You Win');
//     } else {
//       reject(new Error('You lost your money'));
//     }
//   });
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      console.log(lat, lng);
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=89982670757669176163x2976`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${reponse.status}`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`${err.message}`));
};

btn.addEventListener('click', whereAmI);
