function userName() {
  let name = prompt ('Hello! What\'s your name?').toUpperCase();
  if(name ==="userName")

    alert('Welcome ${name}!');

  else

    alert('Sorry. You must enter your name, and it must be in UPPER case.');
}

function userCar() {
  let haveCar = prompt ('Do you like your car?').toLowerCase();
  if(haveCar === "y" && haveCar === "n")

    alert('I like mine, ${name}.');

    else

    alert('Invalid input. You have to type y or n in lower case.');
}

function carColor() {
  let color = prompt ('Do you have a light-colored car?').toLowerCase();
  if(color === "y" && color === "n")
  
      alert('Invalid input. You have to type y or n in lower case.');
  
      else

      alert('My car is dark blue.');
}

function newCar() {
  let carAge = prompt ('Do you have a new car?').toUpperCase();
  if(carAge === "y" && carAge === "n")
  
      alert('Invalid input. You have to type y or n in UPPER case.');
  
      else

      alert('My car is 5 years old.');
}

function likeCar() {
  let like = prompt ('Do you like your car?').toLowerCase();
  if(like === "y" && like === "n")
  
      alert('Invalid input. You have to type y or n in lower case.');
  
      else

      alert('I love my car.');
}

function dreamCar() {
  let dream = prompt ('Do you like your car?').toUpperCase();
  if(dream === "y" && dream === "n")
  
      alert('Invalid input. You have to type y or n in UPPER case.');
  
      else

      alert('My dream car is a hover car. Teehee! Thanks for playing my guessing game.');
}

let name = userName();
let haveCar = userCar();
let color = carColor();
let carAge = newCar();
let like = likeCar();
let dream = dreamCar();
