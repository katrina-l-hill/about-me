function userName() {
  let name = prompt ('Hello! What\'s your name?');
  if(name ==="userName")

    alert('Welcome ${name}!');

  else

    alert('Sorry. You must enter your name.');
}

function userCar() {
  let haveCar = prompt ('Do you like your car?');
  if(haveCar === "y" && haveCar === "n")

    alert('I like mine, ${name}.');

    else

    alert('Invalid input. You have to type y or n.');
}

function carColor() {
  let color = prompt ('Do you have a light-colored car?');
  if(color === "y" && color === "n")
  
      alert('Invalid input. You have to type y or n.');
  
      else

      alert('My car is dark blue.');
}

function newCar() {
  let carAge = prompt ('Do you have a new car?');
  if(carAge === "y" && carAge === "n")
  
      alert('Invalid input. You have to type y or n.');
  
      else

      alert('My car is 5 years old.');
}

function likeCar() {
  let like = prompt ('Do you like your car?');
  if(like === "y" && like === "n")
  
      alert('Invalid input. You have to type y or n.');
  
      else

      alert('I love my car.');
}

function dreamCar() {
  let dream = prompt ('Do you like your car?');
  if(dream === "y" && dream === "n")
  
      alert('Invalid input. You have to type y or n.');
  
      else

      alert('My dream car is a hover car. Teehee!');
}

let scent = bathScent();
let water = waterTemp();
let useCandles = bathCandles();
let useBook = bathBook();
let message = runABath(scent, water, useCandles, useBook);
console.log(message);