

// This step is to read from our index.html file
var canvas = document.querySelector('canvas');
// To write to the console of our html file
console.log('r/place');

console.log(canvas)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create a context variable but shortly we use c
var c = canvas.getContext('2d');

//c.fillRect(100,100,100/2,100/2,c'red');

c.fillRect(100,100,100,100);
c.fillRect(300,100,100,100);
c.fillRect(100,300,100,100);
c.fillRect(600,600,100,100);

