function name() {
  let userName = prompt ('Hello! What\'s your name?');
  if(iceCreamPrompt=="userName")
{
    alert('Welcome ${userName}!');
}
else
{
    alert('Sorry. You must enter your name.');
}

function waterTemp() {
  let temp = prompt ('Choose your temperature (hot or warm):');
  while(temp != "hot" && temp != "warm")
  {
      temp = prompt ('Invalid input. Choose your temperature (hot or warm):');
  }
  return temp;
}

function bathCandles() {
  let useCandles = prompt ('Do you want candles? (y or n):');
  while(useCandles != "y" && useCandles != "n")
  {
      useCandles = prompt ('Invalid input. Do you want candles? (y or n):');
  }
  return useCandles;
}

function bathBook() {
  let useBook = prompt ('Would you like a book to read? (y or n):');
  while(useBook != "y" && useBook != "n")
  {
      useBook = prompt ('Invalid input. Do you want a book to read? (y or n):');
  }
  return useBook;
}

function runABath(bathBomb, water, candles, book) {
  return "Enjoy your bath. You chose (a) scent: " + bathBomb + " (b) water temp: " + water +
              " (c) use candles? " + candles + " (d) read a book? " + book;
}

let scent = bathScent();
let water = waterTemp();
let useCandles = bathCandles();
let useBook = bathBook();
let message = runABath(scent, water, useCandles, useBook);
console.log(message);