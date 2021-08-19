
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

let engine;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options =
	{
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}

	Matter.Bodies.circle

	ball = Bodies.circle(600,600,10,ball_options);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,10)
  
display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		
	}

}



