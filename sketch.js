const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var holder1,holder2;
var ball1
var slingShot,chain


function setup(){
   var  canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

holder1 = new holder(1100,300,300,20)
holder2 = new holder(700,200,300,20);

ball = new Ball(mouseX,mouseY,20,20)
slingShot  = new holder(200,200,20,20)

var options = {
bodyA:ball.body,
bodyB:slingShot.body,
stiffness:0.04,
length:5

}

 chain = Constraint.create(options)
World.add(world,chain);

line(ball.body.position.x,ball.body.position.y,slingShot.body.position.x,slingShot.body.position.y)
}

function draw(){
    background("blue")
    Engine.update(engine);
holder1.display();
holder2.display();
ball.display();
slingShot.display();
chain.display();


}