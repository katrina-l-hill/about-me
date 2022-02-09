function userName() {
  let name = prompt('Hello! What\'s your name?');
  name = name.toUpperCase();
  while (name === '' || name === null) {
    name = prompt('Sorry. You must enter your name.');
    name = name.toUpperCase();
  }
  name = name.toUpperCase();
  // console.log('User entered their name: ' + name);
  alert('Welcome ' + name + '!');
}

function userVehicle() {
  let haveVehicle = prompt('Do you have a vehicle?');
  haveVehicle = haveVehicle.toLowerCase();
  // console.log(haveVehicle);
  while (haveVehicle != 'y' && haveVehicle != 'n') {
    haveVehicle = prompt('Sorry. You must enter a "y" or "n".');
    haveVehicle = haveVehicle.toLowerCase();
  }
  // console.log('User told me if they like their vehicle.')
  alert('I have a vehicle.');
}

function vehicleColor() {
  let color = prompt('Do you have a light-colored vehicle?');
  color = color.toLowerCase();
  // console.log(color);
  while (color != 'y' && color != 'n') {
    color = prompt('Sorry. You must enter a "y" or "n".');
    color = color.toLowerCase();
  }

  // console.log('User replied on what color vehicle they have.')
  alert('I have a dark blue car.');

}

function newVehicle() {
  let vehicleAge = prompt('Do you have a new vehicle?');
  vehicleAge = vehicleAge.toLowerCase();
  // console.log(vehicleAge);
  while (vehicleAge != 'y' && vehicleAge != 'n') {
    vehicleAge = prompt('Sorry. You must enter a "y" or "n".');
    vehicleAge = vehicleAge.toLowerCase();
  }

  // console.log('User replied if they have a new vehicle.')
  alert('My vehicle is 5 years old.');

}

function likeVehicle() {
  let like = prompt('Do you like your vehicle?');
  like = like.toLowerCase();
  // console.log(like);
  while (like != 'y' && like != 'n') {
    like = prompt('Sorry. You must enter a "y" or "n".');
    like = like.toLowerCase();
  }
  // console.log('User answered if they like their vehicle.')
  alert('I like mine.');
}

function dreamVehicle() {
  let dream = prompt('Do you have a dream vehicle?');
  dream = dream.toLowerCase();
  // console.log(dream);
  while (dream != 'y' && dream != 'n') {
    dream = prompt('Sorry. You must enter a "y" or "n".');
    dream = dream.toLowerCase();
  }
  // console.log('User answered if they have a dream vehicle.')
  alert('My dream car is a hover car. Hahaha!');
}

let name = userName();
let haveVehicle = userVehicle();
let color = vehicleColor();
let vehicleAge = newVehicle();
let like = likeVehicle();
let dream = dreamVehicle();
