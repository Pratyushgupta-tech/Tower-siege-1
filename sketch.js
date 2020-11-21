const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var square1

function setup() {
  createCanvas(1400,600);

  engine = Engine.create();
  world = engine.World;

  square1 = new Square(200,200,200,200);



}

function draw() {
  
  background(0);  

  Engine.update(engine);


square1.display();
  
 drawSprites();
}

 