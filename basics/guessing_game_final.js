// Generate a random number between 1 and 100
// Give the user the ability to guess the number
// if  they guess and they are wrong, ask them again (hint: use a while loop)
// if they guess and they are right, congratulate them and end the game.

// create a function that will generate a random number between a and b
// (a and b are the arguments)
// create a variable that will hold the random number
function randomNumber(a, b) {
  return Math.random() * (b - a) + a;
}

// Guessing an integer number between two values.
function randomNumberII(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

i = 0;
numGuesses = 5;
console.log("Welcome to the guessing game!");
console.log("You have " + numGuesses + " guesses to get the right number.");
console.log("The number is between 1 and 100.");
const randomNumberx = randomNumberII(1, 100);

function guessing_game() {
  while (i < numGuesses) {
    let guess = prompt("Guess a number between 1 and 100");
    if (guess > randomNumberx) {
      alert("You have guessed too high!");
    } else if (guess < randomNumberx) {
      alert("You have guessed too low!");
    } else {
      alert("You have guessed correctly!");
      console.warn("You have guessed correctly!");
      break;
    }

    i++;

    if (i + 1 > numGuesses) {
      alert("this was your last chance");
      console.warn("You have run out of guesses!");
    }
  }
}

let userPreference;

if (confirm("Do you want to save the score?") == true) {
  userPreference = "Data saved successfully!";
} else {
  userPreference = "Save Cancelled!";
}
