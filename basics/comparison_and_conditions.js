/*
    Comparison and conditions
 use === not == as the latter can give you the value of true for  "10" == 10
 use the type of the variable to check if it is a number,
*/


const name ='Jackson';

if(name === 'BABA'){
    console.log('Hello BABA');
    console.log(`${name === 'BABA'}`);
}


if (name === 'BABA'){
    console.log('Hello BABA');

} else if (name === 'Jackson'){
    console.log('Hello Jackson');
} else {
    console.log('Hello World');
}




const list_of_name = ['BABA', 'Jackson', 'John', 'Jane'];

// using regular function
list_of_name.forEach(function(name){
    console.log(`Hello ${name}`);
});

// Using arrow function
list_of_name.forEach((name)=>{
    console.log(`Hello ${name}`);
});


list_of_name.forEach(function(name){
    console.log(`element is ${name}`);

    if(name === 'BABA'){
        console.log(`Hello ${name}`);
    }
    else if(name === 'Jackson'){
        console.log(`Hello ${name}`);
    }
    else {
        console.log(`Hello ${name}`);
    }
    console.log(`============`);
});



/*
    Example on Comparison and conditions
*/
const age  = 20;
const bank  = 100;

if (age > 18 && age < 30){
    console.log('You are eligible to enter the bank');
}
else if (age > 30){
    console.log('You have enough money to enter the bank');
}
else {
    console.log('You are not eligible to enter the bank');
}


console.log(`${age >= 18 && age <= 30}`);



// What value is true or which value is false in JavaScript
// false, empty string like "", 0, null, undefined, NaN, all are false
//const age2 = 15;
const age2 = 0;

if(age2){
    console.log('age is true');
}
else {
    console.log('age is false');
}

