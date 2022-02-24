

// Switch statement
const text = "banana";
let fruit = 0;

// switch (text) {
//     case 'banana':
//         console.log('Wow I love banana');
//         fruit = 1;
//         break;
//     case 'apple':
//         console.log('Wow I love apple');
//         fruit = 2;
//         break;
//     case 'orange':
//         console.log('Wow I love orange');
//         fruit = 3;
//         break;
//     case 'grape':
//         console.log('Wow I love grape');
//         fruit = 4;
//         break;
//     default:
//         console.log('I dont know what fruit is that');
//         break;
// }



// Examples

// let userInput = prompt('Enter a fruit ... ');
// userInput = userInput.toLowerCase();
// let fruitSelector = 0;

// switch (userInput) {
//     case 'banana':
//         console.log('Wow I love banana');
//         fruitSelector = 1;
//         break;
//     case 'apple':
//         console.log('Wow I love apple');
//         fruitSelector = 2;
//         break;
//     case 'orange':
//         console.log('Wow I love orange');
//         fruitSelector = 3;
//         break;
//     case 'grape':
//         console.log('Wow I love grape');
//         fruitSelector = 4;
//         break;
//     default:
//         alert('I dont know what fruit is that');
//         console.error('I dont know what fruit is that');

//         break;
// }

let userChoiceOutput = (userInput) => {
    switch (userInput) {
        case 'banana':
            console.log('Wow I love banana');
            fruitSelector = 1;
            break;
        case 'apple':
            console.log('Wow I love apple');
            fruitSelector = 2;
            break;
        case 'orange':
            console.log('Wow I love orange');
            fruitSelector = 3;
            break;
        case 'grape':
            console.log('Wow I love grape');
            fruitSelector = 4;
            break;
        default:
            console.warn('I dont know what fruit is that');
            break;
    }
}

// userChoiceOutput();




// For loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}


// For loop with array
for (let i = 0; i < 40; i++) {

    if (i === 20) {
        console.log('I am at 20');
        continue;
    }
    if (i === 5) {
        console.log('I am at 5');
    } else {
        console.log(i);
    }
}

// How we can use for loop with array.


// loop over text
const texts = ['Singing the park' , 'Watching the sunset' , 'Sleeping'];

for (let i = 0; i < texts.length; i++) {
    console.log(texts[i]);
}

const text2 = 'Singing the park';
for (let i = 0; i < text2.length; i++) {
    console.log(text2[i]);
}


console.log(`====================`);
// loop over object

const names = ['John', 'Jane', 'Mary'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log(`====================`);
names.forEach(function(name) {
    console.log(name);
});
console.log(`======== forEach with regular fucntion ============`);
names.forEach(function(name, index) {
    console.log(`${index} - ${name}`);
});

console.log(`====== use arrow function with foreach ==============`);
names.forEach((name, index) => {
    console.log(`${index} - ${name}`);
});

console.log(`====================`);
names.forEach(name => console.log(name));

console.log(`====== for of  is introducted in ES6 ==============`);


for (let name of names) {
    console.log(name);
}

console.log(`========= This is the orignal JS for in ===========`);
for (let name in names) {
    console.log(names[name]);
}



// For in and while loop

// looping over objects

const user = {
    name: 'John',
    age: 30,
    subscribed: true,
    city: 'New York'
};

for (let key in user) {
    console.log(`${key} : ${user[key]}`);
}
console.log(`====================`);
for (let key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`${key} : ${user[key]}`);
    }
}

// while loop
let i = 0;
while (i < 10) {
    console.warn(i);
    i++;
  }


// do while loop
let j = 0;
do {
    console.error(j);
    j++;
} while (j < 10);



