const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body= Matter.Body;
const MouseConstraint=Matter.MouseConstraints;
const Constraint=Matter.Constraint;

var canvas,engine,world;

function setup(){

canvas=createCanvas(windowWidth/2,windowHeight/2.5);
engine=Engine.create();
world=engine.world;

/*let canvasmouse=Mouse.create(canvas.elt);
canvasmouse.pixelRatio=pixelDensity();
let options={
    mouse:canvasmouse
}
mConstraint=MouseConstraint.create(engine,options);
World.add(world,mConstraint);*/

bob1=new Pendulum(canvas.width/2-100,canvas.height/2,"white");
s1=new Slingshot(bob1.body,{x:bob1.x,y:bob1.y-150});

bob2=new Pendulum(bob1.x+60,canvas.height/2,"white");
s2=new Slingshot(bob2.body,{x:bob2.x,y:bob2.y-150});

bob3=new Pendulum(bob2.x+60,canvas.height/2,"white");
s3=new Slingshot(bob3.body,{x:bob3.x,y:bob3.y-150});

bob4=new Pendulum(bob3.x+60,canvas.height/2,"white");
s4=new Slingshot(bob4.body,{x:bob4.x,y:bob4.y-150});

bob5=new Pendulum(bob4.x+60,canvas.height/2,"white");
s5=new Slingshot(bob5.body,{x:bob5.x,y:bob5.y-150});

}

function draw(){
background(0);
Engine.update(engine);

bob1.display();
s1.display();

bob2.display();
s2.display();

bob3.display();
s3.display();

bob4.display();
s4.display();

bob5.display();
s5.display();

}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}