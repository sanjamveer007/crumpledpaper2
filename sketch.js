
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var binB1, binL2 , binR3;
function preload()
{
  
bg = loadImage("images.jpg")
dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(900, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, 300, width,10);
	groundSprite.shapeColor= "brown"

  ground = Bodies.rectangle(width/2, 300, width, 10 , {isStatic:true} );
   World.add(world, ground);
   
   

    binB1= new Dustbin(710,275,85,10);
	 binL2= new Dustbin(670,230,10,80);
	 binR3= new Dustbin(750,230,10,80);
      paper =new Paper(140,200,20);
      
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(bg);
  
  
 
  
 //binB1.display();
 // binL2.display();
  //binR3.display();
 
  image(dustbinImg,630,180,150,120)
  paper.display();
  drawSprites();
 
}

  
function keyPressed() {
    if (keyCode === UP_ARROW) {
      
       Matter.Body.applyForce(paper.body, paper.body.position, {x:82,y:-80});
     }
   }

