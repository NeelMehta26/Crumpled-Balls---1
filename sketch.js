
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500, 490, 1000, 20);

	paper = new Paper(250, 50, 10);

	dustbin1 = new Dustbin(720, 420, 20, 100);
	dustbin2 = new Dustbin(880, 420, 20, 100);
	dustbin3 = new Dustbin(800, 440, 140, 20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background('lightBlue');
  
  ground.display();
  
  paper.display();

  dustbin1.display();

  dustbin2.display();

  dustbin3.display();

  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x: 85, y: -85});
  }

  drawSprites();
 
}



