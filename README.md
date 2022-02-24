# Guide to ES6 JavaScript
My personal notes on `javascrpit` with `ES6` and the implementation is
exclusive to the vanilla JavaScript.

## Setup the Dev Environment

1. From `npm` use the `live-server` and install it globally using `npm -i -g
live-serer` and check if it existed using `npm -i -g list`

2. Run in the live server using:

```shell
live-server --port=9000
```
3. Open it with `Google Chrome` and inspect the debugger console of `Google
Chrome` with `option + command + j` and check the console.

## Things needed
I am using `nvim 0.6` with `javascript` language server including all the
necessary plugins for developments.

## The Basics

learning the following concepts

- [x] data primitives
- [x] data types
- [x] Accept user inputs
- [x] conditional statements
- [x] looping
- [x] lists dict, sets, and generators.


## Concepts in JavaScript
1. `Hoisting`, the compiler will move all declaration a head, it is possible to
   use a variable, object, function ... etc., before declaration, check here
   [Hoisting in JavaScript](https://www.tutorialsteacher.com/javascript/javascript-hoisting).

## DOM

## Array

Define `declare` and loop over array or an object in JavaScript.
```JavaScript

// Methods of declare an array
// let arrayName = new Array();
// let arrayName = new Array(Number length);
// let arrayName = new Array(element1, element2, element3,... elementN);

const listUsers = ['Jane', 'John', 'Mary', 'Mark', 'Mike', 'Tom'];

// counting form zero

for (let i = 0; i < listUsers.length; i++) {
    console.log(listUsers[i]);
}

console.log(typeof listUsers);


// loop over an array elements

// 1. for
for (let i = 0; i < listUsers.length; i++) {
    console.log(listUsers[i]);
}
// 2. forEach
listUsers.forEach(element => {
console.log(element);
});
// 3. for of
for (let item of listUsers) {
    console.log(item);
}

// 4. for in
for (let i in listUsers) {
    console.log(listUsers[i]);
}


// Getting the index of an element in an array
console.log(listUsers.indexOf('John'));



```
If you want to loop over object (dict) accessing `keys` and `values` can be
done using.

```javascript
// looping over objects
const user = {
    name: 'John',
    age: 30,
    subscriped: true,
    city: 'New York'
};

for (let key in user) {
    console.log(`${key} : ${user[key]}`);
}

```

More about for loop and with array

```javascript
const names = ['John', 'Jane', 'Mary'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
names.forEach(function(name) {
    console.log(name);
});
// foreach with regular function declaration
names.forEach(function(name, index) {
    console.log(`${index} - ${name}`);
});
// foreach with arrow function
names.forEach((name, index) => {
    console.log(`${index} - ${name}`);
});
// arrow function with single arg.
names.forEach(name => console.log(name));
// for-of is introduced in ES6
for (let name of names) {
    console.log(name);
}
// This is the original statement introduced since JS
for (let name in names) {
    console.log(names[name]);
}


```

## Objects
## OOP with objects
## Other concepts
### Async JavaScript
### promises
### arrow functions

# References
- [JavaScript with Teacher](https://www.tutorialsteacher.com/javascript/display-popup-message-in-javascript)

