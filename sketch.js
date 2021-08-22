const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var snowfall = [];

function preload(){
bg=loadImage("snow2.jpg") 
}
function setup() {
  createCanvas(1500,800);
  engine = Engine.create();
  world = engine.world;
  // createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg)
  Engine.update(engine);
  if( frameCount %60 === 0){
   snowfall.push(new Snowfall(random(100,width-100),10,40));
    }
    for(var h = 0;h<snowfall.length;h++ ){
      snowfall[h].display();
     }  
  //drawSprites();
}