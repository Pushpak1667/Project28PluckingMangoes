
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree,boy,BG,stone,launcherObj;
var mango1,mango2,mango3,mango4,mango5,
mango6,mango7,mango8,mango9,mango7,
mango8,mango9,mango10;

function preload()
{
	BG = loadImage("green_field.jpg")
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(width/2,height - 30,width,60);
tree = new Tree(width - 350,height -400,600,700);
boy = new Boy(300,height-160,200,400);
stone = new Stone(200,height -300);
launcherObj=new Launcher(stone.body,{x:235,y:500})


mango1 = new Mango(width - 300,200);
mango2 = new Mango(width - 350,150);
mango3 = new Mango(width - 400,250);
mango4 = new Mango(width - 250,270);
mango5 = new Mango(width - 150,250);
mango6 = new Mango(width - 500,280);
mango7 = new Mango(width - 440,180);
mango8 = new Mango(width - 280,85);
mango9 = new Mango(width - 180,160);
// mango10 = new Mango(width - 500,280);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(BG);
  
ground.display();
tree.display();
boy.display();

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8 .display();
mango9.display(); 
// mango10.display();

stone.display();
launcherObj.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);

  drawSprites();
  fill("BLACK");
  textSize(25);
  text("Press 'SPACE' To Rethrow!",150,100);
  fill("");
  text("R                                                         O                                                                 A                                                            D",100,height-30)
 
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:500}) 
	  launcherObj.attached(stone.body);
	}
  }
function mouseDragged(){

Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})	
}

function mouseReleased(){

launcherObj.fly();
	
}
function detectollision(stone,mango){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<= stone.width + mango.width && distance<= stone.height + mango.height){
		Matter.Body.setStatic(mango.body,false);
	}
}


