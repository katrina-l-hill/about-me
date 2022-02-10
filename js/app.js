'use strict';

// function userName() {
//   let name = prompt('Hello! What\'s your name?');
//   name = name.toUpperCase();
//   while (name === '' || name === null) {
//     name = prompt('Sorry. You must enter your name.');
//     name = name.toUpperCase();
//   }
//   name = name.toUpperCase();
//   // console.log('User entered their name: ' + name);
//   alert('Welcome ' + name + '!');
// }

// function userVehicle() {
//   let haveVehicle = prompt('Do you have a vehicle?');
//   haveVehicle = haveVehicle.toLowerCase();
//   // console.log(haveVehicle);
//   while (haveVehicle != 'y' && haveVehicle != 'n') {
//     haveVehicle = prompt('Sorry. You must enter a "y" or "n".');
//     haveVehicle = haveVehicle.toLowerCase();
//   }
//   // console.log('User told me if they like their vehicle.')
//   alert('I have a vehicle.');
// }

// function vehicleColor() {
//   let color = prompt('Do you have a light-colored vehicle?');
//   color = color.toLowerCase();
//   // console.log(color);
//   while (color != 'y' && color != 'n') {
//     color = prompt('Sorry. You must enter a "y" or "n".');
//     color = color.toLowerCase();
//   }

//   // console.log('User replied on what color vehicle they have.')
//   alert('I have a dark blue car.');

// }

// function newVehicle() {
//   let vehicleAge = prompt('Do you have a new vehicle?');
//   vehicleAge = vehicleAge.toLowerCase();
//   // console.log(vehicleAge);
//   while (vehicleAge != 'y' && vehicleAge != 'n') {
//     vehicleAge = prompt('Sorry. You must enter a "y" or "n".');
//     vehicleAge = vehicleAge.toLowerCase();
//   }

//   // console.log('User replied if they have a new vehicle.')
//   alert('My vehicle is 5 years old.');

// }

// function likeVehicle() {
//   let like = prompt('Do you like your vehicle?');
//   like = like.toLowerCase();
//   // console.log(like);
//   while (like != 'y' && like != 'n') {
//     like = prompt('Sorry. You must enter a "y" or "n".');
//     like = like.toLowerCase();
//   }
//   // console.log('User answered if they like their vehicle.')
//   alert('I like mine.');
// }

// function dreamVehicle(name) {
//   let dream = prompt('Do you have a dream vehicle?');
//   dream = dream.toLowerCase();
//   // console.log(dream);
//   while (dream != 'y' && dream != 'n') {
//     dream = prompt('Sorry. You must enter a "y" or "n".');
//     dream = dream.toLowerCase();
//   }
//   // console.log('User answered if they have a dream vehicle.')
//   alert('My dream car is a hover car. Hahaha! Thanks for playing my game, ' + name);
// }

let myNumber = 8;
// let numTry = 0;
// while (numTry != 8); {
//   console.log('Sorry. That\'s not my favorite number.');
//   numTry++;
// }

for (let i = 0; i < 4; i++) {
  console.log('Sorry. That\'s not my favorite number.');
  while (i < 4) {
    i++;
  }
  if (guess < myNumber) {
      userPrompt = prompt('Nope. Your guess is too low. Try again.'); 
  }
  if (guess > myNumber) {
    userPrompt = prompt('Nope. Your guess is too high.');
  }

// let maxTries = 4;
// let numTries = 1;
// let myNumber = 8;
// let userResponse = prompt("what number?")
// while(userResponse != myNumber && numTries < maxTries)
// {
//   if(userResponse > myNumber)
//   {
//     userResponse = prompt("Too high. Try again.");
//   }
//   else if(userResponse < myNumber)
//   {
//     userResponse = prompt("Too low. Try again.");
//   }
//   numTries++;
// }
// if(numTries < maxTries)
// {
//   alert("way to go");
// }
// else
// {
//   alert("game over");
// }

// let stuff = ['car', 'mouse', 'bird'];
// for(let j = 0; j < stuff.length; j++){
//   let item = stuff[j];
// }

// let j2 = 0;
// while(j2  < 10)
// {
//   j2++;
// }

  // while (userGuess < myNumber) {
  //   userPrompt = prompt('Nope. Your guess is too low. Try again.');
  // while (userGuess > myNumber) {
  //     userPrompt = prompt('Nope. Your guess is too high.');
  //   }
  // if (userGuess < i)
  //     userPrompt = prompt('Nope. Your guess is too low. Try again.');
  // if (userGuess > i)
  //     userPrompt = prompt('Nope. Your guess is too high.');
  // }
  // if (userGuess === 8) {
  //   alert('Ding ding ding! You guessed correctly.');
  // }



  // let userPrompt = prompt('Try to guess my favorite number. Hint: It\'s between 5 and 10.');
  // console.log('User entered a number.')
  // while (userGuess < myNumber) {
  //   userPrompt = prompt('Nope. Your guess is too low. Try again.');
  // while (userGuess > myNumber) {
  //   userPrompt = prompt('Nope. Your guess is too high.');
  // }
  // if (userGuess === myNumber) {
  //   alert('Ding ding ding! You guessed correctly.');
  // }
  // if (userGuess > 4) {
  //   alert('Sorry. You\'ve run out of chances to guess. The correct answer is 8.');
  // }



  // function favNumber() {
  //   let myNumber = prompt('Try to guess my favorite number. Hint: It\'s between 5 and 10.');
  //   while (myNumber != '5' && myNumber != '6' && myNumber != '7' && myNumber != '9' && myNumber != '10') {
  //     myNumber = prompt('Nope. Not the right number.');
  //     let counter = 10;
  //     while (counter < 10);
  // }
  //   console.log('User entered a number.')
  //   alert('Nope. Not the right number.')
  // }


  // this is the teacher's code for reference
  // let foodsILike = ['tatertots', 'juanitas tortilla chips', 'popcorn', 'kale'];

  // for (let i = 0; i < foodsILike.length; i++) {
  //   console.log(foodsILike[i]);
  // }

  // let name = userName();
  // let haveVehicle = userVehicle();
  // let color = vehicleColor();
  // let vehicleAge = newVehicle();
  // let like = likeVehicle();
  // let dream = dreamVehicle(name);
  let myNumber = favNumber();
  let guess = userGuess();
