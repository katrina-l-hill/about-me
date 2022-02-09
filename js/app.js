function userName() {
  let name = prompt('Hello! What\'s your name?').toUpperCase();
  if (name === "userName") {
    console.log('User entered their name.')
    alert('Welcome ${name}!');

  }
  else if (userName === 'null') {
    alert('Sorry. You must enter your name, and it must be in UPPER case.');
  }
}

function userVehicle() {
  let haveVehicle = prompt('Do you like your vehicle?').toLowerCase();
  if (haveVehicle === "y" || haveVehicle === "n") {
    console.log('User told me if they like their vehicle.')
    alert('I like mine, ${name}.');
  }
  else if (userVehicle === 'null') {

    alert('Invalid input. You have to type y or n in lower case.');
  }
}

function vehicleColor() {
  let color = prompt('Do you have a light-colored vehicle?').toLowerCase();
  if (color === "y" || color === "n") {
    console.log('User replied on what color vehicle they have.')

    alert('Invalid input. You have to type y or n in lower case.');
  }
  else if (vehicleColor === 'null') {

    alert('My car is dark blue.');
  }
}

function newVehicle() {
  let vehicleAge = prompt('Do you have a new vehicle?').toUpperCase();
  if (vehicleAge === "y" || vehicleAge === "n") {
    console.log('User replied if they have a new vehicle.')

    alert('Invalid input. You have to type y or n in UPPER case.');

  }
  else if (newVehicle === 'null') {

    alert('My car is 5 years old.');
  }
}

function likeVehicle() {
  let like = prompt('Do you like your vehicle?').toLowerCase();
  if (like === "y" || like === "n") {
    console.log('User answered if they like their vehicle.')

    alert('Invalid input. You have to type y or n in lower case.');

  }
  else if (likeVehicle === 'null') {

    alert('I love my car.');
  }
}

function dreamVehicle() {
  let dream = prompt('Do you have a dream vehicle?').toUpperCase();
  if (dream === "y" || dream === "n") {
    console.log('User answered if they have a dream vehicle.')

    alert('Invalid input. You have to type y or n in UPPER case.');

  } else if (dreamVehicle === 'null') {

    alert('My dream car is a hover car. Teehee! Thanks for playing my guessing game.');
  }
}

let name = userName();
let haveVehicle = userVehicle();
let color = vehicleColor();
let vehicleAge = newVehicle();
let like = likeVehicle();
let dream = dreamVehicle();
