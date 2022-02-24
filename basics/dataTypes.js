/*
    Primitive Data Types
    use typeof to check for the primitive type
*/

//number
const day = 5;
console.log(typeof day);

// Boolean
const isLogged = true;

//Undefined - there is no variable declared, while null is declared but not
//assigned a value const day = 3;

//Null
let minute = null;

//Symbol - unique identifier
const sym = Symbol();

// Object
const person = {
    name: 'John',
    age: 30
};

console.log(`${person.name} is ${person.age} years old`);
