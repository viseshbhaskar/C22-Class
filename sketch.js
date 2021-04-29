const Engine = Matter.Engine;

const World = Matter.World; 

const Bodies = Matter.Bodies;

var myWorld, myEngine;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  //This creates the electronic engine of a car
  myEngine = Engine.create();

  //This is the world of the engine, it has to be dry and hot
  myWorld = myEngine.world;
 var Option = {
   isStatic:true
 }
  ground = Bodies.rectangle(200,370,400,10,Option);
  World.add(myWorld,ground);
  
  var Option = {
    restitution:1
  }
  ball = Bodies.circle(200,100,50, Option);
  World.add(myWorld,ball);
}

function draw() {
  background("black");  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 10);
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 50, 50);
  drawSprites();
}