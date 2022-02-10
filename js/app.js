'use strict';

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

function dreamVehicle(name) {
  let dream = prompt('Do you have a dream vehicle?');
  dream = dream.toLowerCase();
  // console.log(dream);
  while (dream != 'y' && dream != 'n') {
    dream = prompt('Sorry. You must enter a "y" or "n".');
    dream = dream.toLowerCase();
  }
  // console.log('User answered if they have a dream vehicle.')
  alert('My dream car is a hover car. Hahaha! Thanks for playing my game, ' + name);
}

let maxTries = 4;
let numTries = 1;
let myNumber = 8;
let userResponse = prompt('Try to guess my favorite number. Hint: It\'s between 5 and 10.')
while (userResponse != myNumber && numTries < maxTries) {
  if (userResponse > myNumber) {
    userResponse = prompt('Too high. Try again.');
  }
  else if (userResponse < myNumber) {
    userResponse = prompt('Too low. Try again.');
  }
  numTries++;
}
if (numTries < maxTries) {
  alert('You got it. Way to go!');
}
else {
  alert('Bummer, game over. You didn\'t guess correctly. My favorite number is 8.');
}

let maxAttempt = 6;
let numAttempt = 1;
let myFavFruit = ['plum', 'apple', 'kiwi'];
let userAns = prompt('Try to guess my favorite fruit.');
let isCorrectAnswer = false;
for (let j = 0; j < 3; j++) {
  if (userAns === myFavFruit[j]) {
    isCorrectAnswer = true;
  }
}
while (!isCorrectAnswer && numAttempt < maxAttempt) {
  userAns = prompt('Try again.');
  isCorrectAnswer = false;
  for (let i = 0; i < 3; i++) {
    if (userAns === myFavFruit[i]) {
      isCorrectAnswer = true;
    }
  }
  numAttempt++;
}
if(isCorrectAnswer && numAttempt <= maxAttempt)
{
  alert('Alright! You got it!');
}
else
{
  alert('Yikes. You didn\'t get it correct. It was a plum.');
}

let name = userName();
let haveVehicle = userVehicle();
let color = vehicleColor();
let vehicleAge = newVehicle();
let like = likeVehicle();
let dream = dreamVehicle(name);

