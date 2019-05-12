

// This step is to read from our index.html file
var canvas = document.querySelector('canvas');
// To write to the console of our html file
console.log('r/place');

console.log(canvas)
//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;


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



// Create an Animation Function
// Basically its a infinit loop to call the function animate over and over again

//========================================================
//				Declare the Variables 
//========================================================

//-------- Set variables for Event listner ------------

var colorArray = [
	'#2C3E50',
	'#E74C3C',
	'#ECF0F1',
	'#3498D8',
	'#2980B9',

];
var mouse = {
	x: undefined,
	y: undefined,

}

var maxRadius = 80;
var minRadius = 2;

//========================================================
//				Create a Cirlce Object {to make many}
//========================================================

function Circle(x,y,radius,Vx,Vy){		// with Capital it means class has initiated here.

	this.x = x;			
	this.y = y;
	this.radius = radius;
	this.Vx = Vx;
	this.Vy = Vy;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random()*colorArray.length)];

	this.draw_circle = function(){		// define function inside the class
		// ==============================================
		//Draw a Circle
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2,false);
		//c.strokeStyle = 'blue'
		c.fillStyle = this.color;
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

		// Interactivity added here [related to event handeler]

		if (mouse.x - this.x <50 
			&& mouse.x - this.x > -50
			&& mouse.y - this.y < 50
			&& mouse.y - this.y >-50) {

			if (this.radius <maxRadius){

				this.radius +=1;
			}

			

		}else if(this.radius > this.minRadius){
			this.radius-=1;
				
		}



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

function init(){
circle_array = [];

for (var i = 0; i <2000; i++) {
	var radius = Math.random()*2+1;
	var x  = Math.random()* (innerWidth-radius*2)+radius;
	var y  = Math.random()* (innerHeight-radius*2)+radius;
	var Vx = (Math.random()-0.5)*1;
	var Vy = (Math.random()-0.5)*1;

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

animate();
	
}




//========================================================
//		Event Listner for intractivity
//========================================================



//------------ Event function -------------------------
window.addEventListener('mousemove', 
	function(event) {
		//console.log('checkthis');
		//console.log(event)
		mouse.x = event.x;
		mouse.y = event.y;
		console.log(mouse);

})

window.addEventListener('resize', 
	function(event) {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		init();
})



//========================================================
//		 Main Function where your program start
//========================================================

// Call the animate function to make it work

init();















