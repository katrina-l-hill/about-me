<!DOCTYPE html>
<html>
  <head>
    <title>class01 - lab 01b</title>
    <style>  
      body {
        background-color:lavender;
      }
      h1 {
        color:rgb(111, 0, 255);
        background-color: aqua;
        /* width: fit-content; */
        text-align:center;
      }
     </style>
  </head>
  <body>
    <header>
    </header>
    <main>
      <h1>Class 1 Lab</h1>
        <p style="color: blanchedalmond; background-color: blueviolet; text-align: right;"> User input questions:</p>
        <p style="color: rgb(255, 174, 0);background-color: black;"> Hello! What's your name?</p>
        <p style="color: indigo; background-color: brown; text-align:center;"> Welcome. What is your quest?</p>
        <p style="color:saddlebrown; background-color: cornflowerblue;"> How happy are you with your quest?</p>
        <p style="color:red; background-color: dimgrey; text-align: right;"> What is the airspeed velocity of an unladen swallow?</p>
        <p style="color:maroon; background-color: gold; text-align: center;"> Are you a fan of Monty Python?</p>
    </main>
    <footer>
      <p style="color: black;"> It's hard to tell, but this is the footer section of the webpage.   This was a fun lab. I enjoyed writin the user input code. PS, Monty Python is one of my favorite British comedies. The other one is Keeping up Appearances.</p>
    </footer>
    <script>
        let userName = prompt('Hello! What is your name?');
        console.log('The user\'s name is ' + userName);

        alert('That\'s a nice name ' + userName);

        let responseOne = prompt("Welcome! What is your quest?");
        console.log('The user has a quest '+ responseOne);

        alert('I envy your quest ' + responseOne);

        let responseTwo = prompt('How happy are you with your quest?');
        console.log('The user is or is not happy with their quest ' + responseTwo);

        alert('Good for you');

        let responseThree = prompt('What is the airspeed velocity of an unladen swallow?');
        console.log('The user entered a response ' + responseThree);

        alert('Good guess choosing ' + responseThree);

        let responseFour = prompt('Are you a fan of Monty Python?');
        console.log('The user entered a response ' + responseFour);

        alert('Welcome, ' + userName + '! You told me your quest was ' + responseOne +'. You also told me about your happiness level with your quest, being it ' + responseTwo + '. According to you, the airspeed velocity of an unladen swallow is ' + responseThree + '. And, whether or not you are a Monty Python fan, which is ' + responseFour + '.');
    </script>  
  </body>
</html>
