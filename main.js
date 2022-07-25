"use strict";

let img = document.querySelector("img");
let btnDog = document.querySelector(".btnDog");

// Button generates random dog pics from dog API
btnDog.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.message);
      img.src = data.message;
    });
});

// part 2
let form = document.querySelector("form");
let textInput = document.querySelector("#textInput");
let result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let url = `https://goweather.herokuapp.com/weather/${textInput.value}`;
  console.log(encodeURI(url));
  fetch(encodeURI(url))
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      result.innerText = `Temp: ${data.temperature}\nWind: ${data.wind},\nDesc: ${data.description}`;
    });
});
