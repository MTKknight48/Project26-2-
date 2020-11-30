
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var paperimg;
function preload()
{
	//paperimg = loadImage("sprites/paperimage.png");
	//	paperimg=loadimage("paperimage.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ball= new Paper(50,650);
//this.loadImage("paperimg");
 // ball.loadimage("paperimg");
  ground= new Ground(400,680,800,20);
  boxSide1 = new Part(290,620,20,100);
	boxSide2 = new Part(510,620,20,100);
	bottom = new Part(400,660,200,20);
}


function draw() {
 
  background(255);
  
  drawSprites();
 ball.display();
 ground.display();
 boxSide1.display();
 boxSide2.display();
 bottom.display();

}
function keyPressed() {
if(keyCode=== UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-180});
}

}


