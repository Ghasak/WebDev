/*
  Module on how to use variables with javascript

*/


localStorage.clear()
// const must be initialized with a value before being used
let inbox = 100;
let phone = 50;

console.log(`I have ${inbox} messages and ${phone} phone calls`);

const name = (first, last) => {
    return `${first} ${last}`;
}

for (let i = 0; i < 10; i++) {
    console.log(`${name("Jack", "Doe")} is the variable ${i}`);
}

let shoppingList = ["Milk", "Eggs", "Bread", "Cheese"];

for (let i = 0; i < shoppingList.length; i++) {
    console.log(`${shoppingList[i]} is the variable ${i}`);
}


if (typeof test1 !== 'undefined') {
  test2 = JSON.parse(test1);
}












