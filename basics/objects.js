/*
    OBJECTS with JAVASCRIPT
*/






// creating objects
// you can use the object literal notation, with their properties and methods
// properties means also the variables inside the object.
// methods are the functions inside the object.

const user = {
    name: 'John',
    age: 30,


    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }

}


user.greet();

//console.log(window)
//console.log(typeof window);
// for debugging purposes, you can use the console.log() function to see the properties and methods of an object.
//console.warn('Hello, my name is ' + user.name);
//console.error('Hello, my name is ' + user.name);



