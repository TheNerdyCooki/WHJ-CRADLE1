
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(440,200, 400, 30);

	bob3 = new bob(370, 400, 30)
	bob1 = new bob(400, 400, 30)
	bob2 = new bob(430, 400, 30)
	bob4 = new bob(460, 400, 30)
	bob5 = new bob(490, 400, 30)
	bob6 = new bob(520, 400, 30)

	rope1 = new chain(bob1.body, roof1.body, -bobDiameter*2, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);
  
  drawSprites();
	roof1.display()
	bob1.display()  
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()
	bob6.display()
}



