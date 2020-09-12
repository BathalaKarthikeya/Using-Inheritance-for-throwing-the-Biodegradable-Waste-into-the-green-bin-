const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin1,dustbin2,dustbin3,dustbin_green,dustbin_blue,dustbin4,dustbin5,dustbin6;
var ball1;

function setup() {
	createCanvas(1700, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,405,1700,40);

	dustbin1 = new Dustbins(1300,375,155,20);
	dustbin2 = new Dustbins(1370,280,20,200);
	dustbin3 = new Dustbins(1230,280,20,200);
	dustbin_green = new Dustbingreen(1300,285,175,200);

	dustbin4 = new Dustbins(900,375,155,20);
	dustbin5 = new Dustbins(970,280,20,200);
	dustbin6 = new Dustbins(830,280,20,200);
	dustbin_blue = new Dustbinblue(900,285,175,200);

	ball1 = new paper(300,200,70,PI/2);
	keyPressed();
	
	console.log(ball1.body);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("white");

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  dustbin4.display();
  dustbin5.display();
  dustbin6.display();

  ball1.display();
  
  ground.display();

  dustbin_green.display();
  dustbin_blue.display();
  
  drawSprites();

  textFont("georgia")
  textSize(18);
  fill("yellow")
  text("'We should always throw Biodegradable waste into the green dustbin'. So clean your room by throwing the crumpled paper into the green dustbin. PRESS 'UP ARROW TO DO THIS'.",50,100);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:115,y:-115});
  
	}
}
