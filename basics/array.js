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


