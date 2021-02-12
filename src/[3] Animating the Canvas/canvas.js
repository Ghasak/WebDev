

// This step is to read from our index.html file
var canvas = document.querySelector('canvas');
// To write to the console of our html file
console.log('r/place');

console.log(canvas)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create a context variable but shortly we use c
var c = canvas.getContext('2d');

//========================================================
//				Grid Function
//========================================================

// Draw a line
function grid(){

	var grid_size = [50,50];
	var step = grid_size[0];
	c.strokeStyle = "gray";
	c.beginPath();
	for (var i = 1; i < innerHeight; i++) {
		c.moveTo(0,step);
		c.lineTo(innerWidth,step);
		step = step +grid_size[0];
	}
	c.strokeStyle = "#gray";
	c.stroke();
	var step = grid_size[1];
	c.beginPath();
	for (var i = 1; i < innerWidth; i++) {
		c.moveTo(step,0);
		c.lineTo(step,innerHeight);
		step = step +grid_size[1];
	}
	c.strokeStyle = "gray";
	c.stroke();
	c.beginPath();
	// Center of our Canvas draw a circle.
	c.arc(innerWidth/2, innerHeight/2, 10, 0, Math.PI*2,false);
	c.strokeStyle = "gray";
	c.stroke();

}


var x = Math.random()* innerWidth; 	// initial position in x-direction
var y = Math.random()* innerHeight;	// initial position in y-direction

var radius =30;
// Create an Animation Function
// Basically its a infinit loop to call the function animate over and over again

//========================================================
//				Create a Cirlce Object {to make many}
//========================================================

function Circle(x,y,radius,Vx,Vy,color){		// with Capital it means class has initiated here.

	this.x = x;			
	this.y = y;
	this.radius = radius;
	this.Vx = Vx;
	this.Vy = Vy;
	this.color = color;

	this.draw_circle = function(){		// define function inside the class
		// ==============================================
		//Draw a Circle
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2,false);
		c.strokeStyle = 'blue'
		c.stroke();
		c.fill();
		

	}

	this.circle_update = function(){
		
		this.x += this.Vx;
		this.y += this.Vy;

		if (this.x > innerWidth-this.radius || this.x < 0+this.radius) {
			this.Vx = -(this.Vx);

			}

		if (this.y > innerHeight-this.radius || this.y < 0+this.radius) {
			this.Vy = -(this.Vy);

			}
		this.draw_circle();

	}	


}

//========================================================
//		Create only two Circles with Random Pos.
//========================================================
var circle1 = new Circle(200,200,100,(Math.random()-0.5)*6,(Math.random()-0.5)*10,'red');
// console.log(circle1);

var circle2 = new Circle(500,300,50,(Math.random()-0.5)*3,(Math.random()-0.5)*2,'blue');

//========================================================
//		 Create n Circles with Random Pos.
//========================================================

var circle_array = [];

for (var i = 0; i <20; i++) {
	var radius = 30 // Math.random()*100;
	var x  = Math.random()* (innerWidth-radius*2)+radius;
	var y  = Math.random()* (innerHeight-radius*2)+radius;
	var Vx = (Math.random()-0.5)*4;
	var Vy = (Math.random()-0.5)*4;

	circle_array.push(new Circle(x,y,radius,Vx,Vy,));

}



//========================================================
//				Animation Function
//========================================================

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0, innerWidth, innerHeight)
	grid();
	// console.log('Hello my name is Ghasak')
	// circle1.draw_circle();
	// circle1.circle_update();
	// circle2.circle_update();
	for (var i = 0; i < circle_array.length; i++) {
		circle_array[i].circle_update();
	}
	
	

}

//========================================================
//		 Main Function where your program start
//========================================================

// Call the animate function to make it work

animate();















