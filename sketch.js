
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint;
var dustbinObj, paperObject,groundObject	
var world , engian,slingshot
//var Polygon;
var launchare;
function setup() {
	createCanvas(1000,500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	//dustbinObj=new dustbin(120,360);
	paperObject=new Polygon(100,10,40);
	//Create a Ground
groundObject=new ground(500,490,1000,20);
	base1=new ground(800,200,300,10)
	base2=new ground(580,370,300,10)
	// create blocks for base2
	block1= new Block(480,350,40,40)
	block2= new Block(520,350,40,40)
	block3= new Block(560,350,40,40)
	block4= new Block(600,350,40,40)
	block5= new Block(640,350,40,40)
	block6= new Block(680,350,40,40)
	block7= new Block(540,310,40,40)
	block8= new Block(580,310,40,40)
	block9= new Block(620,310,40,40)
	block10= new Block(580,270,40,40)

// create blocks for base1
	block11= new Block(700,165,40,40)
	block12= new Block(740,165,40,40)
	block13= new Block(780,165,40,40)
	block14= new Block(820,165,40,40)
	block15= new Block(860,165,40,40)
	block16= new Block(900,165,40,40)
    block17= new Block(760,125,40,40)
	block18= new Block(800,125,40,40)
	block19= new Block(840,125,40,40)
	block20= new Block(800,80,40,40)
	

	slingshot=new SlingShot(paperObject.body,{x:200, y:300});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255,0,255);
 base2.display();
  //dustbinObj.display
  paperObject.display();
  groundObject.display();
  base1.display();
 block1.display();
  block3.display();
  block4.display();
  block5.display();
  block2.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block18.display()
  block19.display()
  block17.display();
block20.display();
slingshot.display();
}

function keyPressed() {
 	if (keyCode === 32) {

    //	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
   slingshot.attach(paperObject.body);
	 }}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}




