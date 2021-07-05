
var trex ,trex_running,edges;
var ground, groundImage;


var b2 = ["jyoti" , 125,50,"rahul","date"]
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(1200,200)
  
  //create a trex sprite
  trex = createSprite(50,140,50,100);
  trex.addAnimation("trexrunning",trex_running);
  trex.scale= 0.5
  console.log(b2)
  b2.push(29);
  console.log(b2)
  console.log(b2.length)
  b2.pop(29);
  console.log(b2)  
  //create sprite for ground
  ground = createSprite(50,180,600,20);
  ground.addImage("ground", groundImage);
  ground.velocityX = -3
  ground.x= ground.width/2;
  //create egdes
  edges = createEdgeSprites();
}

function draw(){
  background("white");

  if(ground.x<0)
  {
    ground.x = ground.width/2;
  }

  if(keyDown("space"))
  {
    trex.velocityY = -8;
  }
  trex.velocityY = trex.velocityY+0.5;

  trex.collide(ground)
drawSprites();
}
