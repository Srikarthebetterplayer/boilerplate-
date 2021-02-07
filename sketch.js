const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options ={
    isStatic : true,
  }

  ground = Bodies.rectangle(200, 380, 400, 10,options)
  World.add(world, ground);

  var a = { 
    restitution : 1
  }

  ball = Bodies.circle(130, 230, 20,a);
  World.add(world, ball);
  
}

function draw() {
  Engine.update(engine);
  background("purple");  

  fill("orange")

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 10)

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20)
  
  
 
}