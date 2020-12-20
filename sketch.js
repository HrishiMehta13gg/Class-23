const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(200,390,200,20);
  box1=new Box(200,300,70,100) 
  box2=new Box(250,100,70,100)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
box1.display();
box2.display();
   
}