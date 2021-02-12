

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

//c.fillStyle = 'rgba(255,0,0,0.1)';

c.fillStyle = 'red'
c.fillRect(100,100,100,100);
c.fillStyle = 'blue'
c.fillRect(300,100,100,100);
c.fillStyle = 'lightgreen'
c.fillRect(100,300,100,100);
c.fillStyle = 'yellow'
c.fillRect(600,600,100,100);

 

// Draw a line

c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.strokeStyle = 'blue'
c.lineTo(600,300);
c.stroke();
c.lineTo(500,600);
c.strokeStyle = "#fa34a3"
c.stroke();


// Draw a Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI*2,false);
// c.strokeStyle = 'blue'
// c.stroke();


// Learn about the For Loop

for (var i = 0; i < 10; i++) {
	var x = Math.random()*canvas.width;
	var y = Math.random()*canvas.height;
	var radius = Math.random()*100;
	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI*2,false);
	c.strokeStyle = 'blue'
	c.stroke();
}







