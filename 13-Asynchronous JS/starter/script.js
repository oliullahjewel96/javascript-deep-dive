'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    let datas;
    for (datas in data.languages) {
      console.log(`${datas}: ${data.languages[datas]}`);
    }

    let currency;
    for (currency in data.currencies) {
      console.log(`${currency}: ${data.currencies[currency]}`);
    }
    const html = `
  <article class="country">
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
  });
};

getCountryData('uk');
getCountryData('usa');
getCountryData('switzerland');
getCountryData('bangladesh');
