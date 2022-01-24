// How to write a function
// ask for a name of the  the user and console out the name

function greet() {
  let name = prompt("What is your name?");
  console.log(`Your name is ${name}`);
  return name;
}

//greet()

function signUp() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  let password = prompt("What is your password?");
  let confirmPassword = prompt("Confirm your password");
  if (password === confirmPassword) {
    console.log(`Your name is ${name}`);
    console.log(`Your email is ${email}`);
    console.log(`Your password is ${password}`);
  } else {
    //console.log("Your passwords do not match");
    alert("Your passwords do not match");
  }
}

//signUp()

function login(name, password) {
  let _name = "John";
  let _password = "12345";

  email = prompt("What is your email?");
  password = prompt("What is your password?");
  if (name === _name && password === _password) {
    console.log("You are logged in");
  }
}

//login("John", "12345");

let number_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxval = Math.max(...number_array);
console.log(maxval);

number_array.forEach(function (index, number) {
  console.log(`element is ${number} with value ${index}`);
});

let inbox = 10;

console.log(inbox + 5);
console.log(inbox - 5);
console.log(inbox / 5);
console.log(inbox * 5);
console.log(inbox % 5);
console.log(inbox ** 5);
console.log((inbox += 5));

// Arrow functions  with their implementations.
function add(a, b) {
  return a + b;
}

let add2 = (a, b) => a + b;

//greet();


