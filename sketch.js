const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
//const Mouse = Matter.MouseConstraint;
var b1,b2,b3,b4,b5;
var Mouse;
var v1,v2,v3,v4,v5;

function preload(){
	
  }

function setup() {
    createCanvas(windowWidth/2,windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;

//let canvasmouse = Matter.MouseConstraint.create(canvas.elt);
//canvasmouse.pixelRatio = pixelDensity();
//let options = {
  //  mouse:canvasmouse
//};
 //mConstraint = Matter.MouseConstraint.create(engine,options);

  b1 = new Bob(160,300,"brown")
  b2 = new Bob(220,300,"brown")
  b3 = new Bob(280,300,"brown")
  b4 = new Bob(340,300,"brown")
  b5 = new Bob(400,300,"brown")

  v1 = new Sling(b1.body,{x:160,y:100})
  v2 = new Sling(b2.body,{x:220,y:100})
  v3 = new Sling(b3.body,{x:280,y:100})
  v4 = new Sling(b4.body,{x:340,y:100})
  v5 = new Sling(b5.body,{x:400,y:100})

	
	Engine.run(engine);
}

function draw() {

  background(0);
  

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  v1.display();
  v2.display();
  v3.display();
  v4.display();
  v5.display();


 Engine.update(engine)

 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(b1.body,{x: mouseX,y: mouseY})

}
