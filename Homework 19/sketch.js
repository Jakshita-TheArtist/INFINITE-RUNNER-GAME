var carImg,car;
var trackImg,track;
var bushImg,bush;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
carImg = loadImage("car.png");
trackImg = loadImage("track.png");
bushImg = loadImage("bush.png");

}

function setup() {
 createCanvas(500,500);
 track = createSprite(250,250);
 track.addImage("track",trackImg);
 //track.velocityY = 1;

 bushGroup = new Group ();
 invisibleBlockGroup = new Group();

 car = createSprite(200,200,50,50);
  car.scale = 0.3;
  car.addImage("car", carImg);

  

}

function draw() {
    background(0);
    if (gameState === "play") {
        if(keyDown("left_arrow")){
          car.x = car.x - 3;
        }
        
        if(keyDown("right_arrow")){
          car.x = car.x + 3;
        }
        
        if(keyDown("space")){
          //Changed car to track
          car.velocityY = -10;
        }
        
        //Changed car to track
        car.velocityY = car.velocityY + 0.8
        
        //if(track.y > 400){
          //track.y = 300
        //}
        spawnBush();
    
        if(bushGroup.isTouching(car)){
            car.velocityY = 0;
        }


        if(invisibleBlockGroup.isTouching(car) || car.y > 600){
          car.destroy();
          gameState = "end"
        }
          
          drawSprites();
        }
        if (gameState === "end"){
            stroke("red");
            fill("pink");
            textSize(30);
            text("Game Over", 155,215)
          }
        
        }

        function spawnBush() {
            //write code here to spawn the bush on the track
            if (frameCount % 240 === 0) {
              var bush = createSprite(200, -50);
              bush.scale = 0.3;
              var invisibleBlock = createSprite(200,15);
              invisibleBlock.width =bush.width;
              invisibleBlock.height = 2;
              
              bush.x = Math.round(random(120,400));
              invisibleBlock.x = bush.x;
              
              bush.addImage(bushImg);
            
              
              bush.velocityY = 1;
              invisibleBlock.velocityY = 1;
              
              car.depth = bush.depth;
              car.depth +=1;
             
              //assign lifetime to the variable
              bush.lifetime = 800;
              invisibleBlock.lifetime = 800;
          
              
              //add each bush to the group
              bushGroup.add(bush);
              invisibleBlock.debug = true;
              invisibleBlockGroup.add(invisibleBlock);
            }
          }
          
          




