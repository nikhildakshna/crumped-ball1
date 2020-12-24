
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body;


var ball;
var bin1, bin2, bin3, base;
function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	ball = new paper(100,680,20);
	bin1 = new bin(600,670,200,20);
	bin2 = new bin(500,630,20,100);
	bin3 = new bin(700,630,20,100);
    base = new ground(700);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 // drawSprites();

ball.display();
bin1.display();
bin2.display();
bin3.display();
base.display();

     
}

function keyPressed(){

if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x: 50, y:-85});
}
}

